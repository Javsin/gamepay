/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { FC, useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

type Props = {
    title: string;
};

const Navigation: FC<Props> = ({ title }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [menuContainer, setMenuContainer] = useState<HTMLElement | null>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        // Create a container for the portal when the component mounts
        const portalRoot = document.createElement('div');
        portalRoot.id = 'menu-portal-root';
        document.body.appendChild(portalRoot);
        setMenuContainer(portalRoot);

        // Cleanup function to remove the container when the component unmounts
        return () => {
            if (portalRoot) {
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

    return (
        <>
            {/* Your navigation toggle button */}
            <div className={`${isOpen ? "fixed inset-0 overflow-hidden z-50 bg-gray-500 opacity-75" : "" }`}></div>
            <div className={`h-12 bg-white fixed w-full py-7 top-0 z-50 flex items-center justify-between ${isOpen ? 'opacity-75 z-0' : ''}`}>
                <div className="px-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 48 48" onClick={toggleMenu}>
                        <g id="Group_6445" data-name="Group 6445" transform="translate(-263 -485)">
                            <path id="Path_2329" data-name="Path 2329" d="M10,0H38A10,10,0,0,1,48,10V38A10,10,0,0,1,38,48H10A10,10,0,0,1,0,38V10A10,10,0,0,1,10,0Z" transform="translate(263 485)" fill="none" />
                            <rect id="Rectangle_18" data-name="Rectangle 18" width="40.32" height="5.76" rx="2.88" transform="translate(266.84 491.72)" fill="#c5c5c5" />
                            <rect id="Rectangle_19" data-name="Rectangle 19" width="40.32" height="5.76" rx="2.88" transform="translate(266.84 506.12)" fill="#c5c5c5" />
                            <rect id="Rectangle_20" data-name="Rectangle 20" width="40.32" height="5.76" rx="2.88" transform="translate(266.84 520.52)" fill="#c5c5c5" />
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
                            <div className="flex w-3/4 justify-end p-4 bg-white">
                                <button className="flex items-center justify-center w-6 h-6 text-gray-800" onClick={toggleMenu}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <nav className="py-4 relative h-screen w-3/4 shadow-md bg-white">
                                <div className='w-full mt-4'>
                                    <ul className="space-y-5 px-4">
                                        <li>
                                            <a href="/history-transaction" className="font-medium text-md block">
                                                Riwayat Pesanan
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        
                    </>,
                    menuContainer // Render inside the portal container
                )}
        </>
    );
};

export default Navigation;
