import "./globals.css";
import Footer from "@/components/Footer";
import FloatingContactButtons from "@/components/FloatingContactButtons";
import LeadPopupController from "@/components/LeadPopupController";
import Script from "next/script";
import { DM_Sans } from "next/font/google";
import MobileFloatingCTA from "@/components/MobileFloatingCTA";

const googleSansLike = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>

        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PH5QDC9X');
            `,
          }}
        />

      </head>

      <body className={`site-bg text-gray-900 ${googleSansLike.className}`}>

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PH5QDC9X"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {children}

        <Footer />
        <FloatingContactButtons />
        <MobileFloatingCTA />

        {/* Lead Popup */}
        <LeadPopupController />

      </body>
    </html>
  );
}