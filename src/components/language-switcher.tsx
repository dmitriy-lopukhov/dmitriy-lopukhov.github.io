import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"
import { languages, LangKey } from "../intl/languages"
import { Column, Container, Link } from "./styles"

const languageName = languages.names

const LanguageSwitcher = () => {
  return (
    <Column size={1} alignItems="flex-end">
      <IntlContextConsumer>
        {({
          languages,
          language: currentLocale,
        }: {
          languages: LangKey[]
          language: LangKey
        }) => (
          <Container>
            {languages.map((language, index) => (
              <span key={language}>
                <Link
                  active={currentLocale === language}
                  onClick={() => changeLocale(language)}
                >
                  {languageName[language]}
                </Link>
                {index < languages.length - 1 ? " • " : null}
              </span>
            ))}
          </Container>
        )}
      </IntlContextConsumer>
    </Column>
  )
}

export default LanguageSwitcher
