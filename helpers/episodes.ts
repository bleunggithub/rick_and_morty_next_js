export const parseEpisodeSeasons = (episode: string) => {
	const splitEpisodeString = episode.split("E")

	return `${splitEpisodeString[0].replace("S", "Season ")} | Episode ${
		splitEpisodeString[1]
	}`
}
