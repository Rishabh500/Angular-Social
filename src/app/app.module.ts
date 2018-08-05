import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from "angular5-social-login";
// Configs 
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("417901538698747")
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("553577305625-n92jdcje5gdddj2f90rbdcotmvjk4cfb.apps.googleusercontent.com")
        },
      ]
  );
  return config;
}

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,    SocialLoginModule

  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
