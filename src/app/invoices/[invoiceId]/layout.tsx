import getFooter from "@/actions/getFooter";
import getInfo from "@/actions/getInfo";
import MainLayout from "@/components/mainLayout";
import { AppWrapper } from "@/context/infoLayout";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import React from "react";
import "../../globals.css";

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
  preload: true,
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  icons: {
    icon: `/next.svg`,
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
