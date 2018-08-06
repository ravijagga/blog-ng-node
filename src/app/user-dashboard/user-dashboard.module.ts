import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { UserDashboardComponent } from './user-dashboard.component';

import { UserArticlesComponent } from './articles/user-articles.component';
import { ListArticlesComponent } from './articles/list-articles/list-articles.component';
import { NewArticleComponent } from './articles/new-article/new-article.component';
import { EditArticleComponent } from './articles/edit-article/edit-article.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    UserDashboardRoutingModule,
    FontAwesomeModule
  ],
  declarations: [
    UserDashboardComponent,
    UserArticlesComponent,
    ListArticlesComponent,
    NewArticleComponent,
    EditArticleComponent
  ]
})
export class UserDashboardModule { }
