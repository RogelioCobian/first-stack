import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-posts-create',
  templateUrl: './posts-create.component.html',
  styleUrls: ['./posts-create.component.scss']
})
export class PostsCreateComponent implements OnInit {

  enteredTitle = '';
  enteredContent = '';
  @Output() postCreated = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  onAddPost() {
    const post = {
      title: this.enteredTitle,
      content: this.enteredContent
    };
    this.postCreated.emit(post);
  }

}
