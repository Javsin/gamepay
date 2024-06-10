'use client'

import { Disclosure, Transition  } from '@headlessui/react'
import ChevronUpIcon  from '@/public/assets/icon_chevronup.png'
import CopyIcon  from '@/public/assets/icon-copy.png'
import CopyIconBlack  from '@/public/assets/icon_copy-black.png'
import Image from 'next/image'
import { motion } from "framer-motion";
import { formatRupiah } from '@/helpers/formatRupiah';
import { InvoiceData } from '@/types/invoiceType';
import { ToastContainer, toast } from 'react-toastify';

interface detailProps {
    data: InvoiceData
}

const detailTransaction = ({data} : detailProps) => {
    const {invoice, product_name, qty, transaction_payment, transaction_status, message} = data
    const {tagihan, total_tagihan} = data?.payment_detail;

    const statusColors: any  = {
        paid: 'bg-green-500',
        unpaid: 'bg-[#e53e60]',
        pending: 'bg-yellow-400',
    };

    const statusPaymentColors : any = {
        success : 'bg-green-500',
        failed : 'bg-[#e53e60]',
        pending : 'bg-yellow-400',
    }

    const handleCopyInvoice = (text : string) => {
        navigator.clipboard.writeText(text)
        toast.success("Berhasil disalin")
    }

    const handleCopyTagihan = (tagihan : any) => {
        navigator.clipboard.writeText(tagihan)
        toast.success("Berhasil disalin")
    }

    const paymentColors = statusColors [transaction_payment];
    const transactionColors = statusPaymentColors [transaction_status];
    return(
        <>
            <div className="bg-dark-blue-2 rounded-xl text-white p-4">
                <p className="font-bold mb-1">Detail Pembelian</p>
                <p className="mb-3">Pembelian produk {product_name}</p>

                <div className="grid gap-y-2 md:grid-cols-12 md:gap-y-0 border-t border-[#556EB1] py-5">
                    <div className="col-span-4">Nomor Invoice</div>
                    <div className='flex gap-x-2 items-center'>
                        <div className="col-span-8">{invoice}</div>
                        <Image
                                src={CopyIcon}
                                alt="copy"
                                width={17}
                                height={17}
                                className='cursor-pointer'
                                title='Salin'
                                onClick={()=>handleCopyInvoice(invoice)}
                            />
                    </div>
                </div>
                <div className="grid gap-y-2 md:grid-cols-12 md:gap-y-0 border-t border-[#556EB1] py-5">
                    <div className="col-span-4">Status Transaksi</div>
                    <div className="col-span-8">
                        <span className={`py-1 px-3 cursor-pointer rounded-md text-xs text-white font-medium ${transactionColors}`}>{transaction_status.toLocaleUpperCase()}</span>
                    </div>
                </div>
                <div className="grid gap-y-2 md:grid-cols-12 md:gap-y-0 border-t border-[#556EB1] py-5">
                    <div className="col-span-4">Status Pembayaran</div>
                    <div className="col-span-8">
                        <span className={`py-1 px-3 cursor-pointer rounded-md text-white text-xs font-medium ${paymentColors}`}>{transaction_payment.toLocaleUpperCase()}</span>
                    </div>
                </div>
                <div className="grid gap-y-2 md:grid-cols-12 md:gap-y-0 border-y border-[#556EB1] py-5">
                    <div className="col-span-4">Pesan</div>
                    <div className="col-span-8">{message}</div>
                </div>
                <div className="grid grid-cols-12 mt-5 pb-5">
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
                                        <p>{formatRupiah(tagihan)}</p>
                                    </div> 
                                    <div className='flex justify-between px-4 py-2'>
                                        <p>Jumlah</p>
                                        <p>{qty} Qty</p>
                                    </div> 
                                    <div className='border-t border-white m-4'></div>
                                    <div className='flex justify-between px-4 py-2'>
                                        <p>Subtotal</p>
                                        <p>{formatRupiah(tagihan)}</p>
                                    </div> 
                                    <div className='flex justify-between px-4 py-2'>
                                        <p>Biaya</p>
                                        <p>{formatRupiah(total_tagihan - tagihan)}</p>
                                    </div> 
                                </Disclosure.Panel>
                                    <div className='flex -mt-4 px-4 py-3 justify-between bg-gray-300 rounded-lg font-semibold text-sm text-black'>
                                        <p>Total Pembayaran</p>
                                        <div className='flex items-center gap-x-2'>
                                            <p>{formatRupiah(total_tagihan)}</p>
                                            <Image
                                                src={CopyIconBlack}
                                                alt="copy"
                                                width={17}
                                                height={17}
                                                className='cursor-pointer'
                                                title='Salin'
                                                onClick={()=>handleCopyTagihan(total_tagihan)}
                                            />
                                        </div>
                                    </div> 
                                </>
                            )}
                        </Disclosure>
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

export default detailTransaction;