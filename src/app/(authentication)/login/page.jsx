"use client";
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
import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const page = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-30vh)] gap-4">
      <Card className="w-[400px]">
        <Card.Header>
          <div className="mb-4 flex flex-col items-center gap-2">
            <Card.Title className="text-2xl font-bold">
              Welcome to SOURCE-X
            </Card.Title>
            <p className="text-sm text-slate-600 font-semibold">
              Login to your account
            </p>
          </div>
          <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
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
            <TextField isRequired minLength={8} name="password" type="password">
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
          <p className="text-sm text-gray-600 flex items-center gap-1">
            Don{`'`}t have an account?{" "}
            <Link
              href="/register"
              className="text-blue-500 flex items-center gap-1 hover:underline"
            >
              Sign up
              <FaLocationArrow />
            </Link>
          </p>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default page;
