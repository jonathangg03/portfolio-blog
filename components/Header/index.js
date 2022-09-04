import { useState } from 'react'
import { IoMdMenu } from 'react-icons/io'
import styles from '../../styles/Header.module.css'
import Link from 'next/link'

const Header = () => {
  const [menuVisibility, setMenuVisibility] = useState(false)

  const handleMenu = (event) => {
    setMenuVisibility(false)
  }

  return (
    <header className={styles.header}>
      <div className={styles.logo__container}>
        <p className={styles.logo}>
          {'<'}
          <span>davdev</span>
          {'/>'}
        </p>
      </div>
      <nav className={styles.nav} visibility={menuVisibility ? 1 : 0}>
        <ul className={styles.menu}>
          {/* <li>
            <Link href='/blog'>
              <a onClick={handleMenu}>Blog</a>
            </Link>
            <div className={styles.selector}></div>
          </li> */}
          <li>
            <Link href='/'>
              <a onClick={handleMenu}>Inicio</a>
            </Link>
            <div className={styles.selector}></div>
          </li>
          <li>
            <a href='#aboutme' onClick={handleMenu}>
              Sobre mi
            </a>
            <div className={styles.selector}></div>
          </li>
          <li>
            <a href='#habilities' onClick={handleMenu}>
              Habilidades
            </a>
            <div className={styles.selector}></div>
          </li>
          <li>
            <a href='#projects' onClick={handleMenu}>
              Proyectos
            </a>
            <div className={styles.selector}></div>
          </li>
          <li>
            <a href='#videos' onClick={handleMenu}>
              Videos
            </a>
            <div className={styles.selector}></div>
          </li>
          <li>
            <a href='#contact' onClick={handleMenu}>
              Contacto
            </a>
            <div className={styles.selector}></div>
          </li>
          <li>
            <a
              href='/files/curriculum.pdf'
              alt='Curriculum'
              target='_blank'
              rel='noopener noreferrer'
            >
              Curriculum
            </a>
            <div className={styles.selector}></div>
          </li>
        </ul>
      </nav>
      <button
        className={styles.menuActivator}
        onClick={() => setMenuVisibility((prev) => !prev)}
      >
        <IoMdMenu />
      </button>
    </header>
  )
}

export default Header
