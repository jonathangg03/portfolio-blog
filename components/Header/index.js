import styles from '../../styles/Header.module.css'

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
      <ul className={styles.menu}>
        <li>Blog</li>
        <li>Inicio</li>
        <li>Sobre mi</li>
        <li>Habilidades</li>
        <li>Proyectos</li>
        <li>Videos</li>
        <li>Contacto</li>
        <li>Curriculum</li>
      </ul>
    </header>
  )
}

export default Header
