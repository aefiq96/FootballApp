import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../../pages/home/home';
import { LoginSignupProvider } from '../../providers/login-signup/login-signup';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public loginProvider: LoginSignupProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

   login(username, password) {

    let p = this.loginProvider.getlogin2(username, password);

    p.then(data => {
        this.navCtrl.push(HomePage);
    });

  }

}
