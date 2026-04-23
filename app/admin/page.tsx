"use client";

import { useEffect, useState } from "react";

export default function AdminPage() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [plans, setPlans] = useState<any[]>([]);
  const [editId, setEditId] = useState<number | null>(null);

  const loadPlans = () => {
    fetch("/api/plans")
      .then((res) => res.json())
      .then((data) => setPlans(data));
  };

  useEffect(() => {
    loadPlans();
  }, []);

  const savePlan = async () => {
    const method = editId ? "PUT" : "POST";

    const body = editId
      ? { id: editId, name, price }
      : { name, price };

    const res = await fetch("/api/plans", {
      method,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });

    const data = await res.json();
    alert(data.message);

    setName("");
    setPrice("");
    setEditId(null);
    loadPlans();
  };

  const deletePlan = async (id: number) => {
    await fetch("/api/plans", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id })
    });

    loadPlans();
  };

  const editPlan = (plan: any) => {
    setName(plan.name);
    setPrice(plan.price);
    setEditId(plan.id);
  };

  return (
    <main className="min-h-screen bg-[#F8F2EF] p-10">
      <h1 className="text-5xl font-bold text-[#A26769] mb-8">
        Admin Dashboard
      </h1>

      <div className="bg-white p-8 rounded-3xl shadow-xl w-[520px] mb-12 border border-[#E9D7D1]">
        <h2 className="text-2xl font-bold text-[#A26769] mb-4">
          {editId ? "Edit Plan" : "Add Plan"}
        </h2>

        <input
          value={name}
          placeholder="Plan Name"
          className="w-full border border-[#E9D7D1] p-3 mb-3 rounded-xl"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          value={price}
          placeholder="Price"
          className="w-full border border-[#E9D7D1] p-3 mb-4 rounded-xl"
          onChange={(e) => setPrice(e.target.value)}
        />

        <button
          onClick={savePlan}
          className="bg-[#C38D94] hover:bg-[#B57D84] text-white px-6 py-3 rounded-xl w-full transition"
        >
          {editId ? "Update Plan" : "Add Plan"}
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="bg-white p-6 rounded-3xl shadow-lg hover:scale-105 transition border border-[#E9D7D1]"
          >
            <h3 className="text-2xl font-bold text-[#A26769] mb-2">
              {plan.name}
            </h3>

            <p className="text-gray-600 mb-4">
              ₹{plan.price}
            </p>

            <div className="flex gap-2">
              <button
                onClick={() => editPlan(plan)}
                className="bg-[#D8A7B1] hover:bg-[#CB96A2] text-white px-4 py-2 rounded-xl w-full transition"
              >
                Edit
              </button>

              <button
                onClick={() => deletePlan(plan.id)}
                className="bg-[#E5989B] hover:bg-[#DB7F84] text-white px-4 py-2 rounded-xl w-full transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}