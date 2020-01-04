import styled from 'styled-components'
import media from 'styled-media-query'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, auto));
  grid-gap: 2rem;

  ${media.lessThan('medium')`
    padding: 0 1rem;
  `}
`

const ArticleItem = styled.article`
  a {
    display: flex;
    flex-direction: column;
    height: 100%;
    text-decoration: none;

    > * {
      flex-grow: 1;
    }
  }
`

const Header = styled.header`
  text-align: left;
  min-height: 100px;
  padding-bottom: 1rem;
`

const Title = styled.h3`
  font-size: 1.4rem;
  color: var(--title);
`

const Date = styled.div`
  color: var(--text);
  font-size: .8rem;
  margin: .5rem 0;
`

const Locale = styled.div`
  color: var(--title);
  font-size: .8rem;
  margin: 0;

  span {
    color: var(--text);
  }
`

const Image = styled.img`
  width: 100%;
  height: 100%;
`

export { Wrapper, ArticleItem, Header, Title, Date, Locale, Image }
