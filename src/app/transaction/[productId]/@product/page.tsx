import React from "react";
import getDetailProduct from "@/actions/transaction/getDetailProduct";
import { DetailProduct } from "@/types/detailProductType";
import CardDetailProduct from "@/components/product/detailProduct/styleOne";
import Image from "next/image";

export default function Formorder({params} : {params: {productId: string}}) {
    const products = React.use(getDetailProduct({id: params.productId}));

    return (
        <div className="bg bg-dark-blue-2 rounded-xl">
            <div className="flex gap-2 text-white items-center border-b border-[#374585]">
                <div className="bg-orange bg-orange-500 rounded-tl-xl py-2 px-4">
                    2
                </div>
                <div>
                    Pilih nominal yang akan kamu beli
                </div>
            </div>
            <div className="py-3 px-4">
                {
                    Object.keys(products.data).map((key) => {
                        return (
                            <div key={key} className="mb-3">
                                <div className="text-white text-lg font-bold flex gap-1 mb-4">
                                    <Image src={products.data[key].icon_kategori} alt={products.data[key].kategori} width={0} height={0} sizes="100vw" className="w-6 h-auto" />
                                    {products.data[key].kategori}
                                </div>
                                <div className="grid grid-cols-3 gap-4 text-sm">
                                    {
                                        products.data[key].data.map((item : DetailProduct, index : number) => {
                                            return (
                                                <CardDetailProduct key={index} item={item} />
                                            );
                                        })
                                    }
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}