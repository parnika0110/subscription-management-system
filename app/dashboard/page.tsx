"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {
  const [plans, setPlans] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/plans")
      .then((res) => res.json())
      .then((data) => setPlans(data));
  }, []);

  return (
    <main className="min-h-screen bg-[#F8F2EF] p-10">
      <h1 className="text-5xl font-bold text-[#A26769] mb-8">
        User Dashboard
      </h1>

      <p className="text-gray-600 text-lg mb-8">
        Choose a subscription plan that suits you.
      </p>

      <div className="grid grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="bg-white p-6 rounded-3xl shadow-lg hover:scale-105 transition border border-[#E9D7D1]"
          >
            <h2 className="text-2xl font-bold text-[#A26769] mb-2">
              {plan.name}
            </h2>

            <p className="text-gray-600 text-lg mb-4">
              ₹{plan.price}
            </p>

            <button
              className="w-full bg-[#C38D94] hover:bg-[#B57D84] text-white py-3 rounded-xl transition"
              onClick={() =>
                alert(`Subscribed to ${plan.name}`)
              }
            >
              Subscribe
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}