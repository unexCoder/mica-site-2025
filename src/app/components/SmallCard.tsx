import Link from 'next/link'
import styles from './card.module.css'

type Props = {
    title:string,
    text:string
}

export default function Card({ title,text }: Props) {
  return (
      <div className={styles.cardsmall}>
        <Link href={'/'+title}>
          <h4>{title}</h4>
          <h5>{text}</h5>
        </Link>    
    </div>
  )
}