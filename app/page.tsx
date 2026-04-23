export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center px-6">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-10 rounded-3xl shadow-2xl text-center w-full max-w-xl text-white">
        <h1 className="text-5xl font-bold mb-4">
          Subscription Hub
        </h1>

        <p className="text-lg text-gray-200 mb-8">
          Manage plans, pricing and users in one place.
        </p>

        <div className="grid grid-cols-2 gap-4">
          <a
            href="/auth/login"
            className="bg-white text-blue-700 font-semibold py-3 rounded-2xl hover:scale-105 transition"
          >
            Login
          </a>

          <a
            href="/auth/register"
            className="bg-black/30 text-white font-semibold py-3 rounded-2xl hover:scale-105 transition"
          >
            Register
          </a>
        </div>
      </div>
    </main>
  );
}