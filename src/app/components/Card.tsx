import Image from "next/legacy/image"
import styles from './card.module.css'

type Props = {
  title: string,
  image: string
}

export default function Card({ title, image }: Props) {
  return (
    <div className={styles.card}>
      {/* Image Section */}
      <Image
        src={image}
        layout='responsive'
        width={5}
        height={3}
        alt="unexcoder"
        quality={100}
        priority={true}
      />
      <h4>{title}</h4>
    </div>
  )
}