import '../globals.css';
import React  from 'react';
import {getMessages} from 'next-intl/server';
import {Providers} from '@/app/layout/providers';
import Header from '@/widgets/header/Header';
import Footer from '@/widgets/footer/Footer';

import {hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';

export default async function LocaleLayout({
                                               children,
                                               params
                                           }: {
    children: React.ReactNode;
    params: Promise<{locale: string}>;
}) {
    // Ensure that the incoming `locale` is valid
    const {locale} = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    const messages = await getMessages();
    const isRtl = locale === 'he';

    return (
        <html lang={locale} dir={isRtl ? 'rtl' : 'ltr'}>
        <body className={isRtl ? 'rtl' : 'ltr'}>
        <Providers locale={locale} messages={messages}>
            <Header />
            {children}
            <Footer />
        </Providers>
        </body>
        </html>
    );
}


//
// export default async function LocaleLayout({
//                                                children,
//                                                params: { locale },
//                                            }: {
//     children: ReactNode;
//     params: { locale: string };
// }) {
//     const messages = await getMessages();
//     const isRtl = locale === 'he';
//
//     return (
//         <html lang={locale} dir={isRtl ? 'rtl' : 'ltr'}>
//         <body className={isRtl ? 'rtl' : 'ltr'}>
//         <Providers locale={locale} messages={messages}>
//             <Header />
//             {children}
//             <Footer />
//         </Providers>
//         </body>
//         </html>
//     );
// }
