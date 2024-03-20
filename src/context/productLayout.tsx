'use client'; // Assuming this is a comment, otherwise, 'use client' might need correction

import React, { createContext, useState, useContext } from "react";
import { Menu } from "@/types/productType";

type AppState =  {
    idCategory : number;
    setIdCategory : React.Dispatch<React.SetStateAction<number>>;
    state: Menu[] | null;
    setState: React.Dispatch<React.SetStateAction<Menu[] | null>>;
    count : number;
    setCount : React.Dispatch<React.SetStateAction<number>>;
    hasNextPage : string | null;
    setHasNextPage : React.Dispatch<React.SetStateAction<string | null>>;
}

const AppContext = createContext<AppState | null>(null);

export function ProductWrapper({ children }: { children: React.ReactNode }) {
    const [dataProduct, setdataProduct] = useState<Menu[] | null>(null);
    const [idCategory, setIdCategory] = useState<number>(0);
    const [count , setCount] = useState<number>(0);
    const [hasNextPage, setHasNextPage] = useState<string | null>(null);
    return (
        <AppContext.Provider value={{ idCategory, setIdCategory , state: dataProduct, setState: setdataProduct, count, setCount , hasNextPage, setHasNextPage }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}