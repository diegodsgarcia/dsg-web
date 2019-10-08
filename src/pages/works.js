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

  return (
    <Layout>
      <SEO title="Works" />
      <S.Container>
        <h1>Works</h1>
        <p>
          Here is about a little about my job :).
        </p>
        {works.map((work, i) =>
          <> 
            <p key={i}>{work.title}</p>
            <img src={work.thumbnail} />  
          </>
        )}
        {/* <Gallery figures={Object.values(images).map(image => image.childImageSharp.fluid)} /> */}
      </S.Container>
    </Layout>
  )
}

export default WorksPage
