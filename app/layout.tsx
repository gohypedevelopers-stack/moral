import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import Script from "next/script";
import { cookies } from "next/headers";
import "./globals.css";
import { cn } from "@/lib/utils";
import { PRELOADER_STORAGE_KEY } from "@/lib/preloader";
import { Preloader } from "@/components/preloader";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Moral",
  description: "Moral is a modern, minimalist clothing brand that offers high-quality, timeless pieces for men and women.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies()
  const preloaderSeen = cookieStore.get(PRELOADER_STORAGE_KEY)?.value === "true"

  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col">
        <Script id="preloader-state" strategy="beforeInteractive">
          {`(function () {
  try {
    if (localStorage.getItem("${PRELOADER_STORAGE_KEY}") === "true") {
      document.documentElement.dataset.preloaderSeen = "true";
      document.cookie = "${PRELOADER_STORAGE_KEY}=true; path=/; max-age=31536000; samesite=lax";
      window.__MORAL_PRELOADER_SEEN__ = true;
    }
  } catch (error) {}
})();`}
        </Script>
        {!preloaderSeen ? <Preloader /> : null}
        {children}
      </body>
    </html>
  );
}
