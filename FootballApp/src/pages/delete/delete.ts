import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import {HomePage} from '../../pages/home/home';
import { LoginSignupProvider } from '../../providers/login-signup/login-signup';
/**
 * Generated class for the DeletePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-delete',
  templateUrl: 'delete.html',
})
export class DeletePage {

  searchData:any
  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams,public loginProvider: LoginSignupProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeletePage');
  }

  deletePlayer(username) {

    let p = this.loginProvider.deletePlayers(username);
    p.then(data => {
        this.navCtrl.push(HomePage);
    });
    
  } 

}
