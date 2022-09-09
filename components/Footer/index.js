import { FaYoutube, FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='footer' id='contact'>
      <ul className='media'>
        <li>
          <a
            href='https://www.instagram.com/jona_davdev/'
            target='_blank'
            rel='noreferrer'
          >
            <FaYoutube />
          </a>
          <div className='selector'></div>
        </li>
        <li>
          <a
            href='https://www.youtube.com/channel/UCv3xpBFtUyuc5Ple62kOYSA'
            target='_blank'
            rel='noreferrer'
          >
            <FaInstagram />
          </a>
          <div className='selector'></div>
        </li>
        <li>
          <a
            href='https://github.com/jonathangg03'
            target='_blank'
            rel='noreferrer'
          >
            <FaGithub />
          </a>
          <div className='selector'></div>
        </li>
        <li>
          <a
            href='https://www.linkedin.com/in/jonathan-dav-dev/'
            target='_blank'
            rel='noreferrer'
          >
            <FaLinkedinIn />
          </a>
          <div className='selector'></div>
        </li>
      </ul>
      <p>Creado por Jonathan García González: jona03g97@gmail.com</p>
    </footer>
  )
}

export default Footer
