import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserDashboardComponent } from './user-dashboard.component';

import { UserArticlesComponent } from './articles/user-articles.component';
import { ListArticlesComponent } from './articles/list-articles/list-articles.component';
import { NewArticleComponent } from './articles/new-article/new-article.component';
import { EditArticleComponent } from './articles/edit-article/edit-article.component';

const userDashboardRoutes: Routes = [
  {
    path: 'dashboard',
    component: UserDashboardComponent,
    children: [
      {
        path: 'articles',
        component: UserArticlesComponent,
        children: [
          { path: '', component: ListArticlesComponent },
          { path: 'new', component: NewArticleComponent },
          { path: 'edit', component: EditArticleComponent }
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(userDashboardRoutes)],
  exports: [RouterModule]
})
export class UserDashboardRoutingModule { }
