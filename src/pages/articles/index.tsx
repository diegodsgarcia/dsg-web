import { getArticles } from 'utils/getArticles'

import { Article } from 'types/article'
import Main from 'components/Main'
import CodeEditor from 'components/CodeEditor'
import Articles from 'components/Articles'

const ArticlesPage = ({ articles }: { articles: Article[] }) => {
  return (
    <Main>
      <CodeEditor />
      <Articles articles={articles} />
    </Main>
  )
}

export const getStaticProps = async () => {
  const articles = getArticles()

  return {
    props: {
      articles
    }
  }

}

export default ArticlesPage
