import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import * as S from '../components/container/styled'

function WorkPage({ pageContext }) {
  const { title, thumbnail, description } = pageContext

  return (
    <Layout>
      <SEO title="Home" />
      <S.Container>
        <h1>{title}</h1>
        <figure>
          <img src={thumbnail} alt={title}/>
        </figure>
        <p>{description}</p>
      </S.Container>
    </Layout>
  )
}

export default WorkPage