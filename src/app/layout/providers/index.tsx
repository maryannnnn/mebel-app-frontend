'use client';

import { ReactNode } from 'react';
import { ApolloWrapper } from './ApolloWrapper'
import { NextIntlClientProvider } from 'next-intl';

export function Providers({
                              children,
                              locale,
                              messages
                          }: {
    children: ReactNode;
    locale: string;
    messages: Record<string, any>;
}) {
    return (
        <NextIntlClientProvider locale={locale} messages={messages}>
            <ApolloWrapper>
                {children}
            </ApolloWrapper>
        </NextIntlClientProvider>
    );
}
