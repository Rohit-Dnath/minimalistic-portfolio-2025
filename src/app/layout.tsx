import "./globals.css";
import { getUrl } from "@/utilities/getUrl";
import { Geist_Mono, Geist } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";
import { SessionProvider } from "next-auth/react";



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
  <html lang="en" className={`dark ${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning style={{ overflowX: 'hidden', maxWidth: '100vw' }}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
  <body className="font-geist-sans bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 overscroll-none" style={{ overflowX: 'hidden', maxWidth: '100vw' }}>
        <SessionProvider>
          <ThemeProvider defaultTheme="system" storageKey="ahmet-theme">
            {children}
          </ThemeProvider>
        </SessionProvider>
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
    default: "WTF ROHIT",
    template: `%s - WTF ROHIT`,
  },
  description: "Explore my projects and previous work, or contact me.",
  icons: {
    icon: '/img/mai.jpg',
    shortcut: '/img/mai.jpg',
    apple: '/img/mai.jpg',
  },
  openGraph: {
    title: 'WTF ROHIT – Portfolio',
    description: 'Minimalistic portfolio of Rohit Dnath – Developer from India.',
    url: 'https://rohitdebnath.me/',
    siteName: 'WTF ROHIT Portfolio',
    images: [
      {
        url: '/img/mai.jpg',
        width: 1200,
        height: 630,
        alt: 'WTF ROHIT',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WTF ROHIT – Portfolio',
    description: 'Minimalistic portfolio of Rohit Dnath – Developer from India.',
    images: ['/img/mai.jpg'],
    creator: '@r0dth',
  },
};
