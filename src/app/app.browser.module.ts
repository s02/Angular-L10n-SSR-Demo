import { NgModule } from '@angular/core'
import { AppModule } from './app.module'
import { AppComponent } from './app.component'
import { L10nBrowserModule } from '../l10n/L10nBrowserModule'

@NgModule({
  imports: [
    AppModule,
    L10nBrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppBrowserModule {
}
