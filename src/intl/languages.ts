const langKeys = ["en", "ru", "de"] as const
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
  },
}
