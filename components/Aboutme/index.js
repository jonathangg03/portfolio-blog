import { useRef } from 'react'
import componentStyles from '../../styles/Components.module.css'
import useVisible from '../../hooks/useVisible'
import Subtitle from '../Subtitle'

const Aboutme = () => {
  const aboutmeRef = useRef()
  const { visible: aboutmeVisible } = useVisible({ visorRef: aboutmeRef })

  return (
    <section
      className={componentStyles.section_spacer}
      visible={aboutmeVisible}
      ref={aboutmeRef}
    >
      <div className={componentStyles.move} visoring={aboutmeVisible ? 1 : 0}>
        <Subtitle subtitle='Sobre mi' id='aboutme' />
        <p className={componentStyles.paragraph}>
          Mi nombre es Jonathan David García González. Soy desarrollador web y
          backend, especializado en la creación de aplicaciones con React.js y
          de APIs REST con Node.js. Además, soy estudiante de Inglés y de
          Ingeniería de sistemas. Me apasiona todo lo relacionado con la
          tecnología, la programación, crear y el aprendizaje de cosas nuevas.
          Por eso decidí estudiar esta carrera, ya que tengo grandes proyectos
          en mente que deseo desarrollar a lo largo de mi vida. Más allá de la
          programación, me encanta hacer actividad física, viajar, los
          videojuegos y la música. Al final de esta página dejo un formulario de
          contacto, siéntete libre de usarlo en caso de que desees que forme
          parte de tu equipo, o para lo que necesites; así como de visitar mis
          redes sociales.
        </p>
      </div>
    </section>
  )
}

export default Aboutme
