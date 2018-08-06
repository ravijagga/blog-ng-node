import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import config from '../../../config';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  baseUrl = config.baseUrl;

  getCategoriesByPage(page: number) {
    const pageNum: number = page ? page : 1;
    const pageStr: string = pageNum.toString();
    const params: HttpParams = new HttpParams().set('page', pageStr);

    return this.http.get(this.baseUrl + '/categories', { params })
      .pipe(
        catchError(err => {
          return throwError(err.error.error.message || 'Something went wrong!');
        })
      );
  }

  getCategoryById(id: string) {
    return this.http
      .get(this.baseUrl + `/categories/${id}`)
      .pipe(
        catchError(err => {
          return throwError(err.error.error.message || 'Something went wrong!');
        })
      );
  }

}
