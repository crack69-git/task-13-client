"use client";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Separator,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { FaLocationArrow } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoArrowRedoSharp } from "react-icons/io5";

const page = () => {
  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const result = Object.fromEntries(formData.entries());
    console.log(result);
    const { data, error } = await authClient.signIn.email({
      email: result.email,
      password: result.password, // required, The password of the user. It should be at least 8 characters long and max 128 by default.
      rememberMe: true, // If false, the user will be signed out when the browser is closed. (optional) (default: true)
    });
    if (data) {
      alert("User logged in successfully! ");
      if (data.user.role === "buyer") {
        router.push("/buyer");
      } else if (data.user.role === "admin") {
        router.push("/admin");
      }
    }
    if (error) {
      alert("Error logging in user: " + error.message);
      return;
    }
  };
  return (
    <div className="flex min-h-[calc(100vh-30vh)] flex-col items-center justify-center gap-4 px-4 py-8 sm:px-6">
      <Card className="w-full max-w-md">
        <Card.Header>
          <div className="mb-4 flex flex-col items-center gap-2">
            <Card.Title className="text-2xl font-bold">
              Welcome to SOURCE-X
            </Card.Title>
            <p className="text-sm text-slate-600 font-semibold">
              Login to your account
            </p>
          </div>
          <Form className="flex w-full flex-col gap-4" onSubmit={onSubmit}>
            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }
                return null;
              }}
            >
              <Label>Email</Label>
              <Input placeholder="john@example.com" />
              <FieldError />
            </TextField>
            <TextField isRequired name="password" type="password">
              <Label>Password</Label>
              <Input placeholder="Enter your password" />

              <FieldError />
            </TextField>
            <div className="flex gap-2">
              <Button
                type="submit"
                className="bg-slate-700 hover:bg-slate-800 w-full rounded-lg"
              >
                <FaLocationArrow />
                Login
              </Button>
            </div>
          </Form>
          <Separator className="my-4" />
          <Button
            variant="outline"
            className="w-full rounded-lg border-gray-300 text-gray-700 hover:bg-gray-100"
          >
            <FcGoogle />
            Login with Google
          </Button>
        </Card.Header>
        <Card.Footer className="flex flex-col items-center gap-2">
          <p className="flex flex-wrap items-center justify-center gap-1 text-center text-sm text-gray-600">
            Don{`'`}t have an account?{" "}
            <Link
              href="/register"
              className="text-blue-500 flex items-center gap-1 hover:underline"
            >
              Sign up
              <IoArrowRedoSharp />
            </Link>
          </p>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default page;
