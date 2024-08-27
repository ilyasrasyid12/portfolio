import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ilyas Rasyid",
  description: "Website Portfolio Ilyas",
  icons: {
    icon: "/logo.png",  // Menunjuk ke logo Anda di folder public
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png"/> {/* Favicon */}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
