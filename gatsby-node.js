exports.createPages = async ({actions: { createPage }, graphql }) => {
  const works = await graphql(`
    {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/works/"}}) {
        edges {
          node {
            frontmatter {
              title
              thumbnail
              description
              date(formatString: "MMMM, YYYY")
              company
              technologies
              slug
            }
          }
        }
      }
    }
  `)

  const posts = await graphql(`
    {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/posts/"}}) {
        edges {
          node {
            frontmatter {
              title
              thumbnail
              description
              date(formatString: "MMMM, YYYY")
              slug
            }
            html
          }
        }
      }
    }
  `)
  
  works.data.allMarkdownRemark.edges.forEach(edge => {
    const slug = edge.node.frontmatter.slug
    const context = edge.node.frontmatter

    createPage({
      path: `/${slug}/`,
      component: require.resolve('./src/templates/work-page.js'),
      context,
    })
  })

  posts.data.allMarkdownRemark.edges.forEach(edge => {
    const slug = edge.node.frontmatter.slug
    const context = { ...edge.node.frontmatter, html: edge.node.html }

    createPage({
      path: `/${slug}/`,
      component: require.resolve('./src/templates/post-page.js'),
      context,
    })
  })
}