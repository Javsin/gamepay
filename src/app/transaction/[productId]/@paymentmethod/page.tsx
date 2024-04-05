import React from "react";
import getPaymentMethod from "@/actions/transaction/getPaymentMethod";
export default function Formorder({params} : {params: {productId: string}}) {
    const paymentMethod = React.use(getPaymentMethod({id: params.productId}));
    console.log(paymentMethod)
    return (
        <>
            <div className="bg bg-dark-blue-2 rounded-xl">
                <div className="flex gap-2 text-white items-center border-b border-[#374585]">
                    <div className="bg-orange bg-orange-500 rounded-tl-xl py-2 px-4">
                        4
                    </div>
                    <div>
                        Masukan data akun kamu
                    </div>
                </div>
                <div className="py-3 px-4">
                    <div className="rounded-lg bg-[#556EB1] p-4 grid grid-cols-3 gap-3">
                        <div className="bg-white rounded-lg col-span-1">
                            wasd
                        </div>
                        <div className="bg-white rounded-lg col-span-1">
                            wasd
                        </div>
                        <div className="bg-white rounded-lg col-span-1">
                            wasd
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
