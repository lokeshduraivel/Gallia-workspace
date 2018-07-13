import { Component,OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
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
}
