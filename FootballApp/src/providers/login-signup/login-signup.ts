import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the LoginSignupProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginSignupProvider {

  data: any;
  deleteData:any;

  constructor(public http: Http) {
     this.data = null;
     this.deleteData = null;
    console.log('Hello LoginSignupProvider Provider');
  }

  getsignup(value, value2): Promise<any> {

    let body = {
      username: value,
      password: value2
    };

    let request = this.http.post('http://localhost:8081/signup', body);

    return request.toPromise();
  }

  getlogin2(username,password){

    let body = {
      username: username,
      password: password
    };

    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {

      this.http.post('http://localhost:8081/login', body).subscribe(data => {
        this.data = data;
        resolve(data);
      });
    });
  }


  deletePlayers(username) {
    let body = {
      username: username
    };

    if (this.deleteData) {
      return Promise.resolve(this.deleteData);
    }
    return new Promise(resolve => {
    //here we are sending a get request which gets data back from mongo
    //sending a get request to this url
      this.http.post('http://localhost:8081/delete',body).subscribe(data => {
        //the data we get back from get request we store into this
         this.deleteData = data;
        resolve(data); 
      });
    });
    
  } 


}
