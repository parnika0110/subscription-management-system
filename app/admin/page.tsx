"use client";

import { useEffect, useState } from "react";

export default function AdminPage() {
  const [plans, setPlans] = useState<any[]>([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    loadPlans();
  }, []);

  const loadPlans = async () => {
    const res = await fetch("/api/plans");
    const data = await res.json();
    setPlans(data);
  };

  const addPlan = async () => {
    if (!name || !price) return alert("Enter all fields");

    await fetch("/api/plans", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        price
      })
    });

    setName("");
    setPrice("");
    loadPlans();
  };

  const deletePlan = async (id: string) => {
    await fetch("/api/plans", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id })
    });

    loadPlans();
  };

  const logout = () => {
    localStorage.clear();
    window.location.assign("/auth/login");
  };

  const totalRevenue = plans.reduce(
    (sum, item) => sum + Number(item.price || 0),
    0
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#F8FAFC] via-white to-[#ECFDF5] text-[#111827]">

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-2xl border-b border-white/50 shadow-md">
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          <h1 className="text-4xl font-bold text-[#0F766E]">
            Plan<span className="text-[#111827]">Topia</span>
          </h1>

          <button
            onClick={logout}
            className="px-5 py-2 rounded-xl bg-[#0F766E] text-white hover:bg-[#115E59]"
          >
            Logout
          </button>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-8 py-10">

        {/* Heading */}
        <div className="mb-10">
          <h2 className="text-5xl font-bold mb-3">
            Admin Dashboard
          </h2>
          <p className="text-gray-600">
            Manage plans and monitor platform growth.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">

          <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl">
            <p className="text-gray-500">Total Plans</p>
            <h3 className="text-4xl font-bold mt-2 text-[#0F766E]">
              {plans.length}
            </h3>
          </div>

          <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl">
            <p className="text-gray-500">Revenue Potential</p>
            <h3 className="text-4xl font-bold mt-2 text-[#0F766E]">
              ₹{totalRevenue}
            </h3>
          </div>

          <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl">
            <p className="text-gray-500">Growth</p>
            <h3 className="text-4xl font-bold mt-2 text-[#0F766E]">
              +24%
            </h3>
          </div>

        </div>

        {/* Add Plan */}
        <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-xl mb-12">
          <h3 className="text-3xl font-bold mb-6 text-[#0F766E]">
            Add New Plan
          </h3>

          <div className="grid md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Plan Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-4 rounded-2xl border border-gray-200 outline-none"
            />

            <input
              type="number"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="p-4 rounded-2xl border border-gray-200 outline-none"
            />

            <button
              onClick={addPlan}
              className="bg-[#0F766E] text-white rounded-2xl font-semibold hover:bg-[#115E59]"
            >
              Add Plan
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        <div>
          <h3 className="text-3xl font-bold mb-6">
            Existing Plans
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan._id}
                className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl hover:-translate-y-1 transition"
              >
                <h4 className="text-2xl font-bold mb-2 text-[#111827]">
                  {plan.name}
                </h4>

                <p className="text-gray-600 mb-5">
                  ₹{plan.price}
                </p>

                <button
                  onClick={() => deletePlan(plan._id)}
                  className="w-full bg-red-500 text-white py-3 rounded-2xl hover:bg-red-600"
                >
                  Delete Plan
                </button>
              </div>
            ))}
          </div>
        </div>

      </section>
    </main>
  );
}