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
        window.location.href = "/admin";
      } else {
        window.location.href = "/dashboard";
      }
    } else {
      alert(data.message);
    }
  };

  return (
    <main className="min-h-screen bg-[#F8F2EF] flex items-center justify-center">
      <div className="bg-white p-10 rounded-3xl shadow-xl w-[420px] border border-[#E9D7D1]">
        <h1 className="text-4xl font-bold text-[#A26769] mb-6 text-center">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border border-[#E9D7D1] p-3 mb-3 rounded-xl"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border border-[#E9D7D1] p-3 mb-4 rounded-xl"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={loginUser}
          className="w-full bg-[#C38D94] hover:bg-[#B57D84] text-white p-3 rounded-xl transition"
        >
          Login
        </button>
      </div>
    </main>
  );
}