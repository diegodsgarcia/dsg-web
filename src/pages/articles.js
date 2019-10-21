import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import * as S from '../components/container/styled'

const ArticlesPage = () => (
  <Layout>
    <SEO title="Works" />
    <S.Container>
      <h1>My posts</h1>
    </S.Container>
  </Layout>
)

export default ArticlesPage
