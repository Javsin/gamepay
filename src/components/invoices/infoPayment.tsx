'use client'

import { Disclosure, Transition  } from '@headlessui/react'
import ChevronUpIcon  from '@/public/assets/icon_chevronup.png'
import Image from 'next/image'
import { motion } from "framer-motion";
import { useRef } from 'react';
import { QRCodeSVG } from 'qrcode.react'
import html2canvas from 'html2canvas'
import CountdownTimer from './countdownTimer';
import { InvoiceData } from '@/types/invoiceType';

interface infoPaymentProps {
    data: InvoiceData,
    time: number 
}

const InfoPayment = ({data, time} : infoPaymentProps) => {
    const qrData = data?.payment_detail?.qris_data;
    const expired = data?.payment_detail?.exp;
    const { payment_methode } = data;
    const qrCodeRef = useRef(null);

    const saveAsImage = () => {
        if (qrCodeRef.current) {
            html2canvas(qrCodeRef.current,{ scale: 2, allowTaint: true, useCORS: true, height: 580})
            .then((canvas) => {
                const downloadLink = document.createElement('a');
                downloadLink.href = canvas.toDataURL('image/png');
                downloadLink.download = 'qrcode.png';
                downloadLink.click();
            });
        }
    };

    return(
        <div className="mt-3 bg-dark-blue-2 rounded-xl py-4 px-3">
            <div className="bg-gray-300 text-center px-6 py-3 mb-5 rounded-lg">
                <p className='font-light'>Lakukan pembayaran sebelum</p>
                <CountdownTimer expired={expired} time={time} />
            </div>
            <div className="bg-[#556EB1] text-white px-6 py-3 mb-5 rounded-lg">
                <p>Metode Pembayaran</p>
                <p className="">{payment_methode}</p>
            </div>
            <Disclosure>
                {({ open }) => (
                    <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-[#556EB1] px-4 py-3 text-left text-sm font-medium text-white hover:bg-[#556EB1] focus:outline-none">
                        <span>Cara Melakukan Pembayaran</span>
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
                    <Disclosure.Panel className="-mt-2 rounded-lg bg-gray-300">
                        <div className='p-3 text-xs font-medium'>
                            <h1 className='mb-3'>Cara melakukan pembayaran dengan upload Gambar QRIS disemua aplikasi W-Wallet atau E-Banking</h1>
                            <p>1. Unduh kode QR atau screenshoot kode QR pada Invoice.</p>
                            <p>2. Masuk ke aplikasi E-Wallet atau E-Banking yang anda Gunakan, kemudian klik tombol scanner atau bayar.</p>
                            <p>3. Setelah itu, klik ikon upload QR dari galeri atau yang ada logo Gambar.</p>
                            <p>4. Pilih Gambar QRIS yang kamu download atau Screenshoot di muragames yang telah disimpan di galeri.</p>
                            <p>5. Klik OK untuk melanjutkan ke proses berikutnya</p>
                            <p>6. Klik bayar sekarang untuk menyelesaikan proses transaksi</p>
                        </div>
                    </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
            <div className='flex flex-col w-full justify-center items-center mx-auto py-12'>
                <div ref={qrCodeRef} className='w-3/4  flex items-center justify-center p-6 bg-white rounded-xl shadow shadow-gray-400'>
                    <QRCodeSVG value={qrData} size={205} height={205} width={205} />
                </div>
                <button className='w-3/4 mt-6 py-2 px-5 bg-orange-600 text-white text-sm text-center rounded-md' onClick={saveAsImage}>
                    Unduh kode QR
                </button>
            </div>
        </div>
    )
}

export default InfoPayment