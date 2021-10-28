import Link from 'next/link'
import * as S from './styled'

import { ArticleProps } from 'utils/getArticles'

const Articles = ({ articles }: { articles: ArticleProps[] }) => {
  return (
    <S.Wrapper>
      <S.List>
        {articles.map(article => (
          <S.Item key={article.title}>
            <Link passHref href={`/articles/${article.slug}`}>
              <S.Link>{article.title}</S.Link>
            </Link>
          </S.Item>
        ))}
      </S.List>
    </S.Wrapper>
  )
}

export default Articles
