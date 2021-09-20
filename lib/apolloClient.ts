import { useMemo } from "react"
import {
	ApolloClient,
	HttpLink,
	InMemoryCache,
	NormalizedCacheObject,
} from "@apollo/client"
import { relayStylePagination } from "@apollo/client/utilities"

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined

const createApolloClient = () => {
	return new ApolloClient({
		ssrMode: typeof window === "undefined",
		link: new HttpLink({
			uri: process.env.NEXT_PUBLIC_API_URI,
		}),
		cache: new InMemoryCache({
			typePolicies: {
				Query: {
					fields: {
						episodes: relayStylePagination(),
					},
				},
			},
		}),
	})
}

export const initializeApollo = (
	initialState: NormalizedCacheObject | null = null
) => {
	const _apolloClient = apolloClient ?? createApolloClient()

	if (initialState) {
		const existingCache = _apolloClient.extract()
		_apolloClient.cache.restore({ ...existingCache, ...initialState })
	}

	// For SSG and SSR always create a new Apollo Client
	if (typeof window === "undefined") return _apolloClient

	// Create the Apollo Client once in the client
	if (!apolloClient) apolloClient = _apolloClient
	return _apolloClient
}

export const useApollo = (initialState: any) => {
	const store = useMemo(() => initializeApollo(initialState), [initialState])
	return store
}
