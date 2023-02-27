import { NgModule } from '@angular/core'
import { L10nConfig, L10nRoutingModule, L10nTranslationModule } from 'angular-l10n'
import { HttpTranslationLoader } from './HttpTranslationLoader'
import { l10nConfig } from './config'

export const l10nBrowserConfig: L10nConfig = {
  ...l10nConfig,
  providers: [
    {
      name: 'app',
      asset: '/assets/translations/locale',
      options: {
        version: '1.0.0'
      }
    }
  ]
}

@NgModule({
  imports: [
    L10nTranslationModule.forRoot(l10nBrowserConfig, { translationLoader: HttpTranslationLoader }),
    L10nRoutingModule.forRoot()
  ]
})
export class L10nBrowserModule {

}
