'use client';
import Navigation from './navigation';
import Footer from './footer';
import { DataLayout } from '@/types/infoLayoutType';
import { useAppContext } from '@/context/infoLayout';
import { useEffect } from 'react';
import { Datafooter } from '@/types/datafooterType';

type Props = {
    children: React.ReactNode;
    data: DataLayout;
    dataFooter: Datafooter;
};
const MainLayout = ({ children, data, dataFooter }: Props) => {
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
            <Footer data={data} dataFooter={dataFooter}/>
        </>
    );
}

export default MainLayout;