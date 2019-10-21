import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Canvas from '../components/canvas'
import Logo from '../components/logo'

import * as S from '../components/container/styled'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Canvas />
    <S.Container>
      <Logo />
    </S.Container>
  </Layout>
)

export default IndexPage
