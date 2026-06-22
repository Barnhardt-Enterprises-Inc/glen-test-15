import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex gap-4 p-4">
      <Link href="/" className="hover:underline">Home</Link>
      <Link href="/about" className="hover:underline">About</Link>
    </nav>
  );
}
