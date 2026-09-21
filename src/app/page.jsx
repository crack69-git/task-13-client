"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  Card,
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
import { IoArrowRedoSharp } from "react-icons/io5";

const LoginPage = () => {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const result = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: result.email,
      password: result.password,
    });

    if (data) {
      alert("Logged in successfully!");
      if (data.user.role === "buyer") {
        router.push("/buyer");
      } else if (data.user.role === "admin") {
        router.push("/admin");
      }
    }

    if (error) {
      alert("Error logging in: " + error.message);
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-30vh)] flex-col items-center justify-center gap-4 px-4 py-8 sm:px-6">
      <Card className="w-full max-w-md shadow-lg">
        <Card.Header>
          <div className="mb-4 flex flex-col items-center gap-2">
            <Card.Title className="text-2xl font-bold">
              Welcome Back to SOURCE-X
            </Card.Title>
            <p className="text-sm font-semibold text-slate-600">
              Sign in to your account
            </p>
            <p>Admin mail: admin@gmail.com</p>
            <p>Pass: 12345678</p>
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
              <Label className="text-sm font-medium text-slate-700">
                Email
              </Label>
              <Input placeholder="john@example.com" />
              <FieldError />
            </TextField>

            <TextField isRequired name="password" type="password">
              <Label className="text-sm font-medium text-slate-700">
                Password
              </Label>
              <Input placeholder="Enter your password" />
              <FieldError />
            </TextField>

            <div className="flex gap-2">
              <Button
                type="submit"
                className="w-full rounded-lg bg-slate-700 hover:bg-slate-800"
              >
                <FaLocationArrow />
                Sign In
              </Button>
            </div>
          </Form>
          <Separator className="my-4" />
        </Card.Header>
        <Card.Footer className="flex flex-col items-center gap-2">
          <p className="flex flex-wrap items-center justify-center gap-1 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="flex items-center gap-1 text-blue-500 hover:underline"
            >
              Register
              <IoArrowRedoSharp />
            </Link>
          </p>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default LoginPage;
