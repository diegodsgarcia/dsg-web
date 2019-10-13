import styled from 'styled-components'
import media from 'styled-media-query'

const Wrapper = styled.div`
  grid-gap: 1rem;
  margin: .5rem 0;

  figure {
    position: relative;
    
    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      transition: .4s background-color;
    }

    &:hover:after {

      background-color: #000;
    }
  }
`

const Image = styled.img`

  width: 100%;
  background-color: #fff;
  margin: 1rem 0;
`

export { Wrapper, Image }