import Head from 'next/head'
import Header from '../components/Header'
import Presentation from '../components/Presentation'
import styles from '../styles/Home.module.css'
import Habilities from '../components/Habilities'
import Projects from '../components/Projects'
import Videos from '../components/Videos'
import Footer from '../components/Footer'
import Aboutme from '../components/Aboutme'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bienvenido! - Davdev</title>
        <meta
          name='description'
          content='Bienvenido a mi Portafolio Web. Te saluda Jonathan Davdev. Es un placer tenerte aquí!'
        />
      </Head>
      <Header />
      <Presentation />
      <Aboutme />
      <Habilities />
      <Projects />
      <Videos />
      <Footer />
    </div>
  )
}
