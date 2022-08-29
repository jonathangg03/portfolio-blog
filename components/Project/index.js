import styles from '../../styles/Projects.module.css'

const Project = ({ title, description, url, ghUrl, id, image }) => {
  return (
    <article className={styles.project} id={id}>
      <figure className={styles.image}>
        <img src={image} alt={title} />
      </figure>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.description}>{description}</p>
      <div className={styles.links}>
        <a href={url}>Ver proyecto</a>
        <a href={ghUrl}>Ver código</a>
      </div>
    </article>
  )
}

export default Project
