import { Component, OnInit } from '@angular/core';
import { authService } from 'src/app/auth.service';
import { Subscription } from 'rxjs';
import { userService } from 'src/app/userService';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser : any;
  users : any[] = [];
  userDataSubscription : Subscription | undefined;

 constructor(private authService : authService,private userService : userService) { 
    // this.currentUser = this.authService.getCurrentUser();

    // this.users = authService.getAllUsers();
  }

  

  ngOnInit(): void {
    this.userDataSubscription = this.authService.userData$.subscribe((data) =>{
      this.users = data;
      console.log(this.users);
      // this.currentUser = this.authService.getCurrentUser();

    });

    
    // this.authService.getCurrentUser$.subscribe(())
    this.authService.currentUser$.subscribe((user) => {
      this.currentUser = user;

      console.log("this.currentUser" ,this.currentUser);
      // console.log(this.users);
    })

    // this.users = this.authService.getAllUsers();
    // this.currentUser = this.authService.getCurrentUser();


  }


  isCurrentUser(user : any) : Boolean{
      return user && this.currentUser && user.email === this.currentUser.email;
  }


}
