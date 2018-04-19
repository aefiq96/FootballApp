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
  //created a method which loads all the values from mongo in the webpage 
  //we send a get request to the node server
  // and we get back the data//which we store into the variable called users
  loadData(){//loadData function

 if (this.users) {
      return Promise.resolve(this.users);
    }

    return new Promise(resolve => {
    //here we are sending a get request which gets data back from mongo
    //sending a get request to this url
      this.http.get('http://localhost:8081/players').map(res => res.json()).subscribe(data => {
        //the data we get back from get request we store into this
        this.users = data;
        resolve(this.users);
      });
    });
  }
}
