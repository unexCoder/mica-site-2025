import Image from 'next/image'
import styles from './card.module.css'
import Link from 'next/link'

type Props = {
    title:string,
    image:string
}

export default function Card({ title,image }: Props) {
  return (
      <div className={styles.card}>
        {/* Image Section */}
        <Link href={'/'+title}>
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
        </Link>
        
    </div>
  )
}