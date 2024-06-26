import React from "react";
import getPaymentMethod from "@/actions/transaction/getPaymentMethod";
import CardPaymentMethod from "@/components/product/cardPaymentMethod/styleOne";

export default function Formorder({params} : {params: {productId: string}}) {
    const paymentMethod = React.use(getPaymentMethod({id: params.productId}));
    return (
        <>
            <CardPaymentMethod  paymentMethod={paymentMethod.data} />
        </>
    )
}
