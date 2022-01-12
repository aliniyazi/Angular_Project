import { HttpClient,HttpErrorResponse, HttpParams  } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private router:Router,private userService:UserService,private toastr:ToastrService) { }

  ngOnInit(): void {
    if(localStorage.getItem("userId")!==null){
      this.router.navigateByUrl('/')
    }
  }
  onResetClicked(postData: {email:string}){
    this.userService.forgotpassword(postData.email).subscribe(responceData=>{
      this.router.navigateByUrl('/');
      this.toastr.success("Your Password is Successfuly changed. Please check your Email!","Password Reset");
    },(error)=>{
      if(error instanceof HttpErrorResponse){
        this.toastr.error(error.error,"Login Error");
      }
    });
  }

}
