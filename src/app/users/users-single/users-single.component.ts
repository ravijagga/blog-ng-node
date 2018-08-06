import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UsersService } from '../../shared/services/users.service';

@Component({
  selector: 'app-users-single',
  templateUrl: './users-single.component.html',
  styleUrls: ['./users-single.component.scss']
})
export class UsersSingleComponent {

  constructor(
    private usersService: UsersService,
    private activatedRoute: ActivatedRoute
  ) {
    // get article id
    this.activatedRoute.params.subscribe(params => {
      this.userId = params.id;
    });

    this.usersService
      .getUserById(this.userId)
      .subscribe(
        user => {
          this.userSingle = user;
        },
        err => {
          console.log(err);
        }
      );
  }

  private userId;
  private userSingle;

}
