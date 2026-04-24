"use client";

import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const loginUser = async () => {
    if (!email || !password) {
      toast.error("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Login failed");
        setLoading(false);
        return;
      }

      toast.success("Login successful");

      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);
      localStorage.setItem("email", email);

      setTimeout(() => {
        if (data.role === "admin") {
          window.location.assign("/admin");
        } else {
          window.location.assign("/dashboard");
        }
      }, 1000);

    } catch {
      toast.error("Server error");
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#F8FAFC] via-white to-[#ECFDF5] flex items-center justify-center px-4">
      <Toaster position="top-center" />

      <div className="w-full max-w-md bg-white/85 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/50 p-10">
        <h1 className="text-4xl font-bold text-center mb-3 text-[#0F766E]">
          Welcome Back
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Login to your PlanTopia account
        </p>

        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-4 rounded-2xl border border-gray-300 bg-white text-[#111827] font-medium placeholder:text-gray-400 mb-4 outline-none focus:ring-2 focus:ring-[#0F766E] focus:border-[#0F766E] caret-[#0F766E]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="relative mb-6">
          <input
            type={show ? "text" : "password"}
            placeholder="Password"
            className="w-full p-4 rounded-2xl border border-gray-300 bg-white text-[#111827] font-medium placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[#0F766E] focus:border-[#0F766E] caret-[#0F766E]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="button"
            onClick={() => setShow(!show)}
            className="absolute right-4 top-4 text-sm text-gray-500"
          >
            {show ? "Hide" : "Show"}
          </button>
        </div>

        <button
          onClick={loginUser}
          disabled={loading}
          className="w-full bg-[#0F766E] text-white py-4 rounded-2xl font-semibold hover:bg-[#115E59] transition shadow-xl disabled:opacity-70"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="text-center text-gray-500 mt-6">
          Don’t have an account?{" "}
          <a href="/auth/register" className="text-[#0F766E] font-semibold">
            Register
          </a>
        </p>
      </div>
    </main>
  );
}