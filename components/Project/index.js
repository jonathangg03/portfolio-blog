import { TbWorld } from 'react-icons/tb'
import { AiFillGithub } from 'react-icons/ai'

const Project = ({ title, description, url, ghUrl, id, image, reverse }) => {
  return (
    <>
      {!reverse && (
        <article className='project'>
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
            <img src={image} alt={title} className='project-image' />
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
        <article className='project'>
          <figure className='project-image__container'>
            <img src={image} alt={title} className='project-image' />
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
