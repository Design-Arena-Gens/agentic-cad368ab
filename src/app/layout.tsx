import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dog Talent Show",
  description: "The most amazing dog talent show in the world!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}