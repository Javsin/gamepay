import React from "react";

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
                    <div className="my-16 block md:hidden">
                        {testimoni}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default transactionLayout;