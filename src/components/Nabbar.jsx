
const Nabbar = () => {
  return (
    <nav className="border-b border-gray-800 bg-gray-950 text-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6"> {/* Logo */}
        <div className="text-2xl font-bold">
          <span className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"> ProfileX </span>
        </div> {/* Navigation Links */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="#" className="text-gray-300 transition-colors duration-200 hover:text-blue-400" > Home </a>
          <a href="#" className="text-gray-300 transition-colors duration-200 hover:text-purple-400" > About </a>
          <a href="#" className="text-gray-300 transition-colors duration-200 hover:text-blue-400" > Services </a>
        </div>
        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <button className="rounded-lg border border-blue-500/50 px-4 py-2 text-sm font-medium text-blue-400 transition-all duration-200 hover:border-blue-400 hover:bg-blue-500/10 hover:text-blue-300" > Sign In </button>
          <button className="rounded-lg bg-linear-to-r from-blue-500 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 transition-all duration-200 hover:scale-105 hover:from-blue-600 hover:to-purple-700 hover:shadow-purple-500/30" > Sign Up </button>
        </div>
      </div>
    </nav>
  )
}

export default Nabbar
