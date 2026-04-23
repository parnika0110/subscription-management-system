"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const registerUser = async () => {
    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    const data = await res.json();
    alert(data.message);
  };

  return (
    <main className="min-h-screen bg-[#F8F2EF] flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md p-10 rounded-3xl shadow-xl border border-[#E9D7D1]">
        <h1 className="text-4xl font-bold text-[#A26769] text-center mb-2">
          Create Account
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Register to get started
        </p>

        <input
          placeholder="Full Name"
          className="w-full border border-[#E9D7D1] p-3 mb-3 rounded-xl outline-none"
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          placeholder="Email"
          className="w-full border border-[#E9D7D1] p-3 mb-3 rounded-xl outline-none"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border border-[#E9D7D1] p-3 mb-4 rounded-xl outline-none"
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <button
          onClick={registerUser}
          className="w-full bg-[#C38D94] hover:bg-[#B57D84] text-white p-3 rounded-xl transition"
        >
          Register
        </button>

        <p className="text-center text-sm text-gray-500 mt-5">
          Already have an account? <a href="/auth/login" className="text-[#A26769] font-semibold">Login</a>
        </p>
      </div>
    </main>
  );
}