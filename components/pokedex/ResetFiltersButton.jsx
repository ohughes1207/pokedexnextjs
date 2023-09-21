import React, { useEffect, useState } from "react";
import { BiRevision } from 'react-icons/bi'
import { useResetAtom } from "jotai/utils";
import { T1FilterAtom, T2FilterAtom, genValueAtom, isLegendaryAtom, isMegaAtom, isMythicalAtom, isParadoxAtom, isPseudoLAtom, isRegionalAtom, isUBAtom, searchQueryAtom} from './PokedexAtoms';
import { useAtomValue } from "jotai";



export default function ResetFiltersButton () {
    const resetSearchQuery = useResetAtom(searchQueryAtom);
    const resetT1Filter = useResetAtom(T1FilterAtom);
    const resetT2Filter = useResetAtom(T2FilterAtom);
    const resetGenValue = useResetAtom(genValueAtom);
    const resetIsLegendary = useResetAtom(isLegendaryAtom);
    const resetIsParadox = useResetAtom(isParadoxAtom);
    const resetIsPseudoL = useResetAtom(isPseudoLAtom);
    const resetIsUB = useResetAtom(isUBAtom);
    const resetIsMythical = useResetAtom(isMythicalAtom);
    const resetIsRegional = useResetAtom(isRegionalAtom);
    const resetIsMega = useResetAtom(isMegaAtom);

    const searchQuery = useAtomValue(searchQueryAtom)
    const T1Filter = useAtomValue(T1FilterAtom);
    const T2Filter = useAtomValue(T2FilterAtom);
    const GenValue = useAtomValue(genValueAtom);
    const IsLegendary = useAtomValue(isLegendaryAtom);
    const IsParadox = useAtomValue(isParadoxAtom);
    const IsPseudoL = useAtomValue(isPseudoLAtom);
    const IsUB = useAtomValue(isUBAtom);
    const IsMythical = useAtomValue(isMythicalAtom);
    const IsRegional = useAtomValue(isRegionalAtom);
    const IsMega = useAtomValue(isMegaAtom);

    const shouldShowButton = searchQuery || T1Filter || T2Filter || GenValue || IsLegendary || IsParadox || IsPseudoL || IsUB || IsMythical || IsRegional || IsMega;


    const handleReset = () => {
        resetSearchQuery();
        resetT1Filter();
        resetT2Filter();
        resetGenValue();
        resetIsLegendary();
        resetIsParadox();
        resetIsPseudoL();
        resetIsUB();
        resetIsMythical();
        resetIsRegional();
        resetIsMega();
    }

    return (
        <button 
            className={`z-50 fixed top-2 right-1 sm:right-10 md:right-16 lg:right-5 lg:top-36 xl:top-3 xl:right-12 2xl:top-36 2xl:right-16 rounded-md w-24 h-24 mx-auto flex justify-center transition-all duration-500 items-center text-gray-100 bg-red-500 hover:bg-gray-100 hover:text-red-500 hover:rounded-3xl reset-button ${shouldShowButton ? 'visible' : 'invisible'}`}
            onClick={handleReset}
            >
            <BiRevision size={90}/> 
            
        </button>
    )
}