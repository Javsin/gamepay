/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import Image from 'next/image';
import muraGames from '@/public/assets/mura_gemes_200px.png';
import Home from '@/public/assets/icon_home.png';
import Calculator from '@/public/assets/icon_kalkulator.png';
import Transaction from '@/public/assets/icon_cek_transaksi.png';
import Search from '@/public/assets/icon_search.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
const navDesktop = ({toggle} : {toggle: () => void}) => {
    const pathname = usePathname()
    return (
        <>
            <div className={`bg-dark-blue sticky w-full top-0 z-[51] items-center justify-between hidden xl:block`}>
                <div className='container 2xl:container 2xl:max-w-[80rem] xl:mx-auto mx-2 xl:max-w-[70rem] h-fit'>
                    <div className='flex h-fit justify-between overflow-hidden'>
                        <div className='h-fit items-center flex'>
                            <div className='float-left px-3'>
                                <Image src={muraGames} alt='logo' width={0} height={0} sizes='100vw' className='object-cover w-full h-10' />
                            </div>
                            <div className='menu text-sm'>
                                <Link href='/' className={`text-white font-medium block px-1 mx-2 py-5 float-left border-b-2 hover:border-orange-500 link ${pathname === '/' ? 'border-orange-500' : 'border-transparent'}`}>
                                    <div className='flex items-center gap-1'>
                                        <Image src={Home} alt='home' width={0} height={0} sizes='100vw' className='object-cover w-4 h-4' />
                                        <span>Beranda</span>
                                    </div>
                                </Link>
                                <a href='/invoices' className='text-white font-medium block px-1 mx-2 py-5 float-left border-b-2 border-transparent hover:border-orange-500'>
                                    <div className='flex items-center gap-1'>
                                        <Image src={Transaction} alt='transaction' width={0} height={0} sizes='100vw' className='object-cover w-4 h-4' />
                                        <span>Cek Transaksi</span>
                                    </div>
                                </a>
                                <a href='/' className='text-white font-medium block px-1 mx-2 py-5 float-left border-b-2 border-transparent hover:border-orange-500'>
                                    <div className='flex items-center gap-1'>
                                        <Image src={Calculator} alt='calculator' width={0} height={0} sizes='100vw' className='object-cover w-4 h-4' />
                                        <span>Kalkulator</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className='flex h-full item-center'>
                            <div className='menu-second text-sm h-10'>
                                <div onClick={toggle} className='text-white cursor-pointer font-medium block px-1 mx-2 py-5 float-left border-b-2 border-transparent hover:border-orange-500'>
                                    <div className='flex items-center gap-1'>
                                        <Image src={Search} alt='search' width={0} height={0} sizes='100vw' className='object-cover w-4 h-4' />
                                        <span>Search</span>
                                    </div>
                                </div>
                                <a href='/sign-in' className='text-white font-medium block px-1 mx-2 py-5 float-left  border-b-2 border-transparent hover:border-orange-500'>Masuk</a>
                                <a href='/sign-up' className='text-white font-medium block px-3 py-5 float-left'>
                                    <span className='bg-orange-500 rounded-lg px-4 py-2'>
                                        Daftar
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default navDesktop;