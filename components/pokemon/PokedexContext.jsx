import React, {createContext, useContext, useState } from "react";

const PokedexContext = createContext()

export function usePokedex() {
    return useContext(PokedexContext)
}

export default function PokedexProvider( {children} ) {
    const [searchQuery, setSearchQuery] = useState('');
    const [T1Filter, setT1Filter] = useState('');
    const [T2Filter, setT2Filter] = useState('');

    return (
        <PokedexContext.Provider value={{searchQuery, setSearchQuery, T1Filter, setT1Filter, T2Filter, setT2Filter}}>
            {children}
        </PokedexContext.Provider>
    );
}