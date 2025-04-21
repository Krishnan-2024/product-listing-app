import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-blue-600 text-white">
      <Link href="/" className="text-xl font-bold">ProductList</Link>
      <nav className="space-x-4">
        <Link href="/signin">Sign In</Link>
        <Link href="/signup">Sign Up</Link>
      </nav>
    </header>
  );
}
