import { Averia_Serif_Libre, Inter } from "next/font/google";
import { GeistMono } from "geist/font";

import "./globals.css";

import { Flex } from "@radix-ui/themes";

import { PagesFooter } from "@/components/footer/pages-footer";
import { NavigationBar } from "@/components/navigation/navigation-bar";
import { InterfaceProvider } from "@/components/providers/interface-provider";

const averia = Averia_Serif_Libre({
  weight: "700",
  variable: "--font-averia",
  subsets: ["latin"],
  display: "swap",
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s – INTEGIRLS",
    default: "INTEGIRLS",
  },
  description: {
    default:
      "Integirls is a global nonprofit community of girls dedicated to empowering minoritized gender groups in STEM.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${GeistMono.variable} ${averia.variable}`}
    >
      <body>
        <InterfaceProvider>
          <Flex
            direction="column"
            className="relative"
            style={{
              minHeight: "100dvh",
            }}
          >
            <NavigationBar />

            <main className="relative shrink grow basis-0 pt-24">
              {children}
            </main>

            <PagesFooter />
          </Flex>
        </InterfaceProvider>
      </body>
    </html>
  );
}
