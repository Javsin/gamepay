'use client'

import { useAppContext } from "@/context/setOrder";
import IconPromo from "@/public/assets/icon_promo.png"
import Image from "next/image";

export default function Promo() {
    const context = useAppContext();
    const valuePromo = context?.promo;
    const setValuePromo = context?.setPromo ?? (() => {});
    return (
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
                <div className="flex gap-x-4 w-full mb-4">
                    <div className="2xl:w-[88%] xl:w-[86%] w-3/4">
                        <label className="block text-sm text-white mb-2">Punya kode promo? masukan disini <span className="italic">(optional)</span></label>
                        <input type="text" placeholder="Contoh: Hemat1234" value={valuePromo} onChange={(e) => setValuePromo(e.target.value)} className="w-full placeholder-black bg-[#C2D2FF] border-0 text-dark-blue rounded-lg px-3 py-2 focus:outline-none"/>
                    </div>
                    <button className='2xl:w-[17%] xl:w-[15%] w-1/4 h-1/2 flex self-end py-2 md:px-3 bg-orange-500 text-white rounded-lg justify-center'>
                        Gunakan
                    </button>
                </div>
                <div className="bg-[#556EB1] w-3/4 md:w-1/4 p-2 rounded-lg border border-[#556EB1] mb-4 flex justify-center items-center">
                    <div className="flex justify-center items-center gap-x-2">
                        <Image src={IconPromo} alt="icon_promo" className="w-5" />
                        <p className="text-sm text-white">Promo yang tersedia</p>
                    </div>
                </div>
            </div>
        </div>
    )
}