import Subtitle from "../Subtitle"
import componentStyles from '../../styles/Components.module.css'
import Hability from "../Hability"
import styles from '../../styles/Habilities.module.css'

const Habilities = () => {
  return <section className={componentStyles.section_spacer}>
    <Subtitle subtitle='Habilidades' />
    <div className={styles.habilities_container}>
      <Hability />
    </div>
  </section>
}

export default Habilities