import { useState } from 'react'
import styles from '../../styles/Projects.module.css'

const Project = ({ title, description, url, ghUrl, selected, id }) => {
  return (
    <article selected={selected} className={styles.project} id={id}>
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
