import { useRef } from 'react'
import componentStyles from '../../styles/Components.module.css'
import styles from '../../styles/Aboutme.module.css'
import useVisible from '../../hooks/useVisible'
import Subtitle from '../Subtitle'

const Aboutme = () => {
  const aboutmeRef = useRef()
  const { visible: aboutmeVisible } = useVisible({ visorRef: aboutmeRef })

  return (
    <section className={componentStyles.section_spacer} ref={aboutmeRef}>
      <div
        className={`${styles.paragraph} ${componentStyles.move}`}
        visoring={aboutmeVisible ? 1 : 0}
      >
        <Subtitle subtitle='Sobre mi' id='aboutme' />
        <p>
          Mi nombre es Jonathan García González. Soy desarrollador de software,
          aunque actualmente cumplo el rol de Administrador de Soporte Interno
          para la empresa donde trabajo. Aquí he podido aprender muchas cosas,
          pero sobre todo, descubrí mi pasión por brindar soluciones a los
          usuarios.
        </p>
        <p>
          Hablando de desarrollo, me enfoco en la programación de aplicaciones
          con JavaScript, con lo que he creado varias aplicaciones tanto
          Front-end como Back-end.
        </p>
        <p>
          Junto a esto, intento compartir mis conocimientos de alguna manera,
          por lo que también cree contenido en mi canal de YouTube: Davdev.
        </p>
        <p>
          Más allá de la programación, tengo otros hobbies, como escuchar
          música, ver series, hacer ejercicio y leer.
        </p>
        <p>
          También tengo otras áreas de interés, como la Mecatrónica o la
          Inteligencia Artificial, cosas que espero tener la oportunidad de
          estudiar en el futuro.{' '}
        </p>
        <p>
          Al final de este sitio, dejo mis redes sociales, en caso de que te
          interese contactarme. ¡Bienvenido!
        </p>
      </div>
    </section>
  )
}

export default Aboutme
