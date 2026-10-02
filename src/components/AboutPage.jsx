
const AboutPage = () => {
  return (
    <main className="min-h-screen bg-gray-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-4xl">

        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-blue-400">
            About Us
          </p>

          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
            Built for a
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              {" "}simple experience.
            </span>
          </h1>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">

          <div className="rounded-xl border border-gray-800 bg-gray-900 p-8">
            <h2 className="text-2xl font-semibold">Our Goal</h2>

            <p className="mt-4 leading-7 text-gray-400">
              Our goal is to provide a simple and reliable platform where
              users can create an account and manage their personal profile
              without unnecessary complexity.
            </p>
          </div>

          <div className="rounded-xl border border-gray-800 bg-gray-900 p-8">
            <h2 className="text-2xl font-semibold">Our Approach</h2>

            <p className="mt-4 leading-7 text-gray-400">
              We focus on a clean interface, straightforward navigation,
              and a smooth authentication experience for every user.
            </p>
          </div>

        </div>

        <div className="mt-8 rounded-xl border border-blue-500/20 bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-8 text-center">
          <h2 className="text-2xl font-semibold">
            Simple authentication. Better experience.
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-gray-400">
            Manage your account and keep your profile information organized
            from one convenient dashboard.
          </p>
        </div>

      </div>
    </main>
  );
};

export default AboutPage;

