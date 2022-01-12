import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from 'src/app/Models/user.model';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  user!: User;
  id!: number;

  constructor(private route: ActivatedRoute,private router: Router,private userService:UserService) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.userService.getUser(this.id).subscribe(responceData=>{
            this.user = responceData;
            console.log(this.user.email);
          });
        }
      );
  }

}
