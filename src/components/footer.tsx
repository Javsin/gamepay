import React from "react";
import { DataLayout } from "@/types/infoLayoutType";
import { Datafooter } from "@/types/datafooterType";
import Image from "next/image";
import FooterImage from "@/public/assets/background_footer.png";
import Logo from "@/public/assets/mura_gemes_200px.png";
import Link from "next/link";
type Props = {
    data: DataLayout;
    dataFooter: Datafooter;
}
const Footer = ({ data, dataFooter }: Props) => {
    return (
        <>
            <div>
                <Image src={FooterImage} alt='footer' sizes="100vw" quality={80} className='object-cover w-full h-42' priority />
                <footer className="bg-dark-blue text-white md:text-base text-sm">
                    <div className="2xl:container 2xl:max-w-[80rem] xl:mx-auto mx-2 pt-6 pb-12 xl:max-w-[70rem]">
                        <div className="flex justify-center">
                            <Image src={Logo} alt='logo' sizes="100vw" width={0} height={0} className='h-auto w-28' />
                        </div>
                        <p className="text-center py-2 mx-2 md:mx-0">
                            {dataFooter.description}
                        </p>
                        <div className="mx-2 md:mx-28 md:flex md:justify-around grid grid-cols-2 md:gap-y-0 gap-y-3 mt-10 md:mt-0">
                            <div>
                                <div className="py-1 md:border-b-2 md:border-orange-500">
                                    <span className="font-semibold">Sosmed</span>
                                </div>
                                <div className="py-1">
                                    {
                                        dataFooter.sosmed.map((item, index) => {
                                            return (
                                                <a target="_blank" className="py-1 flex items-center" href={item.url_sosmed} key={index}><span className="me-1">
                                                    <Image src={item.logo} alt={item.nama_akun} width={0} height={0} sizes="100vw" className="object-cover w-4 h-4" />
                                                </span>{item.nama_akun}</a>
                                            )
                                        })
                                    } 
                                </div>
                            </div>
                            <div>
                                <div className="py-1 md:border-b-2 md:border-orange-500">
                                    <span className="font-semibold">Peta Situs</span>
                                </div>
                                <div className="py-1">
                                    <Link href="/">
                                        Home
                                    </Link>
                                </div>
                                <div className="py-1">
                                    <Link href="/invoices">
                                        Produk
                                    </Link>
                                </div>
                                <div className="py-1">
                                    <a href="https://api.whatsapp.com/send/?phone=6281329701020&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                                        Hubungi Kami
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className="py-1 md:border-b-2 md:border-orange-500">
                                    <span className="font-semibold">Dukungan</span>
                                </div>
                                <div className="py-1">
                                    {
                                        dataFooter.dukungan.map((item, index) => {
                                            return (
                                                <a target="_blank" className="py-1 flex items-center" href={item.value} key={index}>{item.nama}</a>
                                            )
                                        })
                                    } 
                                </div>
                            </div>
                            <div>
                                <div className="py-1 md:border-b-2 md:border-orange-500">
                                    <span className="font-semibold">Legalitas</span>
                                </div>
                                <div className="py-1">
                                    Kebijakan Privasi
                                </div>
                                <div className="py-1">
                                    Syarat dan Ketentuan
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
            <div className="fixed bottom-4 right-4 md:bottom-5 md:right-5 z-50">
                <a href="https://api.whatsapp.com/send/?phone=6281329701020&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-green-500 text-white rounded-full w-12 h-12 md:w-14 md:h-14 shadow-lg">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={28}
                    height={28}
                    fill="currentColor"
                    className="bi bi-whatsapp text-white"
                    viewBox="0 0 16 16"
                    >
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                    </svg>
                </a>
            </div>
        </>
    );
}

export default Footer;