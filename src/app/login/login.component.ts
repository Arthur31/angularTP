import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private Auth: AuthService) { }

  ngOnInit() {
  }

  loginUser(event) {
    console.log("aze");
    event.preventDefault();

    const target = event.target;
    const username = target[0].value;
    const password = target[1].value;
    console.log(username, password);
    this.Auth.getUserDetails(username, password);
  }

}
