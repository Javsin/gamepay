'use client'

import { Disclosure, Transition  } from '@headlessui/react'
import ChevronUpIcon  from '@/public/assets/icon_chevronup.png'
import Image from 'next/image'
import { motion } from "framer-motion";

const detailTransaction = ({data} : any) => {
    return(
        <div className="bg-dark-blue-2 rounded-xl text-white p-4">
            <p className="font-bold mb-1">Detail Pembelian</p>
            <p className="mb-3">Pembelian produk Mobile Legend Weekly Diamond Pass</p>

            <div className="grid grid-rows-2 gap-y-2 md:grid-cols-12 md:gap-y-0 border-t border-[#556EB1] py-4">
                <div className="col-span-4">Nomor Invoice</div>
                <div className="col-span-8">{data.invoice}</div>
            </div>
            <div className="grid grid-rows-2 gap-y-2 md:grid-cols-12 md:gap-y-0 border-t border-[#556EB1] py-4">
                <div className="col-span-4">Status Transaksi</div>
                <div className="col-span-8">
                    <button className="py-1 px-3 bg-yellow-400 rounded-md text-xs text-black font-medium">{data.transaction_status}</button>
                </div>
            </div>
            <div className="grid grid-rows-2 gap-y-2 md:grid-cols-12 md:gap-y-0 border-t border-[#556EB1] py-4">
                <div className="col-span-4">Status Pembayaran</div>
                <div className="col-span-8">
                    <button className="py-1 px-3 bg-[#e53e60] rounded-md text-xs font-medium">{data.transaction_payment}</button>
                </div>
            </div>
            <div className="grid grid-rows-2 gap-y-2 md:grid-cols-12 md:gap-y-0 border-y border-[#556EB1] py-4">
                <div className="col-span-4">Pesan</div>
                <div className="col-span-8">{data.message}</div>
            </div>
            <div className="grid grid-cols-12 mt-4 pb-5">
                <div className='col-span-12 md:col-start-5 md:col-span-8'>
                    <Disclosure>
                        {({ open }) => (
                            <>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-[#556EB1] px-4 pt-4 pb-6 text-left text-sm font-medium text-white hover:bg-[#556EB1] focus:outline-none">
                                <span>Rincian Pembayaran</span>
                                <motion.div
                                        className={`h-5 w-5 text-white ${open ? 'rotate-180' : ''}`}
                                        animate={{ rotate: open ? 0 : -180 }}
                                        transition={{ duration: 0.3 }}
                                >
                                    <Image
                                        src={ChevronUpIcon}
                                        alt="chevronup"
                                        width={20}
                                        height={20}
                                    />
                                </motion.div>
                            </Disclosure.Button>
                            <Disclosure.Panel className="-mt-4 pb-6 rounded-xl bg-[#556EB1] overflow-hidden font-medium text-sm">
                                <div className='flex justify-between px-4 pt-4 pb-2'>
                                    <p>Harga</p>
                                    <p>Rp27.167</p>
                                </div> 
                                <div className='flex justify-between px-4 py-2'>
                                    <p>Jumlah</p>
                                    <p>1 Qty</p>
                                </div> 
                                <div className='border-t border-white m-4'></div>
                                <div className='flex justify-between px-4 py-2'>
                                    <p>Subtotal</p>
                                    <p>Rp27.167</p>
                                </div> 
                                <div className='flex justify-between px-4 py-2'>
                                    <p>Biaya</p>
                                    <p>Rp27.167</p>
                                </div> 
                            </Disclosure.Panel>
                                <div className='flex -mt-4 px-4 py-3 justify-between bg-gray-300 rounded-lg font-semibold text-sm text-black'>
                                    <p>Total Pembayaran</p>
                                    <p>Rp27.167</p>
                                </div> 
                            </>
                        )}
                    </Disclosure>
                </div>
            </div>
        </div>
    )
}

export default detailTransaction;