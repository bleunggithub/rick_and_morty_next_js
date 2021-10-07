import { useRouter } from "next/dist/client/router"
import { useState, useEffect } from "react"

const useCards = <T>() => {
	const router = useRouter()

	const [activeId, setActiveId] = useState<null | string>(null)
	const [activeCardData, setActiveCardData] = useState<null | T>(null)

	const toggleCard = (route: string, cardData: T | null, id: string | null) => {
		router.push(route, route, { shallow: true })
		setActiveCardData(cardData)
		setActiveId(id)
	}

	useEffect(() => {
		router.query.id
			? setActiveId(
					typeof router.query.id === "string"
						? router.query.id
						: router.query.id[0]
			  )
			: setActiveId(null)
	}, [router.query.id])

	return {
		activeId,
		toggleCard,
		activeCardData,
	}
}

export default useCards
