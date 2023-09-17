import React, { useEffect, useState } from "react";
import { BiSolidUpArrow } from 'react-icons/bi'


export default function ScrollToTopButton () {
    const [isVisible, setIsVisible] = useState(false)

    const checkScrollPosition = () => {
        const documentHeight = Math.max(
            document.body.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.clientHeight,
            document.documentElement.scrollHeight,
            document.documentElement.offsetHeight
        );
        if (window.scrollY > documentHeight / 20) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };

    const scrollToTop = () => {
        window.scrollTo({
            top:0,
            behavior: "smooth"
        }
      );
    }

    useEffect(() => {
        window.addEventListener("scroll", checkScrollPosition);
        return () => {
          window.removeEventListener("scroll", checkScrollPosition);
        };
      }, []);

    return (
        <button 
            className={`z-50 fixed bottom-2 right-4 sm:bottom-6 md:right-6 xl:bottom-6 xl:right-4 2xl:bottom-8 2xl:right-14 rounded-md w-24 h-24 mx-auto flex justify-center transition-all duration-500 items-center text-gray-100 bg-red-500 hover:bg-gray-100 hover:text-red-500 scroll-top-button hover:rounded-3xl ${isVisible ? 'visible' : 'invisible'}`}
            onClick={scrollToTop}
            >
            <BiSolidUpArrow size={90}/> 
        </button>
    )
}