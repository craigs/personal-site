import { InMemoryCache } from 'apollo-cache-inmemory'
import ApolloClient from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import fetch from 'isomorphic-fetch'

const uri = process.env.NEXT_PUBLIC_GRAPHCMS_API
const cache = new InMemoryCache()
const link = createHttpLink({ fetch, uri })

export const Api = new ApolloClient({ cache, link })
