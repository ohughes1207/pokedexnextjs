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
        });
    }

    useEffect(() => {
        window.addEventListener("scroll", checkScrollPosition);
        return () => {
          window.removeEventListener("scroll", checkScrollPosition);
        };
      }, []);

    return (
        <button 
            className={`fixed bottom-8 right-16 rounded-md w-24 h-24 mx-auto flex justify-center transition-all duration-500 items-center text-gray-100 bg-red-500 hover:bg-gray-100 hover:text-red-500 scroll-top-button ${isVisible ? 'visible' : 'invisible'}`}
            onClick={scrollToTop}
            >
            <BiSolidUpArrow size={90}/> 
        </button>
    )
}