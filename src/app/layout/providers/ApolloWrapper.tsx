'use client';

import React, { useRef } from 'react';
import { ApolloProvider } from '@apollo/client';
import { usePathname } from 'next/navigation';
import { getClient } from '@/app/graphql/apollo-client';

export function ApolloWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const locale = pathname.split('/')[1] || 'en';

    const clientRef = useRef(getClient(locale)); // инициализируем один раз

    return <ApolloProvider client={clientRef.current}>{children}</ApolloProvider>;
}
