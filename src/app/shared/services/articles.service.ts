import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import config from '../../../config';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient) { }

  baseUrl = config.baseUrl;

  getArticlesListByPage(page: number) {
    const pageNum: number = page ? page : 1;
    const pageStr: string = pageNum.toString();
    const params: HttpParams = new HttpParams().set('page', pageStr);

    return this.http.get(this.baseUrl + '/articles', { params })
      .pipe(
        catchError(err => {
          return throwError(err.error.error.message || 'Something went wrong!');
        })
      );
  }

  getArticleById(id: string) {
    return this.http
      .get(this.baseUrl + `/articles/${id}`)
      .pipe(
        catchError(err => {
          return throwError(err.error.error.message || 'Something went wrong!');
        })
      );
  }

  saveNewArticle(article) {
    return this.http
      .post(this.baseUrl + `/articles`, article)
      .pipe(
        catchError(err => {
          return throwError(err.error.error.message || 'Something went wrong!');
        })
      );
  }

}
