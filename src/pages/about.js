import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { Github } from 'styled-icons/boxicons-logos/Github'
import { LinkedinSquare  } from 'styled-icons/boxicons-logos/LinkedinSquare'
import { Instagram } from 'styled-icons/boxicons-logos/Instagram'
import { Email } from 'styled-icons/material/Email'

import * as S from '../components/container/styled'

const AboutPage = () => (
  <Layout>
    <SEO title="About me" />
    <S.Container>
      <h1>About me</h1>
      <p>
        My name is Diego Garcia, I'm a web developer for 5 year ago. I love all about Javascript and Front-end.
      </p>
      <ul>
        <li>
          HTML5
        </li>
        <li>
          CSS3
        </li>
        <li>
          Javascript
        </li>
        <li>
          NodeJS
        </li>
        <li>
          Angular
        </li>
        <li>
          React
        </li>
        <li>
          Java / Kotlin
        </li>
        <li>
          PHP
        </li>
      </ul>
      <nav className="social-links">
        <ul>
          <li><a href="https://github.com/diegodsgarcia" target="_blank" rel="noopener norefferer"><Github /></a></li>
          <li><a href="https://www.linkedin.com/in/diegodsgarcia/" target="_blank" rel="noopener norefferer"><LinkedinSquare /></a></li>
          <li><a href="https://www.instagram.com/diegodsgarcia/" target="_blank" rel="noopener norefferer"><Instagram /></a></li>
          <li><a href="mailto:diego.ds.garcia@gmail.com"><Email /></a></li>
        </ul>
      </nav>
    </S.Container>
  </Layout>
)

export default AboutPage
