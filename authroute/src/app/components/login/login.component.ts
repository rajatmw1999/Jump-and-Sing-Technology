import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: any;
  password: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    if(this.username == 'user' && this.password == 'password')
      {
        localStorage.setItem("token","myrandomtoken1234");
        window.alert("user logged in");
        this.router.navigate(['home']);
      }
    else  
      window.alert("Wrong username/password")
  }

  handleUsername(e: any){
    this.username = e.target.value;
  }

  handlePassword(e: any){
    this.password = e.target.value;
  }

}
