import Link from 'next/link'

const EntriesList = ({ entries, categoryTitle }) => {
  return (
    <section className='section_spacer'>
      <h3 className='entries-title'>{categoryTitle}</h3>
      <ul className='entries-list'>
        {entries.map((entry) => {
          if (categoryTitle === entry.category) {
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
          }
        })}
      </ul>
    </section>
  )
}

export default EntriesList
