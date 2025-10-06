import Link from "next/link";

export default function Nav() {
  return (
    <header className="sticky top-0 z-10 border-b bg-white/70 backdrop-blur">
      <div className="mx-auto max-w-3xl px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold">
          {process.env.NEXT_PUBLIC_SITE_NAME || "Next Starter"}
        </Link>
        <nav className="flex gap-4 text-sm">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            Docs
          </a>
        </nav>
      </div>
    </header>
  );
}
