import Link from 'next/link'
import styles from '../styles/EpisodeInfoCard.module.css'

interface EpisodeInfoCardProps{
  id: number
}

const EpisodeInfoCard = ({ id }: EpisodeInfoCardProps) => {
  return (
    <div className={styles.episodeInfoCardRoot}>
      <p>Episode Info</p>
      <span className={styles.episodeIdText}>
        {id}
      </span>
      <Link href='/'>see more</Link>
    </div>
  )
}

export default EpisodeInfoCard
