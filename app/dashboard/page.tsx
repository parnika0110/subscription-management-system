"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {
  const [plans, setPlans] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/plans")
      .then((res) => res.json())
      .then((data) => setPlans(data));
  }, []);

  const logout = () => {
    localStorage.clear();
    window.location.assign("/auth/login");
  };

  return (
    <main className="min-h-screen bg-[#F8F2EF] p-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-5xl font-bold text-[#A26769]">
          User Dashboard
        </h1>

        <button
          onClick={logout}
          className="bg-[#C38D94] hover:bg-[#B57D84] text-white px-6 py-3 rounded-xl transition"
        >
          Logout
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="bg-white p-6 rounded-3xl shadow-lg border border-[#E9D7D1]"
          >
            <h2 className="text-2xl font-bold text-[#A26769] mb-2">
              {plan.name}
            </h2>

            <p className="text-gray-600 mb-4">
              ₹{plan.price}
            </p>

            <button
              className="w-full bg-[#C38D94] text-white py-3 rounded-xl"
              onClick={() => alert(`Subscribed to ${plan.name}`)}
            >
              Subscribe
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}