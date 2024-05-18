import "../../globals.css";
import React from "react";
import { Metadata } from "next";
import MainLayout from "@/components/mainLayout";
import getInfo from "@/action/getInfo";
import getFooter from "@/actions/getFooter";
import { AppWrapper } from "@/context/infoLayout";
import { SetProductWrapper } from "@/context/setOrder";
import TransactionLayout from "@/components/transactionLayout";
import { Roboto } from "next/font/google";

export const metadata: Metadata = {
  title: "Muragames / Transaksi - Top Up Game Murah dan Cepat",
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

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
  preload: true,
})

export default function RootLayout({
  children,
  description,
  form,
  product,
  quantity,
  paymentmethod,
  promo,
  contact,
  buttonSubmit,
  testimoni
}: Readonly<{
  children: React.ReactNode;
  description: React.ReactNode;
  form: React.ReactNode;
  product: React.ReactNode;
  quantity: React.ReactNode;
  paymentmethod: React.ReactNode;
  promo: React.ReactNode;
  contact: React.ReactNode;
  buttonSubmit: React.ReactNode;
  testimoni: React.ReactNode;
}>) {
  const infoLayout = React.use(getInfo());
  const dataFooter = React.use(getFooter());

  return (
    <html lang="en">
      <body className={roboto.className}>
        <AppWrapper>
          <MainLayout data = {infoLayout.data} dataFooter = {dataFooter.data}>
              {children}
              <SetProductWrapper>
                <TransactionLayout description = {description} form ={form} product = {product} quantity = {quantity} paymentMethod = {paymentmethod} promo={promo} contact={contact} buttonSubmit={buttonSubmit} testimoni={testimoni}/>
              </SetProductWrapper>
          </MainLayout>
        </AppWrapper>
      </body>
    </html>
  )
}
