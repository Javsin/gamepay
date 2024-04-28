/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useAppContext } from "@/context/setOrder";
import checkProduct from "@/action/transaction/checkProduct"
import { Pembelian } from "@/types/buyProduct";
import { useState } from "react";
import Modal from "@/components/modal";
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
    const [isOpen, setIsOpen] = useState(false);
    const [valueCheck, setValueCheck] = useState([]);
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
                const responseCheck = await checkProduct(formData as Pembelian);
                if(responseCheck.status === 200){
                    setValueCheck(responseCheck.data);
                    toggle();
                }
            }
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
                            {testimoni}
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
                        <div className="my-16 block md:hidden">
                            {testimoni}
                        </div>
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
            <Modal isOpen={isOpen} closeModal={toggle} title='' size='w-[35rem]' showClose={false} background='bg-[#313E75] rounded-xl text-white'>
                <div className="border-b border-[#4E66D9] flex items-center gap-3">
                    <div className="bg-orange-500 py-2">
                        icon
                    </div>
                    <div className="py-2">
                        ww
                    </div>
                </div>
                <div className="p-6 grid grid-cols-2">
                    {
                        valueCheck.map((item : any, index) => {
                            return (
                                <div className="col-span-1 gap-2" key={index}>
                                    <div className="text-sm font-light">
                                        {item.key}
                                    </div>
                                    <div>
                                        {item.value}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </Modal>
        </>
    )
}
export default transactionLayout;