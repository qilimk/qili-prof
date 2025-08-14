"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const items = [
  { href: "/", label: "About" },
  { href: "/publications", label: "Publications" },
  { href: "/group", label: "Group" },
  { href: "/experiences", label: "Experiences" },
  { href: "/recognition", label: "Recognition" },
  { href: "/CV_QiLi_202508.pdf", label: "CV", external: true },
];

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="py-6">
      <div className="flex items-center justify-between">
        {/* Logo / Name */}
        <Link href="/" className="text-xl font-semibold">
          Prof. Qi Li
        </Link>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden rounded border px-3 py-1 text-sm"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="primary-nav"
        >
          Menu
        </button>
      </div>

      {/* Navigation links */}
      <nav
        id="primary-nav"
        className={`mt-3 ${open ? "block" : "hidden"} md:block`}
      >
        <ul className="flex flex-col gap-2 md:flex-row md:gap-6">
          {items.map((i) => (
            <li key={i.href}>
              {i.external ? (
                <a
                  href={i.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  {i.label}
                </a>
              ) : (
                <Link
                  href={i.href}
                  className={`hover:underline ${
                    pathname === i.href ? "font-semibold" : ""
                  }`}
                >
                  {i.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <hr className="mt-4 border-gray-200" />
    </header>
  );
}
