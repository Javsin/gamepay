'use client'
import { useAppContext } from "@/context/setOrder";
import { Payment } from "@/types/paymentMethod";
import { formatRupiah } from '@/helpers/formatRupiah'

interface CardSingleProps {
    method: string;
    payments: Payment[];
    handleItemClick : (itemMerchantName: string) => void
    valuePrice: any;
}

const CardPaymentSingle: React.FC<CardSingleProps> = ({method, payments, handleItemClick, valuePrice}) => {
    const context = useAppContext();
    const valuePayment = context?.payment
    const valueProduct = context?.product
    const valueId = context?.id;
    const valueServer = context?.server;
    

    return (
        <>
            {
                payments.map((item: Payment, index: number) => (
                    <div key={index}
                        className = {`${!valueProduct || !valueId || !valueServer 
                            ? 'bg-gray-400 hover:border hover:border-orange-600' 
                            : valuePayment === item.merchant_name 
                            ? 'bg-white border border-orange-600' 
                            : 'bg-gray-300 border border-[#556EB1] hover:bg-white hover:border-orange-600 hover:shadow-lg'
                            } 
                            px-3 py-4 mb-4 rounded-lg col-span-1 text-dark-blue`} 
                            onClick={() => handleItemClick(item.merchant_name)} >
                    <div className="p-2 flex justify-between">
                        <div>
                            <h1>{method}</h1>
                        </div>
                        <div>
                            <p>
                                {
                                    valuePrice > 0 ? `${formatRupiah(valuePrice + item.admin_fee)}` : 'Min. Rp 100'
                                }
                            </p>
                        </div>
                    </div>
                </div>
                ))
            }
        </>
    )
}

export default CardPaymentSingle