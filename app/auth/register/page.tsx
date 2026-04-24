"use client";

import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const getStrength = () => {
    if (password.length < 5) return "Weak";
    if (password.length < 8) return "Medium";
    return "Strong";
  };

  const getColor = () => {
    if (password.length < 5) return "bg-red-500";
    if (password.length < 8) return "bg-yellow-500";
    return "bg-green-500";
  };

  const registerUser = async () => {
    if (!name || !email || !password) {
      toast.error("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          password,
          role: "user"
        })
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Registration failed");
        setLoading(false);
        return;
      }

      toast.success("Account created");

      setTimeout(() => {
        window.location.assign("/auth/login");
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
          Create Account
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Join PlanTopia today
        </p>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-4 rounded-2xl border border-gray-300 bg-white text-[#111827] font-medium placeholder:text-gray-400 mb-4 outline-none focus:ring-2 focus:ring-[#0F766E] focus:border-[#0F766E] caret-[#0F766E]"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-4 rounded-2xl border border-gray-300 bg-white text-[#111827] font-medium placeholder:text-gray-400 mb-4 outline-none focus:ring-2 focus:ring-[#0F766E] focus:border-[#0F766E] caret-[#0F766E]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="relative mb-2">
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

        {password && (
          <div className="mt-3 mb-5">
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className={`h-full ${getColor()} transition-all`}
                style={{
                  width:
                    getStrength() === "Weak"
                      ? "33%"
                      : getStrength() === "Medium"
                      ? "66%"
                      : "100%"
                }}
              />
            </div>

            <p className="text-sm mt-2 text-gray-600">
              Strength: {getStrength()}
            </p>
          </div>
        )}

        <button
          onClick={registerUser}
          disabled={loading}
          className="w-full mt-6 bg-[#0F766E] text-white py-4 rounded-2xl font-semibold hover:bg-[#115E59] transition shadow-xl disabled:opacity-70"
        >
          {loading ? "Creating..." : "Register"}
        </button>

        <p className="text-center text-gray-500 mt-6">
          Already have an account?{" "}
          <a href="/auth/login" className="text-[#0F766E] font-semibold">
            Login
          </a>
        </p>
      </div>
    </main>
  );
}