import React from "react";
import { DataLayout } from "@/types/infoLayoutType";
import { Datafooter } from "@/types/datafooterType";
import Image from "next/image";
import FooterImage from "@/public/assets/background_footer.png";
import Logo from "@/public/assets/mura_gemes_200px.png";
type Props = {
    data: DataLayout;
    dataFooter: Datafooter;
}
const Footer = ({ data, dataFooter }: Props) => {
    return (
        <div>
            <Image src={FooterImage} alt='footer' sizes="100vw" quality={80} className='object-cover w-full h-42' priority />
            <footer className="bg-dark-blue text-white md:text-base text-sm">
                <div className="2xl:container 2xl:max-w-[80rem] xl:mx-auto mx-2 pt-6 pb-12 xl:max-w-[70rem]">
                    <div className="flex justify-center">
                        <Image src={Logo} alt='logo' sizes="100vw" width={0} height={0} className='h-auto w-28' />
                    </div>
                    <p className="text-center py-2">
                        {dataFooter.description}
                    </p>
                    <div className="md:mx-28 md:flex md:justify-around grid grid-cols-2 md:gap-y-0 gap-y-3">
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
                                Home
                            </div>
                            <div className="py-1">
                                Cek Transaksi
                            </div>
                            <div className="py-1">
                                Hubungi Kami
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
    );
}

export default Footer;