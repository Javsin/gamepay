'use client';

import { useAppContext } from "@/context/setOrder";

const promotionCard = ({promotion, setIsOpenModal} : any) => {
    const context = useAppContext();
    const setValuePromo = context?.setPromo ?? (() => {});
    const { title, description, promoCode, availability } = promotion;
    const handleClickSetPromo = (promoCode : any) => {
        if(availability) {
            setValuePromo(promoCode);
            setIsOpenModal(false);
        }
    }

    return (
        <div className={`w-full bg-[#556EB1] rounded-xl text-white p-4 text-start mb-3 cursor-pointer border border-[#556EB1] ${availability ? 'opacity-100 hover:bg-white hover:text-black hover:border hover:border-orange-500' : 'opacity-50'}`} onClick={() => handleClickSetPromo(promoCode)}>
            <p className="text-sm">{title}</p>
            <ul className="list-disc pt-3 pb-4 pl-5 text-xs">
                {description.map((item: any, index: any) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <div className="flex flex-col md:flex-row items-start justify-between">
                <p className="text-sm">Kode Promo: {promoCode}</p>
                <div className={`py-1 px-3 rounded-md mt-2 md:mt-0 ${availability ? 'bg-green-600' : 'bg-red-600'}`}>
                    <p className="text-xs font-normal text-white">{availability ? 'Tersedia' : 'Tidak Tersedia'}</p>
                </div>
            </div>
        </div>
    )
}

export default promotionCard;