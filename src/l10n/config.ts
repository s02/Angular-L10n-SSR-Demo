import { L10nConfig } from 'angular-l10n'

export const l10nConfig: L10nConfig = {
  format: 'language',
  providers: [],
  defaultRouting: true,
  cache: true,
  keySeparator: '.',
  defaultLocale: { language: 'en' },
  schema: [
    { locale: { language: 'en' }, dir: 'ltr' },
    { locale: { language: 'es' }, dir: 'ltr' }
  ]
}
