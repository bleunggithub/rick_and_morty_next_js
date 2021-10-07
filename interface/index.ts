export type Collection<Keys extends string, Type> = {
	[Key in Keys]?: Type
}

export type Route = "episodes" | "characters" | "locations"

export interface Info {
	count: number
	next: number | null
	pages: number
	prev: number | null
}

export interface BriefList {
	id: string
	name: string
}

export const routeOptions: Route[] = ["episodes", "characters", "locations"]
export interface CardListProps<T> {
	cardData?: T[]
	onClick: (route: string, cardData: T | null, id: string | null) => void
	nextPage: null | boolean
	handleLoadMore: () => void
	loading: boolean
	error: string | null
}

export interface ExpandedCardProps<T> {
	activeId: string | null
	activeCardData: T | null
	onClick: (route: string, cardData: T | null, id: string | null) => void
}
