import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../globals.css";
import React from "react";
const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
  preload: true,
})
import MainLayout from "@/components/mainLayout";
import getInfo from "@/action/getInfo";
import { AppWrapper } from "@/context/infoLayout";
import getFooter from "@/actions/getFooter";
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
  popular,
}: Readonly<{
  banner: React.ReactNode;
  product: React.ReactNode;
  popular: React.ReactNode;
}>) {
  const infoLayout = React.use(getInfo());
  const dataFooter = React.use(getFooter());
  return (
    <html lang="en">
      <body className={roboto.className}>
        <AppWrapper>
          <MainLayout data = {infoLayout.data} dataFooter = {dataFooter.data}>
              {banner}
              {popular}
              {product} 
          </MainLayout>
        </AppWrapper>
      </body>
    </html>
  );
}
