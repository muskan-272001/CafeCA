import { Component, OnInit } from '@angular/core';
import { authService } from 'src/app/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { userService } from 'src/app/userService';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm !: FormGroup;
  loginError : string | null = null;

  constructor(private fb: FormBuilder, private authService: authService, private router: Router,private userService : userService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    // if (this.loginForm.valid) {
    //   const email = this.loginForm.get('email')?.value;
    //   const password = this.loginForm.get('password')?.value;
    //   if (this.authService.login(email, password)) {
    //     alert("Login Success !!");
    //     this.router.navigate(['/home']);
    //     this.loginError = false;
    //   }

    //   else {
    //     this.loginError = true;
    //     alert("Authentication Fails");
    //   }
    // }
    if(this.loginForm.invalid) {
      return;
    }

    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;
    const loginResult = this.authService.login(email, password);

    if(loginResult) {
      this.loginError = loginResult;
    }

    else {
      this.loginError = null;
      this.router.navigate(['/home']);
    }
  }
}
