'use client'

import { ApolloClient, InMemoryCache } from '@apollo/client'
import { BASIS_URL } from '@/config/config'

const apolloClient = new ApolloClient({
    uri: `${BASIS_URL}/graphql`,
    cache: new InMemoryCache(),
})

export default apolloClient
