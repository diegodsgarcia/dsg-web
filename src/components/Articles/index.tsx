import Link from 'next/link'
import { Article } from 'types/article'

import * as S from './styled'

const Articles = ({ articles }: { articles: Article[] }) => {
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
