import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private router: Router) { }
// to redirect the user profile submit button to another page , in this case it's followers page
  submit() {
    this.router.navigate(['/followers'], {
      queryParams : { page : 1 , order: 'newest'}
    });
  }

  ngOnInit() {



  }

}
