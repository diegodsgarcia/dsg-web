import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`

const Title = styled.h1`
  font-size: 2.6rem;
  line-height: 3rem;
  padding-bottom: 2.5rem;
`

const Article = styled.article`
  p {
    margin: 1rem 0;
    line-height: 1.5rem;
  }

  h1, h2, h3 {
    margin: 1.3rem 0;
    line-height: 2.3rem;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.8rem;
  }

  a {
    color: var(--text);
  }
`

export { Wrapper, Title, Article }