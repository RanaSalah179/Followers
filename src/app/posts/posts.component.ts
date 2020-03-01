import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[];
  constructor(private service: PostService) {

  }

  createPost(input: HTMLInputElement) {
     const post = {title : input.value};

     input.value = '';
     this.service.createPost(post)
    .subscribe(response => {

      post.id = response.json().id;
      // for Adding my value at the top of posts we will use splice method
      this.posts.splice(0, 0, post);
    },
    (error: AppError) => {
      if (error instanceof BadInput) {
          // this.form.setErrors(error.originalError());
        } else { throw error; }


    });
  }

  updatePost(post) {
    // by using patch we will send 1 or fiew propertites , patch is not widely supported
    this.service.updatePost(post)
    .subscribe(response => {
      console.log(response.json());
    });
    // if we use put method we will send the entire object , mos of APIS support put method
    // this.http.put(this.url,JSON.stringify({post}));

  }

  deletePost(post) {
     this.service.deletePost(345)
    .subscribe(
     response => {
     const index = this.posts.indexOf(post);
     this.posts.splice(index, 1);
     },
     (error: AppError) => {
      if (error instanceof NotFoundError) {
        alert('this post has already been  deleted');
      } else { throw error; }
    });
  }
  // DON'T CALL HTTP SERVICE IN THE CONSTRUCTOR OF YOUR COMPONENT ,.. TAKE CARE :)) ...
  // if you want intialisation use ngOnInit method
  ngOnInit() {
        // to get the data from the server using service class
       this.service.getPosts()
        .subscribe(response => {
       this.posts = response.json();
    });
  }

}

