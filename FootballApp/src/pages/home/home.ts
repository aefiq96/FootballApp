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

  }

  //created a new variable of type any 
  users:any;
  //created a method which loads all the values from mysql in the webpage 
  loadData(){

    this.http.get('http://localhost/test.php').map(Data => Data.json()).subscribe(Data => {
      //this assigns 
      this.users = Data;
      console.log(this.users);

    },(err) =>{
      alert("failed loading data");
    });
  }

}
