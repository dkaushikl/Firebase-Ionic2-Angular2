import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { LoginPage } from '../pages/login-page/login-page';
import { HomePage } from '../pages/home/home';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  // rootPage = SignupPage;
  rootPage: any = SignupPage;
  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform) {
    this.initializeApp();


    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Sign In', component: SigninPage },
      { title: 'Sign Up', component: SignupPage }
    ];
    // platform.ready().then(() => {
    //   StatusBar.styleDefault();
    //   Splashscreen.hide();
    // });

  }
  initializeApp() {
      this.platform.ready().then(() => {
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        StatusBar.styleDefault();
        Splashscreen.hide();
      });
    }

    openPage(page) {
      this.nav.setRoot(page.component);
    }
}
