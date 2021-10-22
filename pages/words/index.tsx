import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/WordsByLevel.module.css'

const LEVELS = [4,5,6,7,8];

const WordsByLevel: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          {
            LEVELS.map(level => (
                <Link href={`/words/${level}`} key={level} passHref>
                  <div className={styles.card}>
                    <h2>Level {level}</h2>
                  </div>
                </Link>
            ))
          }
        </div>
      </main>
    </div>
  )
}

export default WordsByLevel
