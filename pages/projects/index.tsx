import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.scss'
import { useDarkMode } from 'next-dark-mode'
import DarkModeToggle from '../../components/DarkModeToggle'

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
        <title>Isaac Maier | Projects</title>
        <meta name="description" content="Personal portfolio of web development, photography, and desktop customization by Isaac Maier" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Projects
        </h1>

        <DarkModeToggle />

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="/projects" className={styles.card}>
            <h2>Projects &rarr;</h2>
            <p>Projects I&apos;ve worked on</p>
          </a>

          <a href="/contact" className={styles.card}>
            <h2>Contact &rarr;</h2>
            <p>Let&apos;s get in touch</p>
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
