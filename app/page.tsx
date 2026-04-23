import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F2EF] flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-xl p-12 rounded-3xl shadow-xl border border-[#E9D7D1] text-center">
        <h1 className="text-5xl font-bold text-[#A26769] mb-3">
          Subscription Hub
        </h1>

        <p className="text-gray-500 text-lg mb-8">
          Manage plans, pricing and users beautifully.
        </p>

        <div className="grid grid-cols-2 gap-4">
          <Link
            href="/auth/login"
            className="bg-[#C38D94] hover:bg-[#B57D84] text-white font-semibold py-3 rounded-xl transition"
          >
            Login
          </Link>

          <Link
            href="/auth/register"
            className="bg-[#D8A7B1] hover:bg-[#CB96A2] text-white font-semibold py-3 rounded-xl transition"
          >
            Register
          </Link>
        </div>
      </div>
    </main>
  );
}