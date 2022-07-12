import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl59xe6e165gj01ukgr4a4sir/master',
    cache: new InMemoryCache()
})