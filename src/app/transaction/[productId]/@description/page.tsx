import React from "react";
import getDescription from "@/actions/transaction/getDescription";
import SanitizeHtml from "@/components/sanitizeHtml";
export default function Description({params} : {params: {productId: string}}) {
    const { data } = React.use(getDescription({id: params.productId}));
    return (
        <div className="bg bg-dark-blue-2 rounded-xl p-2">
            <SanitizeHtml html={data.description} />
        </div>
    );
}