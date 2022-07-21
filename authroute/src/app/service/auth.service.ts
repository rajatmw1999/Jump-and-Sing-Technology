import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isUserLoggedIn(){
    if(localStorage.getItem("token"))
    {
      //user is logged in as the key token exists in local Storage
      return true;
    }
    // if the key token does not exist in local storage, return false
    return false;
  }
}
