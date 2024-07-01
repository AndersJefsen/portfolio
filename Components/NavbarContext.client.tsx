'use client';
import React, {createContext,useContext,useState} from "react";

const NavbarContext = createContext({
    activeTab: '',
    setActiveTab: (path: string) => {},
});

export const useNavbar = () => useContext(NavbarContext);

export const NavbarProvider = ({ children }: { children: React.ReactNode }) => {
    const [activeTab, setActiveTab] = useState('');
    return (
        <NavbarContext.Provider value={{activeTab, setActiveTab}}>
            {children}
        </NavbarContext.Provider>
    );
}