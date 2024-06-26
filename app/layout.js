import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Munab.AI",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <head>
      <link rel="icon" href="/favicon.ico" />
      </head>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
