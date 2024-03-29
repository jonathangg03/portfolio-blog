import matter from 'gray-matter' //Read data from a file, so we get a string '<h1>test</h1>'
import { serialize } from 'next-mdx-remote/serialize' //Parse markdown, so that string is rendered
import fs from 'fs'
import path from 'path'

const root = process.cwd() //root file of this project

const getFiles = () => fs.readdirSync(path.join(root, 'data')) // Get all files in data dir

const getFileBySlug = async ({ slug }) => {
  //Get all the content of one file
  //Used to show an entry
  const mdxSource = fs.readFileSync(
    path.join(root, 'data', `${slug}.mdx`),
    'utf-8'
  )
  const { data, content } = matter(mdxSource) // data is inside of --- and content outside
  const source = await serialize(content, {})

  return {
    source,
    frontmatter: {
      slug,
      data
    }
  }
}

const getAllFilesMetadata = () => {
  //Get just the metadata of all files
  //Used to show the collections of all entries
  const files = getFiles()

  return files.reduce(
    (allPosts, postSlug) => {
      const mdxSource = fs.readFileSync(
        path.join(root, 'data', postSlug),
        'utf-8'
      ) //Every file

      const { data } = matter(mdxSource)

      console.log('data-category', data.category)
      return {
        categories: [
          ...allPosts.categories,
          !allPosts.categories.includes(data.category) && data.category
        ],
        entries: [
          ...allPosts.entries,
          {
            ...data,
            slug: postSlug.replace('.mdx', '')
          }
        ]
      }
    },
    {
      categories: [],
      entries: []
    }
  )
}

export { getAllFilesMetadata, getFiles, getFileBySlug }
