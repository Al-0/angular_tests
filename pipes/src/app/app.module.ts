import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import localeDe from '@angular/common/locales/de';

registerLocaleData(localeEs);
registerLocaleData(localeDe);

import { AppComponent } from './app.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { SecureDomPipe } from './pipes/secure-dom.pipe';
import { PasswordActivationPipe } from './pipes/password-activation.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe,
    SecureDomPipe,
    PasswordActivationPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue:'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
