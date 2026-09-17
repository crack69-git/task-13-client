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
  Radio,
  RadioGroup,
  Separator,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
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
    const { data, error } = await authClient.signUp.email({
      name: result.name,
      email: result.email,
      password: result.password,
      image: result.imageLink,
      role: result.role,
      callbackURL: "/login",
    });
    if (data) {
      alert("User registered successfully! ");
      router.push("/login");
    }
    if (error) {
      alert("Error registering user: " + error.message);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-30vh)] gap-4">
      <Card className="w-[400px] shadow-lg">
        <Card.Header>
          <div className="mb-4 flex flex-col items-center gap-2">
            <Card.Title className="text-2xl font-bold">
              Welcome to SOURCE-X
            </Card.Title>
            <p className="text-sm text-slate-600 font-semibold">
              Register for an account
            </p>
          </div>
          <Form className="flex w-full flex-col gap-4" onSubmit={onSubmit}>
            <TextField isRequired name="name" type="text">
              <Label className="text-sm font-medium text-slate-700">Name</Label>
              <Input placeholder="John Doe" />
              <FieldError />
            </TextField>
            <TextField isRequired name="imageLink" type="text">
              <Label className="text-sm font-medium text-slate-700">
                Image Link
              </Label>
              <Input placeholder="upload from imagedb direct link" />
              <FieldError />
            </TextField>
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
            <TextField isRequired minLength={8} name="password" type="password">
              <Label className="text-sm font-medium text-slate-700">
                Password
              </Label>
              <Input placeholder="Enter your password" />

              <FieldError />
            </TextField>
            <div className="flex flex-col gap-4">
              <Label className="text-sm font-medium text-slate-700">Role</Label>
              <RadioGroup
                defaultValue="buyer"
                name="role"
                orientation="horizontal"
              >
                <Radio value="buyer">
                  <Radio.Content>
                    <Radio.Control>
                      <Radio.Indicator className="border border-gray-300 rounded-full" />
                    </Radio.Control>
                    Buyer
                  </Radio.Content>
                </Radio>
                <Radio value="admin">
                  <Radio.Content>
                    <Radio.Control>
                      <Radio.Indicator className="border border-gray-300 rounded-full" />
                    </Radio.Control>
                    Admin
                  </Radio.Content>
                </Radio>
              </RadioGroup>
            </div>
            <div className="flex gap-2">
              <Button
                type="submit"
                className="bg-slate-700 hover:bg-slate-800 w-full rounded-lg"
              >
                <FaLocationArrow />
                Register
              </Button>
            </div>
          </Form>
          <Separator className="my-4" />
        </Card.Header>
        <Card.Footer className="flex flex-col items-center gap-2">
          <p className="text-sm text-gray-600 flex items-center gap-1">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-blue-500 flex items-center gap-1 hover:underline"
            >
              Sign in
              <IoArrowRedoSharp />
            </Link>
          </p>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default page;
