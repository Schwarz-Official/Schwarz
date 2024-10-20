import React, { createContext, useState, useEffect } from 'react';

export const PreferencesContext = createContext();

export const PreferencesProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('darkMode') === 'true';
    });

    useEffect(() => {
        localStorage.setItem('darkMode', darkMode);
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
    };

    return (
        <PreferencesContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </PreferencesContext.Provider>
    );
};
