const langKeys = ["en", "ru", "de", "nb"] as const
export type LangKey = typeof langKeys[number]

interface ILanguages {
  all: typeof langKeys
  default: LangKey
  names: Record<LangKey, string>
}

export const languages: ILanguages = {
  all: langKeys,
  default: "en",
  names: {
    en: "English",
    ru: "Русский",
    de: "Deutsch",
    nb: "Norsk (Bokmål)", // https://github.com/formatjs/formatjs/issues/1570
  },
}
