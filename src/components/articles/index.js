import React  from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import { getThemeColor } from '../../utils/theme'

import BrazilSVG from '../../images/brazil.svg'
import EuaSVG from '../../images/eua.svg'

import * as S from './styled'

function Articles({figures, slugs, titles, dates, locales }) {
  return (
    <>
      <S.Wrapper>
        {figures.map((img, i) => (
          <S.ArticleItem key={i}>
            <AniLink 
              key={i} 
              cover
              direction="up" 
              bg={getThemeColor()}
              to={`/${slugs[i]}`}>
              <S.Header>
                <S.Title>
                  {titles[i]}
                </S.Title>
                <S.Date>
                  {dates[i]}
                </S.Date>
                <S.Locale>
                  Locale: {locales[i] === 'pt-br' ? <img src={BrazilSVG} alt="pt-BR" /> : <img src={EuaSVG} alt="eua"  /> }
                </S.Locale>
              </S.Header>
              <figure>
                <S.Image src={img}>
                </S.Image>
              </figure>
            </AniLink>
          </S.ArticleItem>
        ))}
      </S.Wrapper>
    </>
    )
}

export default Articles