import Video from '../Video'
import Subtitle from '../Subtitle'
import stylesComponent from '../../styles/Components.module.css'
import styles from '../../styles/Videos.module.css'

const Videos = () => {
  return (
    <section className={stylesComponent.section_spacer}>
      <Subtitle subtitle='Videos' id='videos' />
      <article className={styles.videos}>
        <Video url='https://www.youtube.com/embed/fm7mkj1qIao' />
        <Video url='https://www.youtube.com/embed/ActzTNgH2C4' />
        <Video url='https://www.youtube.com/embed/VLyoPGhZ4hQ' />
        <Video url='https://www.youtube.com/embed/d_l6AvGYXOQ' />
      </article>
    </section>
  )
}

export default Videos
