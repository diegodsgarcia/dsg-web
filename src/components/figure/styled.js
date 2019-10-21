import styled from 'styled-components'
import media from 'styled-media-query'

const Figure = styled.figure`
  margin: 1.5rem 0;

  ${media.lessThan('medium')`
    padding: 0 1rem;
  `}
`

export { Figure }