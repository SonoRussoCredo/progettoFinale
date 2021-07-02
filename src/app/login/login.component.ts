import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  person = {
    "username":"",
    "password":""
  }
  constructor(private auth: AuthService, private router: Router) { }
  login() {
    this.auth.login(this.person).subscribe((response)=>{
      console.log(response);
      localStorage.setItem('currentUser', JSON.stringify(response));
      console.log(localStorage.getItem('currentUser'))
      //this.router.navigate(["/user"])
    })
  }
  ngOnInit(): void {
  }

}