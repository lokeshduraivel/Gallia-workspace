import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'createUser', component: SignUpComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  { path: '', component: LoginComponent }

  ];


@NgModule({
  imports: [
     RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],

  declarations: []
})
export class AppRoutingModule { }
