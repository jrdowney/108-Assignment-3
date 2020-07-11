import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private userList = [];

  constructor() { }


  public saveUser(user){
    this.userList.push(user);
  }

  public getAllUsers() {
    return this.userList;
  }

  public removeItem(index) {
    // remove from the array
  }
}

