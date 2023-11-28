import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  authUser(user: any) {
    let UserArray = [];
    const storedUserData = localStorage.getItem('Users');
    if (storedUserData !== null) {
      UserArray = JSON.parse(storedUserData);
      return UserArray.find((p: { userName: any; password: any; }) => p.userName === user.userName && p.password === user.password);
    }
    return null; // Return null if 'User' data in local storage is not found
  }

}
