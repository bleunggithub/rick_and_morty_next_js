import { useMemo } from "react"
import {
	ApolloClient,
	HttpLink,
	InMemoryCache,
	NormalizedCacheObject,
	FieldPolicy,
	FetchPolicy,
	ApolloError,
} from "@apollo/client"

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined

const mergePagination: FieldPolicy = {
	keyArgs: ["filter"],
	merge(existing, incoming) {
		return {
			...incoming,
			results: existing
				? [...existing.results, ...incoming.results]
				: incoming.results,
		}
	},
}

const fields = {
	episodes: mergePagination,
	characters: mergePagination,
	locations: mergePagination,
}

const createApolloClient = () => {
	return new ApolloClient({
		ssrMode: typeof window === "undefined",
		link: new HttpLink({
			uri: process.env.NEXT_PUBLIC_API_URI,
		}),
		cache: new InMemoryCache({
			typePolicies: {
				Query: {
					fields,
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

	if (typeof window === "undefined") return _apolloClient

	if (!apolloClient) apolloClient = _apolloClient
	return _apolloClient
}

export const useApollo = (initialState: any) => {
	const store = useMemo(() => initializeApollo(initialState), [initialState])
	return store
}

export const searchFetchOptions = (
	setError: React.Dispatch<React.SetStateAction<string | null>>,
	searchInput: string | string[] | undefined
) => {
	return {
		notifyOnNetworkStatusChange: true,
		fetchPolicy: "cache-first" as FetchPolicy,
		nextFetchPolicy: "cache-first" as FetchPolicy,
		onError: (err: ApolloError) => {
			console.error(err)
			setError(err.message)
		},
		variables: {
			filter: {
				name: searchInput,
			},
		},
	}
}
