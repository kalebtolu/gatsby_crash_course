import React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default function blog({ data }) {
  return (


    <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <h1>Latest Posts</h1>
      {data.allMarkdownRemark.edges.map( post => (
          <div key={post.node.id}>
              <h3>{post.node.frontmatter.title}</h3>
              <small>Posted By {post.node.frontmatter.author}</small>
              <br/>
              <Link to={post.node.frontmatter.path}>Read More</Link>
              <hr />
              <br/>
              <br/>
          </div>
      ))}
  </Layout>
  )
}

export const PageQuery = graphql`
query BlogIndexQuery{
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
          }
        }
      }
    }
  }
`
