import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from './../../../shared/services/articles.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.scss']
})
export class ListArticlesComponent {

  constructor(
    private articlesService: ArticlesService,
    private activatedRoute: ActivatedRoute
  ) {
    activatedRoute.queryParams
      .subscribe(queryParams => {
        this.pageNum = parseInt(queryParams.page, 10) || 1;
      });

    articlesService.getArticlesListByPage(this.pageNum)
      .subscribe(articlesList => {
        console.dir(articlesList);
        this.articlesList = articlesList;
      }, err => {
        console.log(err);
      });
  }
  private pageNum: number;
  private articlesList: any;

}
