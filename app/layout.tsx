import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "../styles/globals.css"
import SmoothScroll from "@/animations/SmoothScroll";
import QueryProvider from "@/providers/QueryProvider";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Maharani Prima",
  description: "Maharani Prima Official Website",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html className={cn("h-full", "antialiased", jakarta.variable, "font-sans", inter.variable)}>
      <body className="min-h-full flex flex-col">
        <QueryProvider>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </QueryProvider>
      </body>
    </html>
  );
};

export default RootLayout;
