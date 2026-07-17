import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const metadataBase = new URL(`${protocol}://${host}`);
  const socialImage = new URL("/og.png", metadataBase).toString();

  return {
    metadataBase,
    title: "NISHTA IAS Academy | UPSC Coaching in Bengaluru",
    description: "Tech-driven UPSC CSE preparation, personal mentorship, Samagra Test Series, General Studies and Anthropology Optional in Bengaluru.",
    keywords: ["UPSC coaching Bengaluru", "NISHTA IAS", "Samagra Test Series", "Anthropology Optional", "UPSC CSE 2027"],
    icons: { icon: "/nishta-logo.png", shortcut: "/nishta-logo.png", apple: "/nishta-logo.png" },
    openGraph: {
      title: "NISHTA IAS Academy",
      description: "Your UPSC dream deserves the right strategy.",
      type: "website",
      locale: "en_IN",
      images: [{ url: socialImage, width: 1200, height: 630, alt: "NISHTA IAS Academy — Master UPSC with precision, humility, and strategy." }],
    },
    twitter: {
      card: "summary_large_image",
      title: "NISHTA IAS Academy",
      description: "Precision. Humility. Strategy.",
      images: [socialImage],
    },
  };
}

const schema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "NISHTA IAS Academy",
  description: "UPSC Civil Services Examination coaching and mentorship academy.",
  telephone: ["+91 91871 11424", "+91 91106 90179"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "S, No.26, near Davanagere Benne Dose, Nagarbhavi 1st Stage, Chandra Layout",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560040",
    addressCountry: "IN",
  },
  sameAs: ["https://t.me/Nishtaias", "https://instagram.com"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable}`}>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </body>
    </html>
  );
}
