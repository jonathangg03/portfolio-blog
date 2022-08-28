import { useState } from 'react'
import Project from '../Project'
import Subtitle from '../Subtitle'
import componentStyles from '../../styles/Components.module.css'
import styles from '../../styles/Projects.module.css'
// import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

const Projects = () => {
  const [selection, setSelection] = useState({
    a: false,
    b: false,
    c: true,
    d: false,
    e: false
  })

  const handleSelection = (event) => {
    if (event.target.tagName === 'ARTICLE') {
      console.log(event.target.id)
      setSelection({
        ...selection,
        [event.target.id]: true
      })
    }
  }

  return (
    <section className={componentStyles.section_spacer}>
      <Subtitle subtitle='Projectos' />
      <div className={styles.projects} onClick={handleSelection}>
        <Project selected={selection.a} id='a' />
        <Project selected={selection.b} id='b' />
        <Project selected={selection.c} id='c' />
        <Project selected={selection.d} id='d' />
        <Project selected={selection.e} id='e' />
      </div>
    </section>
  )
}

export default Projects
