import { HttpClient, HttpParams } from "@angular/common/http";
import { UserLoginModel } from "../Models/user.login.model";
import { Injectable } from '@angular/core';
import { User } from "../Models/user.model";
import { Observable } from "rxjs";
import { UserRegisterModel } from "../Models/user.register.model";

@Injectable({ providedIn: 'root' })
export class UserService{

    constructor(private http:HttpClient){

    }

    login(user:UserLoginModel):Observable<User>{
        return this.http.post<User>('https://localhost:5001/api/UserControler/user/login',user);
    }
    register(user:UserRegisterModel):Observable<User>{
        return this.http.post<User>('https://localhost:5001/api/UserControler/user/register',user);
    }
    forgotpassword(email:string){
        const params = new FormData;
        params.append('email',email)
        return this.http.post('https://localhost:5001/api/UserControler/user/reset/password',params);
    }
    getAllUsers():Observable<User[]>{
        return this.http.get<User[]>('https://localhost:5001/api/UserControler/users');
    }
    getUser(id:number):Observable<User>{
        const params = new HttpParams()
        .set('id',id)
        return this.http.get<User>('https://localhost:5001/api/UserControler/user/id',{params});
    }

    usernameValidator(username:string){
        debugger
        let rgx = new RegExp(/[a-z0-9_]+/)
        if(username.length < 5 || username.length>50){
            return false;
        }
        return rgx.test(username)
    }
    passwordValidator(password:string){
        debugger
        if(password == null){
            return false;
        }
        let rgx = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,44}$/);
        return(rgx.test(password));
            
    }
    emailValidator(email:string){
        debugger
        if(email == null){
            return false;
        }
        let rgx = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        return rgx.test(email)
    }
}