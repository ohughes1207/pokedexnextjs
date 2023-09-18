import React, { useEffect, useState } from "react";
import { BiSolidUpArrow } from 'react-icons/bi'
import ResetFilters from "./helpers/ResetFilters";
 


export default function ResetFiltersButton () {

    return (
        <button 
            className={`z-50 fixed top-2 right-4 sm:bottom-6 md:right-6 xl:bottom-6 xl:right-4 2xl:top-36 2xl:right-16 rounded-md w-24 h-24 mx-auto flex justify-center transition-all duration-500 items-center text-gray-100 bg-red-500 hover:bg-gray-100 hover:text-red-500 hover:rounded-3xl`}
            onClick={ResetFilters}
            >
            <BiSolidUpArrow size={90}/> 
            
        </button>
    )
}