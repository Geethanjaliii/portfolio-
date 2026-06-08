import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Geethanjali V N | Software & Cloud Engineer",
  description: "Portfolio of Geethanjali V N, a product-focused Software Engineer and Cloud Developer specializing in scalable backend services, generative AI agents, and full-stack systems.",
  keywords: [
    "Geethanjali V N",
    "Software Engineer Portfolio",
    "Cloud Engineer",
    "Full Stack Developer",
    "LangGraph Agent",
    "FastAPI Developer",
    "AWS",
    "Firebase Genkit",
    "Chennai Developer",
    "Velammal Engineering College"
  ],
  authors: [{ name: "Geethanjali V N" }],
  metadataBase: new URL("https://geethanjali-vn.vercel.app"),
  openGraph: {
    title: "Geethanjali V N | Software & Cloud Engineer",
    description: "Building scalable software, cloud-powered applications, and agentic AI systems.",
    url: "https://geethanjali-vn.vercel.app",
    siteName: "Geethanjali Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Geethanjali V N Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Geethanjali V N | Software & Cloud Engineer",
    description: "Building scalable software, cloud-powered applications, and agentic AI systems.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} scroll-smooth dark`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="font-sans antialiased text-neutral-200 bg-[#030303] selection:bg-blue-500/30 selection:text-blue-200">
        {/* Glow ambient background orbs */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div 
            className="glow-orb w-[600px] h-[600px] bg-blue-900/10 top-[-200px] left-[-100px] animate-pulse-slow" 
            style={{ animationDuration: '10s' }}
          />
          <div 
            className="glow-orb w-[500px] h-[500px] bg-indigo-900/10 bottom-[-100px] right-[-100px] animate-pulse-slow" 
            style={{ animationDuration: '14s' }}
          />
          <div 
            className="glow-orb w-[800px] h-[800px] bg-blue-950/5 top-[30%] left-[20%] animate-pulse-slow" 
            style={{ animationDuration: '18s' }}
          />
        </div>
        
        {/* Main Content wrapper */}
        <div className="relative z-10">
          {children}
          {/* Footer inserted across the app */}
          <div className="pt-8">
            {/* lazy load footer to avoid layout shifts */}
            <script dangerouslySetInnerHTML={{ __html: "" }} />
          </div>
        </div>
      </body>
    </html>
  );
}
