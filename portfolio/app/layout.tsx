import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { profile } from "@/data/profile";
import "./globals.css";

const description = "Portfolio profesional de Juan Felipe Garavito, estudiante de Ingeniería de Sistemas y Junior Software Developer enfocado en backend y desarrollo web full-stack.";
export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: { default: "Juan Felipe Garavito | Software Developer", template: "%s | Juan Felipe Garavito" },
  description,
  openGraph: { title: "Juan Felipe Garavito | Software Developer", description, type: "website", locale: "es_CO", siteName: "Juan Felipe Garavito" },
  twitter: { card: "summary", title: "Juan Felipe Garavito | Software Developer", description },
};
export const viewport: Viewport = { themeColor: "#0a0a0a" };

const jsonLd = {
  "@context": "https://schema.org", "@type": "Person", name: profile.name, jobTitle: "Junior Software Developer",
  url: profile.siteUrl, email: profile.email, sameAs: [profile.github, profile.linkedin],
  alumniOf: "Universidad Central", address: { "@type": "PostalAddress", addressLocality: "Bogotá", addressCountry: "CO" },
};
const themeScript = `try{var t=localStorage.getItem("theme");if(t)document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
