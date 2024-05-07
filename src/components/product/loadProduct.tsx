/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import { useAppContext } from "@/context/productLayout";
import { Menu } from '@/types/productType';
import { ResponseData } from '@/types/productType';
import getProduct from '@/actions/getProduct';
import CardProductOne from './cardProduct/styleone'
import styles from './cardProduct/styleone/styleone.module.css'
import { useSession } from "next-auth/react";
const loadProduct = () => {
    const { data: session } = useSession();
    console.log("aa", session);
    const context = useAppContext();
    const product = context?.state as Menu[];
    const id = context?.idCategory;
    const setProduct = context?.setState;
    const setCount = context?.setCount;
    const page = context?.page;
    const setPage = context?.setPage;
    const hasNextPage = context?.hasNextPage;
    const setHasNextPage = context?.setHasNextPage;
    const totalLoading = Array.from({ length: 6 }, (_, i) => i);
    const loadMore = () => {
        if (setCount) setCount(old => old + 1);
        if (setPage) setPage(old => old + 1);
        getProduct(
            {
                id : id,
                page : page,
            }
        ).then((res) => {
            const response = res.data as ResponseData;
            if (setHasNextPage) {
                setHasNextPage(response.next_page_url);
            }
            if (setProduct) {
                setProduct([...product, ...response.data]);
            }
        });
    }
    return (
        <>
            <div className="grid gap-2 xl:gap-4 grid-cols-3 md:grid-cols-6 md:gap-2">
                {
                    product === null && (
                        totalLoading.map((index) => {
                            return (
                                <div key={index} className={`w-full xl:h-64 h-40 bg-gray-300 animate-pulse cursor-pointer group relative shadow-lg col-span-1 ${styles.polygon}`}/>
                            );
                        })
                    )
                }
                {
                    product?.map((item : Menu, index : number) => {
                        return (
                            <div key={index} className="col-span-1">
                                <CardProductOne item={item} index={index} />
                            </div>
                        );
                    })
                }
            </div>
            {
                hasNextPage && (
                    <div className="w-full flex justify-center pt-10">
                        <button className="text-white bg-orange-500 rounded-full px-6 py-1 text-sm md:text-base" onClick={() => loadMore()}>Tampilkan Lainnya</button>
                    </div>
                )
            }
        </>
    )
}
export default loadProduct;