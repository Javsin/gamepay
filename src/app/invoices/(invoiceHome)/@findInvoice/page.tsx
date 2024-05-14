'use client'

import Image from "next/image";
import React, { useState } from "react";
import ImageSearch from '@/public/assets/icon_search.png';
import getDataInvoice from "@/actions/transaction/getDataInvoice";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';

const FindInvoice = () => {
    const router = useRouter();
    const [invoiceId, setInvoiceId] = useState("");
    const [loading, setLoading] = useState<boolean>(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInvoiceId(e.target.value);
    }

    const handleSearchButton = async () => {
        if(invoiceId === "") {
            toast.error("Isi Invoice Id terlebih dahulu.")
        }else{
            setLoading(true);
            const responseOrder = await getDataInvoice({invoiceId});
            if(responseOrder.status === 200){
                setLoading(false);
                const invoiceId = responseOrder.data.invoice;
                router.push(`/invoices/${invoiceId}`)
            }else{
                setLoading(false);
                toast.error("Terjadi kesalahan, silahkan coba lagi.")
            }
        }
    }

    return(
        <>
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
                            <input type="text" className="w-full md:w-1/2 placeholder-black bg-white border-0 text-dark-blue rounded-lg px-3 py-1 focus:outline-none" placeholder="INVxxxxxxxxxx" onChange={handleInputChange} />
                        </div>
                        <div className="py-2 px-3 md:px-0 mt-1">
                            <button type="submit" className='flex items-center w-1/2 md:w-1/6 py-2 px-4 bg-orange-500 text-sm text-white rounded-lg gap-x-2' onClick={handleSearchButton}>
                                <Image src={ImageSearch} alt='search' className='w-4 h-4' />
                                Cari
                                {
                                    loading && (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="1.2em"
                                            height="1.2em"
                                            viewBox="0 0 24 24"
                                            >
                                            <path
                                                fill="#fefefe"
                                                d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
                                                opacity="0.25"
                                            />
                                            <path
                                                fill="#fefefe"
                                                d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
                                            >
                                                <animateTransform
                                                attributeName="transform"
                                                dur="0.75s"
                                                repeatCount="indefinite"
                                                type="rotate"
                                                values="0 12 12;360 12 12"
                                                />
                                            </path>
                                        </svg>
                                    )
                                }
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        
            <ToastContainer
                position="top-right"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </>
    )
}

export default FindInvoice;