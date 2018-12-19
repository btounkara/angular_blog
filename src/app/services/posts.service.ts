import { Injectable, OnInit } from '@angular/core';
import { Post } from '../model/post.model';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';
import { DataSnapshot } from 'firebase/database';

@Injectable({
  providedIn: 'root'
})

export class PostsService {

  private postsDatabase = '/posts';

  // To not display the empty message before the loading is done
  loadingFinished: boolean;
  
  posts: Post[] = [];
  // Subject
  postSubject = new Subject<Post[]>();
  
  constructor() {
    this.loadingFinished = false;
    this.getPosts();
  }

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

  /* Retrieve the posts */
  getPosts(){
    firebase.database().ref(this.postsDatabase)
      .on('value', (data: DataSnapshot) => {
          // Retrieve the posts from firebase
          this.posts = data.val() ? data.val() : [];
          // Indicate that the loading is finished
          this.loadingFinished = true;
          // Emit the posts
          this.emitPosts();
        }
      );
  }

  /* Save the posts in firebase's database */
  savePosts(){
    firebase.database().ref('/posts').set(this.posts);
  }

  /* Add a new post to the list */
  addPost(post: Post){
    // Add the post in the list
    this.posts.push(post);
    // Updating the database
    this.savePosts();
    // Updating
    this.emitPosts();
  }

  /* Remove a post */
  remove(post: Post){
    // Return the list without the post to remove
    this.posts = this.posts.filter(p => p !== post);
    // Updating the database
    this.savePosts();
    // Updating
    this.emitPosts();
  }
}
