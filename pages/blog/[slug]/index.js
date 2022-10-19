import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { getFiles, getFileBySlug } from '../../../lib/mdx-reader'
import EntryComponents from '../../../components/Entry-Components'
import { MDXRemote } from 'next-mdx-remote'

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

const EntryPost = ({ source }) => {
  return (
    <>
      <Header options={OPTONS} />
      <section className='section_spacer entry__body'>
        <MDXRemote {...source} components={EntryComponents} />
      </section>
      <Footer />
    </>
  )
}

export default EntryPost

export async function getStaticProps({ params }) {
  const { source, frontmatter } = await getFileBySlug({ slug: params.slug })

  return {
    props: {
      source,
      frontmatter
    }
  }
}

export async function getStaticPaths() {
  const posts = getFiles()

  const paths = posts.map((post) => ({
    params: { slug: post.replace(/\.mdx/, '') }
  }))

  return {
    paths,
    fallback: false
  }
}
