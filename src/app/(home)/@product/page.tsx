import React from 'react';
import getCategory from '@/action/getCategoryProduct'
import TabProduct from '@/components/product/tabProduct';
import FirstLoadProduct from '@/components/product/firstLoadProduct';
export default function Product() {
    const dataCategory = React.use(getCategory());
    return (
        <div>
            <TabProduct dataCategory={dataCategory.data} />
            <FirstLoadProduct />
        </div>
    );
}