/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import { useAppContext } from "@/context/productLayout";
import { Menu } from '@/types/productType';
import { motion } from 'framer-motion';
import getProduct from '@/actions/getProduct';
import { useState} from "react";
const firstLoadProduct = () => {
    const [page, setPage] = useState<number>(2);
    const context = useAppContext();
    const product = context?.state as Menu[];
    const id = context?.idCategory;
    const setProduct = context?.setState;
    const count = context?.count;
    const setCount = context?.setCount;
    const varians = {
        hidden : { opacity : 0 },
        visible : { opacity : 1 }
    }
    const delayAnimated = (index : number) => {
        const plusindex = index + 1;
        if (count) {        
            if(plusindex > (3 * count)){
                const newindex = plusindex - (3 * count) ;
                return newindex * 0.25;
            }
        }
        return index * 0.25;
    }
    const loadMore = () => {
            if (setCount) {
                setCount(old => old + 1);
            }
            setPage(old => old + 1);
            getProduct(
                {
                    id : id,
                    page : page,
                }
            ).then((res) => {
                if (setProduct) {
                    setProduct([...product, ...res.data.data]);
                }
        });
    }
    return (
        <div className="container mx-auto w-full">
            <div className="grid gap-3 grid-cols-3 xl:grid-cols-6 ">
            {
                product?.map((item : Menu, index : number) => {
                    return (
                        <motion.div key={index} initial="hidden" animate="visible" variants={varians} viewport={{amount:0}} transition={
                            {
                                delay : delayAnimated(index),
                                ease : "easeInOut",
                                duration : 0.5
                            }
                        } className="w-full col-span-1 h-28 bg-indigo-500">
                            <p>{item.menu_name}</p>
                        </motion.div>
                    );
                })
            }
            <div>
                <button onClick={() => loadMore()}>Load More</button>
            </div>
            </div>
        </div>
    )
}
export default firstLoadProduct;