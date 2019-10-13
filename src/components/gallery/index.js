import React, { useState } from 'react'
import { Link } from 'gatsby'

import * as S from './styled'

function Gallery({figures, slugs}) {

  function onMouseEnter(i) {
  }

  function onMouseLeave(i) {
  }

  return (
    <>
      <S.Wrapper>
        {figures.map((img, i) => (
          <Link key={i} to={`/${slugs[i]}`}>
            <figure  onMouseEnter={onMouseEnter.bind(this, i)} onMouseLeave={onMouseLeave.bind(this, i)}>
              <S.Image src={img}>
              </S.Image>
            </figure>
          </Link>
        ))}
      </S.Wrapper>
    </>
    )
}

export default Gallery