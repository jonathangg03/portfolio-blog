import styles from '../../styles/Presentation.module.css'

const Presentation = () => {
  return (
    <div className={styles.presentation}>
      <div className={styles.greeting}>
        <p>Hola!</p>
        <p>Mi nombre es Jonathan García González</p>
        <p>Soy desarrollador de software.</p>
      </div>
      <img
        src='https://res.cloudinary.com/dklpyhteh/image/upload/v1661315151/Portfolio/profile-pic_vabmdx.png'
        alt=''
        className={styles.picture}
      />
    </div>
  )
}

export default Presentation
