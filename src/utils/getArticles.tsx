import matter from 'gray-matter'

export type ArticleProps = {
  title: string
  description: string
  date: string
  locale: string
  slug: string
  thumbnail: string
  content: string
}

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

export function getArticles() {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const fs = require('fs')
  const files = fs.readdirSync(`${process.cwd()}/src/contents/articles`, 'utf-8') as string[]
  const articles = files.filter(file => file.endsWith('md'))

  const contents = articles.map(blog => {
    const path = `${process.cwd()}/src/contents/articles/${blog}`
    const rawContent = fs.readFileSync(path, {
      encoding: 'utf-8'
    })

    return rawContent
  }) as Content[]

  return contents.map(contentData => {
    const { content, data } = matter(contentData) as unknown as Content
    return {
      ...data,
      content
    }
  }) as ArticleProps[]
}


