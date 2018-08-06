import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from '../../shared/services/articles.service';

@Component({
  selector: 'app-article-single',
  templateUrl: './article-single.component.html',
  styleUrls: ['./article-single.component.scss']
})
export class ArticleSingleComponent {

  constructor(
    private articlesService: ArticlesService,
    private activatedRoute: ActivatedRoute
  ) {
    // get article id
    this.activatedRoute.params.subscribe(params => {
      this.articleId = params.id;
    });

    this.articlesService
      .getArticleById(this.articleId)
      .subscribe(
        article => {
          this.articleSingle = article;
        },
        err => {
          console.log(err);
        }
      );
  }

  private articleId;
  private articleSingle;

}
