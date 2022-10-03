import Head from 'next/head'
import Header from '../components/Header'
import Presentation from '../components/Presentation'
import Habilities from '../components/Habilities'
import Projects from '../components/Projects'
import Videos from '../components/Videos'
import Footer from '../components/Footer'
import Aboutme from '../components/Aboutme'

const OPTIONS = [
  {
    name: 'Inicio',
    link: '/'
  },
  {
    name: 'Blog',
    link: '/blog'
  },
  {
    name: 'Sobre mi',
    link: '#aboutme'
  },
  {
    name: 'Habilidades',
    link: '#habilities'
  },
  {
    name: 'Proyectos',
    link: '#projects'
  },
  {
    name: 'Videos',
    link: '#videos'
  },
  {
    name: 'Contacto',
    link: '#contact'
  },
  {
    name: 'Currículum',
    link: '/files/curriculum.pdf'
  }
]

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Bienvenido! - Davdev</title>
        <meta
          name='description'
          content='Bienvenido a mi Portafolio Web. Te saluda Jonathan Davdev. Es un placer tenerte aquí!'
        />
      </Head>
      <Header options={OPTIONS} />
      <Presentation />
      <Aboutme />
      <Habilities />
      <Projects />
      <Videos />
      <Footer />
    </div>
  )
}
