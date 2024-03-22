
import React from 'react';
import getPopularProduct from '@/actions/getPopularProduct';
import { PopularProduct } from '@/types/popularType';
import PopularProductOne from '@/components/product/popularProduct/styleOne';
import Image from 'next/image';
import fireImage from '@/public/assets/icon_api.png';
export default function Popular() {
    const popular = React.use(getPopularProduct());
    return (
        <div className='pt-5 text-start font-semibold'>
            <div className='2xl:container 2xl:max-w-[80rem] xl:mx-auto mx-2 pt-6 pb-12 xl:max-w-[70rem]'>
                <div className='text-base text-white pb-6 flex gap-1 items-center'> 
                    <Image src={fireImage} alt='fire' sizes="100vw" width={0} height={0}  className='w-8 h-8 inline-block' />
                    <span>POPULER</span>
                </div>
                <div className='grid grid-cols-3 gap-5'>
                    {
                        popular.data?.map((item : PopularProduct, index: number) => {
                            return (
                                <div key={index} className='col-span-1 text-white'>
                                    <PopularProductOne item={item} /> 
                                </div>
                            );
                        })
                    } 
                </div>
            </div>
        </div>
    );
}