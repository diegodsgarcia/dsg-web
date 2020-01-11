import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Post from '../components/post'

function PostPage({ pageContext }) {
  const { title, thumbnail, description, date, html } = pageContext

  return (
    <Layout>
      <SEO title={title} />
      <Post
        title={title} 
        thumbnail={thumbnail}
        description={description}
        date={date}>
        <div dangerouslySetInnerHTML={{__html: html}}></div>
      </Post>
    </Layout>
  )
}

export default PostPage