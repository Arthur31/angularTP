import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getUserDetails(username, password) {
    // post detail to API server

    console.log(username, password);
    return this.http.post('https://b2-angular.firebaseio.com/angularTP.json', {
      username,
      password
    }).subscribe(data => {
      console.log(data, "is was we got from the server");
    })
  }
}
