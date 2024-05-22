'use client'

import { useAppContext } from "@/context/setOrder";
import IconPromo from "@/public/assets/icon_promo.png"
import Image from "next/image";
import Modal from '../../../../components/modal';
import { useState } from "react";

export default function Promo() {
    const context = useAppContext();
    const valuePromo = context?.promo;
    const setValuePromo = context?.setPromo ?? (() => {});
    const [isOpenModal, setIsOpenModal] = useState(false);

    const handleClickModal = () => {
        setIsOpenModal(true);
    }

    const toggleModal = () => {
        setIsOpenModal(!isOpenModal);
    }

    return (
        <>
            <div className="bg bg-dark-blue-2 rounded-xl">
                <div className="flex gap-2 text-white items-center border-b border-[#374585]">
                    <div className="bg-orange bg-orange-500 rounded-tl-xl py-2 px-4">
                        5
                    </div>
                    <div>
                        Kode Promo
                    </div>
                </div>
                <div className="py-3 px-4">
                    <div className="flex gap-x-2 md:gap-x-4 w-full mb-4">
                        <div className="2xl:w-[88%] xl:w-[86%] w-3/4">
                            <label className="block text-sm text-white mb-2">Punya kode promo? masukan disini <span className="italic">(optional)</span></label>
                            <input type="text" placeholder="Contoh: Hemat1234" value={valuePromo} onChange={(e) => setValuePromo(e.target.value)} className="w-full placeholder-black bg-[#C2D2FF] border-0 text-dark-blue rounded-lg px-3 py-2 focus:outline-none"/>
                        </div>
                        <div className='2xl:w-[17%] xl:w-[15%] w-1/4 flex self-end py-2 md:px-3 bg-orange-500 text-white rounded-lg justify-center cursor-pointer'>
                            Gunakan
                        </div>
                    </div>
                    <div className="bg-[#556EB1] text-white w-3/4 md:w-1/4 p-2 rounded-lg border border-[#556EB1] mb-4 flex justify-center items-center cursor-pointer hover:border-orange-600 hover:bg-white hover:text-black">
                        <div className="flex justify-center items-center gap-x-2" onClick={handleClickModal}>
                            <Image src={IconPromo} alt="icon_promo" className="w-5" />
                            <p className="text-sm">Promo yang tersedia</p>
                        </div>
                    </div>
                </div>
            </div>
            <Modal isOpen={isOpenModal} closeModal={toggleModal} title='' size='w-[28rem]' showClose={true} background='bg-[#313E75] border-2 border-[#4E66D9] rounded-2xl pt-3 px-4'>
                <>
                    <div className='overflow-y-auto py-1 remove-scroll'>
                        <h1 className='text-center text-xl mb-5 text-white font-semibold'>Promo yang tersedia</h1>
                        <div className="w-full bg-[#556EB1] rounded-xl p-4 text-start opacity-50 mb-3 cursor-pointer">
                            <p className="text-sm text-white">Diskon sebesar Rp. 5.000</p>
                            <ul className="list-disc pt-3 pb-4 pl-5 text-white text-xs">
                                <li>Promo berlaku hingga 31/05/2024</li>
                                <li>Minimum pembelian Rp. 25.000</li>
                                <li>Batas penggunaan 1 kali untuk setiap akun.</li>
                                <li>Promo ini sudah mencapai limit penggunaan untuk hari ini</li>
                            </ul>
                            <div className="flex flex-col md:flex-row items-start justify-between">
                                <p className="text-sm text-white">Kode Promo: MURAGAMES01</p>
                                <div className="py-1 px-3 bg-red-600 rounded-md mt-2 md:mt-0">
                                    <p className="text-xs font-normal text-white">Tidak Tersedia</p>
                                </div>
                            </div>
                        </div> 
                        <div className="w-full bg-[#556EB1] rounded-xl p-4 text-start opacity-50 mb-3 cursor-pointer">
                            <p className="text-sm text-white">Diskon sebesar Rp. 5.000</p>
                            <ul className="list-disc pt-3 pb-4 pl-5 text-white text-xs">
                                <li>Promo berlaku hingga 31/05/2024</li>
                                <li>Minimum pembelian Rp. 25.000</li>
                                <li>Batas penggunaan 1 kali untuk setiap akun.</li>
                                <li>Promo ini sudah mencapai limit penggunaan untuk hari ini</li>
                            </ul>
                            <div className="flex flex-col md:flex-row items-start justify-between">
                                <p className="text-sm text-white">Kode Promo: MURAGAMES01</p>
                                <div className="py-1 px-3 bg-red-600 rounded-md mt-2 md:mt-0">
                                    <p className="text-xs font-normal text-white">Tidak Tersedia</p>
                                </div>
                            </div>
                        </div> 
                        <div className="w-full bg-[#556EB1] rounded-xl p-4 text-start opacity-50 mb-3 cursor-pointer">
                            <p className="text-sm text-white">Diskon sebesar Rp. 5.000</p>
                            <ul className="list-disc pt-3 pb-4 pl-5 text-white text-xs">
                                <li>Promo berlaku hingga 31/05/2024</li>
                                <li>Minimum pembelian Rp. 25.000</li>
                                <li>Batas penggunaan 1 kali untuk setiap akun.</li>
                                <li>Promo ini sudah mencapai limit penggunaan untuk hari ini</li>
                            </ul>
                            <div className="flex flex-col md:flex-row items-start justify-between">
                                <p className="text-sm text-white">Kode Promo: MURAGAMES01</p>
                                <div className="py-1 px-3 bg-red-600 rounded-md mt-2 md:mt-0">
                                    <p className="text-xs font-normal text-white">Tidak Tersedia</p>
                                </div>
                            </div>
                        </div> 
                    </div>
                </>
            </Modal>
        </>
    )
}