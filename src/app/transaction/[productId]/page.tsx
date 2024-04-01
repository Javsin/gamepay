import getConfig from '@/actions/transaction/getTransactionConfig';
import React from 'react';
import { ConfigTransaction } from '@/types/configTransaction';
import Image from 'next/image';
import verifikasiImage from '@/public/assets/icon_terverifikasi.png'
const detailProduct = ({params} : {params: {productId: string}}) => {
    const config = React.use(getConfig({id: params.productId}));
    const data = config.data as ConfigTransaction;
    return (
        <div className='w-full relative'>
            <Image src={data.banner_image} alt='header' sizes="100vw" quality={80} width={0} height={0} className='object-cover w-full h-56 xl:h-auto bg-no-repeat' priority />
            <div className='z-10 relative mt-[-20px]'>
                <div className='bg-dark-blue-2'>
                    <div className='2xl:container 2xl:max-w-[80rem] xl:mx-auto mx-2 xl:pt-3 xl:pb-8 py-2.5 xl:max-w-[70rem]'>
                        <div className='flex gap-3'>
                            <div className='mt-[-130px] rotate-style'>
                                <Image src={data.image} alt={data.thumbnail} width="0" height="0" sizes="100vw" className="w-full h-44 xl:h-56 aspect-square rounded-lg xl:rounded-xl"/>
                            </div>
                            <div className='text-white'>
                                <h1 className='font-semibold xl:text-2xl'>{data.menu_name}</h1>
                                <div className='flex gap-1 mt-1 items-center'>
                                    <Image src={verifikasiImage} alt='verifikasi' width="0" height="0" sizes="100vw" className="w-4 h-4" />
                                    <span className='text-xs xl:text-sm'>Terverifikasi</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default detailProduct;