import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Home.module.scss'
import { useDarkMode } from 'next-dark-mode'
import DarkModeToggle from '../../components/DarkModeToggle'
import Footer from '../../components/Footer'

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
          <Link href="/projects">
            <a className={styles.card}>
              <h2>Projects &rarr;</h2>
              <p>Projects I&apos;ve worked on</p>
            </a>
          </Link>

          <Link href="/contact">
            <a className={styles.card}>
              <h2>Contact &rarr;</h2>
              <p>Let&apos;s get in touch</p>
            </a>
          </Link>

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

      <Footer />
    </div>
  )
}

export default Home
