import { Component, NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AboutComponent } from './pages/about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { MainComponent } from './admin/main/main.component';
import { AuthGuard } from './guards/auth.guard';
import { PostComponent } from './pages/post/post.component';
import { CommentsComponent } from './pages/comments/comments.component';


const routes: Routes =[
  {
    path:"home",component:HomeComponent,title:"Home-Page", data:{pageRouteName: "Home-page"}
  },{
    path: 'admin', component: MainComponent, title: "Main", canActivate: [AuthGuard]
  },{
    path:"about",component:AboutComponent,title:"About"
  },{
    path:"dashboard",component:DashboardComponent,title:"dashboard"
  },{
    path:"login",component:LoginComponent,title:"login"
  },{
    path:"posts",component:PostComponent,title:"Posts"
  },{
    path:"comments/:id",component: CommentsComponent,title:"Comments"
  },{
    path:'',pathMatch:'full',redirectTo:'/home', data:{pageRouteName: "Home-page"}
  },{
    path:'***',component:NotfoundComponent, title :"Not found"
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
