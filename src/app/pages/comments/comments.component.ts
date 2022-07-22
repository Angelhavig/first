import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComentResult, Comment } from 'src/app/Interfaces/comments';
import { CommentsService } from 'src/app/services/comments.service';
import { PostsService } from 'src/app/services/posts.service';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comment: Comment[] = [];

  constructor(private service: CommentsService, private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);    


    this.service.getComments(Number(id)).subscribe((result: ComentResult) => {
      console.log(result.data);
      this.comment = result.data;
    });
  }

  ngOnInit(): void {


  }


}
