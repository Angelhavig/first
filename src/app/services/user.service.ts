import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { UserResult } from '../Interfaces/users';
import { LanguageResult } from '../Interfaces/language';
import { PostsResult } from '../Interfaces/posts';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) {
    this.getUsers().subscribe((result: UserResult)=>{
      console.log(result.data);
    });
   }
   getUsers(){
    return this.http.get<UserResult>("https://reqres.in/api/users?page=1");
   }
   getLanguages(){
    return this.http.get<LanguageResult>("http://localhost:3000/lenguages");
   }
   
   getPosts(){
    return this.http.get<PostsResult>("http://localhost:3000/posts");
   }
  
  
}
