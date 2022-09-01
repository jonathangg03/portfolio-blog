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
            <div className={styles.selector}></div>
          </li>
          <li>
            <Link href='/'>
              <a>Inicio</a>
            </Link>
            <div className={styles.selector}></div>
          </li>
          <li>
            <a href='#aboutme'>Sobre mi</a>
            <div className={styles.selector}></div>
          </li>
          <li>
            <a href='#habilities'>Habilidades</a>
            <div className={styles.selector}></div>
          </li>
          <li>
            <a href='#projects'>Proyectos</a>
            <div className={styles.selector}></div>
          </li>
          <li>
            <a href='#videos'>Videos</a>
            <div className={styles.selector}></div>
          </li>
          <li>
            <a href='#contact'>Contacto</a>
            <div className={styles.selector}></div>
          </li>
          <li>
            <a href='#'>Curriculum</a>
            <div className={styles.selector}></div>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
