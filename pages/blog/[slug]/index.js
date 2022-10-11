import Header from '../../../components/Header'
import EntryContent from '../../../components/EntryContent'

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


const EntryPost = () => {
  return (
    <>
      <Header options={OPTONS} />
      <EntryContent />
    </>
  )
}

export default EntryPost