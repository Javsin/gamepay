import { Inter } from "next/font/google";
import { Metadata } from "next";
import "../globals.css";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Masuk/Muragames - Top Up Game Murah dan Cepat",
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
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
