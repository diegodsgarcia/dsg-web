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
    padding: .8rem;
    transition: .2s box-shadow;

    > * {
      flex-grow: 1;
    }

    &:hover {
      box-shadow: 0 0 0 1px var(--border);
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
  display: flex;
  align-items: center;
  color: var(--title);
  font-size: .8rem;
  margin: 0;

  img {
    width: 20px;
    height: 20px;
    margin: 0 .5rem;
  }
`

const Image = styled.img`
  width: 100%;
  height: 100%;
`

export { Wrapper, ArticleItem, Header, Title, Date, Locale, Image }
