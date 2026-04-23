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
    <main className="min-h-screen bg-[#F8F2EF] flex items-center justify-center">
      <div className="bg-white p-10 rounded-3xl shadow-xl w-[420px] border border-[#E9D7D1]">
        <h1 className="text-4xl font-bold text-[#A26769] mb-6 text-center">
          Register
        </h1>

        <input
          placeholder="Name"
          className="w-full border border-[#E9D7D1] p-3 mb-3 rounded-xl"
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          placeholder="Email"
          className="w-full border border-[#E9D7D1] p-3 mb-3 rounded-xl"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border border-[#E9D7D1] p-3 mb-4 rounded-xl"
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
      </div>
    </main>
  );
}