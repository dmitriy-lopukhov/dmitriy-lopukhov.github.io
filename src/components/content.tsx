import React from "react"
import { Column, Container, Header, SocialLinks, StyledLink } from "./styles"
import { FormattedMessage, IntlShape } from "gatsby-plugin-intl"
import LanguageSwitcher from "../components/language-switcher"
import Icon from "./Icon"

const Content = ({ intl }: { intl: IntlShape }) => {
  const keywords = [
    "Angular",
    "Typescript",
    "RxJS",
    "NgRX",
    "PWA",
    "NestJS",
    "Ionic Framework",
    "SASS/SCSS",
    "React",
    "hooks",
    "IndexedDB/WebSQL",
    "CSS-in-JS",
    "Web Audio API",
    "Gatsby",
    "Material UI",
    "Cypress",
    "JFGI",
    "KISS",
    "SOLID",
    "YAGNI",
    "BEM",
    "OOP",
    "FP",
    intl.formatMessage({ id: "and_sure" }) + ", JS, HTML, CSS.... ",
  ]

  return (
    <>
      <LanguageSwitcher />
      <Column size={3}>
        <Container>
          <h4>
            <FormattedMessage id="hello" />
          </h4>
          <Header>
            <FormattedMessage id="myname" />
          </Header>
          <p>
            <FormattedMessage id="description" />
          </p>
          <h5>{intl.formatMessage({ id: "keywords" })}: </h5>
          <p>
            {keywords.map((key, index) => (
              <span key={key}>
                {key}
                {index < keywords.length - 1 ? " • " : null}
              </span>
            ))}
          </p>
          <SocialLinks>
            <StyledLink href="https://www.linkedin.com/in/dmitriylopukhov/">
              <Icon type="Linkedin" />
            </StyledLink>

            <StyledLink href="https://github.com/dmitriy-lopukhov">
              <Icon type="GitHub" />
            </StyledLink>

            <StyledLink href="https://www.facebook.com/lopukhov.dmitriy">
              <Icon type="Facebook" />
            </StyledLink>

            <StyledLink href="mailto:dmitriy.lopukhov@gmail.com">
              <Icon type="Email" />
            </StyledLink>
          </SocialLinks>
        </Container>
      </Column>
    </>
  )
}

export default Content
