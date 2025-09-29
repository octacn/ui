"use client";

import React, { useState, useCallback, useMemo } from "react";

import { Card, CardContent, CardFooter, CardHeader } from "@/registry/ui/card";
import { Label } from "@/registry/ui/label";
import { Button } from "@/registry/ui/button";
import { Input } from "@/registry/ui/input";
import { cn } from "@/lib/utils";
import {
  X,
  Mail,
  Eye,
  EyeOff,
  Lock,
  Facebook,
  Github,
  Phone,
} from "lucide-react";

export function AuthForm() {
  const [activeTab, setActiveTab] = useState("signup");
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "",
    phoneNumber: "+91 1234567890",
    email: "",
    password: "",
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  const isSignUp = activeTab === "signup";

  const handleInputChange = useCallback(
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    },
    []
  );

  const handleCheckboxChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({ ...prev, rememberMe: e.target.checked }));
    },
    []
  );

  const togglePassword = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

  const handleSubmit = useCallback(
    (
      e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
    ) => {
      e.preventDefault();
      console.log("Form submitted:", formData);
    },
    [formData]
  );

  // Memoized content
  const title = useMemo(
    () => (isSignUp ? "Create an account" : "Welcome back"),
    [isSignUp]
  );
  const dividerText = useMemo(
    () => (isSignUp ? "OR SIGN IN WITH" : "OR CONTINUE WITH"),
    [isSignUp]
  );
  const termsText = useMemo(
    () =>
      isSignUp
        ? "By creating an account, you agree to our Terms & Service"
        : "By signing in, you agree to our Terms & Service",
    [isSignUp]
  );

  return (
    <Card className="w-full max-w-md mx-auto md:px-5 pt-10 rounded-4xl font-inter tracking-wide font-normal">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex p-1.5 border rounded-full gap-1.5">
            {["signup", "signin"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm transition-all duration-300 transform hover:scale-105",
                  {
                    "bg-white/20 backdrop-blur-sm text-white border border-white/20 shadow-lg":
                      activeTab === tab,
                    "text-white/60 hover:text-white hover:bg-white/5":
                      activeTab !== tab,
                  }
                )}
              >
                {tab === "signup" ? "Sign up" : "Sign in"}
              </button>
            ))}
          </div>
          <button className="w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-200 hover:scale-110 hover:rotate-90">
            <X className="w-5 h-5 text-foreground" />
          </button>
        </div>
        <h1 className="transition-all duration-300 pt-2 pl-2 text-foreground/80">
          {title}, Sahil
        </h1>
      </CardHeader>
      <CardContent className="relative overflow-hidden">
        <form
          onSubmit={handleSubmit}
          className={cn(
            "transition-all duration-500 ease-in-out transform space-y-6",
            isSignUp
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0 absolute inset-0"
          )}
        >
          <div className="grid grid-cols-2 gap-4">
            <Input
              type="text"
              onChange={handleInputChange("firstName")}
              className="h-14 px-4 rounded-full focus-visible:ring-0 focus-visible:border-orange-400/80"
              placeholder="First name"
            />
            <Input
              type="text"
              onChange={handleInputChange("lastName")}
              className="h-14 px-4 rounded-full focus-visible:ring-0 focus-visible:border-orange-400/80"
              placeholder="Last name"
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground transition-colors duration-200" />
            <Input
              type="email"
              onChange={handleInputChange("email")}
              className="h-14 px-4 rounded-full focus-visible:ring-0 focus-visible:border-orange-400/80 pl-12"
              placeholder="Enter your email"
            />
          </div>

          <div className="relative">
            <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground transition-colors duration-200" />
            <Input
              type="tel"
              onChange={handleInputChange("phoneNumber")}
              className="h-14 px-4 rounded-full focus-visible:ring-0 focus-visible:border-orange-400/80 pl-12"
              placeholder="Phone number"
            />
          </div>

          <Button
            className="w-full bg-foreground/80 py-6 rounded-full text-base mt-4"
            size={"lg"}
          >
            Create an account
          </Button>
        </form>

        <form
          onSubmit={handleSubmit}
          className={cn(
            "transition-all duration-500 ease-in-out transform space-y-6",
            {
              "translate-x-0 opacity-100": !isSignUp,
              "translate-x-full opacity-0 absolute inset-0": isSignUp,
            }
          )}
        >
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground transition-colors duration-200" />
            <Input
              type="email"
              onChange={handleInputChange("email")}
              className="h-14 px-4 rounded-full focus-visible:ring-0 focus-visible:border-orange-400/80 pl-12"
              placeholder="Enter your email"
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground transition-colors duration-200" />
            <Input
              type={showPassword ? "text" : "password"}
              onChange={handleInputChange("password")}
              className="h-14 px-4 rounded-full focus-visible:ring-0 focus-visible:border-orange-400/80 pl-12"
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={togglePassword}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 transition-colors duration-200"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>

          <div className="flex items-center justify-between">
            <Label className="flex items-center cursor-pointer">
              <Input
                type="checkbox"
                checked={formData.rememberMe}
                onChange={handleCheckboxChange}
                className="w-4 h-4"
              />
              <span className="text-muted-foreground text-sm">Remember me</span>
            </Label>
            <button
              type="button"
              className="text-muted-foreground text-sm transition-colors duration-200"
            >
              Forgot password?
            </button>
          </div>

          <Button
            className="w-full bg-foreground/80 py-6 rounded-full text-base mt-4"
            size={"lg"}
          >
            Sign in
          </Button>
        </form>
      </CardContent>

      <div className="flex items-center my-3">
        <div className="flex-1 h-px bg-border" />
        <span className="px-3 text-muted-foreground text-xs">
          {dividerText}
        </span>
        <div className="flex-1 h-px bg-border" />
      </div>

      <CardFooter className="grid grid-cols-2 gap-4">
        <Button
          variant={"outline"}
          aria-label="Sign in with Google"
          className="py-7 rounded-2xl"
        >
          <Facebook className="size-6 text-blue-500" />
        </Button>
        <Button
          className="py-7 rounded-2xl"
          variant={"outline"}
          aria-label="Sign in with Apple"
        >
          <Github className="size-6 text-foreground" />
        </Button>
      </CardFooter>

      <p className="text-center text-muted-foreground/60 text-sm mt-4">
        {termsText}
      </p>
    </Card>
  );
}
