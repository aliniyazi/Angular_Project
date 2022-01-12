import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/Models/user.model';
import { UserLoginModel } from 'src/app/Models/user.login.model';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user:UserLoginModel = {Email:'',Password:''}
  

  constructor(private http:HttpClient,private toastr:ToastrService,private router:Router,private userService:UserService) { }

  ngOnInit(): void {
    if(localStorage.getItem('userEmail')!==null){
      this.router.navigateByUrl('/')
    }
  }
  onLogin(email:string,password:string){
    this.user.Email = email;
    this.user.Password = password;
    this.userService.login(this.user).subscribe(responceData=>{
      localStorage.setItem('userEmail',responceData.email);
      localStorage.setItem('userId',responceData.userId.toString());
      this.router.navigateByUrl('/');
    },
    (error)=>{
      if(error instanceof HttpErrorResponse){
        this.toastr.error("Invalid username or Email","Login Error");
      }
    });
  }

}
