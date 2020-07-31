import styled, { createGlobalStyle } from "styled-components"
import CSS from "csstype"

export const colors = {
  heading: "#5c7b8e",
  headingLight: "#aeb3b7",
  white: "#fff",
  dark: "#171a20",
  black: "#1e2c3a",
}

const screenSize = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
}

export const device = {
  mobileS: `(max-width: ${screenSize.mobileS})`,
  mobileM: `(max-width: ${screenSize.mobileM})`,
  mobileL: `(max-width: ${screenSize.mobileL})`,
  tablet: `(max-width: ${screenSize.tablet})`,
  laptop: `(max-width: ${screenSize.laptop})`,
  laptopL: `(max-width: ${screenSize.laptopL})`,
  desktop: `(max-width: ${screenSize.desktop})`,
  desktopL: `(max-width: ${screenSize.desktop})`,
}

const columnSizes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "auto"] as const
type ColumnSize = typeof columnSizes[number]

export const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: sans-serif;
    color: ${colors.dark};
    margin: 0;
    height: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #___gatsby, #gatsby-focus-wrapper, #gatsby-focus-wrapper > div {
    height: 100%;
  }

  h1,h2,h3,h4,h5,h6 {
    color: ${colors.black};
  }

  @media ${device.mobileL} {
    #___gatsby, #gatsby-focus-wrapper, #gatsby-focus-wrapper > div {
      height: auto;
    }
  }

  @media (prefers-color-scheme: dark) {
    html, body {
      color: ${colors.headingLight};
      background-color: ${colors.dark};
    }

    h1,h2,h3,h4,h5,h6 {
      color: ${colors.headingLight};
    }
  }
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`

export const Column = styled.div<{
  size?: ColumnSize
  justifyContent?: CSS.ContentPosition | CSS.ContentDistribution
  alignItems?: CSS.ContentPosition | CSS.ContentDistribution
}>`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  height: 100%;
  flex: ${props => (props.size ? props.size : "50%")};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : null};
  align-items: ${props => (props.alignItems ? props.alignItems : null)};

  @media ${device.mobileL} {
    flex: 100%;
  }
`

export const Container = styled.div`
  padding: 20px 120px;

  @media ${device.mobileL} {
    padding: 20px 50px;
  }

  @media ${device.laptop} {
    padding: 20px;
  }
`

export const Link = styled.a<{ active?: boolean }>`
  color: ${props => (props.active ? colors.heading : colors.black)};
  cursor: pointer;
  transition: all ease-in 0.2s;
  &:hover {
    color: ${colors.heading};
  }

  @media (prefers-color-scheme: dark) {
    color: ${props => (props.active ? colors.heading : colors.white)};
  }
`
export const Header = styled.h1`
  font-size: 3em;
  color: ${colors.black};

  @media (prefers-color-scheme: dark) {
    color: ${colors.white};
  }

  @media ${device.tablet} {
    font-size: 2.2em;
  }
  @media ${device.mobileL} {
    font-size: 2.2em;
  }
`

export const SocialLinks = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
`
export const SocialIcon = styled.span`
  margin-right: 15px;
`
