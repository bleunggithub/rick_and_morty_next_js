import { BriefList, Info } from "."
import { Character } from "./characters"

export interface LocationsDetails {
	locations: Locations
}
export interface LocationDetails {
	location: Location
}

export interface Locations {
	info: Info
	results: Location[]
}

export interface Location extends BriefList {
	type: string
	dimension: string
	residents: Character[]
}

export interface BriefLocationList extends BriefList {}
