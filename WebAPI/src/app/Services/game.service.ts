import { HttpClient, HttpParams } from "@angular/common/http";
import { UserLoginModel } from "../Models/user.login.model";
import { Injectable } from '@angular/core';
import { User } from "../Models/user.model";
import { Observable } from "rxjs";
import { UserRegisterModel } from "../Models/user.register.model";
import { UserGameScoreModel } from "../Models/user.game.score.model";

@Injectable({ providedIn: 'root' })

export class GameService{
    constructor(private http:HttpClient){

    }
    saveScore(userGameScore:UserGameScoreModel){
        return this.http.put<UserGameScoreModel>('https://localhost:5001/api/UserControler/user/score',userGameScore);
    }
    getUserGameScore(userId:number,gameId:number):Observable<number[]>{
        const params = new HttpParams()
        .set('UserId',userId)
        .set('GameId',gameId);
        return this.http.get<number[]>('https://localhost:5001/api/UserControler/user/score',{params});
    }
    
}