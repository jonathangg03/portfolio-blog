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
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap'
          rel='stylesheet'
        />
        <link rel='icon' href='/favicon.ico' />
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
