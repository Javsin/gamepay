'use client';
import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import muraGames from '@/public/assets/mura_gemes_200px.png';
import Home from '@/public/assets/icon_home.png';
import Calculator from '@/public/assets/icon_kalkulator.png';
import Transaction from '@/public/assets/icon_cek_transaksi.png';
import Search from '@/public/assets/icon_search.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { signOut, useSession } from 'next-auth/react';
import Modal from '../modal';
const MobileNav = ({toggle} : {toggle: () => void}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [menuContainer, setMenuContainer] = useState<HTMLElement | null>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();
    const { data: session } : any = useSession();

    useEffect(() => {
        // Create a container for the portal when the component mounts
        const portalRoot = document.createElement('div');
        portalRoot.id = 'menu-portal-root';
        document.body.appendChild(portalRoot);
        setMenuContainer(portalRoot);

        // Cleanup function to remove the container when the component unmounts
        return () => {
            if (portalRoot && portalRoot.parentNode === document.body) {
                document.body.removeChild(portalRoot);
            }
        };
    }, []); // Run this effect only once on component mount

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && menuRef.current === event.target as Node) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const modalToggle = () => {
        setIsOpen(false);
        toggle();
    }
    const logoutHandler = async () => {
        await signOut();
    }
    const handleClickModal = () => {
        setIsOpen(false);
        setIsOpenModal(true);
    }

    const toggleModal = () => {
        setIsOpenModal(!isOpenModal);
    }

    
    return (
        <>
            {/* Your navigation toggle button */}
            <div className={`${isOpen ? "fixed inset-0 overflow-hidden z-50 bg-gray-300 opacity-75" : "" }`}></div>
            <div className={`bg-dark-blue xl:hidden fixed w-full z-50 top-0 flex items-center justify-between ${isOpen ? 'opacity-0 z-0' : ''}`}>
                <div className='p-2'>
                    <Link href='/'>
                        <Image src={muraGames} alt='logo' width={0} height={0} sizes='100vw' className='object-cover w-full h-10' />
                    </Link>
                </div>
                <div className="p-2 z-20 flex gap-x-5">
                    <span onClick={modalToggle} className='font-medium flex items-center gap-1 link'>
                        <Image src={Search} alt='home' width={0} height={0} sizes='100vw' className='object-cover w-5 h-5' />
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 48 48" onClick={()=>{toggleMenu()}}>
                        <g id="Group_6445" data-name="Group 6445" transform="translate(-263 -485)">
                            <path id="Path_2329" data-name="Path 2329" d="M10,0H38A10,10,0,0,1,48,10V38A10,10,0,0,1,38,48H10A10,10,0,0,1,0,38V10A10,10,0,0,1,10,0Z" transform="translate(263 485)" fill="none" />
                            <rect id="Rectangle_18" data-name="Rectangle 18" width="40.32" height="5.76" rx="2.88" transform="translate(266.84 491.72)" fill="#fff" />
                            <rect id="Rectangle_19" data-name="Rectangle 19" width="40.32" height="5.76" rx="2.88" transform="translate(266.84 506.12)" fill="#fff" />
                            <rect id="Rectangle_20" data-name="Rectangle 20" width="40.32" height="5.76" rx="2.88" transform="translate(266.84 520.52)" fill="#fff" />
                        </g>
                    </svg>
                </div>
            </div>
            {/* Off-canvas menu */}
            
            {isOpen && menuContainer &&
                createPortal(
                    <>
                        <div
                            ref={menuRef}
                            className={`fixed top-0 left-0 z-[50] rounded-tr-none w-full h-full transition-transform duration-300 ease-in-out transform overflow-x-hidden overflow-hidden ${
                                isOpen ? '' : '-translate-x-full'
                            }`}
                        >
                            {/* Menu content */}
                            <div className="flex w-3/4 justify-between items-center py-2 bg-dark-blue border-b-2 border-[#374585] z-20 pe-3">
                                <div className='px-2'>
                                    <Image src={muraGames} alt='logo' width={0} height={0} sizes='100vw' className='object-cover w-full h-10' />
                                </div>
                                <button className="flex items-center justify-center w-6 h-6 text-white" onClick={()=>toggleMenu()}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <nav className="py-4 relative h-screen w-3/4 shadow-md bg-dark-blue text-white">
                                <div className='w-full my-3 border-b-2 border-[#374585] pb-8'>
                                    <ul className="space-y-1 px-3">
                                        <li>
                                            <Link href='/' className='font-medium py-2 flex items-center gap-1 link'>
                                                <Image src={Home} alt='home' width={0} height={0} sizes='100vw' className='object-cover w-4 h-4' />
                                                <span className={`border-b-2 ${pathname === '/' ? ' border-orange-500' : 'border-transparent'}`}>Home</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href='/invoices' className='font-medium py-2 flex items-center gap-1 link'>
                                                <Image src={Transaction} alt='home' width={0} height={0} sizes='100vw' className='object-cover w-4 h-4' />
                                                <span className={`border-b-2 ${pathname === '/invoices' ? ' border-orange-500' : 'border-transparent'}`}>Cek Transaksi</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href='#' className='font-medium py-2 flex items-center gap-1 link' onClick={handleClickModal}>
                                                <Image src={Calculator} alt='home' width={0} height={0} sizes='100vw' className='object-cover w-4 h-4' />
                                                <span className={`border-b-2 ${pathname === '/kalkulator' ? ' border-orange-500' : 'border-transparent'}`}>Kalkulator</span>
                                            </Link>
                                        </li>
                                        {/* <li>
                                            <span onClick={modalToggle} className='font-medium py-2 flex items-center gap-1 link'>
                                                <Image src={Search} alt='home' width={0} height={0} sizes='100vw' className='object-cover w-4 h-4' />
                                                <span className={`border-b-2 ${pathname === '/cek-transaksi' ? ' border-orange-500' : 'border-transparent'}`}>Search</span>
                                            </span>
                                        </li> */}
                                    </ul>
                                </div>
                                {
                                    session?.user ? (
                                        <div className='div px-4 fixed bottom-0 my-4 w-3/4'>
                                            <Link href='/' className='w-full block text-center bg-dark-blue text-white rounded-lg py-2 mb-8'>
                                                Dashboard
                                            </Link>
                                            <button onClick={logoutHandler} className="w-full block text-center bg-orange-500 text-white rounded-lg py-2">Logout</button>
                                        </div>
                                    ) : (
                                        <div className='div px-4 fixed bottom-0 my-4 w-3/4'>
                                            <Link href='/sign-in' className='w-full block text-center bg-dark-blue text-white rounded-lg py-2 mb-8'>
                                                Masuk
                                            </Link>
                                            <Link href='/sign-up' className='w-full block text-center bg-orange-500 text-white rounded-lg py-2'>
                                                Daftar
                                            </Link>
                                        </div>
                                    )
                                }

                            </nav>
                        </div>
                        
                    </>,
                    menuContainer // Render inside the portal container
                )}

            <Modal isOpen={isOpenModal} closeModal={toggleModal} title='' size='w-[30rem]' showClose={true} background='bg-[#313E75] border-2 border-[#4E66D9] rounded-2xl pt-3 pb-7 px-4'>
                <>
                    <div className='overflow-y-auto py-2 remove-scroll'>
                        <div className='text-white my-1 w-full text-center'>
                            <h1 className='text-center text-2xl'>
                                Coming Soon!
                            </h1>
                        </div>
                    </div>
                </>
            </Modal>
        </>
    )
}

export default MobileNav;