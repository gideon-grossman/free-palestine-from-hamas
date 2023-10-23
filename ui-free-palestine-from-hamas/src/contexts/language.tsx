import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the type for your context
export type LanguageT = 'עִב' | 'En';

// Create a default value for the context
const defaultLanguage: LanguageT = 'En';

// Define the context interface
interface LanguageContextType {
    language: LanguageT;
    setLanguage: (lang: LanguageT) => void;
}

// Create the context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Custom hook to access the context
export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}

// Create the context provider
interface LanguageProviderProps {
    children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
    const [language, setLanguage] = useState<LanguageT>(defaultLanguage);

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}
