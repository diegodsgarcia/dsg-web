import React from 'react'
import * as S from './styled'

const Header = () => (
  <S.Header>
    <S.Nav>
      <ul>
        <li>
          <S.Link activeClassName="active" to="/">Home</S.Link>
        </li>
        <li>
          <S.Link activeClassName="active" to="/about">About me</S.Link>
        </li>
        <li>
          <S.Link activeClassName="active" to="/works">Works</S.Link>
        </li>
        <li>
          <S.Link activeClassName="active" to="/articles">Articles</S.Link>
        </li>
      </ul>
    </S.Nav>
  </S.Header>
)

export default Header
