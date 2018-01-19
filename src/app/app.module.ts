import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app.routing.module';

import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { CourcesComponent } from './cources/cources.component';
import {FlashComponent} from './flash/flash.component';
import {RouterModule} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { VideoComponent } from './video/video.component';
import { SchloarshipsComponent } from './schloarships/schloarships.component';
import { TutorComponent } from './tutor/tutor.component';
import { MainpageComponent } from './mainpage/mainpage.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    CourcesComponent,
    FlashComponent,
    HeaderComponent,
    VideoComponent,
    SchloarshipsComponent,
    TutorComponent,
    MainpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
