import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public http: Http) {
    //this loads the data for the first 19 players 
    this.loadData();
  }

  //created a new variable of type any 
  users:any;
  // players:any;
  //created a method which loads all the values from mysql in the webpage 
  loadData(){

 if (this.users) {
      return Promise.resolve(this.users);
    }

    return new Promise(resolve => {

      this.http.get('http://localhost:8081/players').map(res => res.json()).subscribe(data => {
        this.users = data;
        resolve(this.users);
      });
    });
  }
}
