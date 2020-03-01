import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';
import { Observable, EMPTY, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) { }

  getPosts() {
    return this.http.get(this.url);
  }

  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post));
  }
  updatePost(post) {
    return  this.http.patch(this.url + '/' + post.id, JSON.stringify({isRead : true}));
  }
  deletePost(id) {
    return this.http.delete(this.url + '/' + id);
  }
}


