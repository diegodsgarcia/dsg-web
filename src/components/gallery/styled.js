import styled from 'styled-components'
import Img from 'gatsby-image'

const Wrapper = styled.div`
  display: grid;
  grid-template-areas: minmax(auto, 1fr);
  grid-template-columns: 1fr 1fr 1fr ;
  grid-gap: 1rem;
  margin: .5rem 0 ;
`

const Image = styled(Img)`
  width: 100%;
  height: 300px;
  background-color: #fff;
`

export { Wrapper, Image }