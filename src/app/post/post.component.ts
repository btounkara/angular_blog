import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../model/post.model';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent implements OnInit {

  // Attributes
  @Input() post: Post;

  constructor(public postsService : PostsService) { 
  }

  ngOnInit() {
  }

  onLike(){
    this.postsService.like(this.post);
  }

  onUnlike(){
    this.postsService.unlike(this.post);
  }
}
