/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import React from "react";
import { useAppContext } from "@/context/setOrder";
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
    const context = useAppContext();
    const quantityValue = context?.quantity;
    const productValue = context?.product;
    const paymentMethodValue = context?.payment;
    const promoValue = context?.promo;
    const contactValue = context?.contact;
    const order = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formElements = e.currentTarget.elements;
        const formData: { [key: string]: string|number|undefined } = {}; // Explicitly define the type of formData
        for (let i = 0; i < formElements.length; i++) {
            const element = formElements[i] as HTMLInputElement;
            if (element.name) {
                formData[element.name] = element.value;
            }
        }
        formData['quantity'] = quantityValue;
        formData['product'] = productValue;
        formData['payment'] = paymentMethodValue;
        formData['promo'] = promoValue;
        formData['contact'] = contactValue;
        console.log(formData)
    }
    return (
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
    )
}
export default transactionLayout;