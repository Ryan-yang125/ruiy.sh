import { Footer } from "@/components/footer";
import { Navbar } from "@/components/nav";
import { ThemeProvider } from "@/components/theme-provider";
import { baseUrl } from "@/config/links";
import type { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Rui Yang",
    template: "%s | Rui Yang",
  },
  description: "Rui Yang - Portfolio",
  openGraph: {
    title: "Rui Yang - Portfolio",
    description: "This is Rui Yang - Portfolio.",
    url: baseUrl,
    siteName: "Rui Yang - Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
            <Navbar />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
