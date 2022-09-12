import { useState } from 'react'
import { IoMdMenu } from 'react-icons/io'
import Logo from '../Logo'
import Link from 'next/link'

const Header = ({ options }) => {
  const [menuVisibility, setMenuVisibility] = useState(false)

  const handleMenu = (event) => {
    setMenuVisibility(false)
  }

  return (
    <header className='header'>
      <Logo />
      <nav className='nav' visibility={menuVisibility ? 1 : 0}>
        <ul className='menu'>
          {
            options?.map(option => {
              if (option.link.includes('.pdf')) return <li key={option.name}>
                <a
                  href={option.link}
                  alt='Curriculum'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {option.name}
                </a>
                <div className='selector'></div>
              </li>

              if (option.link.includes('/')) return <li key={option.name}>
                <Link href={option.link}>
                  <a onClick={handleMenu}>{option.name}</a>
                </Link>
                <div className='selector'></div>
              </li>

              if (option.link.includes('#')) return <li key={option.name}>
                <a href={option.link} onClick={handleMenu}>
                  {option.name}
                </a>
                <div className='selector'></div>
              </li>
            })
          }
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
