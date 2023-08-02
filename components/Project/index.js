import { TbWorld } from 'react-icons/tb'
import { AiFillGithub } from 'react-icons/ai'
import useVisible from '../../hooks/useVisible'
import { useRef } from 'react'

const Project = ({ title, description, url, ghUrl, id, image, reverse }) => {
  const projectsRef = useRef()
  const { visible: projectsVisible } = useVisible({
    visorRef: projectsRef
  })
  return (
    <>
      {!reverse && (
        <article
          className='project move'
          visoring={projectsVisible ? '1' : '0'}
          ref={projectsRef}
        >
          <div className='project-description'>
            <h4 className='title'>{title}</h4>
            <p>{description}</p>
            <a href='' className='project__link'>
              <TbWorld />
            </a>
            <a href='' className='project__link'>
              <AiFillGithub />
            </a>
          </div>
          <figure className='project-image__container'>
            <img
              src={image}
              alt={title}
              className='project-image'
              visoring={projectsVisible ? '1' : '0'}
            />
          </figure>

          {/* <div className='content'>
        <h4 className='title'>{title}</h4>
        <p className='description'>{description}</p>

      </div>
      <div className='links' id={id}>
        <a href={url} target='_blank' rel='noreferrer'>
          <div className='icon'>
            <TbWorld />
          </div>
          <p>Ver proyecto</p>
        </a>
        <a href={ghUrl} target='_blank' rel='noreferrer'>
          <div className='icon'>
            <AiFillGithub />
          </div>
          <p>Ver código</p>
        </a>
      </div> */}
        </article>
      )}
      {reverse && (
        <article
          className='project move'
          ref={projectsRef}
          visoring={projectsVisible ? '1' : '0'}
        >
          <figure className='project-image__container'>
            <img
              src={image}
              alt={title}
              className='project-image'
              visoring={projectsVisible ? '1' : '0'}
            />
          </figure>
          <div className='project-description'>
            <h4 className='title'>{title}</h4>
            <p>{description}</p>
            <a href='' className='project__link'>
              <TbWorld />
            </a>
            <a href='' className='project__link'>
              <AiFillGithub />
            </a>
          </div>

          {/* <div className='content'>
        <h4 className='title'>{title}</h4>
        <p className='description'>{description}</p>

      </div>
      <div className='links' id={id}>
        <a href={url} target='_blank' rel='noreferrer'>
          <div className='icon'>
            <TbWorld />
          </div>
          <p>Ver proyecto</p>
        </a>
        <a href={ghUrl} target='_blank' rel='noreferrer'>
          <div className='icon'>
            <AiFillGithub />
          </div>
          <p>Ver código</p>
        </a>
      </div> */}
        </article>
      )}
    </>
  )
}

export default Project
