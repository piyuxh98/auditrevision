import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import { Navbar } from "@/components/Navbar";
import { ServiceWorkerRegistrar } from "@/components/ServiceWorkerRegistrar";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://acca-audit-mastery.vercel.app"),
  title: {
    default: "ACCA Audit Mastery",
    template: "%s | ACCA Audit Mastery"
  },
  description:
    "Offline-capable ACCA Audit and Assurance study platform with topic notes, MCQ practice, and rapid revision tools.",
  applicationName: "ACCA Audit Mastery",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "ACCA Audit Mastery"
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/icons/icon-192.svg", sizes: "192x192", type: "image/svg+xml" },
      { url: "/icons/icon-512.svg", sizes: "512x512", type: "image/svg+xml" }
    ],
    apple: [{ url: "/icons/icon-192.svg", sizes: "192x192", type: "image/svg+xml" }]
  }
};

export const viewport: Viewport = {
  themeColor: "#ff6b57"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.variable}>
        <ServiceWorkerRegistrar />
        <div className="min-h-screen bg-canvas text-ink">
          <Navbar />
          <main className="relative">{children}</main>
          <footer className="mx-auto w-full max-w-7xl px-4 pb-8 pt-4 text-center sm:px-6 lg:px-8">
            <p className="text-xs font-light tracking-[0.16em] text-muted">Made by Piyush Agrawal</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
