import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Gallery from '../components/gallery'

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
  
  return (
    <Layout>
      <SEO title="Works" />
      <S.Container>
        <h1>My posts</h1>
        <Gallery figures={figures} slugs={slugs} titles={titles} />
      </S.Container>
    </Layout>
  )
}

export default ArticlesPage
