import EntriesList from '../../components/EntriesList'
import Header from '../../components/Header'
import { getAllFilesMetadata } from '../../lib/mdx-reader'

const OPTONS = [
  {
    name: 'Inicio',
    link: '/blog'
  },
  {
    name: 'Portafolio',
    link: '/'
  }
]

const Blog = ({ entries }) => {
  return (
    <>
      <Header options={OPTONS} />
      <section className='section_spacer'>
        <p className='paragraph t-center'>
          Bienvenido a mi Blog! Aquí podras encontrar diferentes lecturas con mí
          opinion sobre diferentes temas, principalmente relacionados a la
          tecnología.
        </p>
      </section>
      <EntriesList entries={entries} />
    </>
  )
}

export async function getStaticProps() {
  const entries = getAllFilesMetadata()
  return {
    props: {
      entries
    }
  }
}

export default Blog
