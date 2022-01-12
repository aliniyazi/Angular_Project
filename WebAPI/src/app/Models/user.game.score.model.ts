export class UserGameScoreModel{
    public UserId:number;
    public GameId:number;
    public Score:number
    constructor(userid:number,gameid:number,score:number){
        this.UserId = userid;
        this.GameId = gameid;
        this.Score = score;
    }
}