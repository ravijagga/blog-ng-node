import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './shared/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UserDashboardModule } from './user-dashboard/user-dashboard.module';

import { AppComponent } from './app.component';
import { ArticlesListComponent } from './articles/articles-list/articles-list.component';
import { ArticleSingleComponent } from './articles/article-single/article-single.component';
import { CategoriesListComponent } from './categories/categories-list/categories-list.component';
import { CategoriesSingleComponent } from './categories/categories-single/categories-single.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UsersSingleComponent } from './users/users-single/users-single.component';

import { ArticlesService } from './shared/services/articles.service';
import { CategoriesService } from './shared/services/categories.service';
import { UsersService } from './shared/services/users.service';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesListComponent,
    ArticleSingleComponent,
    CategoriesListComponent,
    CategoriesSingleComponent,
    UsersListComponent,
    UsersSingleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    UserDashboardModule,
    HttpClientModule,
    MaterialModule,
    FormsModule
  ],
  providers: [
    ArticlesService,
    CategoriesService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
