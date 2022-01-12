import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  useremail !:string | null;

  constructor() { }

  ngOnInit(): void {
    this.useremail = localStorage.getItem('userEmail');
  }
  onExitClicked(){
    localStorage.clear();
  }

}
