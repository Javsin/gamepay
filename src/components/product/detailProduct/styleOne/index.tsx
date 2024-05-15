/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { DetailProduct } from "@/types/detailProductType";
import Image from "next/image";
import { useAppContext } from "@/context/setOrder";
import { useState,useEffect, use } from "react";
import { formatRupiah } from '@/helpers/formatRupiah'
import { px } from "framer-motion";

const cardDetailProduct = ({item, isCek} : {item: DetailProduct, isCek : boolean}) => {
    const [className, setClassName] = useState<string>('bg-[#556EB1] text-white');
    const context = useAppContext();
    const valueProduct = context?.product
    const setValueProduct = context?.setProduct ?? (() => {});
    const setValuePrice = context?.setPrice ?? (() => {});
    const setIsCek = context?.setIsCek ?? (() => {});
    const elementPaymentRef = context?.elementPaymentRef

    const handleClickProduct = (item: DetailProduct) => {
        setValueProduct(item.code_product)
        setValuePrice(item.price)
        if (elementPaymentRef?.current) {
            elementPaymentRef?.current.scrollIntoView({ behavior: 'smooth', block: 'start' } as ScrollIntoViewOptions);
        }
    }

    useEffect(() => {
        setIsCek(isCek);
        if(valueProduct === item.code_product){
            setClassName('bg-white text-dark-blue border border-orange-500');
        }else{
            setClassName('bg-[#556EB1] border border-[#556EB1] text-white');
        }
    }, [valueProduct])
    return (
        <div key={item.id} className={`rounded-xl p-2 flex items-center justify-around cursor-pointer hover:text-dark-blue hover:border hover:border-orange-500 hover:bg-white ${className}`} onClick={() => handleClickProduct(item)}>
            <div>
                <div className="mt-2">
                    {item.product_name}
                </div>
                <div className="mt-2">
                    {formatRupiah(item.price)}
                </div>
            </div>
            <div>
                <Image src={item.icon_product} alt={item.product_name} width={0} height={0} sizes="100vw" className="w-10 h-auto" /> 
            </div>
        </div>
    )
}
export default cardDetailProduct;