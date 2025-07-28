import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Header from "@/components/header";
import BackToTop from "@/components/back-to-top";
import GridBackground from "@/components/grid-background";

const montserrat = Montserrat({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Jayden",
  metadataBase: new URL("https://www.jaydenkang.com"),
  alternates: {
    canonical: "/",
  },
  authors: [
    { name: "Jayden Kang", url: "https://github.com/kangjoonseo" },
  ],
  description: "Jayden's website",
  openGraph: {
    title: "Jayden",
    description: "Jayden's personal website",
    images: [
      {
        url: "/image.jpg",
        alt: "Jayden",
        width: 640,
        height: 800,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        <GridBackground />
        <main className="container overflow-x-hidden lg:px-28">{children}</main>
        <BackToTop />
      </body>
    </html>
  );
}
