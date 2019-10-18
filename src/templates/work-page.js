import React from 'react'

import Layout from '../components/layout'
import Description from '../components/work'
import SEO from '../components/seo'

import * as S from '../components/container/styled'
import { Figure } from '../components/figure/styled'

function WorkPage({ pageContext }) {
  const { title, thumbnail, description, company, date, technologies } = pageContext

  return (
    <Layout>
      <SEO title="Home" />
      <S.Container>
        <h1>{title}</h1>
        <Description date={date} company={company} technologies={technologies} />
        <Figure>
          <img src={thumbnail} alt={title}/>
        </Figure>
        <p>{description}</p>
      </S.Container>
    </Layout>
  )
}

export default WorkPage