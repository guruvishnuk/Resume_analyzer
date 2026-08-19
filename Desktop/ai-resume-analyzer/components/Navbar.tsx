export default function Navbar() {
  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="text-xl font-bold text-gray-900">
          AI Resume Analyzer
        </a>

        <div className="flex items-center gap-6 text-sm font-medium text-gray-600">
          <a href="/" className="transition hover:text-gray-900">
            Home
          </a>

          <a href="/about" className="transition hover:text-gray-900">
            About
          </a>
        </div>
      </div>
    </nav>
  );
}