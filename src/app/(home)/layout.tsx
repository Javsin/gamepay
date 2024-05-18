import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../globals.css";
import React from "react";
import MainLayout from "@/components/mainLayout";
import { AppWrapper } from "@/context/infoLayout";
import getInfo from "@/action/getInfo";
import getFooter from "@/actions/getFooter";

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
  preload: true,
})

export const metadata: Metadata = {
  title: "Muragames - Top Up Game Murah dan Cepat",
  description: "Dapatkan top up game murah dan cepat untuk berbagai game populer. Nikmati penawaran spesial di Muragames.",
  keywords : "top up game, top up game murah, voucher game, top up online",
  icons: {
    icon: `/icon_muragames.png`,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://muragames.id",
    siteName: "Muragames",
    images: [
      {
        url: "/logo_muragemes.png",
        width: 800,
        height: 288,
        alt: "Muragames - Top Up Game Murah dan Cepat",
      },
    ],
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
