import { useState } from 'react'
import { IoMdMenu } from 'react-icons/io'
import Logo from '../Logo'
import Link from 'next/link'

const Header = () => {
  const [menuVisibility, setMenuVisibility] = useState(false)

  const handleMenu = (event) => {
    setMenuVisibility(false)
  }

  return (
    <header className='header'>
      <Logo />
      <nav className='nav' visibility={menuVisibility ? 1 : 0}>
        <ul className='menu'>
          {/* <li>
            <Link href='/blog'>
              <a onClick={handleMenu}>Blog</a>
            </Link>
            <div className='selector'></div>
          </li> */}
          <li>
            <Link href='/'>
              <a onClick={handleMenu}>Inicio</a>
            </Link>
            <div className='selector'></div>
          </li>
          <li>
            <a href='#aboutme' onClick={handleMenu}>
              Sobre mi
            </a>
            <div className='selector'></div>
          </li>
          <li>
            <a href='#habilities' onClick={handleMenu}>
              Habilidades
            </a>
            <div className='selector'></div>
          </li>
          <li>
            <a href='#projects' onClick={handleMenu}>
              Proyectos
            </a>
            <div className='selector'></div>
          </li>
          <li>
            <a href='#videos' onClick={handleMenu}>
              Videos
            </a>
            <div className='selector'></div>
          </li>
          <li>
            <a href='#contact' onClick={handleMenu}>
              Contacto
            </a>
            <div className='selector'></div>
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
            <div className='selector'></div>
          </li>
        </ul>
      </nav>
      <button
        className='menuActivator'
        onClick={() => setMenuVisibility((prev) => !prev)}
      >
        <IoMdMenu />
      </button>
    </header>
  )
}

export default Header
