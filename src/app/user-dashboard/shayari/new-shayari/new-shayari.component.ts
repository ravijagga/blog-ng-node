import { ArticlesService } from './../../../shared/services/articles.service';
import { CategoriesService } from '../../../shared/services/categories.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.scss']
})
export class NewArticleComponent {

  constructor(
    private articlesService: ArticlesService,
    private categoriesService: CategoriesService
  ) {
    categoriesService.getCategoriesByPage(1).subscribe(categories => {
      this.categories = categories;
    });
  }

  private categories;

  onSubmit(newArticleForm: NgForm) {
    let articleObj;
    if (newArticleForm.valid) {
      articleObj = newArticleForm.value;
      this.articlesService.saveNewArticle(articleObj).subscribe(
        response => console.dir(response),
        err => console.dir(err)
      );
    }
  }

}
