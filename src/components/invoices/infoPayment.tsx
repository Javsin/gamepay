'use client'

import { Disclosure, Transition  } from '@headlessui/react'
import ChevronUpIcon  from '@/public/assets/icon_chevronup.png'
import Image from 'next/image'
import { motion } from "framer-motion";
import { useEffect, useState } from 'react';

const infoPayment = () => {
    const [timeLeft, setTimeLeft] = useState(28800);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (timeLeft > 0) {
                setTimeLeft(timeLeft - 1);
            }
        }, 1000);

        return () => clearTimeout(timer);
    }, [timeLeft]);

    const formatTime = (time: number): string => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;

        return `${hours.toString().padStart(2, '0')} Hours, ${minutes
        .toString()
        .padStart(2, '0')} minutes, ${seconds.toString().padStart(2, '0')} seconds left`;
    };

    return(
        <div className="mt-3 bg-dark-blue-2 rounded-xl py-4 px-3">
            <div className="bg-gray-300 text-center px-6 py-3 mb-5 rounded-lg">
                <p className='font-light'>Lakukan pembayaran sebelum</p>
                <p className="text-[#e53e60] font-semibold">{formatTime(timeLeft)}</p>
            </div>
            <div className="bg-[#556EB1] text-white px-6 py-3 mb-5 rounded-lg">
                <p>Metode Pembayaran</p>
                <p className="">QRIS (All Payment)</p>
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
                            <h1 className='mb-3'>Cara melakukan pembayaran dengan upload Gambar QRIS disemua aolikasi W-Wallet atau E-Banking</h1>
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
            <div className='flex justify-center pt-28 py-5'>
                <button className='py-1 px-5 bg-orange-600 text-white text-sm text-center rounded-xl'>
                    Unduh kode QR
                </button>
            </div>
        </div>
    )
}

export default infoPayment