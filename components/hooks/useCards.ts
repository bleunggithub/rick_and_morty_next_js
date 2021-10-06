import { NextRouter } from "next/dist/client/router"
import { useState, useEffect } from "react"
import { Character } from "../../interface/characters"

const useCards = (router: NextRouter) => {
	const [activeId, setActiveId] = useState<null | string>(null)
	const [activeCardData, setActiveCardData] = useState<null | Character>(null)

	const toggleCard = (
		route: string,
		cardData: Character | null,
		id: string | null
	) => {
		router.push(route, route, { shallow: true })
		setActiveCardData(cardData)
		setActiveId(id)
	}

	useEffect(() => {
		router.query.id &&
			setActiveId(
				typeof router.query.id === "string"
					? router.query.id
					: router.query.id[0]
			)
	}, [router.query.id])

	return {
		activeId,
		toggleCard,
		activeCardData,
	}
}

export default useCards
