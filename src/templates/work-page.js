import React from 'react'

import Layout from '../components/layout'
import Description from '../components/description'
import SEO from '../components/seo'

import * as S from '../components/container/styled'
import { Figure } from '../components/figure/styled'

function WorkPage({ pageContext }) {
  const { title, thumbnail, description, company, date, url, technologies } = pageContext

  return (
    <Layout>
      <SEO title="Works" />
      <S.Container>
        <h1>{title}</h1>
        <p className="description">{description}</p>
        <Description date={date} company={company} technologies={technologies} />

        <Figure>
          <a href={url}><img src={thumbnail} alt={title} /></a>
        </Figure>
      </S.Container>
    </Layout>
  )
}

export default WorkPage