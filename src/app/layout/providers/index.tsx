'use client'

import React from "react";
import { ApolloWrapper } from './ApolloWrapper.tsx'
// import { ThemeProvider } from './ThemeProvider' // если нужно

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ApolloWrapper>
            {/* <ThemeProvider> */}
            {children}
            {/* </ThemeProvider> */}
        </ApolloWrapper>
    )
}
