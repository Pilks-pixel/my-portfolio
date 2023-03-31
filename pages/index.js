import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'


export default function Home() {
  return (
    <>
      <Head>
        <title>Peter Pilkington | web developer portfolio</title>
        <meta name="description" content="peter pilkington junior software developer portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.description}>
          <h2 className={styles.description__name}>Peter Pilkington</h2>
          <h1 className={styles.description__job}>full Stack developer</h1>
         
      </header>

      <main className={styles.main}>

        <nav className={styles.center}>
          <h2 className={styles.center__projects}>&lt; Projects</h2>
          <h2 className={styles.center__projects} >About / &gt;</h2>
          
        </nav>

      </main>

      <footer className={styles.contact}>
        <h2>contact</h2>
        <div className={styles.contact__links}>
          <a href='https://www.linkedin.com/in/peter-pilkington-322262107/' target='_blank'>linkedin</a>
          <a href='https://github.com/Pilks-pixel' target='_blank'>github</a>
        </div>
         
      </footer>
    </>
  )
}
