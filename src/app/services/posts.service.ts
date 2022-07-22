import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ComentResult } from "../Interfaces/comments";
import { PostsResult } from "../Interfaces/posts";

@Injectable({
    providedIn: 'root'
})
export class PostsService {

    constructor(private http: HttpClient, private route: ActivatedRoute) {

    }

    getPosts() {
        return this.http.get<PostsResult>("http://localhost:3000/posts");
    }
}
