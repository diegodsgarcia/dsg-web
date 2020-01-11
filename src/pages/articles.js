import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Articles from '../components/articles'

import * as S from '../components/container/styled'

function ArticlesPage() {

  const datas = useStaticQuery(
    graphql`
    {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/posts/"}}) {
        edges {
          node {
            frontmatter {
              thumbnail
              title
              slug
              date(formatString: "MMMM DD - YYYY", locale: "en")
              locale
            }
          }
        }
      }
    }
  `)

  const posts = datas.allMarkdownRemark.edges.map(edge => edge.node.frontmatter)
  const titles = posts.map(({title}) => title)
  const figures = posts.map(({thumbnail}) => thumbnail)
  const slugs = posts.map(({slug}) => slug)
  const dates = posts.map(({date}) => date)
  const locales = posts.map(({locale}) => locale)
  
  return (
    <Layout>
      <SEO title="Posts" />
      <S.Container>
        <h1>My posts</h1>
        <Articles 
          figures={figures} 
          slugs={slugs} 
          titles={titles} 
          dates={dates} 
          locales={locales} 
        />
      </S.Container>
    </Layout>
  )
}

export default ArticlesPage
