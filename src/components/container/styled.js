import styled from 'styled-components'
import media from 'styled-media-query'

const Container = styled.section`
  width: 768px;
  min-height: calc(100vh - 80px);
  margin: 0 auto 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${media.lessThan('medium')`
    width: 100%;
  `}

  h1 {
    margin: 1rem 0;
    font-size: 2rem;
  }

  p {
    margin: .5rem 0;
  }

  ul li {
    margin: 0.8rem
  }

  .list-icon {
    width: 30px;
    height: 30px;
    margin: 0 0.5rem;
  }

  .social-links {
    margin: 2rem;
    
    ul {
      display: flex;
      justify-content: center;
    }

    ul li {
      width: 50px;
      height: 50px;
      margin: 0 0.2rem
    }

    p {
      font-size: 1rem;
    }

    a {
      color: var(--text);
    }
  }
`

export { Container }