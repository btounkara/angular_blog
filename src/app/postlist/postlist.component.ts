import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.scss']
})
export class PostlistComponent implements OnInit {
  // List of all posts
  posts = [
    {
      title: 'My first post',
      content: 'This is my first post',
      loveIts: 0,
    }, 
    {
      title: 'My second post',
      content: 'This is my second post',
      loveIts: -5,
    },
    {
      title: 'My third post',
      content: 'This is my third post',
      loveIts: 10,
    },
    {
      title: 'My fourth post',
      content: 'This is my fourth post',
      loveIts: 23
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
