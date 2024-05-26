import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Dancing_Script } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const dancingScript = Dancing_Script({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Aleabreau | Lencería",
  description: "Lencería",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
       <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
