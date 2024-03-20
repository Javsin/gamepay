/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { CategoryProduct } from '@/types/categoryProductType';
import { useAppContext } from '@/context/productLayout';
import { useEffect } from 'react';
import getProduct from '@/actions/getProduct';
const tabProduct = ({ dataCategory }: { dataCategory: CategoryProduct[] }) => {
    const context = useAppContext();
    const setId = context?.setIdCategory;
    const id = context?.idCategory;
    const setProduct = context?.setState;
    const setCount = context?.setCount;
    useEffect(() => {
        if (setId) {
            if (dataCategory.length > 0) {
                setId(dataCategory[0].id);
            }
        }
    }, []);
    useEffect(() => {
        if(id !== 0){
            if (setProduct) setProduct(null);
            if (setCount) setCount(0);
            getProduct(
                {
                    id,
                    page : 1,
                }
            ).then((res) => {
                if (setProduct) {
                    setProduct(res.data.data);
                }
            });
        }
    }, [id]);
    return (
        <>
            <div className='flex justify-around'>
                {dataCategory?.map((item : CategoryProduct, index : number) => {
                    return (
                        <div key={index} className='cursor-pointer' onClick={() => setId && setId(item.id)}>
                            <p>{item.category_name}</p>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
export default tabProduct;