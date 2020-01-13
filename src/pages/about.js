import React, { useEffect } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { TimelineMax } from 'gsap'

import { Github } from 'styled-icons/boxicons-logos/Github'
import { LinkedinSquare  } from 'styled-icons/boxicons-logos/LinkedinSquare'
import { Instagram } from 'styled-icons/boxicons-logos/Instagram'
import { Email } from 'styled-icons/material/Email'

import * as S from '../components/container/styled'

function AboutPage() {

  useEffect(() => {
    new TimelineMax()
      .from('h1, p', 1, { opacity: 0 })
      .staggerFromTo('.list li', 1, { opacity: 0 }, { opacity: 1}, .2)
      .from('.social-links', 1, { opacity: 0 })
  }, [])

  return (
  <Layout>
    <SEO title="About me" />
    <S.Container>
      <h1>About me</h1>
      <p className="description">
        My name is Diego Garcia, I'm a web developer for 6 year ago. I love all about Javascript and Front-end. My main skills:
      </p>
      <ul className="list">
        <li>
          HTML5
        </li>
        <li>
          CSS3
        </li>
        <li>
          JavaScript
        </li>
        <li>
          NodeJS
        </li>
        <li>
          Angular
        </li>
        <li>
          ReactJS
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
          <li><a href="https://github.com/diegodsgarcia"><Github /></a></li>
          <li><a href="https://www.linkedin.com/in/diegodsgarcia/"><LinkedinSquare /></a></li>
          <li><a href="https://www.instagram.com/diegodsgarcia/"><Instagram /></a></li>
          <li><a href="mailto:diego.ds.garcia@gmail.com"><Email /></a></li>
        </ul>
      </nav>
    </S.Container>
  </Layout>
  )
}

export default AboutPage
