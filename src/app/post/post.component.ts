import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  // Attributes
  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  created_at: Date;

  constructor() { 
    if(!this.loveIts){
      this.loveIts = 0;
    }

    this.created_at = new Date();
  }

  ngOnInit() {
  }

  like(){
    this.loveIts++;
  }

  unlike(){
    this.loveIts--;
  }

}
