'use client'; // Assuming this is a comment, otherwise, 'use client' might need correction

import React, { createContext, useState, useContext, useRef } from "react";

type AppState =  {
    product: string;
    setProduct: React.Dispatch<React.SetStateAction<string>>;
    price: number;
    setPrice: React.Dispatch<React.SetStateAction<number>>;
    quantity: number;
    setQuantity: React.Dispatch<React.SetStateAction<number>>;
    payment: number;
    setPayment: React.Dispatch<React.SetStateAction<number>>;
    promo: string;
    setPromo: React.Dispatch<React.SetStateAction<string>>;
    contact: string;
    setContact: React.Dispatch<React.SetStateAction<string>>;
    isCek: boolean;
    setIsCek: React.Dispatch<React.SetStateAction<boolean>>;
    elementPaymentRef: React.MutableRefObject<HTMLDivElement | null>
    elementAccountRef: React.MutableRefObject<HTMLDivElement | null>
    loadingCheck: boolean;
    setLoadingCheck: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppContext = createContext<AppState | null>(null);

export function SetProductWrapper({ children }: { children: React.ReactNode }) {
    const [product , setProduct] = useState<string>('');
    const [price , setPrice] = useState<number>(0);
    const [quantity , setQuantity] = useState<number>(1);
    const [payment , setPayment] = useState<number>(0);
    const [promo , setPromo] = useState<string>('');
    const [contact , setContact] = useState<string>('');
    const [loadingCheck, setLoadingCheck] = useState<boolean>(false);
    const [isCek , setIsCek] = useState<boolean>(false);
    const elementPaymentRef = useRef<HTMLDivElement | null>(null);
    const elementAccountRef = useRef<HTMLDivElement | null>(null);

    return (
        <AppContext.Provider value = {{ product, setProduct, price, setPrice, quantity, setQuantity, payment, setPayment, promo, setPromo, contact, setContact, isCek, setIsCek, elementPaymentRef, elementAccountRef, loadingCheck, setLoadingCheck }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}