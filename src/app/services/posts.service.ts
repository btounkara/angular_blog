import { Injectable } from '@angular/core';
import { Post } from '../model/post.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: Post[] = [new Post('My first post', 'This is my first post', new Date(), 0)];
    // {
    //   title: 'My first post',
    //   content: 'This is my first post',
    //   loveIts: 0,
    // }, 
    // {
    //   title: 'My second post',
    //   content: 'This is my second post',
    //   loveIts: -5,
    // },
    // {
    //   title: 'My third post',
    //   content: 'This is my third post',
    //   loveIts: 10,
    // },
    // {
    //   title: 'My fourth post',
    //   content: 'This is my fourth post',
    //   loveIts: 23
    // }
  

  // Subject
  postSubject = new Subject<Post[]>();
  
  constructor() { }

  /* Emits the posts */
  emitPosts(){
    this.postSubject.next(this.posts);
  }

  /* Increase the number of likes */
  like(post: Post){
    post.loveIts++;
  }

  /* Decrese the number of likes */
  unlike(post: Post){
    post.loveIts--;
  }

  getPosts(){
    return this.posts;
  }
}
