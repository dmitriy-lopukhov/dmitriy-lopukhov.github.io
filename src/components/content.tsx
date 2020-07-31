import React from "react"
import {
  Column,
  Container,
  Header,
  SocialLinks,
  SocialIcon,
  Link,
} from "./styles"
import { FormattedMessage, IntlShape } from "gatsby-plugin-intl"
import LanguageSwitcher from "../components/language-switcher"
import Facebook from "@material-ui/icons/Facebook"
import Linkedin from "@material-ui/icons/Linkedin"
import Email from "@material-ui/icons/Email"
import GitHub from "@material-ui/icons/GitHub"

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
            <Link href="https://www.linkedin.com/in/dmitriylopukhov/">
              <SocialIcon>
                <Linkedin />
              </SocialIcon>
            </Link>

            <Link href="https://github.com/dmitriy-lopukhov">
              <SocialIcon>
                <GitHub />
              </SocialIcon>
            </Link>

            <Link href="https://www.facebook.com/lopukhov.dmitriy">
              <SocialIcon>
                <Facebook />
              </SocialIcon>
            </Link>

            <Link href="mailto:dmitriy.lopukhov@gmail.com">
              <SocialIcon>
                <Email />
              </SocialIcon>
            </Link>
          </SocialLinks>
        </Container>
      </Column>
    </>
  )
}

export default Content
