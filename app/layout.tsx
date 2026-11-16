import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Khmer Inventory Pro 2",
  description: "ប្រព័ន្ធគ្រប់គ្រងស្តុក និងការលក់",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="km">
      <body>{children}</body>
    </html>
  );
}
