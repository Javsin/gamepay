/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */

import getDataSearch from '@/action/getDataSearch';
import { PopularProduct } from '@/types/popularType';
import { useState, useEffect } from 'react';
import ImageSearch from '@/public/assets/icon_search.png';
import Image from 'next/image';
import Modal from '@/components/modal';
type Props = {
    isOpen: boolean;
    toggle: () => void;
}
import Link from 'next/link';
const search = ({ isOpen, toggle }: Props) => {
    const [dataFilter, setDataFilter] = useState<PopularProduct[]>([]);
    const [search, setSearch] = useState<string>('');
    const getData = () => {
        getDataSearch(
            {
                key : search,
            }
        ).then((res) => {
            const data = res.data;
            setDataFilter(data);
        });
    }
    useEffect(() => {
        getData();
    }, [search]);
    useEffect(() => {
        setSearch('');
    }, [isOpen]);
    return (
        <Modal isOpen={isOpen} closeModal={toggle} title='' size='w-[35rem]' showClose={false} background='bg-[#313E75] border-2 border-[#4E66D9] rounded-tl-2xl rounded-br-2xl pt-8 pb-6 px-6'>
            <>
                <div className="flex items-center">
                    <div className="relative w-full">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                            <Image src={ImageSearch} alt='search' width={0} height={0} sizes='100vw' className='object-cover w-4 h-4' />
                        </span>
                        <input
                            type="text"
                            className="block w-full pl-10 pr-3 py-2 bg-dark-blue text-white rounded-lg focus:outline-none sm:text-sm font-light"
                            placeholder="Search"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
                        />
                    </div>
                </div>
                <div className='search-colum max-h-72 overflow-y-auto py-2 remove-scroll'>
                    {
                        dataFilter.map((item : PopularProduct, index: number) => {
                            return (
                                <Link href={`/transaction/${item.id}`} key={index} className='flex text-white h-32 gap-4 my-2 w-full cursor-pointer items-center'>
                                    <Image src={item.thumbnail} alt='' width={0} height={0} sizes='100vw' className='h-auto rounded-tl-lg rounded-br-lg w-24' />
                                    <p>
                                        {item.menu_name}
                                    </p>
                                </Link>
                            );
                        })
                    }
                </div>
            </>
        </Modal>
    );
}

export default search;