import styles from './bio.module.css';
import data from "../../../data/bio.json";
import Image from 'next/legacy/image';

import Link from 'next/link';

export default function Bio() {
  return (
    <>
      <div className={styles.container}>
        {data.bio.map((entry: string, index: number) => (
          <div key={index} className={styles.bio} ><p>{entry}</p></div>
        ))}

        {/* Footer image */}
        {data.biopic && (
          <div className={styles.biopic}>
            <Image
              src={data.biopic}
              // layout='responsive'
              width={1000}
              height={600}
              alt="unexcoder"
              quality={100}
              priority={true}
            />
          </div>
        )}


      </div>
    </>
  );
}
