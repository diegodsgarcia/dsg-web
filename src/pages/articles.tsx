import matter from 'gray-matter'

import Main from 'components/Main'

type Content = {
  content: string
  data: {
    date: string
    description: string
    locale: string
    slug: string
    thumbnail: string
    title: string
  }
}

const Articles = ({ contents }: { contents: Content[]}) => {
  const articles = contents.map(blog => matter(blog))

  return (
    <Main>
      test
    </Main>
  )
}

export const getStaticProps = async () => {
  const fs = require('fs')
  const files = fs.readdirSync(`${process.cwd()}/src/contents/articles`, 'utf-8') as string[]
  const articles = files.filter(file => file.endsWith('md'))

  const contents = articles.map(blog => {
    const path = `${process.cwd()}/src/contents/articles/${blog}`
    const rawContent = fs.readFileSync(path, {
      encoding: 'utf-8'
    })

    return rawContent
  })

  return {
    props: {
      contents
    }
  }

}

export default Articles
