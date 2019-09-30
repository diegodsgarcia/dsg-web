import React from 'react'

import * as S from './styled'

const Gallery = ({figures}) => (
  <>
    <S.Wrapper>
      {figures.map((fluid, i) => (
        <S.Image key={i} fluid={fluid}>
          
        </S.Image>
      ))}

    </S.Wrapper>
  </>
)

export default Gallery