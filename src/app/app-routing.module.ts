import { Component, NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AboutComponent } from './pages/about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './pages/notfound/notfound.component';

const routes: Routes =[
  {
    path:"home",component:HomeComponent
  },
  {
    path:"about",component:AboutComponent
  },{
    path:"dashboard",component:DashboardComponent
  },{
    path:"login",component:LoginComponent
  },{
    path:'',pathMatch:'full',redirectTo:'/home'
  },{
    path:'***',component:NotfoundComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
