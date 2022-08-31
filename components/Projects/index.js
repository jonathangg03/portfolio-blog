import Project from '../Project'
import Subtitle from '../Subtitle'
import componentStyles from '../../styles/Components.module.css'
import styles from '../../styles/Projects.module.css'

const Projects = () => {
  return (
    <section className={componentStyles.section_spacer}>
      <Subtitle subtitle='Projectos' id='projects' />
      <div className={styles.projects}>
        <Project
          id='a'
          title='Chat'
          description='Chat con Web Sockets'
          url='https://megabyte-chat.vercel.app/'
          ghUrl='https://github.com/jonathan-cursos/megabyte_chat'
        />
        <Project
          id='b'
          title='Mirio'
          description='Red social'
          url='https://miriio.vercel.app'
          ghUrl='https://github.com/jonathangg03/social-media-frontend'
        />
        <Project
          id='c'
          title='Galería'
          description='Galería de imagenes'
          url='https://davdev-gallery-nextui.vercel.app/'
          ghUrl='https://github.com/jonathangg03/davdev-gallery-nextui'
        />
        <Project
          id='d'
          title='Autenticación'
          description='Autenticaciones con Passport.js'
          url='https://authenticate-app-frontend.herokuapp.com/'
          ghUrl='https://github.com/jonathangg03/davdev-gallery-nextui'
        />
        <Project
          id='e'
          title='Youtube Playlist'
          description='Usando la API de YouTube'
          url='https://youtube-playlist-ten.vercel.app/'
          ghUrl='https://github.com/jonathangg03/youtube-playlist'
        />
      </div>
    </section>
  )
}

export default Projects
