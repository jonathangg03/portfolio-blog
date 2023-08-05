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
      <div className='' visoring={projectsVisible ? 1 : 0}>
        <Subtitle subtitle='Proyectos' id='projects' />
        <div className='projects' ref={projectsRef}>
          <Project
            id='a'
            title='Chat'
            description='Este proyecto es un chat en tiempo real. El frontend lo hice con Next.js, y cuenta con dos servidores backend, uno para el registro y manejo de los usuarios, y otro servidor hecho con Web Sockets para mantener la conexión con el frontend abierta, y hacer que los mensajes se transmitan en tiempo real.'
            url='https://megabyte-chat.vercel.app/'
            ghUrl='https://github.com/jonathan-cursos/megabyte_chat'
            image='https://res.cloudinary.com/dklpyhteh/image/upload/v1661742489/Portfolio/chat_bwtm5f.jpg'
          />
          <Project
            id='b'
            title='Miriio'
            description='Miriio es una red social donde se puede compartir publicaciones de texto y/o imagenes. Esta hecha con React.js en el lado del frontend, y el backend es una API REST. Para las Bases de datos se usó MongoDB. Para el almacenamiento de imagenes usé Cloudinary, y para el registro e ingreso, Passport.js. Además en una Progressive Web Application.'
            url='https://miriio.vercel.app'
            ghUrl='https://github.com/jonathangg03/social-media-frontend'
            image='https://res.cloudinary.com/dklpyhteh/image/upload/v1661742489/Portfolio/miriio_qn4y7e.png'
            reverse='true'
          />
          <Project
            id='c'
            title='Galería'
            description='Este fue mi primer projecto. Es una galería de imagenes, donde el principal objetivo fue el diseñarla usando la libreria NextUI.'
            url='https://davdev-gallery-nextui.vercel.app/'
            ghUrl='https://github.com/jonathangg03/davdev-gallery-nextui'
            image='https://res.cloudinary.com/dklpyhteh/image/upload/v1661742489/Portfolio/gallery_cvrhcz.png'
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
            description='Este proyecto utiliza el API de YouTube para su funcionamiento. Se trata de una aplicacion donde se realiza una busqueda de videos en YouTube, y arrastrando los videos deseados puedes ir creando una lista de reproducción que finalmente puedes ir ordenando a tu gusto.'
            url='https://youtube-playlist-ten.vercel.app/'
            ghUrl='https://github.com/jonathangg03/youtube-playlist'
            image='https://res.cloudinary.com/dklpyhteh/image/upload/v1661742489/Portfolio/playlist_fwcrav.png'
            reverse='true'
          />
        </div>
      </div>
    </section>
  )
}

export default Projects
