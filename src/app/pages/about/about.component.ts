import { Component, OnInit } from '@angular/core';
import { Language, LanguageResult } from 'src/app/Interfaces/language';
import {User, UserResult} from 'src/app/Interfaces/users';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  users: User[]=[];
  languages: Language[]=[];

  constructor(private service: UserService) {
    this.getUsers();
    this.giveMeLanguage();
   }

  ngOnInit(): void {
  }
  getUsers():void{
    this.service.getUsers().subscribe((result:UserResult)=>{
      console.log(result.data);
      this.users = result.data;
    });
  }
  giveMeLanguage():void{ 
    this.service.getLanguages().subscribe((result: LanguageResult)=>{
      console.log(result.data);
      this.languages= result.data;
    });
  }
}


