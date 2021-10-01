import { DocumentNode } from "graphql"
import { Route, Collection } from "."
import { SEARCH_CHARACTERS_BY_NAME } from "../GraphQL/characters"
import { SEARCH_EPISODES_BY_NAME } from "../GraphQL/episodes"
import { SEARCH_LOCATIONS_BY_NAME } from "../GraphQL/locations"

export type Query = Route

export const QueryMap: Collection<Query, DocumentNode> = {
	episodes: SEARCH_EPISODES_BY_NAME,
	characters: SEARCH_CHARACTERS_BY_NAME,
	locations: SEARCH_LOCATIONS_BY_NAME,
}
