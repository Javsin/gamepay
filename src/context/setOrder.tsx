'use client'; // Assuming this is a comment, otherwise, 'use client' might need correction

import React, { createContext, useState, useContext } from "react";

type AppState =  {
    id: string;
    setID: React.Dispatch<React.SetStateAction<string>>;
    server: string;
    setServer: React.Dispatch<React.SetStateAction<string>>;
    product: string;
    setProduct: React.Dispatch<React.SetStateAction<string>>;
    quantity: number;
    setQuantity: React.Dispatch<React.SetStateAction<number>>;
    payment: string;
    setPayment: React.Dispatch<React.SetStateAction<string>>;
    promo: string;
    setPromo: React.Dispatch<React.SetStateAction<string>>;
    contact: string;
    setContact: React.Dispatch<React.SetStateAction<string>>;
}

const AppContext = createContext<AppState | null>(null);

export function SetProductWrapper({ children }: { children: React.ReactNode }) {
    const [id, setID] = useState<string>('');
    const [server , setServer] = useState<string>('');
    const [product , setProduct] = useState<string>('');
    const [quantity , setQuantity] = useState<number>(0);
    const [payment , setPayment] = useState<string>('');
    const [promo , setPromo] = useState<string>('');
    const [contact , setContact] = useState<string>('');
    return (
        <AppContext.Provider value = {{ id, setID , server, setServer, product, setProduct, quantity, setQuantity, payment, setPayment, promo, setPromo, contact, setContact }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}