import React from 'react';
import getCategory from '@/action/getCategoryProduct'
import TabProduct from '@/components/product/tabProduct';
import LoadProduct from '@/components/product/loadProduct';
export default function Product() {
    const dataCategory = React.use(getCategory());
    return (
        <div className='2xl:container 2xl:max-w-[80rem] xl:mx-auto mx-2 pt-6 pb-12 xl:max-w-[70rem]'>
            <TabProduct dataCategory={dataCategory.data} />
            <LoadProduct />
        </div>
    );
}