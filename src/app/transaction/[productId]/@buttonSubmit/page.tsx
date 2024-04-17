'use client'

import { useAppContext } from "@/context/setOrder";

export default function Contact() {
    const context = useAppContext();
    return (
        <button type="submit" className='w-full flex py-2 bg-orange-500 text-white rounded-lg justify-center'>
            Top Up Sekarang
        </button>
    )
}