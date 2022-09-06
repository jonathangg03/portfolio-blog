import { useRef } from 'react'
import useVisible from '../../hooks/useVisible'
import styles from '../../styles/Presentation.module.css'
import componentStyles from '../../styles/Components.module.css'

const Presentation = () => {
  const presentationRef = useRef()
  const { visible: presentationVisible } = useVisible({
    visorRef: presentationRef,
    threshold: 0.3
  })

  return (
    <section className={componentStyles.section_spacer} ref={presentationRef}>
      <div className={`${styles.presentation} `}>
        <div
          className={`${styles.greeting} ${styles.moveLeft}`}
          visoring={presentationVisible ? 1 : 0}
        >
          <p>Hola!</p>
          <p>Mi nombre es Jonathan García González.</p>
          <p>Soy desarrollador de software.</p>
        </div>
        <img
          src='https://res.cloudinary.com/dklpyhteh/image/upload/v1661315151/Portfolio/profile-pic_vabmdx.png'
          alt=''
          className={`${styles.picture} ${styles.moveRight}`}
          visoring={presentationVisible ? 1 : 0}
        />
      </div>
    </section>
  )
}

export default Presentation
