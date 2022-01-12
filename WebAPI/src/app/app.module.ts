import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './Main/login/login.component';
import { RegisterComponent } from './Main/register/register.component';
import { GamesComponent } from './games/games.component';
import { ReflexgameComponent } from './games/reflexgame/reflexgame.component';
import { UserService } from './Services/user.service';
import { MemorygameComponent } from './games/memorygame/memorygame.component';
import { ForgotPasswordComponent } from './Main/forgot-password/forgot-password.component';
import { GameService } from './Services/game.service';
import { UsersComponent } from './Main/users/users.component';
import { UserComponent } from './Main/users/user/user.component';
import { UserDetailComponent } from './Main/users/user-detail/user-detail.component';

const appRoutes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'games',component:GamesComponent},
  {path:'reflex-game',component:ReflexgameComponent},
  {path:'memory-game',component:MemorygameComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'users',component:UsersComponent},
  {path:'users/:id',component:UserDetailComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    GamesComponent,
    ReflexgameComponent,
    MemorygameComponent,
    ForgotPasswordComponent,
    UsersComponent,
    UserComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService,GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
