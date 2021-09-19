import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { useDarkMode } from 'next-dark-mode'

const Home: NextPage = () => {

  const {
    autoModeActive,    // boolean - whether the auto mode is active or not
    autoModeSupported, // boolean - whether the auto mode is supported on this browser
    darkModeActive,    // boolean - whether the dark mode is active or not
    switchToAutoMode,  // function - toggles the auto mode on
    switchToDarkMode,  // function - toggles the dark mode on
    switchToLightMode, // function - toggles the light mode on
  } = useDarkMode();


  return (
    // TODO: there is probably a better way to achieve dark mode...
    <div className={`${styles.container} ${darkModeActive ? styles.dark : ''}`}>
      <Head>
        <title>Isaac Maier | Full Stack Developer</title>
        <meta name="description" content="Personal portfolio of web development, photography, and desktop customization by Isaac Maier" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>

        <div>
          <h2>Dark mode active?</h2>
          <p>{darkModeActive ? 'Yes' : 'No'}</p>
          <button onClick={switchToDarkMode}>Switch to dark mode</button>
          <button onClick={switchToLightMode}>Switch to light mode</button>
        </div>
      </main>

      <footer className={styles.footer}>

        <a href="https://github.com/theRealPadster" target="_blank" rel="noopener noreferrer">
          <Image src="/icons/social/github.svg" alt="GitHub logo" width={32} height={32} />
        </a>
        <a href="https://therealpadster.deviantart.com" target="_blank" rel="noopener noreferrer">
          <Image src="/icons/social/deviantart.svg" alt="DeviantART logo" width={32} height={32} />
        </a>
        <a href="https://linkedin.com/in/isaac-maier" target="_blank" rel="noopener noreferrer">
          <Image src="/icons/social/linkedin.svg" alt="LinkedIn logo" width={32} height={32} />
        </a>
        <a href="https://www.instagram.com/thisisisaacm/" target="_blank" rel="noopener noreferrer">
          <Image src="/icons/social/instagram.svg" alt="Instagram logo" width={32} height={32} />
        </a>
        <a href="https://open.spotify.com/user/therealpadster" target="_blank" rel="noopener noreferrer">
          <Image src="/icons/social/spotify.svg" alt="Spotify logo" width={32} height={32} />
        </a>
        <a href="https://steamcommunity.com/id/theRealPadster/" target="_blank" rel="noopener noreferrer">
          <Image src="/icons/social/steam.svg" alt="Steam logo" width={32} height={32} />
        </a>

      </footer>
    </div>
  )
}

export default Home
