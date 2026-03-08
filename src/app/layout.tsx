import type { Metadata } from "next";
import { Montserrat, Lora, Hind_Madurai } from "next/font/google";
import "./globals.css";
import { defaultMetadata } from "@/lib/seo";
import { Footer } from "@/components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const hindMadurai = Hind_Madurai({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hind-madurai",
  subsets: ["latin"],
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${lora.variable} ${hindMadurai.variable}`}>
      <body
        className="antialiased selection:bg-orange-500/30 selection:text-orange-900"
      >
        <div className="relative flex min-h-screen flex-col">
          <main className="flex-1">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
