import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';
import { Post } from '../model/post.model';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  postForm : FormGroup;

  constructor(private formBuilder: FormBuilder,
    private postService: PostsService,
    private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  /* Initiate the form */
  initForm(){
    this.postForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      content: ['', [Validators.required]],
      loveIts: '0',
      created_at: null
    });
  }

  /* Event onSubmit for the form */
  onSubmitForm(){
    // Retrieves the form
    const formValue = this.postForm.value;
    // Creates a new post with the data of the form
    const newPost = new Post(formValue['title'], formValue['content'], new Date(), formValue['loveIts']);
    console.log(newPost);
    // Add the new post to the list
    this.postService.addPost(newPost);
    // Redirect to the posts
    this.router.navigate(['posts']);
  }
}
