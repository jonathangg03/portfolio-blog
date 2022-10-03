import matter from 'gray-matter' //Read data from mdx file
import { serialize } from 'next-mdx-remote/serialize' //Parse markdown
import fs from 'fs'
import path from 'path'

const root = process.cwd() //root file of this project
const getFiles = () => fs.readdirSync(path.join(root, 'data'))

const getFileBySlug = async ({ slug }) => {
  const mdxSource = fs.readFileSync(
    path.join(root, 'data', `${slug}.mdx`),
    'utf-8'
  )
  const { data, content } = matter(mdxSource)
}
