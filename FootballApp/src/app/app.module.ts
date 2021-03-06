import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {DeletePage} from '../pages/delete/delete';
import {SearchPage} from '../pages/search/search';
import {LoginPage} from '../pages/login/login';
import {SignupPage} from '../pages/signup/signup';
import {WelcomePage} from '../pages/welcome/welcome';
import { LoginSignupProvider } from '../providers/login-signup/login-signup';

@NgModule({
  declarations: [
    MyApp,
    SearchPage,
    LoginPage,
    SignupPage,
    WelcomePage,
    DeletePage,
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
    WelcomePage,
    DeletePage,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginSignupProvider
  ]
})
export class AppModule {}
