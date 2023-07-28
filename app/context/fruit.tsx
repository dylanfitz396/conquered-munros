'use client';

import { ReactNode, createContext, useContext, useState } from "react";
import { Fruit } from "../types";

export interface FruitContextType {
    allFruit: Array<Fruit>;
    setAllFruit: Function;
}

const FruitContext = createContext<FruitContextType | null>(null)

export const FruitContextProvider = ({ children }: { children: ReactNode }) => {
    const [allFruit, setAllFruit] = useState<Array<Fruit>>([]);

    return (
        <FruitContext.Provider value={{ allFruit, setAllFruit }}>
            {children}
        </FruitContext.Provider>
    )
};

export const useFruitContext = () => useContext(FruitContext);