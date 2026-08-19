import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4">
      <h1 className="text-xl font-bold text-gray-900">AI Resume Analyzer</h1>
      <div className="flex gap-6">
        <Link href="/" className="text-sm font-medium text-gray-700 hover:text-gray-900">
          Home
        </Link>
        <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-gray-900">
          About
        </Link>
      </div>
    </nav>
  );
}
