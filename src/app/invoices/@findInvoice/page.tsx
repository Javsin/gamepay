import Image from "next/image";
import React from "react";
import ImageSearch from '@/public/assets/icon_search.png';

const findInvoice = () => {
    return(
        <div className='bg-background-hero bg-cover relative w-full mt-14 xl:mt-0 h-96 md:h-[330px]'>
            <div className={`2xl:container 2xl:max-w-[80rem] xl:mx-auto mx-2 xl:pt-6 py-2.5 xl:pb-12 xl:max-w-[70rem]`}>
                <div className="absolute left-0 md:left-[114px]">
                    <div className="w-full mt-6 mb-2 md:mb-0 px-3 md:w-1/2 md:mt-2 sm:px-0">
                        <h1 className="text-white text-3xl font-semibold">Lacak Pesananmu dengan Nomor invoice!</h1>
                    </div>
                    <div className="w-full px-3 py-4 sm:px-0 md:w-2/3">
                        <p className="text-white text-sm font-base">Pesananmu tidak terdaftar meskipun kamu yakin telah memesan? Harap tunggu 1-5 menit. Tetapi jika pesanamu masih belum muncul, kamu bisa hubungi kami.</p>
                    </div>
                    <div className="py-2 px-3 md:px-0 flex flex-col">
                        <label htmlFor="" className="block text-xs md:text-sm text-white mb-2">Nomor invoice kamu</label>
                        <input type="text" className="w-full md:w-1/2 placeholder-black bg-white border-0 text-dark-blue rounded-lg px-3 py-1 focus:outline-none" placeholder="MPxxxxxxxxxxx" />
                    </div>
                    <div className="py-2 px-3 md:px-0 mt-1">
                        <button type="submit" className='flex items-center w-1/2 md:w-1/6 py-2 px-4 bg-orange-500 text-sm text-white rounded-lg gap-x-2'>
                            <Image src={ImageSearch} alt='search' className='w-4 h-4' />
                            Cari
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default findInvoice;