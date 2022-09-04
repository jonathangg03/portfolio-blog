import { TbWorld } from 'react-icons/tb'
import { AiFillGithub } from 'react-icons/ai'
import styles from '../../styles/Projects.module.css'

const Project = ({ title, description, url, ghUrl, id }) => {
  return (
    <article className={styles.project}>
      <div className={styles.content}>
        <div className={styles.details}>
          <h4 className={styles.title}>{title}</h4>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
      <div className={styles.links} id={id}>
        <a href={url} target='_blank' rel='noreferrer'>
          <div className={styles.icon}>
            <TbWorld />
          </div>
          <p>Ver proyecto</p>
        </a>
        <a href={ghUrl} target='_blank' rel='noreferrer'>
          <div className={styles.icon}>
            <AiFillGithub />
          </div>
          <p>Ver código</p>
        </a>
      </div>
    </article>
  )
}

export default Project
