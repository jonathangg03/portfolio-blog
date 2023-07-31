import Project from '../Project'
import Subtitle from '../Subtitle'
import useVisible from '../../hooks/useVisible'
import { useRef } from 'react'

const Projects = () => {
  const projectsRef = useRef()
  const { visible: projectsVisible } = useVisible({
    visorRef: projectsRef
  })
  return (
    <section className='section_spacer'>
      <div className='move' visoring={projectsVisible ? 1 : 0}>
        <Subtitle subtitle='Proyectos' id='projects' />
        <div className='projects' ref={projectsRef}>
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
          {/* <Project
            id='d'
            title='Autenticación'
            description='Autenticaciones con Passport.js'
            url='https://authenticate-app-full.onrender.com'
            ghUrl='https://github.com/jonathangg03/davdev-gallery-nextui'
          /> */}
          <Project
            id='e'
            title='Youtube Playlist'
            description='Usando la API de YouTube'
            url='https://youtube-playlist-ten.vercel.app/'
            ghUrl='https://github.com/jonathangg03/youtube-playlist'
          />
        </div>
      </div>
    </section>
  )
}

export default Projects
