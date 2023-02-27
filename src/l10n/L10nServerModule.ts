import { NgModule } from '@angular/core'
import { L10nConfig, L10nRoutingModule, L10nTranslationModule } from 'angular-l10n'
import { l10nConfig } from './config'
import en from '../assets/translations/locale-en.json'
import es from '../assets/translations/locale-es.json'

export const l10nServerConfig: L10nConfig = {
  ...l10nConfig,
  providers: [
    {
      name: 'app',
      asset: {
        en,
        es
      }
    }
  ]
}

@NgModule({
  imports: [
    L10nTranslationModule.forRoot(l10nServerConfig),
    L10nRoutingModule.forRoot()
  ]
})
export class L10nServerModule {

}
