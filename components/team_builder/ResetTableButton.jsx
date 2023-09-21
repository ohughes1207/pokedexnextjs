import React from "react";
import { BiRevision } from 'react-icons/bi'
import { useResetAtom } from "jotai/utils";
import { TM1Atom, TM2Atom, TM3Atom, TM4Atom, TM5Atom, TM6Atom } from "./TeamTableAtoms";



export default function ResetTableButton () {
    const resetTM1 = useResetAtom(TM1Atom);
    const resetTM2 = useResetAtom(TM2Atom);
    const resetTM3 = useResetAtom(TM3Atom);
    const resetTM4 = useResetAtom(TM4Atom);
    const resetTM5 = useResetAtom(TM5Atom);
    const resetTM6 = useResetAtom(TM6Atom);


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
            className={`z-50 fixed top-2 right-4 sm:bottom-6 md:right-6 xl:bottom-6 xl:right-4 2xl:top-36 2xl:right-8 rounded-md w-24 h-24 mx-auto flex justify-center transition-all duration-500 items-center text-gray-100 bg-red-500 hover:bg-gray-100 hover:text-red-500 hover:rounded-3xl`}
            onClick={handleReset}
            >
            <BiRevision size={90}/> 
            
        </button>
    )
}