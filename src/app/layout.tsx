import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/component/CustomCursor";
import Footer from "@/component/Footer";
import Header from "@/component/Header";

export const metadata: Metadata = {
  title: "Heart Valve Experts",
  description: "Advanced Cardiac Care & Innovation",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* <Header/> */}
        <CustomCursor />
        {children}
        <Footer />
      </body>
    </html>
  );
}
