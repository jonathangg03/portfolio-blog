const Title = ({ children }) => <h1 className='entry__title'>{children}</h1>

const SubTitle = ({ children }) => (
  <h2 className='entry__subtitle'>{children}</h2>
)

const SectionTitle = ({ children }) => (
  <h3 className='entry__section-title'>{children}</h3>
)

const Paragraph = ({ children }) => (
  <p className='entry__paragraph'>{children}</p>
)

const Link = ({ children }) => (
  <a href='/sdfd' className='entry__link'>
    {children}
  </a>
)

const ImageVertical = ({ src }) => <img src={src} className='vertical image' />

const ImageHorizontal = ({ src }) => (
  <img src={src} className='horizontal image' />
)

const ImageSquare = ({ src }) => <img src={src} className='square image' />

const Video = ({ src }) => <video src={{ src }} className='entry__video' />

export default {
  Title,
  SubTitle,
  SectionTitle,
  Paragraph,
  Link,
  ImageVertical,
  ImageHorizontal,
  ImageSquare,
  Video
}
