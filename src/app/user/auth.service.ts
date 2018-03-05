import { Injectable } from '@angular/core';
import { IUser } from './user.model';
import { last } from '@angular/router/src/utils/collection';

@Injectable()
export class AuthService {
    currentUser: IUser

    loginUser(userName: string, password: string){
        this.currentUser = {
            id: 1,
            firstName: "Devaiah",
            lastName: "Ramesh",
            userName: userName
        };
    }

    isAuthenticated(){
        return !!this.currentUser;
    }

    updateCurrentUser(firstName: string, lastName:string){
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    }
}