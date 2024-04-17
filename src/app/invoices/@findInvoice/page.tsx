import Image from "next/image";
import ImageHeader from '@/public/assets/background_header_rev.png';
import React from "react";

const findInvoice = () => {
    return(
    <div className='relative w-full mt-14 xl:mt-0 pb-64'>
            <Image src={ImageHeader} alt='header' sizes="100vw" quality={80} fill className='object-cover' priority />
            <div className={`2xl:container 2xl:max-w-[80rem] xl:mx-auto mx-2 xl:pt-6 py-2.5 xl:pb-12 xl:max-w-[70rem]`}>
                <div className="absolute">
                    <div className="w-1/2">
                        <h1 className="text-white text-3xl font-semibold">Lacak Pesananmu dengan Nomor invoice!</h1>
                    </div>
                    <div className="py-4 w-2/3">
                        <p className="text-white text-sm font-base">Pesananmu tidak terdaftar meskipun kamu yakin telah memesan? Harap tunggu 1-5 menit. Tetapi jika pesanamu masih belum muncul, kamu bisa hubungi kami.</p>
                    </div>
                    <div className="py-2 flex flex-col">
                        <label htmlFor="" className="block text-sm text-white mb-2">Nomor invoice kamu</label>
                        <input type="text" className="w-1/2 placeholder-black bg-white border-0 text-dark-blue rounded-lg px-3 py-1 focus:outline-none" placeholder="MPxxxxxxxxxxx" />
                    </div>
                    <div className="py-2">
                        <button type="submit" className='w-1/6 flex py-1 px-4 bg-orange-500 text-sm text-white rounded-lg'>
                            Cari
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default findInvoice;