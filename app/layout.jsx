import { Playfair, Quicksand } from "next/font/google";
import "./globals.sass";

const playFair = Playfair({
  variable: "--font-play-fair",
  subsets: ["latin"],
});

const quickSand = Quicksand({
  variable: "--font-quick-sand",
  subsets: ["latin"],
});

export const metadata = {
  title: "Zero Invoice Generator | Free Online Invoicing by Veb Edge",
  description:
    "Create professional invoices instantly with Zero Invoice Generator. Powered by Veb Edge, this free tool requires no account, no subscription, and no payment card. Download PDF invoices, copy shareable links, send directly to clients via email, or print on the spot—clean and watermark-free.",
  keywords: [
    "Zero Invoice Generator",
    "free invoice maker",
    "online invoice generator",
    "download invoice PDF",
    "print invoice online",
    "email invoice tool",
    "instant invoice creator",
    "Veb Edge invoicing",
    "digital invoices",
    "no sign up invoice"
  ],
  openGraph: {
    title: "Zero Invoice Generator – Free, Fast & Powered by Veb Edge",
    description:
      "Generate, print, download or email invoices in seconds. No account, no subscription, no watermark—just smart, simple invoicing by Veb Edge.",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: "Zero Invoice Generator – Free Online Invoicing",
    description:
      "Create professional invoices online—download, print, share links or email directly. 100% free, no sign-up required."
  },
  robots: {
    index: true,
    follow: true
  },
  authors: [{ name: "Veb Edge" }]
};

export default function RootLayout({ children }) {
  const theme = {
    "--base-color": "lch(100 0 0)",
    "--text-color": "lch(0 0 0)",
    "--accent-color": "lch(36.94 59.85 9.8)"
  }
  return (
    <html lang="en">
      <body style={theme} className={`${playFair.variable} ${quickSand.variable}`}>
        {children}
      </body>
    </html>
  );
}
