import { FaYoutube, FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import styles from '../../styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer} id='contact'>
      <ul>
        <li>
          <a
            href='https://www.instagram.com/jona_davdev/'
            target='_blank'
            rel='noreferrer'
          >
            <FaYoutube />
          </a>
        </li>
        <li>
          <a
            href='https://www.youtube.com/channel/UCv3xpBFtUyuc5Ple62kOYSA'
            target='_blank'
            rel='noreferrer'
          >
            <FaInstagram />
          </a>
        </li>
        <li>
          <a
            href='https://github.com/jonathangg03'
            target='_blank'
            rel='noreferrer'
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            href='https://www.linkedin.com/in/jonathan-dav-dev/'
            target='_blank'
            rel='noreferrer'
          >
            <FaLinkedinIn />
          </a>
        </li>
      </ul>
      <p>Creado por Jonathan García González: jona03g97@gmail.com</p>
    </footer>
  )
}

export default Footer
