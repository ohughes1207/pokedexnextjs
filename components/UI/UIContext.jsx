/*
import React, {createContext, useContext, useState } from "react";

const UIContext = createContext()

export function useUI() {
    return useContext(UIContext)
}

export default function UIProvider( {children} ) {
    const [SidebarVisible, setSidebarVisible] = useState(false);

    return (
        <UIContext.Provider value={{SidebarVisible, setSidebarVisible}}>
            {children}
        </UIContext.Provider>
    );
}
*/