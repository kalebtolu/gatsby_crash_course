import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <h1>Welcome to My website</h1>
    <p>This is a sample site for the gatsby crash course</p>
  </Layout>
)

export default IndexPage
