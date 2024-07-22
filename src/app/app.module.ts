import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
// import {  } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { SignupComponent } from './signup/signup/signup.component';
import { HomeComponent } from './home/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
// import { AboutUsComponent } from './about-us/about-us.component';
import { AboutUsComponent } from './about-us/about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us/contact-us.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { userService } from './userService';
// import {userService} from '.angular/user'
// import { AboutUsComponent } from './about-us/about-us.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [userService],
  bootstrap: [AppComponent]
})
export class AppModule { }
