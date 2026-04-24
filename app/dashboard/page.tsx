"use client";

import { useEffect, useMemo, useState } from "react";

type Plan = {
  _id?: string;
  id?: string;
  name: string;
  price: number | string;
};

type Subscription = {
  _id?: string;
  planName: string;
  price: number | string;
};

export default function DashboardPage() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [subs, setSubs] = useState<Subscription[]>([]);
  const [email, setEmail] = useState("");
  const [search, setSearch] = useState("");
  const [loadingPlan, setLoadingPlan] = useState("");

  useEffect(() => {
    const userEmail = localStorage.getItem("email") || "";
    setEmail(userEmail);

    loadPlans();
    if (userEmail) {
      loadSubscriptions(userEmail);
    }
  }, []);

  const loadPlans = async () => {
    const res = await fetch("/api/plans");
    const data = await res.json();
    setPlans(data);
  };

  const loadSubscriptions = async (userEmail: string) => {
    try {
      const res = await fetch(
        `/api/subscriptions?email=${encodeURIComponent(userEmail)}`
      );
      const data = await res.json();
      setSubs(Array.isArray(data) ? data : []);
    } catch {
      setSubs([]);
    }
  };

  const isSubscribed = (planName: string) => {
    return subs.some((s) => s.planName === planName);
  };

  const subscribePlan = async (plan: Plan) => {
    setLoadingPlan(plan.name);

    await fetch("/api/subscriptions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userEmail: email,
        planName: plan.name,
        price: plan.price
      })
    });

    await loadSubscriptions(email);
    setLoadingPlan("");
  };

  const unsubscribePlan = async (planName: string) => {
    setLoadingPlan(planName);

    await fetch("/api/subscriptions", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userEmail: email,
        planName
      })
    });

    await loadSubscriptions(email);
    setLoadingPlan("");
  };

  const logout = () => {
    localStorage.clear();
    window.location.assign("/auth/login");
  };

  const filteredPlans = useMemo(() => {
    return plans.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [plans, search]);

  const totalSpend = subs.reduce(
    (sum, item) => sum + Number(item.price || 0),
    0
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#F8FAFC] via-white to-[#ECFDF5] text-[#111827] overflow-hidden">

      {/* Glow */}
      <div className="fixed top-10 left-10 w-72 h-72 bg-[#A7F3D0] opacity-30 blur-3xl rounded-full"></div>
      <div className="fixed bottom-10 right-10 w-80 h-80 bg-[#99F6E4] opacity-30 blur-3xl rounded-full"></div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-2xl bg-white/70 border-b border-white/50 shadow-md">
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          <h1 className="text-4xl font-extrabold tracking-wide text-[#0F766E]">
            Plan<span className="text-[#111827]">Topia</span>
          </h1>

          <button
            onClick={logout}
            className="px-5 py-2.5 rounded-xl bg-[#0F766E] text-white hover:bg-[#115E59] transition shadow-lg"
          >
            Logout
          </button>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-8 py-10 relative z-10">

        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-5xl font-bold mb-3 text-[#111827]">
            User Dashboard
          </h2>
          <p className="text-gray-600">
            Manage subscriptions beautifully in one place.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white/65 backdrop-blur-xl rounded-3xl p-6 shadow-xl">
            <p className="text-gray-500">Total Plans</p>
            <h3 className="text-4xl font-bold mt-2 text-[#0F766E]">
              {plans.length}
            </h3>
          </div>

          <div className="bg-white/65 backdrop-blur-xl rounded-3xl p-6 shadow-xl">
            <p className="text-gray-500">Active Plans</p>
            <h3 className="text-4xl font-bold mt-2 text-[#0F766E]">
              {subs.length}
            </h3>
          </div>

          <div className="bg-white/65 backdrop-blur-xl rounded-3xl p-6 shadow-xl">
            <p className="text-gray-500">Monthly Spend</p>
            <h3 className="text-4xl font-bold mt-2 text-[#0F766E]">
              ₹{totalSpend}
            </h3>
          </div>
        </div>

        {/* Search */}
        <div className="mb-10">
          <input
            type="text"
            placeholder="Search plans..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-[420px] p-4 rounded-2xl border border-white/60 bg-white/70 backdrop-blur-xl outline-none focus:ring-2 focus:ring-[#0F766E]"
          />
        </div>

        {/* Active Subs */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-5">Your Active Subscriptions</h3>

          {subs.length === 0 ? (
            <div className="bg-white/60 rounded-3xl p-8 shadow-lg text-gray-500">
              No active subscriptions yet.
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              {subs.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/50"
                >
                  <h4 className="text-2xl font-bold mb-2 text-[#0F766E]">
                    {item.planName}
                  </h4>

                  <p className="text-gray-600 mb-5">
                    ₹{item.price}
                  </p>

                  <button
                    onClick={() => unsubscribePlan(item.planName)}
                    disabled={loadingPlan === item.planName}
                    className="w-full bg-red-500 text-white py-3 rounded-2xl hover:bg-red-600 transition"
                  >
                    {loadingPlan === item.planName
                      ? "Removing..."
                      : "Unsubscribe"}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* All Plans */}
        <div>
          <h3 className="text-2xl font-bold mb-5">Available Plans</h3>

          <div className="grid md:grid-cols-3 gap-6">
            {filteredPlans.map((plan, index) => {
              const active = isSubscribed(plan.name);

              return (
                <div
                  key={plan._id || plan.id || index}
                  className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/50 hover:-translate-y-1 transition"
                >
                  <h4 className="text-2xl font-bold mb-2 text-[#111827]">
                    {plan.name}
                  </h4>

                  <p className="text-gray-600 mb-5">
                    ₹{plan.price}
                  </p>

                  {active ? (
                    <button
                      onClick={() => unsubscribePlan(plan.name)}
                      disabled={loadingPlan === plan.name}
                      className="w-full bg-red-500 text-white py-3 rounded-2xl hover:bg-red-600 transition"
                    >
                      {loadingPlan === plan.name
                        ? "Removing..."
                        : "Unsubscribe"}
                    </button>
                  ) : (
                    <button
                      onClick={() => subscribePlan(plan)}
                      disabled={loadingPlan === plan.name}
                      className="w-full bg-[#0F766E] text-white py-3 rounded-2xl hover:bg-[#115E59] transition"
                    >
                      {loadingPlan === plan.name
                        ? "Subscribing..."
                        : "Subscribe"}
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </section>
    </main>
  );
}