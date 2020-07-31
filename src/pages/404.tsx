import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row, Column, Container } from "../components/styles"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Row>
      <Column>
        <Container>
          <h1>NOT FOUND</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </Container>
      </Column>
    </Row>
  </Layout>
)

export default NotFoundPage
