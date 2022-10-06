import Footer from '../../components/Footer'
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

const Blog = ({ entries, categories }) => {
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
      {categories.map((category) => (
        <EntriesList
          key={category}
          entries={entries}
          categoryTitle={category}
        />
      ))}
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const { entries, categories } = getAllFilesMetadata()
  console.log(entries)

  return {
    props: {
      entries,
      categories
    }
  }
}

export default Blog
