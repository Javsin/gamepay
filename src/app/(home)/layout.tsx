import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import React, { Suspense } from "react";
const inter = Inter({ subsets: ["latin"] });
import MainLayout from "@/components/mainLayout";
import getInfo from "@/lib/getInfo";
import { AppWrapper } from "@/context/infoLayout";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  icons: {
    icon: `/next.svg`,
  },
};

export default function RootLayout({
  banner,
  product,
}: Readonly<{
  banner: React.ReactNode;
  product: React.ReactNode;
}>) {
  const infoLayout = React.use(getInfo());
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppWrapper>
          <MainLayout data = {infoLayout.data}>
            {/* <Suspense fallback={<p className="py-96">Loading...</p>}> */}
              {banner}
            {/* </Suspense> */}
            {/* <Suspense fallback={<p>Loading...</p>}> */}
              {product} 
            {/* </Suspense> */}
          </MainLayout>
        </AppWrapper>
      </body>
    </html>
  );
}
