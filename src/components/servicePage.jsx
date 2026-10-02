const ServicesPage = () => {
  const services = [
    {
      icon: "🔐",
      title: "Authentication",
      description:
        "Create an account and securely sign in to your personal dashboard.",
    },
    {
      icon: "👤",
      title: "User Profile",
      description:
        "View and manage your personal information from your profile.",
    },
    {
      icon: "🛡️",
      title: "Account Security",
      description:
        "Keep your account protected with secure authentication and sessions.",
    },
    {
      icon: "⚙️",
      title: "Account Management",
      description:
        "Manage your account information and keep your profile up to date.",
    },
    {
      icon: "📊",
      title: "Personal Dashboard",
      description:
        "Access your account information through a clean and simple dashboard.",
    },
    {
      icon: "🚀",
      title: "Easy Experience",
      description:
        "Enjoy a fast and straightforward experience without unnecessary features.",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-purple-400">
            Services
          </p>

          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
            Everything in
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              {" "}one place.
            </span>
          </h1>

          <p className="mt-5 text-gray-400">
            Simple tools to help you manage your account and personal
            information.
          </p>
        </div>

        {/* Services */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-xl border border-gray-800 bg-gray-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-gray-900/80"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-2xl">
                {service.icon}
              </div>

              <h2 className="mt-5 text-xl font-semibold">
                {service.title}
              </h2>

              <p className="mt-2 leading-6 text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
};

export default ServicesPage;

