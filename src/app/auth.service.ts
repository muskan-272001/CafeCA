import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { userService } from "./userService";

@Injectable({providedIn : 'root',})

export class authService {
    private currentUserSubject : BehaviorSubject <any> = new BehaviorSubject<any>(null);
    public currentUser$ : Observable<any> = this.currentUserSubject.asObservable();
    public userData$ : Observable<any[]>;

    constructor(private userService : userService) {
        // const usersData = userService.getUserData(); //we are fetching the data
        // this.userDataSubject.next(usersData);  //emitting means storing the data
        this.userData$ = this.userService.userData$;

    }

    setCurrentUser(user : any) : void {
        this.currentUserSubject.next(user); 
    }

    getCurrentUser() : any {
        return this.currentUserSubject.value;
    }


    // register(user : any) : void {
    //     // const usersData = this.getUserData();
    //     // usersData.push(user);
    //     // this.saveUserData(usersData);
    //     let usersData = userService.getUserData();
    //     if(!Array.isArray(usersData)) {
    //         usersData = [];
    //     }

    //     usersData.push(user);
    //     this.saveUserData(usersData);
        
    // } 

    login(email : string, password : string) : string|null{
        const userData = this.userService.getUserData();
        // console.log(email, password);
        const foundUser = userData.find((user) => user.email === email && user.password === password);
        if(foundUser) {
            this.setCurrentUser(foundUser);
            return null;
        }

        else {
            return 'Invalid email or Password';
        }

    }

    // logOut() : void {
    //     this.currentUser = null;
    //     this.updateUserData();
    // }
    
    // getAllUsers() : any[]{ 
    //     return this.getUserData();
    // }
    

    // getCurrentUser() : any{
    //     return this.currentUserSubject.value;
    //     // return this.currentUser;
    // }

    // signup(user : any) : void {
    //     // user.id = this.users.length + 1;
    //     // this.users.push(user);
    //     // this.updateUserData();

    //     // this.saveUserData(user);
    // }

    



}