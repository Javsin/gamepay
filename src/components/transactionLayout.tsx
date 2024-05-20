/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useAppContext } from "@/context/setOrder";
import checkProduct from "@/action/transaction/checkProduct"
import orderProduct from "@/actions/transaction/orderProduct";
import { Pembelian } from "@/types/buyProduct";
import { useState } from "react";
import Modal from "@/components/modal";
import Link from "next/link";
import IconCheck from "@/public/assets/icon_cek_transaksi.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
type TransactionLayoutProps = {
    description : React.ReactNode;
    testimoni? : React.ReactNode;
    form : React.ReactNode;
    product : React.ReactNode;
    quantity : React.ReactNode;
    paymentMethod? : React.ReactNode;
    promo? : React.ReactNode;
    contact? : React.ReactNode;
    buttonSubmit? : React.ReactNode;
}

const transactionLayout = ({description,testimoni,form,product,quantity,paymentMethod,promo,contact, buttonSubmit } : TransactionLayoutProps) => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [valueCheck, setValueCheck] = useState([]);
    const [formDataState, setFormDataState] = useState({});
    const [loading, setLoading] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    const context = useAppContext();
    const quantityValue = context?.quantity;
    const productValue = context?.product;
    const paymentMethodValue = context?.payment;
    const promoValue = context?.promo;
    const contactValue = context?.contact;
    const isCekValue = context?.isCek;
    const elementAccountRef = context?.elementAccountRef;
    const setLoadingCheck = context?.setLoadingCheck ?? (() => {});
    const order = async (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formElements = e.currentTarget.elements;
        let hasEmptyFields = false;
        let temp = [];
        const formData : { [key: string]: string|number|boolean|undefined|{key: string, value:string}[] } = {}; // Explicitly define the type of formData
        for (let i = 0; i < formElements.length; i++) {
            const element = formElements[i] as HTMLInputElement;
            if (element.name) {
                temp.push({
                    key: element.name,
                    value: element.value
                })
                if(!element.value) {
                    hasEmptyFields = true
                }
            }
        }

        formData['tujuan'] = temp;
        formData['quantity'] = quantityValue;
        formData['product'] = productValue;
        formData['payment'] = paymentMethodValue;
        formData['promo'] = promoValue;
        formData['contact'] = contactValue;
        
        if (hasEmptyFields || !quantityValue || !productValue || !paymentMethodValue ) {
            if (elementAccountRef?.current) {
                elementAccountRef?.current.scrollIntoView({ behavior: 'smooth', block: 'start' } as ScrollIntoViewOptions);
                toast.error("Harap masukkan semua informasi akun yang diperlukan.")
            }
        }else if( !contactValue){
            toast.error("Harap masukkan kontak anda.")
        }else{
            if(isCekValue){
                setLoadingCheck(true);
                const responseCheck = await checkProduct(formData as Pembelian);
                if(responseCheck.status === 200){
                    setValueCheck(responseCheck.data);
                    toggle();
                    setLoadingCheck(false);
                    setFormDataState(formData);
                }else{
                    setLoadingCheck(false);
                    toast.error("Terjadi kesalahan, silahkan coba lagi.")
                }
            }else{
                setLoadingCheck(true);
                const responseOrder = await orderProduct(formData as Pembelian);
                if(responseOrder.status === 200){
                    setLoadingCheck(false);
                    const invoiceId = responseOrder.data.invoice;
                    router.push(`/invoices/${invoiceId}`)
                }else{
                    setLoadingCheck(false);
                    toast.error("Terjadi kesalahan, silahkan coba lagi.")
                }
            }
        }
    }

    const handleOrderConfirmation  = async () => {
        setLoading(true);
        const responseOrder = await orderProduct(formDataState as Pembelian);
        if(responseOrder.status === 200){
            setLoading(false);
            const invoiceId = responseOrder.data.invoice;
            router.push(`/invoices/${invoiceId}`)
        }else{
            setLoading(false);
            toast.error("Terjadi kesalahan, silahkan coba lagi.")
        }
    }

    return (
        <>        
            <div className="2xl:container 2xl:max-w-[80rem] xl:mx-auto mx-2 xl:pt-6 py-2.5 xl:pb-12 xl:max-w-[70rem]">
                <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8">
                    <div className="col-span-1">
                        <div>
                            {description}
                        </div>
                        <div className="my-7 hidden md:block">
                            {/* {testimoni} */}
                        </div>
                    </div>
                    <div className="col-span-2">
                        <form onSubmit={order}>
                            <div>
                                {form}
                            </div>
                            <div className="my-7">
                                {product}
                            </div>
                            <div>
                                {quantity}
                            </div>
                            <div className="my-7">
                                {paymentMethod}
                            </div>
                            <div className="my-7">
                                {promo}
                            </div>
                            <div className="my-7">
                                {contact}
                            </div>
                            <div className="my-7">
                                {buttonSubmit}
                            </div>
                        </form>
                        {/* <div className="my-16 block md:hidden">
                            {testimoni}
                        </div> */}
                    </div>
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
            <Modal isOpen={isOpen} closeModal={toggle} title='' size='w-[33rem]' showClose={false} background='bg-[#313E75] rounded-xl text-white'>
                <div className="border-b border-[#4E66D9] flex items-center gap-3">
                    <div className="bg-orange-500 p-3 h-full">
                        <Image src={IconCheck} alt="icon-check" width={0} height={0} sizes="100vw" className="w-6 h-auto" />
                    </div>
                    <div className="py-2 font-semibold">
                        Buat Pesanan
                    </div>
                </div>
                <div className="pt-6 py-4 px-6 grid grid-cols-1">
                    <div className="py-3 xl:px-10 text-center bg-[#e53e60] rounded-xl text-white font-light text-sm xl:text-base">
                        Pastikan data akun dan produk yang kamu pilih telah valid dan sesuai
                    </div>
                </div>
                <div className="py-4 px-6 grid grid-cols-2">
                    {
                        valueCheck.map((item : any, index) => {
                            return (
                                <div className="col-span-1 gap-4 mb-6" key={index}>
                                    <div className="text-sm font-light">
                                        {item.title}
                                    </div>
                                    <div className="font-medium">
                                        {item.value}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="pt-4 pb-10 px-6 xl:flex xl:flex-row xl:gap-3 grid grid-cols-1 xl:text-base text-sm">
                    <a href="#" className="w-full py-2 bg-[#556EB1] text-white rounded-lg text-center xl:my-0 my-2" onClick={()=>toggle()}>Batalkan</a>
                    <button className="w-full flex justify-center py-2 bg-orange-500 text-white rounded-lg text-center order-first xl:order-2" disabled={loading} onClick={handleOrderConfirmation }>
                        Pesan Sekarang
                        {
                            loading && (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1.2em"
                                    height="1.2em"
                                    viewBox="0 0 24 24"
                                    >
                                    <path
                                        fill="#fefefe"
                                        d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
                                        opacity="0.25"
                                    />
                                    <path
                                        fill="#fefefe"
                                        d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
                                    >
                                        <animateTransform
                                        attributeName="transform"
                                        dur="0.75s"
                                        repeatCount="indefinite"
                                        type="rotate"
                                        values="0 12 12;360 12 12"
                                        />
                                    </path>
                                </svg>
                            )
                        }
                    </button>
                </div>
            </Modal>
        </>
    )
}
export default transactionLayout;