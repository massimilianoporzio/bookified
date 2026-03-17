/*
 *   Copyright (c) 2026 Massimiliano Porzio
 *   All rights reserved.
 */
import type { Metadata } from "next";
import { IBM_Plex_Serif, Inter, Mona_Sans } from "next/font/google";
import { ui } from '@clerk/ui'

import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";

import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const ibmPlexSerif = IBM_Plex_Serif({
  variable: "--font-ibm-plex-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bookified",
  description:
    "Trasnform your books into interactive AI conversations. Upload PDFs... and chat with your book using voice.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
     ui={ui}
    >
      <html
        lang="en"
        suppressHydrationWarning
        className={cn(
          "font-sans",
          inter.variable,
          monaSans.variable,
          ibmPlexSerif.variable
        )}
      >
        <body className="antialiased">
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            disableTransitionOnChange
          >
            <Navbar />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
