import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout'
import SEO from '../components/seo'
import Gallery from '../components/gallery'

import * as S from '../components/container/styled'

function WorksPage() {
  const images = useStaticQuery(
    graphql`
      query {
        fiap: file(relativePath: { eq: "fiap.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1020) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        onTemplate: file(relativePath: { eq: "on-template.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1020) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        palosVerdes: file(relativePath: { eq: "palos-verdes.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1020) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `
  )

  return (
    <Layout>
      <SEO title="Works" />
      <S.Container>
        <h1>Works</h1>
        <p>
          Here is about a little about my job :).
        </p>
        <Gallery figures={Object.values(images).map(image => image.childImageSharp.fluid)} />
      </S.Container>
    </Layout>
  )
}

export default WorksPage
