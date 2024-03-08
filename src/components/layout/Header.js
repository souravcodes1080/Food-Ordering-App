import Link from "next/link";

export default function Header() {
    return(
        <header className="flex items-center justify-between">
    <Link className="text-primary font-semibold text-2xl" href="/">
      S PIZZA
    </Link>
    <nav className="flex gap-7 text-xl items-center">
      <Link href="/">Home</Link>
      <Link href="/">Menu</Link>
      <Link href="/">About</Link>
      <Link href="/">Contact</Link>
      <Link href="/" className="bg-primary text-white px-6 py-2 rounded-full">
        Login
      </Link>
    </nav>
  </header>
    );
  
}
