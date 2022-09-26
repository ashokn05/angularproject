import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg:string=""
  loginRef = new FormGroup({
    email:new FormControl(),
    pass:new FormControl()
  });
  constructor( public router:Router) { }

  ngOnInit(): void {
  }

  checkUser(){
    let login = this.loginRef.value;
    //console.log(login);
    if(login.email=="ashok@gmail.com" && login.pass=="1234"){
      this.msg="Succesfully Login"
      this.router.navigate(["employee"]);
    }else{
      this.msg="Failure try once again"
    }
  }

}
