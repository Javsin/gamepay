'use client';
import Navigation from './navigation';
import Footer from './footer';
import { DataLayout } from '@/types/infoLayoutType';
import { useAppContext } from '@/context/infoLayout';
import { useEffect } from 'react';
type Props = {
    children: React.ReactNode;
    data: DataLayout;
};
const MainLayout = ({ children, data }: Props) => {
    const context = useAppContext();
    const setState = context?.setState;
    useEffect(() => {
        if (setState) {
            setState(data);
        }
    }, [data, setState]);
    return (
        <>
            <Navigation title="Main Layout" />
                {children}
            <Footer />
        </>
    );
}

export default MainLayout;