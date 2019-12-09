import React from 'react'
import * as S from './styled'

const Post = (({title, date, children }) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Time>{date}</S.Time>
    <S.Article>
      {children}
    </S.Article>
  </S.Wrapper>
))

export default Post
