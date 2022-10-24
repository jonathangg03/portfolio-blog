import Footer from '../../components/Footer'
import EntriesList from '../../components/EntriesList'
import Header from '../../components/Header'
import { getAllFilesMetadata } from '../../lib/mdx-reader'
import Link from 'next/link'
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
      <section className='section_spacer'>
        {
          entries.length > 0 &&
          <>
            <h3 className='entries-title'>Recientes</h3>
            <ul className='entries-list'>
              {entries
                .sort((current, post) => post.timestamp - current.timestamp)
                .map((entry) => {
                  return (
                    <li className='entry' key={entry.slug}>
                      <Link href={`/blog/${entry.slug}`}>
                        <a>
                          <h2>{entry.title}</h2>
                          <p className='entry__description'>{entry.description}</p>
                          <div className='line-animation top'></div>
                          <div className='line-animation left'></div>
                          <div className='line-animation right'></div>
                          <div className='line-animation bottom'></div>
                          <p className='entry__date'>{entry.date}</p>
                        </a>
                      </Link>
                    </li>
                  )
                })}
            </ul>
          </>
        }
        {categories.map((category) => (
          <EntriesList
            key={category}
            entries={entries}
            categoryTitle={category}
          />
        ))}
      </section>
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const { entries, categories } = getAllFilesMetadata()

  const entriesWithTimpestamps = entries.map((entry) => {
    const date = DateTime.fromFormat(entry.date, 'dd/MM/yyyy')
    return {
      ...entry,
      timestamp: date.ts
    }
  })

  const filteredCategories = categories.filter((category) => category !== false)

  return {
    props: {
      categories: filteredCategories,
      entries: entriesWithTimpestamps
    }
  }
}

export default Blog
