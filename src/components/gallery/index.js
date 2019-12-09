import React  from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import { getThemeColor } from '../../utils/theme'

import * as S from './styled'

function Gallery({figures, slugs, titles}) {
  return (
    <>
      <S.Wrapper>
        {figures.map((img, i) => (
          <AniLink 
            key={i} 
            cover
            direction="up" 
            bg={getThemeColor()}
            to={`/${slugs[i]}`}>
            <figure>
              <S.Image src={img}>
              </S.Image>
              <S.Figcaption>
                {titles[i]}
              </S.Figcaption>
            </figure>
          </AniLink>
        ))}
      </S.Wrapper>
    </>
    )
}

export default Gallery