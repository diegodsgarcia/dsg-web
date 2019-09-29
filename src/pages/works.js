import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import * as S from '../components/container/styled'

const WorksPage = () => (
  <Layout>
    <SEO title="Works" />
    <S.Container>
      <h1>Works</h1>
      <p>
        Here is about a little about my job :).
      </p>
    </S.Container>
  </Layout>
)

export default WorksPage
