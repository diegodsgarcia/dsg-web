import React, { useState } from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import * as S from './styled'

function Gallery({figures, slugs, titles}) {

  function onMouseEnter(i) {
  }

  function onMouseLeave(i) {
  }

  return (
    <>
      <S.Wrapper>
        {figures.map((img, i) => (
          <AniLink 
            key={i} 
            paintDrip 
            hex="#000"
            to={`/${slugs[i]}`}>
            <figure  onMouseEnter={onMouseEnter.bind(this, i)} onMouseLeave={onMouseLeave.bind(this, i)}>
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