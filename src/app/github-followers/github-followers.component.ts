import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { FollowersService } from '../services/followers.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];

  constructor(
    private route: ActivatedRoute,
    private service: FollowersService) { }

  ngOnInit() {
    const obs = combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ]).pipe(switchMap(combined => {
      const id = combined[0].get('id');
      const page = combined[1].get('page');

      return this.service.getAll();
    }))
    .subscribe(followers => this.followers = followers);



    // .pipe(switchMap(combined => {


      // return this.service.getAll();
   // }))


  }
}
