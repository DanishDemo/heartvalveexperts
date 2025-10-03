import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import CustomCursor from "@/component/CustomCursor";
import Footer from "@/component/Footer";
import Header from "@/component/Header";

// ✅ Google Search Console (GSC) verification
export const metadata: Metadata = {
  title: "Heart Valve Experts",
  description: "Advanced Cardiac Care & Innovation",
  verification: {
    google: "s8bc_S5m9h-MxNlii4UsZvK2OvA_VH81a7Fb9GNLBbU", // GSC meta verification
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ GTM head script */}
        <Script id="gtm-head" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-P6Z3WR34');`}
        </Script>
      </head>

      <body>
        {/* ✅ GTM noscript (must be right after opening body) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P6Z3WR34"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {/* <Header /> */}
        <CustomCursor />
        {children}
        <Footer />
      </body>
    </html>
  );
}
