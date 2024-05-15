'use client'

import { useAppContext } from "@/context/setOrder";

export default function Contact() {
    const context = useAppContext();
    const valueContact = context?.contact;
    const setValueContact = context?.setContact ?? (() => {});
    return (
        <div className="bg bg-dark-blue-2 rounded-xl">
            <div className="flex gap-2 text-white items-center border-b border-[#374585]">
                <div className="bg-orange bg-orange-500 rounded-tl-xl py-2 px-4">
                    6
                </div>
                <div>
                    Kontak Anda
                </div>
            </div>
            <div className="py-3 px-4">
                <div className="w-full mb-4">
                    <label className="block text-sm text-white mb-2">No. Whatsapp</label>
                    <input type="text" placeholder="Masukkan Nomor Whatsapp anda" className="w-full placeholder-black bg-[#C2D2FF] border-0 text-dark-blue rounded-lg px-3 py-2 focus:outline-none" value={valueContact} onChange={(e) => setValueContact(e.target.value)}/>
                </div>
            </div>
        </div>
    )
}