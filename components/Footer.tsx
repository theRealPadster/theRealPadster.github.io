import Image from 'next/image'
import styles from '../styles/Home.module.scss'

const Footer = () => {
  return (
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
  );
};

export default Footer;
