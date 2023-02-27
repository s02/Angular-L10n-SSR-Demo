import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { HttpClientModule } from '@angular/common/http'
import { L10nTranslationModule } from 'angular-l10n'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    L10nTranslationModule,
    HttpClientModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
