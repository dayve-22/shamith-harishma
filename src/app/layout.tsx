import type { Metadata } from "next";
import "./globals.css";

const siteTitle = "Wedding Invitation | Shamith & Harishma";
const siteDesc =
  "Cordially invite your esteemed presence with family for the auspicious wedding ceremony and reception of Shamith N & Harishma P on Saturday, 19th December 2026 at Kannur Gardens, Thazhe Chovva, Kannur.";

export const metadata: Metadata = {
  metadataBase: new URL("https://shamith-harishma.wedding"),
  title: siteTitle,
  description: siteDesc,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: siteTitle,
    description: siteDesc,
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Wedding Invitation of Shamith N & Harishma P",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDesc,
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Anek+Malayalam:wght@400;600;700&family=Cinzel:wght@400;500;600;700;800;900&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=Great+Vibes&family=Montserrat:wght@300;400;500;600;700&family=Pinyon+Script&display=swap"
          rel="stylesheet"
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta name="theme-color" content="#120904" />
      </head>
      <body className="antialiased bg-[#120904] text-[#f7ede2] selection:bg-[#c99e32] selection:text-[#140a05] min-h-screen">
        {children}
      </body>
    </html>
  );
}
