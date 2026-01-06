import "./globals.css";
import { getUrl } from "@/utilities/getUrl";
import { Geist_Mono, Geist } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";



type Props = {
  children: React.ReactNode;
};

const GeistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const GeistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
  <html lang="en" className={`dark ${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Favicon */}
        <link rel="icon" href="/gallery/me.png" type="image/png" />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Rohit Debnath – Portfolio" />
        <meta property="og:description" content="Minimalistic portfolio of Rohit Dnath – Developer from India." />
        <meta property="og:image" content="/opengraph-image.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rohitdebnath.me/" />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rohit Debnath – Portfolio" />
        <meta name="twitter:description" content="Minimalistic portfolio of Rohit Dnath – Developer from India." />
        <meta name="twitter:image" content="/opengraph-image.png" />
        <meta name="twitter:site" content="@r0dth" />
        <meta name="instagram:site" content="@r0dth" />
      </head>
  <body className="font-geist-sans bg-zinc-900 text-zinc-100 overscroll-none grid-background">
        <ThemeProvider defaultTheme="system" storageKey="ahmet-theme">
          {children}
        </ThemeProvider>
        <GoogleAnalytics gaId="G-M80GLPRQFQ" />
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;

export const viewport: Viewport = {
  themeColor: "##ffffff",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(getUrl),
  title: {
    default: "Rohit Debnath",
    template: `%s - Rohit Debnath`,
  },
  description: "Explore my projects and previous work, or contact me.",
};
