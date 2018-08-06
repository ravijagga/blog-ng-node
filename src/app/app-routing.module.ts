import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticlesListComponent } from './articles/articles-list/articles-list.component';
import { ArticleSingleComponent } from './articles/article-single/article-single.component';
import { CategoriesListComponent } from './categories/categories-list/categories-list.component';
import { CategoriesSingleComponent } from './categories/categories-single/categories-single.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UsersSingleComponent } from './users/users-single/users-single.component';

const routes: Routes = [
  { path: 'articles', component: ArticlesListComponent },
  { path: 'articles/:id', component: ArticleSingleComponent },
  { path: 'categories', component: CategoriesListComponent },
  { path: 'categories/:id', component: CategoriesSingleComponent },
  { path: 'users', component: UsersListComponent },
  { path: 'users/:id', component: UsersSingleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
