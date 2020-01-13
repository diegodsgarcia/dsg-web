import React from 'react'
import * as S from './styled'

const Post = (({thumbnail, title, date, children }) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Time>{date}</S.Time>
    <S.Thumbnail>
      <img src={thumbnail} alt={title} />
    </S.Thumbnail>
    <S.Article>
      {children}
    </S.Article>
  </S.Wrapper>
))

export default Post
