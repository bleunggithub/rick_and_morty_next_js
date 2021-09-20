import Link from 'next/link'
import { Episode } from '../interface'
import styles from '../styles/EpisodeInfoCard.module.css'

interface EpisodeInfoCardProps{
  episode: Episode
}

const EpisodeInfoCard = ({ episode }: EpisodeInfoCardProps) => {

  return (
    <div className={styles.episodeInfoCardRoot}>
      <p className={styles.titleText}>Episode Name</p>
      <p className={styles.detailText}>{episode.name}</p>

      <p className={styles.titleText}>Air Date</p>
      <p className={styles.detailText}>{episode.air_date}</p>

      <p className={styles.titleText}>Created</p>
      <p className={styles.detailText}>{new Date(episode.created).toLocaleDateString()}</p>

      <p className={styles.titleText}>Characters</p>
      {episode.characters.slice(0,3).map((ch)=><p className={styles.detailText} key={ch.id}>{ch.name}</p>)}

      <span className={styles.episodeIdText}>{episode.id}</span>
      <Link href={`/episode/${episode.id}`}>... see more</Link>
    </div>
  )
}

export default EpisodeInfoCard
