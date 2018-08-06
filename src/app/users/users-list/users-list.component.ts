import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UsersService } from '../../shared/services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {

  constructor(
    private usersService: UsersService,
    private activatedRoute: ActivatedRoute
  ) {
    activatedRoute.queryParams
      .subscribe(queryParams => {
        this.pageNum = parseInt(queryParams.page, 10) || 1;
      });

    usersService.getUsersByPage(this.pageNum)
      .subscribe(usersList => {
        this.usersList = usersList;
      }, err => {
        console.log(err);
      });
  }
  private pageNum: number;
  private usersList: any;

}
