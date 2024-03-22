/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import { useAppContext } from "@/context/productLayout";
import { Menu } from '@/types/productType';
import { ResponseData } from '@/types/productType';
import getProduct from '@/actions/getProduct';
import CardProductOne from './cardProduct/styleone'
const loadProduct = () => {
    const context = useAppContext();
    const product = context?.state as Menu[];
    const id = context?.idCategory;
    const setProduct = context?.setState;
    const setCount = context?.setCount;
    const page = context?.page;
    const setPage = context?.setPage;
    const hasNextPage = context?.hasNextPage;
    const setHasNextPage = context?.setHasNextPage;
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
                if (setProduct) {
                    setProduct([...product, ...response.data]);
                }
                if (setHasNextPage) {
                    setHasNextPage(response.next_page_url);
                }
        });
    }
    return (
        <>
            <div className="grid gap-2 xl:gap-4 grid-cols-3 xl:grid-cols-6">
                {
                    product?.map((item : Menu, index : number) => {
                        return (
                            <div key={index} className="col-span-1">
                                <CardProductOne item={item} index={index} />
                            </div>
                        );
                    })
                }
                {
                    hasNextPage && (
                        <div>
                            <button onClick={() => loadMore()}>Load More</button>
                        </div>
                    )
                }
            </div>
        </>
    )
}
export default loadProduct;