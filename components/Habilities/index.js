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
        />
        <Hability number='1' Icon={FaNodeJs} name='Creación de APIs REST' />
        <Hability
          number='2'
          Icon={FaLaptopCode}
          name='Creación de Landing Pages'
        />
        <Hability
          number='3'
          Icon={FaGitAlt}
          name='Control de versiones con Git'
        />
      </div>
    </section>
  )
}

export default Habilities
