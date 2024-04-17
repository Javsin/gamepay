'use client';
import { useAppContext } from "@/context/setOrder";
export default function Quantity() {
    const context = useAppContext();
    const qty = context?.quantity;
    const setQty = context?.setQuantity ?? (() => {});
    return (
        <div className="bg bg-dark-blue-2 rounded-xl">
            <div className="flex gap-2 text-white items-center border-b border-[#374585]">
                <div className="bg-orange bg-orange-500 rounded-tl-xl py-2 px-4">
                    3
                </div>
                <div>
                    Jumlah Top Up
                </div>
            </div>
            <div className="py-3 px-4">
                <div className="flex gap-x-4 w-full">
                    <div className="2xl:w-[88%] xl:w-[86%] w-3/4">
                        <input type="number" min={1} value={qty} readOnly className="w-full bg-[#C2D2FF] border-0 text-dark-blue rounded-lg px-3 py-2 focus:outline-none" onChange={(e) => setQty(parseInt(e.target.value))} />
                    </div>
                    <div className="2xl:w-[12%] xl:w-[14%] flex gap-x-4">
                        <div className="w-full">
                            <div className="bg-orange-500 text-white h-full flex items-center justify-center rounded-lg cursor-pointer px-1 md:px-0" onClick={() => setQty(old => old + 1)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="bg-orange-500 text-white h-full flex items-center justify-center rounded-lg cursor-pointer px-1 md:px-0" onClick={() => setQty(old => old > 1 ? old - 1 : 1)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}