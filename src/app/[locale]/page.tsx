import React from 'react';
import MainBanner from '@/widgets/main-banner/MainBanner';
import MainBonus from '@/widgets/main-bonus/MainBonus';
import MainCompany from '@/widgets/main-company/MainCompany';
import MainMassage from '@/widgets/main-massage/MainMassage';
import MainCourse from '@/widgets/main-course/MainCourse';
import {getClient} from '@/app/graphql/apollo-client';
import {GET_MAIN_DATA} from '@/app/graphql/main/getMainData';
import {Alert, AlertDescription, AlertTitle} from '@/components/ui/alert';
import {AlertCircleIcon} from 'lucide-react';

export const dynamic = 'force-dynamic'; // или "auto" / "force-static"

function normalizeLocale(rawLocale: string): 'en' | 'he' {
    return rawLocale === 'he' ? 'he' : 'en';
}


export default async function HomePage({
                                           params,
                                       }: {
    params: { locale: string };
}) {
    const { locale } = await params; // ✅ обязательно await
    const normalizedLocale = normalizeLocale(locale);

    try {
        const client = getClient(normalizedLocale);

        const { data } = await client.query({
            query: GET_MAIN_DATA,
            variables: { locale: normalizedLocale },
            errorPolicy: 'all',
        });

        return (
            <>
                <MainCompany data={data?.companies} />
                {/* Раскомментируй по мере готовности */}
                {/* <MainBanner /> */}
                {/* <MainMassage /> */}
                {/* <MainCourse /> */}
                {/* <MainBonus /> */}
                {/* <MainService data={data.services} /> */}
            </>
        );
    } catch (error: any) {
        console.error('GraphQL Error in HomePage:', {
            name: error?.name,
            message: error?.message,
            stack: error?.stack,
            networkError: error?.networkError,
            graphQLErrors: error?.graphQLErrors,
            full: error,
        });

        return (
            <Alert variant="destructive" className="max-w-xl mx-auto mt-12">
                <AlertCircleIcon className="h-5 w-5" />
                <AlertTitle>Error loading data</AlertTitle>
                <AlertDescription>
                    {error?.message || 'Failed to get data from server.'}
                </AlertDescription>
            </Alert>
        );
    }
}



// export async function generateMetadata() {
//     try {
//         const client = getClient();
//         const { data } = await client.query({ query: GET_HOME_DATA });
//
//         const seo = data?.salon?.seo || {};
//         return {
//             title: seo.title || "Компания",
//             description: seo.metaDesc || "Компания",
//         };
//     } catch (error) {
//         return {
//             title: "Ошибка",
//             description: "Не удалось загрузить мета-данные",
//         };
//     }
// }