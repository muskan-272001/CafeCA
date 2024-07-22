import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
@Injectable({providedIn : 'root',})

export class userService {
    private readonly STORAGE_KEY = 'user_data'; //this is storing data locally
    private userDataSubject : BehaviorSubject <any[]> = new BehaviorSubject<any[]>([]); //subscribing (current value cann be accessed)
    public userData$ : Observable <any[]> = this.userDataSubject.asObservable(); //observables is kind of stream (cannot be accessed)

    public saveUserData(usersData : any[]) : void{
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(usersData)); //saving the data in a local storage (storing the data)
        this.userDataSubject.next(usersData); //emitting
    }

    public getUserData() : any[] {
        const userDataString = localStorage.getItem(this.STORAGE_KEY); //after storing we are getting the user credentials (data is stored in the storage key)
        return userDataString ? JSON.parse(userDataString) : []; //parsing the data (parsing the data in a JSON format)
    }

    constructor() {
        const usersData = this.getUserData(); 
        this.userDataSubject.next(usersData);
    }

    register(user : any) : string | null{
            let usersData = this.getUserData();
            const userExist = usersData.some((existingUser : any) => existingUser.email === user.email);
            if(userExist) {
                return "User with this email already exist..";
            }
            
            // let usersData = this.getUserData();
            if(!Array.isArray(usersData)) {
                usersData = [];
            }
    
            usersData.push(user);
            this.saveUserData(usersData);
            return null;
        } 



}