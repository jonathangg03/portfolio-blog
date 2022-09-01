import { useRef } from 'react'
import Video from '../Video'
import Subtitle from '../Subtitle'
import componentStyles from '../../styles/Components.module.css'
import styles from '../../styles/Videos.module.css'
import useVisible from '../../hooks/useVisible'

const Videos = () => {
  const videosRef = useRef()
  const { visible: videosVisible } = useVisible({ visorRef: videosRef })

  return (
    <section className={componentStyles.section_spacer}>
      <div className={componentStyles.move} visoring={videosVisible ? 1 : 0}>
        <Subtitle subtitle='Videos' id='videos' />
        <article className={styles.videos} ref={videosRef}>
          <Video url='https://www.youtube.com/embed/fm7mkj1qIao' />
          <Video url='https://www.youtube.com/embed/ActzTNgH2C4' />
          <Video url='https://www.youtube.com/embed/VLyoPGhZ4hQ' />
          <Video url='https://www.youtube.com/embed/d_l6AvGYXOQ' />
        </article>
      </div>
    </section>
  )
}

export default Videos
