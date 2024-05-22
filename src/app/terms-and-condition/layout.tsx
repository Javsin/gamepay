import getFooter from "@/actions/getFooter";
import getInfo from "@/actions/getInfo";
import MainLayout from "@/components/mainLayout";
import { AppWrapper } from "@/context/infoLayout";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import React from "react";
import "../globals.css";

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
  preload: true,
})

export const metadata: Metadata = {
  title: "Invoices / Muragames - Top Up Game Murah dan Cepat",
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
  children,
}: {
  children: React.ReactNode
}) {
  const infoLayout = React.use(getInfo());
  const dataFooter = React.use(getFooter());

  return (
    <html lang="en">
      <body className={roboto.className}>
        <AppWrapper>
          <MainLayout data = {infoLayout.data} dataFooter = {dataFooter.data}>
            {children}
          </MainLayout>
        </AppWrapper>
      </body>
    </html>
  )
}
