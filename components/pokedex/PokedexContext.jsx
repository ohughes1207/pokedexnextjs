import React, {createContext, useContext, useState } from "react";

const PokedexContext = createContext()

export function usePokedex() {
    return useContext(PokedexContext)
}

export default function PokedexProvider( {children} ) {
    const [searchQuery, setSearchQuery] = useState('');
    const [T1Filter, setT1Filter] = useState('');
    const [T2Filter, setT2Filter] = useState('');
    const [genValue, setGenValue] = useState(0);
    const [isLegendary, setIsLegendary] = useState(false);
    const [isParadox, setIsParadox] = useState(false);
    const [isPseudoL, setIsPseudoL] = useState(false);
    const [isUB, setIsUB] = useState(false);
    const [isMythical, setIsMythical] = useState(false);
    const [isRegional, setIsRegional] = useState(false);
    const [isMega, setIsMega] = useState(false);

    return (
        <PokedexContext.Provider
          value={{
            searchQuery,
            setSearchQuery,
            T1Filter,
            setT1Filter,
            T2Filter,
            setT2Filter,
            genValue,
            setGenValue,
            isLegendary,
            setIsLegendary,
            isParadox,
            setIsParadox,
            isPseudoL,
            setIsPseudoL,
            isUB,
            setIsUB,
            isMythical,
            setIsMythical,
            isRegional,
            setIsRegional,
            isMega,
            setIsMega,
          }}
        >
          {children}
        </PokedexContext.Provider>
      );
    }