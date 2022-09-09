import { TbWorld } from 'react-icons/tb'
import { AiFillGithub } from 'react-icons/ai'

const Project = ({ title, description, url, ghUrl, id }) => {
  return (
    <article className='project'>
      <div className='content'>
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
      </div>
    </article>
  )
}

export default Project
