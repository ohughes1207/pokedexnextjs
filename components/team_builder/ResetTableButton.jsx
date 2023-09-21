import React from "react";
import { BiRevision } from 'react-icons/bi'
import { useResetAtom } from "jotai/utils";
import { TM1Atom, TM2Atom, TM3Atom, TM4Atom, TM5Atom, TM6Atom } from "./TeamTableAtoms";
import { useAtomValue } from "jotai";



export default function ResetTableButton () {
    const resetTM1 = useResetAtom(TM1Atom);
    const resetTM2 = useResetAtom(TM2Atom);
    const resetTM3 = useResetAtom(TM3Atom);
    const resetTM4 = useResetAtom(TM4Atom);
    const resetTM5 = useResetAtom(TM5Atom);
    const resetTM6 = useResetAtom(TM6Atom);

    const TM1 = useAtomValue(TM1Atom);
    const TM2 = useAtomValue(TM2Atom);
    const TM3 = useAtomValue(TM3Atom);
    const TM4 = useAtomValue(TM4Atom);
    const TM5 = useAtomValue(TM5Atom);
    const TM6 = useAtomValue(TM6Atom);

    const shouldShowButton = TM1 || TM2 || TM3 || TM4 || TM5 || TM6;


    const handleReset = () => {
        resetTM1();
        resetTM2();
        resetTM3();
        resetTM4();
        resetTM5();
        resetTM6();

        document.querySelectorAll('input[type="text"]').forEach(input => input.value = '');
    }

    return (
        <button 
            className={`z-50 fixed top-2 right-4 sm:bottom-6 md:right-6 xl:bottom-6 xl:right-4 2xl:top-36 2xl:right-8 rounded-md w-24 h-24 mx-auto flex justify-center transition-all duration-500 items-center text-gray-100 bg-red-500 hover:bg-gray-100 hover:text-red-500 hover:rounded-3xl reset-button ${shouldShowButton ? 'visible' : 'invisible'}`}
            onClick={handleReset}
            >
            <BiRevision size={90}/> 
            
        </button>
    )
}