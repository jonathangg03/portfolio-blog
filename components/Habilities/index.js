import Subtitle from '../Subtitle'
import componentStyles from '../../styles/Components.module.css'
import Hability from '../Hability'
import { FaReact, FaNodeJs, FaLaptopCode, FaGitAlt } from 'react-icons/fa'
import styles from '../../styles/Habilities.module.css'

const Habilities = () => {
  return (
    <section className={componentStyles.section_spacer}>
      <Subtitle subtitle='Habilidades' />
      <div className={styles.habilities_container}>
        <Hability
          number='0'
          Icon={FaReact}
          name='Desarrollo de Single Page Applications'
          description='Desarrollo de Single Page Applications y PWA tanto con React.js como con Next.js.'
        />
        <Hability
          number='1'
          Icon={FaNodeJs}
          name='Creación de APIs REST'
          description='Programación de APIs REST con Node.js y Express.js.'
        />
        <Hability
          number='2'
          Icon={FaLaptopCode}
          name='Creación de Landing Pages'
          description='Creación de landing pages con HTML, CSS/SASS y JavaScript.'
        />
        <Hability
          number='3'
          Icon={FaGitAlt}
          name='Control de versiones con Git'
          description='Control de versiones con Git y manejo de repositorios con Github.'
        />
      </div>
    </section>
  )
}

export default Habilities
