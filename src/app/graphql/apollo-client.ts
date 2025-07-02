import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

export function getClient(locale: string = 'en') {
    return new ApolloClient({
        ssrMode: true,
        link: new HttpLink({
            uri: process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_ENDPOINT,
            // uri: 'https://mebel-app-backend-strapi-docker.onrender.com/graphql',
            headers: {
                'Accept-Language': locale,
            },
            fetch,
        }),
        cache: new InMemoryCache(),
    });
}
