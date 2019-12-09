import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import * as S from '../components/container/styled'

function PostPage({ pageContext }) {
  const { title, thumbnail, description, date } = pageContext

  return (
    <Layout>
      <SEO title="Home" />
      <S.Container>
        <h1>{title}</h1>
        <p className="description">{description}</p>
        <p>{thumbnail}</p>
        <p>{date}</p>
      </S.Container>
    </Layout>
  )
}

export default PostPage