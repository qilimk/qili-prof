// app/layout.tsx
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import Script from "next/script";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Prof. Qi Li — Computer Science",
  description: "Research, publications, teaching, and group.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const token = process.env.NEXT_PUBLIC_CF_BEACON_TOKEN;
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        <div id="top" />
        <div className="mx-auto max-w-6xl px-4">
          {/* Navbar always on top */}
          <NavBar />

          {/* Sidebar + main content */}
          <div className="grid gap-8 py-8 md:grid-cols-[210px,1fr]">
            <aside className="md:sticky md:top-6 self-start">
              <Sidebar />
            </aside>

            <main className="min-w-0">
              {children}
            </main>
          </div>

          <Footer />
        </div>

        {/* Cloudflare Web Analytics */}
        <Script
          src="https://static.cloudflareinsights.com/beacon.min.js"
          strategy="afterInteractive"
          data-cf-beacon={JSON.stringify({ token })}
        />
        <Analytics />
      </body>
    </html>
  );
}
