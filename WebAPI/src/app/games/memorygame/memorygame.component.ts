import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserGameScoreModel } from 'src/app/Models/user.game.score.model';
import { GameService } from 'src/app/Services/game.service';

@Component({
  selector: 'app-memorygame',
  templateUrl: './memorygame.component.html',
  styleUrls: ['./memorygame.component.scss'],
})
export class MemorygameComponent implements OnInit {
  randomNumber: number = 5;
  counter: number = 1;
  input:string = '';
  score:number = 0;
  userGameScore:UserGameScoreModel = {UserId:0,GameId:0,Score:0};
  lastScore:number = 0;

  constructor(private toastr: ToastrService,private gameService:GameService) {}

  ngOnInit(): void {
    document.getElementById('score')!.style.visibility = 'hidden';
    document.getElementById('button')!.style.visibility = 'hidden';
    
    let userID = (Number)(localStorage.getItem("userId"));
    if(userID!==null){
      this.gameService.getUserGameScore(userID,2).subscribe(responceData=>{
        this.lastScore = responceData[0];
      })
    }
  }

  onSubmited(inputNumber: string) {
    if (Number(inputNumber) === this.randomNumber) {
    }
  }
  onNext() {
    if (Number(this.input) !== this.randomNumber) {
      this.toastr.error('Game Over', 'Game');
      document.getElementById('inputs')!.style.visibility = 'hidden';
      document.getElementById('score')!.style.visibility = 'visible';
      document.getElementById('button')!.style.visibility = 'visible';


      
    } else {
      this.score++;
      document.getElementById('inputs')!.style.visibility = 'hidden';
      document.getElementById('randomnumber')!.style.visibility = 'visible';
      this.counter *= 10;
      this.randomNumber = Math.floor(1 + (this.counter - 1) * Math.random());
      setTimeout(() => {
        document.getElementById('randomnumber')!.style.visibility = 'hidden'
        document.getElementById('inputs')!.style.visibility = 'visible';
        this.input = ''

      }, 5000);
    }
  }
  onSaveScore(){
    if(localStorage.getItem("userId")===null){
      this.toastr.warning("Score","Please Login To Save Score");
      return;
    }
    if(this.score === 0){
      this.toastr.warning("We dont like cheaters!","Your score is not saved");
      return
    }
    this.userGameScore.GameId = 2;
    this.userGameScore.UserId = Number(localStorage.getItem("userId"));
    this.userGameScore.Score = this.score;
    this.gameService.saveScore(this.userGameScore).subscribe(responceData=>{
      this.toastr.success("Succces","Score Saved")
    },
    (error)=>{
      this.toastr.error("Error","Invalid")
    });
  }
}
