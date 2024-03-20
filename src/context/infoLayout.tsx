'use client'; // Assuming this is a comment, otherwise, 'use client' might need correction

import React, { createContext, useState, useContext } from "react";
import { DataLayout } from "@/types/infoLayoutType";

type AppState =  {
    state: DataLayout | null;
    setState: React.Dispatch<React.SetStateAction<DataLayout | null>>;
}

const AppContext = createContext<AppState | null>(null);

export function AppWrapper({ children }: { children: React.ReactNode }) {
    const [state, setState] = useState<DataLayout | null>(null);

    return (
        <AppContext.Provider value={{ state, setState }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}