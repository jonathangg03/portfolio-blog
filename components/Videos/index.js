import { useRef } from 'react'
import Video from '../Video'
import Subtitle from '../Subtitle'
import useVisible from '../../hooks/useVisible'

const Videos = () => {
  const videosRef = useRef()
  const { visible: videosVisible } = useVisible({ visorRef: videosRef })

  return (
    <section className='section_spacer'>
      <div className='move' visoring={videosVisible ? 1 : 0}>
        <Subtitle subtitle='Videos' id='videos' />
        <article className='videos' ref={videosRef}>
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
