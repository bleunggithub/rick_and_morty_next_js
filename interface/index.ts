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
