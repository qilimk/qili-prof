import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import Script from "next/script";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Prof. Jane Doe — Computer Science",
  description: "Research, publications, teaching, and group.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const token = process.env.NEXT_PUBLIC_CF_BEACON_TOKEN;
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        <div className="mx-auto max-w-4xl px-4">
          <NavBar />
          <main className="py-8">{children}</main>
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
