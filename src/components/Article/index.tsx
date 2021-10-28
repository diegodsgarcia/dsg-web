import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import * as S from './styled'

type ArticleProps = {
  title: string
  content: string,
  date: string,
  locale: string
}

const Article = ({ title, date, locale, content }: ArticleProps) => (
  <S.Wrapper>
    <S.Header>
      <S.Date>{date}</S.Date>
      <S.Title>{title}</S.Title>
      <S.Locale>{locale}</S.Locale>
    </S.Header>
    <S.Content>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </S.Content>
  </S.Wrapper>
)

export default Article
