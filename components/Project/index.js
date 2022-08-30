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
          Ver proyecto
        </a>
        <a href={ghUrl} target='_blank' rel='noreferrer'>
          Ver código
        </a>
      </div>
    </article>
  )
}

export default Project
