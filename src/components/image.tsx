import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = () => {
  const { myPhoto } = useStaticQuery(graphql`
    query {
      myPhoto: file(relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img fluid={myPhoto.childImageSharp.fluid} style={{ height: "100%" }} />
  )
}

export default Image
