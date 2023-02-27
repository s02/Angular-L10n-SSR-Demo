import { NgModule } from '@angular/core'
import { ServerModule } from '@angular/platform-server'
import { AppModule } from './app.module'
import { AppComponent } from './app.component'
import { L10nServerModule } from '../l10n/L10nServerModule'

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    L10nServerModule
  ],
  bootstrap: [AppComponent]
})
export class AppServerModule {
}
