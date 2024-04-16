'use client'
import { Disclosure, Transition  } from '@headlessui/react'
import ChevronUpIcon  from '@/public/assets/icon_chevronup.png'
import Image from 'next/image'
import { useAppContext } from '@/context/setOrder'
import { Payment } from '@/types/paymentMethod'
import { formatRupiah } from '@/helpers/formatRupiah'
import { motion } from "framer-motion";

interface CardGroupProps {
    method: string;
    payments: Payment[];
    handleItemClick : (itemMerchantName: string) => void;
    valuePrice: any;
    scrollDisplayError : () => void;
}

const CardPaymentGroup: React.FC<CardGroupProps> = ({method, payments, handleItemClick, valuePrice, scrollDisplayError}) => {
    const context = useAppContext();
    const valuePayment = context?.payment
    const valueProduct = context?.product
    const elementAccountRef = context?.elementAccountRef
    const valueId = context?.id;
    const valueServer = context?.server;

    return (
        <div>
            <Disclosure>
                {({ open, close }) => (
                    <div onClick={() => {
                        if (!open && (!valueProduct || !valueServer || !valueId)) {
                            scrollDisplayError();
                            close();
                        }
                    }}>
                        <div className={`w-full ${open ? 'rounded-lg mb-5' : 'rounded-t-lg' } bg-[#556EB1] p-2`}>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-[#556EB1] px-4 py-2 text-left text-sm font-medium text-white focus:outline-none"
                            >
                                <span>{method}</span>
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
                            <Transition
                                enter="transition duration-100 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-100 ease-out"
                                leaveFrom="transform scale-95 opacity-0"
                                leaveTo="transform scale-100 opacity-100"
                            >
                                <Disclosure.Panel className={`px-4 py-2 grid grid-cols-2 md:grid-cols-3 gap-3 text-sm`}>
                                    {
                                        payments.map((item: Payment, index: number) => (
                                            <div key={index}
                                                className={`${ !valueProduct 
                                                ? 'bg-gray-400' 
                                                : valuePayment === item.merchant_name 
                                                ? 'bg-white border border-orange-600' 
                                                : 'bg-gray-300 border border-[#556EB1] hover:bg-white hover:border-orange-600 hover:shadow-lg'
                                                } 
                                                text-dark-blue rounded-lg p-3 font-semibold cursor-pointer`} 
                                                onClick={() => handleItemClick(item.merchant_name) } 
                                                >
                                                <h1>{item.merchant_name}</h1>
                                                <p className='py-2'> {formatRupiah(valuePrice + item.admin_fee)}</p>
                                                <div className='border-t border-gray-400 pt-2'>
                                                    <h1>{item.merchant_name}</h1>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </Disclosure.Panel>
                            </Transition>
                        </div>
                        <motion.div
                        className={`w-full rounded-b-lg bg-gray-300 p-2 overflow-hidden transform max-h-screen mb-5 ${open ? 'hidden' : ''}`}
                        initial={{ opacity: 1, }}
                        animate={{ opacity: open ? 0 : 1, y: open ? 2 : 0  }}
                        transition={{ duration: 0.5 }}
                        >
                            <div className='flex justify-end gap-x-2'>
                                {
                                    payments.map((item : any, index: number) => (
                                        <div key={index}>
                                            <p>{item.merchant_name}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </motion.div>
                    </div>
                )}
            </Disclosure>
        </div>
    )
}

export default CardPaymentGroup