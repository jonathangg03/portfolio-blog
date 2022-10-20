import Footer from '../../components/Footer'
import EntriesList from '../../components/EntriesList'
import Header from '../../components/Header'
import { getAllFilesMetadata } from '../../lib/mdx-reader'
import { DateTime } from 'luxon'

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

  const entriesWithTimpestamps = entries.map((entry) => {
    const date = DateTime.fromFormat(entry.date, 'dd/MM/yyyy')
    // console.log(date.)
    return {
      ...entry,
      timestamp: date.ts
    }
  })

  console.log('Entries', entriesWithTimpestamps)
  return {
    props: {
      categories,
      entries: entriesWithTimpestamps
    }
  }
}

export default Blog
