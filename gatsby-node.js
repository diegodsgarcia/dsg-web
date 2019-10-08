exports.createPages = async ({actions: { createPage }, graphql }) => {
  const { data } = await graphql(`
    {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/works/"}}) {
        edges {
          node {
            frontmatter {
              title
              tags
              slug
            }
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.edges.forEach(edge => {
    const slug = edge.node.frontmatter.slug
    const context = edge.node.frontmatter

    createPage({
      path: `works/${slug}/`,
      component: require.resolve('./src/templates/work-page.js'),
      context,
    })
  })
}