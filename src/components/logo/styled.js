import styled from 'styled-components'
import media from 'styled-media-query'

const Wrapper = styled.div`
  text-align: center;
  
  h1 {
    font-size: 9rem;
    font-family: 'Press Start 2P', cursive;

    ${media.lessThan('medium')`
      font-size: 5rem;
    `}
  }
`

export { Wrapper }