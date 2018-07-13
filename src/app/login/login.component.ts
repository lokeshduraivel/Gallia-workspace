import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  title = 'app';
  constructor(private router : Router) {

  }
  ngOnInit() {

 }
 login() {
   // if(this.email == 'test@gmail.com' && this.password == 'password') {
   // 	this.router.navigate(['user']);
   // }else {
   // 	alert("Invalid credentials.")
   // }
   this.router.navigate(['dashboard']);
  }
  createUser(){
    this.router.navigate(['createUser']);
  }
}


