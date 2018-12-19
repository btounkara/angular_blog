import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../model/post.model';
import { PostsService } from '../services/posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.scss']
})
export class PostlistComponent implements OnInit, OnDestroy{
  // List of all posts
  posts: Post[];
  // Subscription
  subscribePosts: Subscription;

  constructor(public postsService: PostsService) {  }

  ngOnInit() {
    this.subscribePosts = this.postsService.postSubject.subscribe(
      // Retrieval of the posts
      (postsData: Post[]) => {
        this.posts = postsData;
      }
    );
    // Emit the posts
    this.postsService.emitPosts();
  }

  ngOnDestroy() {
    this.subscribePosts.unsubscribe();
  }

}
