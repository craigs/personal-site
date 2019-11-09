import ApolloClient from 'apollo-boost'
import fetch from 'node-fetch'

const uri = process.env.GRAPHCMS_API

export const Api = new ApolloClient({ fetch, uri })
