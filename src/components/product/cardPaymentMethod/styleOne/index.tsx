'use client'

import CardPaymentGroup from "@/components/product/cardPaymentMethod/styleOne/cardPaymentGroup"
import CardPaymentSingle from "./cardPaymentSingle"
import { useAppContext } from "@/context/setOrder";
import { Payment, PaymentData } from "@/types/paymentMethod";
import { ToastContainer, toast } from 'react-toastify';

interface CardPaymentMethodProps {
    paymentMethod: PaymentData;
}

const CardPaymentMethod: React.FC<CardPaymentMethodProps> = ({paymentMethod}) => {
    console.log(paymentMethod);
    const context = useAppContext();
    const valueProduct = context?.product;
    const setValuePayment = context?.setPayment ?? (() => {});
    const elementPaymentRef = context?.elementPaymentRef;
    const elementAccountRef = context?.elementAccountRef;


    const handleItemClick = (itemMerchantName: number) => {
        scrollDisplayError()
        setValuePayment(itemMerchantName);
    };

    const scrollDisplayError = () => {
    if (!valueProduct){
            if (elementAccountRef?.current) {
                elementAccountRef?.current.scrollIntoView({ behavior: 'smooth', block: 'start' } as ScrollIntoViewOptions);
                toast.error("Harap pilih nominal terlebih dahulu.")
            }
        };
    }

    return (
        <>
            <div className="bg bg-dark-blue-2 rounded-xl scrollInToPayemnt" ref={elementPaymentRef}>
                <div className="flex gap-2 text-white items-center border-b border-[#374585]">
                    <div className="bg-orange bg-orange-500 rounded-tl-xl py-2 px-4">
                        4
                    </div>
                    <div>
                        Metode Pembayaran
                    </div>
                </div>
                <div className="py-3 px-4">
                    {Object.entries(paymentMethod).map(([method, payments], index: number) => (
                    <div key={index}>
                        {
                            payments.length === 1 && (
                            <CardPaymentSingle method={method} payments={payments as Payment[]} handleItemClick={handleItemClick} />
                            )
                        }
                        {
                            payments.length > 1 && (
                            <CardPaymentGroup method={method} payments={payments as Payment[]} handleItemClick={handleItemClick} scrollDisplayError={scrollDisplayError} />
                            ) 
                        }
                    </div>
                    ))}
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

export default CardPaymentMethod