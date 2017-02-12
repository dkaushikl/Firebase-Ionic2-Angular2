import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Storage } from '@ionic/storage';
import { AngularFireModule } from 'angularfire2';
import { LoginPage } from '../pages/login-page/login-page';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';

export const firebaseConfig = {
  apiKey: 'AIzaSyB89YloyJmxjdOc1OHWsWg8my6hy5rqIuU',
  authDomain: 'forumapp-3ae5a.firebaseapp.com',
  databaseURL: 'https://forumapp-3ae5a.firebaseio.com',
  storageBucket: 'forumapp-3ae5a.appspot.com',
  messagingSenderId: '930583728842'
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SigninPage,
    SignupPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SigninPage,
    SignupPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Storage]
})
export class AppModule {}
