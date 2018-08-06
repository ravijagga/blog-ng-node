import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from '../../shared/services/articles.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent {
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
