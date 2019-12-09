import React from 'react'
import * as S from './styled'

const Post = (({title, thumbnail, date, children }) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <time>{date}</time>
    <S.Article>
      {children}
    </S.Article>
  </S.Wrapper>
))

export default Post
