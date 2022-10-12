import Header from '../../../components/Header'
import EntryContent from '../../../components/EntryContent'
import Footer from '../../../components/Footer'

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
      <Footer />
    </>
  )
}

export default EntryPost