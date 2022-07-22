import { Component, OnInit } from '@angular/core';
import { Post, PostsResult } from 'src/app/Interfaces/posts';
import { PostsService } from 'src/app/services/posts.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: Post[] = [];

  constructor(private service: PostsService) {
    this.getPosts();
  }

  ngOnInit() {
  }

  getPosts(): void {
    this.service.getPosts().subscribe((result: PostsResult) => {
      console.log(result.data);
      this.posts = result.data;
    });
  }


}
