'use client'
import { useAppContext } from "@/context/setOrder";
import { Payment } from "@/types/paymentMethod";
import { formatRupiah } from '@/helpers/formatRupiah'
import Image from "next/image";

interface CardSingleProps {
    method: string;
    payments: Payment[];
    handleItemClick : (itemMerchantName: number) => void
}

const CardPaymentSingle: React.FC<CardSingleProps> = ({method, payments, handleItemClick}) => {
    const context = useAppContext();
    const valuePrice = context?.price as number;
    const valuePayment = context?.payment
    const valueProduct = context?.product
    const valueQuantity = context?.quantity as number;
    return (
        <>
            {
                payments.map((item: Payment, index: number) => (
                    <div key={index}
                            className = {`${!valueProduct 
                                ? 'bg-gray-400 border border-gray-400' 
                                : valuePayment === item.pivot.id_payment 
                                ? 'bg-white border border-orange-600' 
                                : 'bg-gray-300 border border-[#556EB1] hover:bg-white hover:border-orange-600 hover:shadow-lg'
                                } 
                                px-3 py-4 mb-4 rounded-lg col-span-1 text-dark-blue cursor-pointer`} 
                                onClick={() => handleItemClick(item.pivot.id_payment)} >
                        <div className="p-2 flex justify-between">
                            <div>
                                <Image src={item.merchant_logo} alt={item.merchant_name} width={100} height={50} className={`${(!valueProduct) && 'opacity-50'}`}/>
                            </div>
                            <div>
                                <p>
                                    {
                                        valuePrice > 0 ? `${formatRupiah((valuePrice * valueQuantity) + item.admin_fee)}` : 'Min. Rp 100'
                                    }
                                </p>
                            </div>
                        </div>
                        <hr />
                        <p className="p-2 text-md">{item.merchant_name}</p>
                    </div>
                ))
            }
        </>
    )
}

export default CardPaymentSingle