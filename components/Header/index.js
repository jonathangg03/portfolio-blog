import styles from '../../styles/Header.module.css'
import Link from 'next/link'

const Header = () => {
  return (
    <header className={styles.header}>
      <figure className={styles.logo__container}>
        <p className={styles.logo}>
          {'<'}
          <span>davdev</span>
          {'/>'}
        </p>
      </figure>
      <nav>
        <ul className={styles.menu}>
          <li>
            <Link href='/blog'>
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a>Inicio</a>
            </Link>
          </li>
          <li>
            <a href='#aboutme'>Sobre mi</a>
          </li>
          <li>
            <a href='#habilities'>Habilidades</a>
          </li>
          <li>
            <a href='#projects'>Proyectos</a>
          </li>
          <li>
            <a href='#videos'>Videos</a>
          </li>
          <li>
            <a href='#contact'>Contacto</a>
          </li>
          <li>
            <a href='#'>Curriculum</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
