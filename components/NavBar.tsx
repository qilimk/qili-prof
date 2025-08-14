"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const items = [
  { href: "/", label: "About" },
  { href: "/publications", label: "Publications" },
  { href: "/group", label: "Group" },
  { href: "/experiences", label: "Experiences" },
  { href: "/awards", label: "Awards" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="py-6">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold">Prof. Jane Doe</Link>
        <button
          className="md:hidden rounded border px-3 py-1 text-sm"
          onClick={() => setOpen(v => !v)}
          aria-expanded={open}
          aria-controls="primary-nav"
        >Menu</button>
      </div>

      <nav id="primary-nav" className={`mt-3 ${open ? "block" : "hidden"} md:block`}>
        <ul className="flex flex-col gap-2 md:flex-row md:gap-6">
          {items.map(i => (
            <li key={i.href}>
              <Link
                href={i.href}
                className={`hover:underline ${pathname === i.href ? "font-semibold" : ""}`}
              >{i.label}</Link>
            </li>
          ))}
          <li><a className="underline" href="/cv.pdf" target="_blank" rel="noreferrer">CV</a></li>
        </ul>
      </nav>
      <hr className="mt-4 border-gray-200" />
    </header>
  );
}

