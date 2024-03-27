/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { CategoryProduct } from '@/types/categoryProductType';
import { ResponseData } from '@/types/productType';
import { useAppContext } from '@/context/productLayout';
import { useEffect } from 'react';
import getProduct from '@/actions/getProduct';
const tabProduct = ({ dataCategory }: { dataCategory: CategoryProduct[] }) => {
    const context = useAppContext();
    const setId = context?.setIdCategory;
    const id = context?.idCategory;
    const setProduct = context?.setState;
    const setCount = context?.setCount;
    const setPage = context?.setPage;
    const setHasNextPage = context?.setHasNextPage
    const totalLoading = Array.from({ length: 5 }, (_, i) => i);
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
            if (setHasNextPage) setHasNextPage(false);
            if (setCount) setCount(0);
            if (setPage) setPage(2);
            getProduct(
                {
                    id,
                    page : 1,
                }
            ).then((res) => {
                const response = res.data as ResponseData;
                if (setProduct) {
                    setProduct(response.data);
                }
                if (setHasNextPage) {
                    setHasNextPage(response.next_page_url);
                }
            });
        }
    }, [id]);
    return (
        <>
            <div className='w-full overflow-x-scroll pb-5 remove-scroll'>
                <div className='flex flex-nowrap gap-2'>
                    {
                        id === 0 ? (
                            totalLoading.map((index) => {
                                return (
                                    <div key={index} className='bg-gray-300 animate-pulse h-8 w-28 text-md rounded-md'/>
                                );
                            })
                        ) : (
                            dataCategory?.map((item : CategoryProduct, index : number) => {
                                return (
                                    <div key={index} className={`cursor-pointer whitespace-nowrap ${id === item.id ? 'bg-orange-500 text-white ' : 'bg-[#C2D3F9] text-white'} py-1 px-3 text-md rounded-md`} onClick={() => setId && setId(item.id)}>
                                        <p>{item.category_name}</p>
                                    </div>
                                );
                            })
                        )
                    }
                </div>
            </div>
        </>
    );
}
export default tabProduct;