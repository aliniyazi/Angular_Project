import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserRegisterModel } from 'src/app/Models/user.register.model';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  userRegister: UserRegisterModel = { Username: '', Email: '', Password: '' };

  constructor(
    private router: Router,
    private userService: UserService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('userEmail') !== null) {
      this.router.navigateByUrl('/');
    }
  }
  onRegiterUser(
    username: string,
    email: string,
    password: string,
  ) {
    if(!this.registerValidation(username,email,password)){
      this.toastr.warning("Invalid inputs","Invalid")
      return;
    }
    this.userRegister.Username = username;
    this.userRegister.Email = email;
    this.userRegister.Password = password;

    this.userService.register(this.userRegister).subscribe(
      (responceData) => {
        this.router.navigateByUrl('/login');
        this.toastr.success('Regsiter is Successful', 'You can login now');
      },
      (error) => {
        if (error instanceof HttpErrorResponse) {
          this.toastr.error(error.error, 'Register Error');
        }
      }
    );
  }
  registerValidation(username:string,email:string,password:string){
    if(this.userService.usernameValidator(username) && this.userService.passwordValidator(password) && this.userService.emailValidator(email)){
      return true;
    }
    return false
  }
}
