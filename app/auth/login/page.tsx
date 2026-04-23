"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async () => {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (data.token) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);

      if (data.role === "admin") {
        window.location.assign("/admin");
      } else {
        window.location.assign("/dashboard");
      }
    } else {
      alert(data.message);
    }
  };

  return (
    <main className="min-h-screen bg-[#F8F2EF] flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md p-10 rounded-3xl shadow-xl border border-[#E9D7D1]">
        <h1 className="text-4xl font-bold text-[#A26769] text-center mb-2">
          Welcome Back
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Login to continue
        </p>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-[#E9D7D1] p-3 mb-3 rounded-xl outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-[#E9D7D1] p-3 mb-4 rounded-xl outline-none"
        />

        <button
          onClick={loginUser}
          className="w-full bg-[#C38D94] hover:bg-[#B57D84] text-white p-3 rounded-xl transition"
        >
          Login
        </button>

        <p className="text-center text-sm text-gray-500 mt-5">
          New user? <a href="/auth/register" className="text-[#A26769] font-semibold">Register</a>
        </p>
      </div>
    </main>
  );
}