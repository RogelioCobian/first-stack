import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Post } from './../post.model';
import { PostsService } from './../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  // posts = [
  //   {title: 'First Post', content: 'This is the first post\'s content'},
  //   {title: 'Second Post', content: 'This is the first post\'s content'},
  //   {title: 'Third Post', content: 'This is the first post\'s content'}
  // ];

  // @Input()
  posts: Post[] = [];
  private postsSub: Subscription;

  // postsService: PostsService;

  constructor(public postsService: PostsService) {
    // this.postsService = postsService;
   }

  ngOnInit() {
    this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }

}
