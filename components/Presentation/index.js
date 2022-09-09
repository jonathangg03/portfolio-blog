import { useRef } from 'react'
import useVisible from '../../hooks/useVisible'

const Presentation = () => {
  const presentationRef = useRef()
  const { visible: presentationVisible } = useVisible({
    visorRef: presentationRef,
    threshold: 0.3
  })

  return (
    <section className='section_spacer' ref={presentationRef}>
      <div className='presentation'>
        <div
          className={'greeting moveLeft'}
          visoring={presentationVisible ? 1 : 0}
        >
          <p>Hola!</p>
          <p>Mi nombre es Jonathan García González.</p>
          <p>Soy desarrollador de software.</p>
        </div>
        <img
          src='https://res.cloudinary.com/dklpyhteh/image/upload/v1661315151/Portfolio/profile-pic_vabmdx.png'
          alt=''
          className={'picture moveRight'}
          visoring={presentationVisible ? 1 : 0}
        />
      </div>
    </section>
  )
}

export default Presentation
