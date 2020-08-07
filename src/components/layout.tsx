import React from "react"
import PropTypes from "prop-types"
import { GlobalStyle } from "./styles"

const Layout = ({ children }: { children: JSX.Element[] }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
