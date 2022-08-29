import { useState } from 'react'
import Project from '../Project'
import Subtitle from '../Subtitle'
import componentStyles from '../../styles/Components.module.css'
import styles from '../../styles/Projects.module.css'
// import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

const Projects = () => {
  return (
    <section className={componentStyles.section_spacer}>
      <Subtitle subtitle='Projectos' />
      <div className={styles.projects}>
        <Project
          id='a'
          title='Chat'
          image='https://res.cloudinary.com/dklpyhteh/image/upload/v1661742489/Portfolio/chat_bwtm5f.jpg'
        />
        <Project
          id='b'
          title='Mirio'
          image='https://res.cloudinary.com/dklpyhteh/image/upload/v1661742489/Portfolio/miriio_qn4y7e.png'
        />
        <Project
          id='c'
          title='Galería'
          image='https://res.cloudinary.com/dklpyhteh/image/upload/v1661742489/Portfolio/gallery_cvrhcz.png'
        />
        <Project
          id='d'
          title='Autenticación'
          image='https://res.cloudinary.com/dklpyhteh/image/upload/v1661742489/Portfolio/authenticate_ax8jgq.jpg'
        />
        <Project
          id='e'
          title='Youtube Playlist'
          image='https://res.cloudinary.com/dklpyhteh/image/upload/v1661742489/Portfolio/playlist_fwcrav.png'
        />
      </div>
    </section>
  )
}

export default Projects
