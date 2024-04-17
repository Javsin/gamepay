'use client'
import { Disclosure, Transition  } from '@headlessui/react'
import ChevronUpIcon  from '@/public/assets/icon_chevronup.png'
import Image from 'next/image'
import { useAppContext } from '@/context/setOrder'
import { Payment } from '@/types/paymentMethod'
import { formatRupiah } from '@/helpers/formatRupiah'
import { motion } from 'framer-motion';

interface CardGroupProps {
    method: string;
    payments: Payment[];
    handleItemClick : (itemMerchantName: string) => void;
    scrollDisplayError : () => void;
}

const CardPaymentGroup: React.FC<CardGroupProps> = ({method, payments, handleItemClick, scrollDisplayError}) => {
    const context = useAppContext();
    const valuePayment = context?.payment
    const valueProduct = context?.product
    const valuePrice = context?.price as number;
    const valueId = context?.id;
    const valueServer = context?.server;
    const valueQuantity = context?.quantity as number;

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
                    <motion.div
                        initial={{ borderRadius: '0px' }}
                        animate={{ borderRadius: open ? '10px' : '10px' }}
                        className={`w-full ${!valueProduct || !valueId || !valueServer ? 'bg-gray-400' : 'bg-[#556EB1]'}  p-2`}
                    >
                        <Disclosure.Button className={`flex w-full justify-between ${!valueProduct || !valueId || !valueServer ? 'bg-gray-400' : 'bg-[#556EB1]'} px-4 py-2 text-left text-sm font-medium text-white focus:outline-none`}>
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
                        <Disclosure.Panel className={`px-4 py-2 grid grid-cols-2 md:grid-cols-3 gap-3 text-sm`}>
                        {
                            payments.map((item: Payment, index: number) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3, delay: 0.1 * index }}
                                className={`${!valueProduct ? 'bg-gray-400' : valuePayment === item.merchant_name ? 'bg-white border border-orange-600' : 'bg-gray-300 border border-[#556EB1] hover:bg-white hover:border-orange-600 hover:shadow-lg'} text-dark-blue rounded-lg p-3 cursor-pointer`}
                                onClick={() => handleItemClick(item.merchant_name)}
                            >
                                <Image src={item.merchant_logo} alt={item.merchant_name} width={100} height={50} className={`${(!valueProduct || !valueId || !valueServer) && 'opacity-50'}`}/>
                                <p className='py-2'>{formatRupiah((valuePrice * valueQuantity) + item.admin_fee)}</p>
                                <div className='border-t border-gray-400 pt-2'>
                                <h1>{item.merchant_name}</h1>
                                </div>
                            </motion.div>
                            ))
                        }
                        </Disclosure.Panel>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: open ? 0 : 1, height: open ? 0 : 'auto' }}
                        transition={{ duration: 0.3 }}
                        className={`w-full mt-[-6px] bg-gray-300 p-2 overflow-hidden mb-5 rounded-b-[10px]`}
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            className='flex justify-end gap-x-2'
                            >
                            {
                                payments.map((item: any, index: number) => (
                                    <div key={index}>
                                        <Image src={item.merchant_logo} alt={item.merchant_name} width={100} height={50} className={`${(!valueProduct || !valueId || !valueServer) && 'opacity-50'}`}/>
                                    </div>
                                ))
                            }
                        </motion.div>
                    </motion.div>
                </div>
            )}
            </Disclosure>
        </div>
    )
}

export default CardPaymentGroup