'use client'; // Assuming this is a comment, otherwise, 'use client' might need correction

import React, { createContext, useState, useContext, useRef } from "react";

type AppState =  {
    id: string;
    setID: React.Dispatch<React.SetStateAction<string>>;
    server: string;
    setServer: React.Dispatch<React.SetStateAction<string>>;
    product: string;
    setProduct: React.Dispatch<React.SetStateAction<string>>;
    price: number;
    setPrice: React.Dispatch<React.SetStateAction<number>>;
    quantity: number;
    setQuantity: React.Dispatch<React.SetStateAction<number>>;
    payment: string;
    setPayment: React.Dispatch<React.SetStateAction<string>>;
    promo: string;
    setPromo: React.Dispatch<React.SetStateAction<string>>;
    contact: string;
    setContact: React.Dispatch<React.SetStateAction<string>>;
    elementPaymentRef: React.MutableRefObject<HTMLDivElement | null>
    elementAccountRef: React.MutableRefObject<HTMLDivElement | null>
}

const AppContext = createContext<AppState | null>(null);

export function SetProductWrapper({ children }: { children: React.ReactNode }) {
    const [id, setID] = useState<string>('');
    const [server , setServer] = useState<string>('');
    const [product , setProduct] = useState<string>('');
    const [price , setPrice] = useState<number>(0);
    const [quantity , setQuantity] = useState<number>(0);
    const [payment , setPayment] = useState<string>('');
    const [promo , setPromo] = useState<string>('');
    const [contact , setContact] = useState<string>('');
    const elementPaymentRef = useRef<HTMLDivElement | null>(null);
    const elementAccountRef = useRef<HTMLDivElement | null>(null);

    return (
        <AppContext.Provider value = {{ id, setID , server, setServer, product, setProduct, price, setPrice, quantity, setQuantity, payment, setPayment, promo, setPromo, contact, setContact, elementPaymentRef, elementAccountRef }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}