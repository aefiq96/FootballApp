import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {SearchPage} from '../pages/search/search';
import {LoginPage} from '../pages/login/login';
import{SignupPage} from '../pages/signup/signup';

@NgModule({
  declarations: [
    MyApp,
    SearchPage,
    LoginPage,
    SignupPage,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpModule,//import the module here 
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SearchPage,
    LoginPage,
    SignupPage,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
