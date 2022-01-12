import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { timer } from 'rxjs';
import { UserGameScoreModel } from 'src/app/Models/user.game.score.model';
import { GameService } from 'src/app/Services/game.service';

@Component({
  selector: 'app-reflexgame',
  templateUrl: './reflexgame.component.html',
  styleUrls: ['./reflexgame.component.scss'],
})
export class ReflexgameComponent implements OnInit {
  newScore: number = 0;
  lastScore:number = 0;
  subscription: any;
  userGameScore!:UserGameScoreModel
  

  constructor(private toastr:ToastrService,private gameService:GameService) {}

  ngOnInit(): void {
    let userID = (Number)(localStorage.getItem("userId"));
    if(userID!==null){
      this.gameService.getUserGameScore(userID,1).subscribe(responceData=>{
        this.lastScore = responceData[0];
      })
    }
  }

  onStartClicked() {
    

      let randomNumber:number = Math.random() * 5;
      setTimeout(() => {
        document.getElementById('rectangle')!.style.backgroundColor = 'green';
        this.observableTimer();
      }, randomNumber * 1000);
      
    
  }
  onRegtangleClicked() {
    this.subscription.unsubscribe();
    setTimeout(()=>{
      document.getElementById('rectangle')!.style.backgroundColor = 'red';
    },1000);
    
  }
  onSaveScore(){
    if(localStorage.getItem("userId")===null){
      this.toastr.warning("Score","Please Login To Save Score");
      return;
    }
    if(this.newScore === 0){
      this.toastr.warning("We dont like cheaters!","Your score is not saved");
      return
    }
    let userId = Number(localStorage.getItem("userId"));
    this.userGameScore = {UserId:userId,GameId:1,Score:this.newScore}
    this.gameService.saveScore(this.userGameScore).subscribe(responceData=>{
      this.toastr.success("Succces","Score Saved")
    },
    (error)=>{
      this.toastr.error("Error","Invalid")
    });
    
  }
  observableTimer() {
    this.subscription = timer(0, 1).subscribe((val) => {
      this.newScore = val;
    });
  }
}
