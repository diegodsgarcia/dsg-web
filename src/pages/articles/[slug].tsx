
import { GetStaticPropsContext } from 'next'
import { getArticles, ArticleProps } from 'utils/getArticles'

import Main from 'components/Main'
import Article from 'components/Article'

const SlugPage = (article: ArticleProps) => {
  return (
    <Main>
      <Article {...article} />
    </Main>
  )
}

export const getStaticPaths = async () =>  {
  const articles = getArticles()
  const paths = articles.map(({ slug }) => ({
    params: {
      slug,
    }
  }))

  return {
    paths,
    fallback: false
  }

}

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const article = getArticles().find(({ slug }) => slug === params?.slug)

  return {
    props: {
      ...article
    }
  }
}

export default SlugPage
