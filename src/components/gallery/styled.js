import styled from 'styled-components'
import media from 'styled-media-query'

const Wrapper = styled.div`
  margin: .5rem 0;

  figure {
    position: relative;
    overflow: hidden;
    
    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      top: 0;
      left: 0;
      transition: 0.4s transform;
      transform: scale(0);
      background-color: var(--figureHover);
      border: 0;
    }

    &:hover:after {
      transform: scale(2);
    }

    &:hover {
      figcaption {
        opacity: 1;
      }
    }
  }
`

const Image = styled.img`
  position: relative;
  width: 100%;
  margin: 1rem 0;

  ${media.lessThan('medium')`
    padding: 0 1rem;
  `}
`

const Figcaption = styled.figcaption`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--title);
  font-size: 2.5rem;
  z-index: 1;
  opacity: 0;
  transition: 0.4s opacity;
`

export { Wrapper, Image, Figcaption }