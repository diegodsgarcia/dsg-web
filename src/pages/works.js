import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout'
import SEO from '../components/seo'
import Gallery from '../components/gallery'

import * as S from '../components/container/styled'

function WorksPage() {
  const datas = useStaticQuery(
    graphql`
    {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/works/"}}) {
        edges {
          node {
            frontmatter {
              thumbnail
              title
              tags
              slug
            }
          }
        }
      }
    }
  `)

  const works = datas.allMarkdownRemark.edges.map(edge => edge.node.frontmatter)
  const figures = works.map(({thumbnail}) => thumbnail)
  const slugs = works.map(({slug}) => slug)

  return (
    <Layout>
      <SEO title="Works" />
      <S.Container>
        <h1>Works</h1>
        <p>
          Here is about a little about my job :).
        </p>
        <Gallery figures={figures} slugs={slugs} />
      </S.Container>
    </Layout>
  )
}

export default WorksPage
