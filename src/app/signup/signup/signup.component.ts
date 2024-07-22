import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { authService } from 'src/app/auth.service';
import { userService } from 'src/app/userService';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  registrationError : string | null = null;
  signupForm !: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private authService: authService,private userService : userService) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {

  }

  onSubmit() {
    // const userExist = usersData
    if(this.signupForm.invalid) {
      return;
    }

    const name = this.signupForm.get('name')?.value;
    const email = this.signupForm.get('email')?.value;
    const password = this.signupForm.get('password')?.value;

    const registrationResult = this.userService.register({name, email, password});

    if(registrationResult){
      this.registrationError = registrationResult;
      // alert("Already Data Exists !!! Please login with this details..");
      alert(registrationResult);
      this.router.navigate(['/login']);
    }

    else {
      this.registrationError = null;
      alert("Signup Successfull !!!!");
      this.router.navigate(['/login']);
    }


    // if (this.signupForm.valid) {
    //   // const user = this.signupForm.value;
    //   // this.userSerivce.addUser(user);
    //   // this.signupForm.reset;
    //   const user = this.signupForm.value;
    //   this.userService.register(user);
    //   alert("Signup Success !!");
    //   this.router.navigate(['/login']);
    // }
  }
}
