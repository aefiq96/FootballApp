import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../../pages/home/home';
import { LoginSignupProvider } from '../../providers/login-signup/login-signup';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';


/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public loginProvider: LoginSignupProvider,public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signup(username,password) {

    let p = this.loginProvider.getsignup(username,password);

    p.then(data =>{
      if(data.status == 200){
        this.navCtrl.push(HomePage);
      }else{
        console.log("problem with post request " + data)
      }
    })
  }

}
