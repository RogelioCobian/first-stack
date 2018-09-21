import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from './post.model';

// The @Injectable makes it so that I don't have to input it onto the providers at the app.module.ts
// Note that {providedIn: 'root'} is nessasary if you want to do this

@Injectable({providedIn: 'root'})
export class PostsService {
  private posts: Post[] = [];
  // Subject is an rxjs method that is kinda like an event emmitter.
  // No need to install rxjs as it comes with it, just import it
  private postsUpdated = new Subject<Post[]>();

  getPosts() {
    // Spread Operator is "..." in the return
    // In essence it creates a copy or a new instance with all the saved values
    // Note: I'm not certain
    return [...this.posts];
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, content: string) {
    const post: Post = {title: title, content: content};
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);

  }
}
