import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import Content from "../components/content"
import { Row, Column } from "../components/styles"
import SEO from "../components/seo"
import { useIntl } from "gatsby-plugin-intl"

const IndexPage = () => {
  const intl = useIntl()

  return (
    <Layout>
      <SEO lang={intl.locale} title={intl.formatMessage({ id: "title" })} />
      <Row>
        <Column size={4}>
          <Image />
        </Column>
        <Column size={6} justifyContent="space-between">
          <Content intl={intl} />
        </Column>
      </Row>
    </Layout>
  )
}

export default IndexPage
