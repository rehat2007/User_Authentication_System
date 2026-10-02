
const HomePage = () => {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* Hero Section */}
      <section className="flex min-h-[80vh] items-center justify-center px-6">
        <div className="max-w-3xl text-center">

          <p className="mb-4 inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            Simple. Secure. Personal.
          </p>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Your identity,
            <span className="block bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              your profile.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Create your account, manage your profile, and keep your
            personal information organized in one simple and secure place.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 font-semibold transition hover:scale-105 hover:from-blue-600 hover:to-purple-700">
              Get Started
            </button>

            <button className="rounded-lg border border-gray-700 px-6 py-3 font-semibold text-gray-300 transition hover:border-blue-500 hover:text-blue-400">
              Learn More
            </button>
          </div>

        </div>
      </section>

      {/* Features */}
      <section className="border-t border-gray-800 px-6 py-20">
        <div className="mx-auto max-w-6xl">

          <h2 className="text-center text-3xl font-bold">
            Everything you need
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-center text-gray-400">
            A simple platform designed to manage your account and profile.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <div className="rounded-xl border border-gray-800 bg-gray-900 p-6 transition hover:-translate-y-1 hover:border-blue-500/50">
              <div className="mb-4 text-3xl">🔐</div>
              <h3 className="text-xl font-semibold">Secure Login</h3>
              <p className="mt-2 text-gray-400">
                Sign in securely and keep your account protected.
              </p>
            </div>

            <div className="rounded-xl border border-gray-800 bg-gray-900 p-6 transition hover:-translate-y-1 hover:border-purple-500/50">
              <div className="mb-4 text-3xl">👤</div>
              <h3 className="text-xl font-semibold">Your Profile</h3>
              <p className="mt-2 text-gray-400">
                Manage your personal information from one place.
              </p>
            </div>

            <div className="rounded-xl border border-gray-800 bg-gray-900 p-6 transition hover:-translate-y-1 hover:border-blue-500/50">
              <div className="mb-4 text-3xl">⚡</div>
              <h3 className="text-xl font-semibold">Simple Experience</h3>
              <p className="mt-2 text-gray-400">
                Everything is designed to be simple and easy to use.
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;

