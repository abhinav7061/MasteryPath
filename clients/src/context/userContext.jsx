import React, { createContext, useContext, useState } from 'react';

const userContext = createContext();

export function useUserAuthentication() {
    return useContext(userContext);
}

export function UserContext({ children }) {
    const [isAuthenticatedUser, setIsAuthenticatedUser] = useState(false);
    return (
        <userContext.Provider value={{ isAuthenticatedUser, setIsAuthenticatedUser }}>
            {children}
        </userContext.Provider>
    );
}
