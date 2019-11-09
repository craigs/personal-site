import ApolloClient from 'apollo-boost'
import getConfig from 'next/config'
import fetch from 'node-fetch'

const { publicRuntimeConfig } = getConfig()
const uri = publicRuntimeConfig.GRAPHCMS_API

export const Api = new ApolloClient({ fetch, uri })
