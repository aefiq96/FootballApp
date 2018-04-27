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

  constructor(public http: Http) {
     this.data = null;
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


}
