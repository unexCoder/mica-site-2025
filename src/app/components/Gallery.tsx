import Image from "next/legacy/image"
import styles from './gallery.module.css'

type Props = {
    images: string[];
}

export default function Gallery({ images }: Props) {
    return (
        <div className={styles.container}>
            {/* Image Galley */}
            <h2>Gallery</h2>
            <div className={styles.imgContainer}>
                {images.map((e,i) => (
                    <Image
                        key={i}
                        src={e}
                        // layout='responsive'
                        width={500*0.95}
                        height={300*0.95}
                        alt="unexcoder"
                        quality={100}
                        priority={true}
                    />
                ))}
            </div>
        </div>
    )
}