import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }

  addUser(user: User) {
    let users = [];

    const storedUsers = localStorage.getItem('Users');
    if (storedUsers !== null) {
      try {
        users = JSON.parse(storedUsers);
        if (!Array.isArray(users)) {
          // If it's not an array, treat it as an empty array
          users = [];
        }
      } catch (error) {
        console.error("Error parsing stored users data:", error);
        // If parsing fails, treat it as an empty array
        users = [];
      }
    }
    users = [...users, user];
    localStorage.setItem('Users', JSON.stringify(users));
  }
}
