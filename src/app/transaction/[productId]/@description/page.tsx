import React from "react";
import getDescription from "@/actions/transaction/getDescription";
import SanitizeHtml from "@/components/sanitizeHtml";
import DescriptionProductMobile from "@/components/product/descriptionProduct/styleOne/descriptionProductMobile";
export default function Description({params} : {params: {productId: string}}) {
    const { data } = React.use(getDescription({id: params.productId}));
    return (
        <>  
            <div className="block md:hidden">
                <DescriptionProductMobile html={data.description} />
            </div>
            <div className="bg bg-dark-blue-2 rounded-xl p-2 hidden md:block">
                <SanitizeHtml html={data.description} />
            </div>
        </>
    );
}