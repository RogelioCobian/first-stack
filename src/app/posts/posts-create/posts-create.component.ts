import { PostsService } from './../posts.service';
import { Component,
         OnInit
        //  EventEmitter,
        //  Output
       } from '@angular/core';
import { NgForm } from '../../../../node_modules/@angular/forms';
// import { Post } from '../post.model';


@Component({
  selector: 'app-posts-create',
  templateUrl: './posts-create.component.html',
  styleUrls: ['./posts-create.component.scss']
})
export class PostsCreateComponent implements OnInit {

  enteredTitle = '';
  enteredContent = '';
  // <Post> means it will only accept data of type post.
  // Event emitter is a so called 'generic type'
  // @Output() postCreated = new EventEmitter<Post>();


  constructor(public postsService: PostsService) {}

  ngOnInit() {
  }

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    // This is where we intially create a new post of type post that we pre-defined in the model.
    // const post: Post = {
    //   title: form.value.title,
    //   content: form.value.content
    // };
    // this.postCreated.emit(post);
    this.postsService.addPost(form.value.title, form.value.content);
    form.resetForm();
  }

}
