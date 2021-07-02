import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;

  user: any = {
    "username": "",
    "email": "",
    "password": "",
    "role": ["admin"]
  }

  constructor(private auth: AuthService,private route: Router,) { }

  register(registerForm) {
    this.auth.signup(registerForm.value).subscribe((res) => {
      console.log(res);
      this.route.navigate(['/login']);
    })
  }

  ngOnInit(): void {
  }
}