(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _articles_articles_list_articles_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./articles/articles-list/articles-list.component */ "./src/app/articles/articles-list/articles-list.component.ts");
/* harmony import */ var _articles_article_single_article_single_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./articles/article-single/article-single.component */ "./src/app/articles/article-single/article-single.component.ts");
/* harmony import */ var _categories_categories_list_categories_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./categories/categories-list/categories-list.component */ "./src/app/categories/categories-list/categories-list.component.ts");
/* harmony import */ var _categories_categories_single_categories_single_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categories/categories-single/categories-single.component */ "./src/app/categories/categories-single/categories-single.component.ts");
/* harmony import */ var _users_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./users/users-list/users-list.component */ "./src/app/users/users-list/users-list.component.ts");
/* harmony import */ var _users_users_single_users_single_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./users/users-single/users-single.component */ "./src/app/users/users-single/users-single.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: 'articles', component: _articles_articles_list_articles_list_component__WEBPACK_IMPORTED_MODULE_2__["ArticlesListComponent"] },
    { path: 'articles/:id', component: _articles_article_single_article_single_component__WEBPACK_IMPORTED_MODULE_3__["ArticleSingleComponent"] },
    { path: 'categories', component: _categories_categories_list_categories_list_component__WEBPACK_IMPORTED_MODULE_4__["CategoriesListComponent"] },
    { path: 'categories/:id', component: _categories_categories_single_categories_single_component__WEBPACK_IMPORTED_MODULE_5__["CategoriesSingleComponent"] },
    { path: 'users', component: _users_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_6__["UsersListComponent"] },
    { path: 'users/:id', component: _users_users_single_users_single_component__WEBPACK_IMPORTED_MODULE_7__["UsersSingleComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'blog-ng-node';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _shared_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/material.module */ "./src/app/shared/material.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _user_dashboard_user_dashboard_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-dashboard/user-dashboard.module */ "./src/app/user-dashboard/user-dashboard.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _articles_articles_list_articles_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./articles/articles-list/articles-list.component */ "./src/app/articles/articles-list/articles-list.component.ts");
/* harmony import */ var _articles_article_single_article_single_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./articles/article-single/article-single.component */ "./src/app/articles/article-single/article-single.component.ts");
/* harmony import */ var _categories_categories_list_categories_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./categories/categories-list/categories-list.component */ "./src/app/categories/categories-list/categories-list.component.ts");
/* harmony import */ var _categories_categories_single_categories_single_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./categories/categories-single/categories-single.component */ "./src/app/categories/categories-single/categories-single.component.ts");
/* harmony import */ var _users_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./users/users-list/users-list.component */ "./src/app/users/users-list/users-list.component.ts");
/* harmony import */ var _users_users_single_users_single_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./users/users-single/users-single.component */ "./src/app/users/users-single/users-single.component.ts");
/* harmony import */ var _shared_services_articles_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/services/articles.service */ "./src/app/shared/services/articles.service.ts");
/* harmony import */ var _shared_services_categories_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/services/categories.service */ "./src/app/shared/services/categories.service.ts");
/* harmony import */ var _shared_services_users_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/services/users.service */ "./src/app/shared/services/users.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _articles_articles_list_articles_list_component__WEBPACK_IMPORTED_MODULE_9__["ArticlesListComponent"],
                _articles_article_single_article_single_component__WEBPACK_IMPORTED_MODULE_10__["ArticleSingleComponent"],
                _categories_categories_list_categories_list_component__WEBPACK_IMPORTED_MODULE_11__["CategoriesListComponent"],
                _categories_categories_single_categories_single_component__WEBPACK_IMPORTED_MODULE_12__["CategoriesSingleComponent"],
                _users_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_13__["UsersListComponent"],
                _users_users_single_users_single_component__WEBPACK_IMPORTED_MODULE_14__["UsersSingleComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _user_dashboard_user_dashboard_module__WEBPACK_IMPORTED_MODULE_7__["UserDashboardModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _shared_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"]
            ],
            providers: [
                _shared_services_articles_service__WEBPACK_IMPORTED_MODULE_15__["ArticlesService"],
                _shared_services_categories_service__WEBPACK_IMPORTED_MODULE_16__["CategoriesService"],
                _shared_services_users_service__WEBPACK_IMPORTED_MODULE_17__["UsersService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/articles/article-single/article-single.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/articles/article-single/article-single.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  article-single works!\n</p>\n\n<h1 *ngIf=\"articleSingle\">{{ articleSingle.title }}</h1>\n<p *ngIf=\"articleSingle\">{{ articleSingle.body }}</p>\n"

/***/ }),

/***/ "./src/app/articles/article-single/article-single.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/articles/article-single/article-single.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/articles/article-single/article-single.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/articles/article-single/article-single.component.ts ***!
  \*********************************************************************/
/*! exports provided: ArticleSingleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleSingleComponent", function() { return ArticleSingleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_articles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/articles.service */ "./src/app/shared/services/articles.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArticleSingleComponent = /** @class */ (function () {
    function ArticleSingleComponent(articlesService, activatedRoute) {
        var _this = this;
        this.articlesService = articlesService;
        this.activatedRoute = activatedRoute;
        // get article id
        this.activatedRoute.params.subscribe(function (params) {
            _this.articleId = params.id;
        });
        this.articlesService
            .getArticleById(this.articleId)
            .subscribe(function (article) {
            _this.articleSingle = article;
        }, function (err) {
            console.log(err);
        });
    }
    ArticleSingleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-article-single',
            template: __webpack_require__(/*! ./article-single.component.html */ "./src/app/articles/article-single/article-single.component.html"),
            styles: [__webpack_require__(/*! ./article-single.component.scss */ "./src/app/articles/article-single/article-single.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_articles_service__WEBPACK_IMPORTED_MODULE_2__["ArticlesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ArticleSingleComponent);
    return ArticleSingleComponent;
}());



/***/ }),

/***/ "./src/app/articles/articles-list/articles-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/articles/articles-list/articles-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  article-list works!\n</p>\n\n<article *ngFor=\"let article of articlesList\">\n  <h2>{{ article.title }}</h2>\n  <p>{{ article.body }}</p>\n  <a *ngIf=\"article.user\" [routerLink]=\"['/users', article.user._id]\">{{ article.user.firstName}}</a>\n</article>\n"

/***/ }),

/***/ "./src/app/articles/articles-list/articles-list.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/articles/articles-list/articles-list.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/articles/articles-list/articles-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/articles/articles-list/articles-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: ArticlesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlesListComponent", function() { return ArticlesListComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_articles_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/articles.service */ "./src/app/shared/services/articles.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArticlesListComponent = /** @class */ (function () {
    function ArticlesListComponent(articlesService, activatedRoute) {
        var _this = this;
        this.articlesService = articlesService;
        this.activatedRoute = activatedRoute;
        activatedRoute.queryParams
            .subscribe(function (queryParams) {
            _this.pageNum = parseInt(queryParams.page, 10) || 1;
        });
        articlesService.getArticlesListByPage(this.pageNum)
            .subscribe(function (articlesList) {
            console.dir(articlesList);
            _this.articlesList = articlesList;
        }, function (err) {
            console.log(err);
        });
    }
    ArticlesListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-articles-list',
            template: __webpack_require__(/*! ./articles-list.component.html */ "./src/app/articles/articles-list/articles-list.component.html"),
            styles: [__webpack_require__(/*! ./articles-list.component.scss */ "./src/app/articles/articles-list/articles-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_articles_service__WEBPACK_IMPORTED_MODULE_1__["ArticlesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]])
    ], ArticlesListComponent);
    return ArticlesListComponent;
}());



/***/ }),

/***/ "./src/app/categories/categories-list/categories-list.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/categories/categories-list/categories-list.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  categories-list works!\n</p>\n"

/***/ }),

/***/ "./src/app/categories/categories-list/categories-list.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/categories/categories-list/categories-list.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/categories/categories-list/categories-list.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/categories/categories-list/categories-list.component.ts ***!
  \*************************************************************************/
/*! exports provided: CategoriesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesListComponent", function() { return CategoriesListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CategoriesListComponent = /** @class */ (function () {
    function CategoriesListComponent() {
    }
    CategoriesListComponent.prototype.ngOnInit = function () {
    };
    CategoriesListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-categories-list',
            template: __webpack_require__(/*! ./categories-list.component.html */ "./src/app/categories/categories-list/categories-list.component.html"),
            styles: [__webpack_require__(/*! ./categories-list.component.scss */ "./src/app/categories/categories-list/categories-list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CategoriesListComponent);
    return CategoriesListComponent;
}());



/***/ }),

/***/ "./src/app/categories/categories-single/categories-single.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/categories/categories-single/categories-single.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  categories-single works!\n</p>\n"

/***/ }),

/***/ "./src/app/categories/categories-single/categories-single.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/categories/categories-single/categories-single.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/categories/categories-single/categories-single.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/categories/categories-single/categories-single.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CategoriesSingleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesSingleComponent", function() { return CategoriesSingleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CategoriesSingleComponent = /** @class */ (function () {
    function CategoriesSingleComponent() {
    }
    CategoriesSingleComponent.prototype.ngOnInit = function () {
    };
    CategoriesSingleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-categories-single',
            template: __webpack_require__(/*! ./categories-single.component.html */ "./src/app/categories/categories-single/categories-single.component.html"),
            styles: [__webpack_require__(/*! ./categories-single.component.scss */ "./src/app/categories/categories-single/categories-single.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CategoriesSingleComponent);
    return CategoriesSingleComponent;
}());



/***/ }),

/***/ "./src/app/shared/material.module.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/material.module.ts ***!
  \*******************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/shared/services/articles.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/articles.service.ts ***!
  \*****************************************************/
/*! exports provided: ArticlesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlesService", function() { return ArticlesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config */ "./src/config/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ArticlesService = /** @class */ (function () {
    function ArticlesService(http) {
        this.http = http;
        this.baseUrl = _config__WEBPACK_IMPORTED_MODULE_4__["default"].baseUrl;
    }
    ArticlesService.prototype.getArticlesListByPage = function (page) {
        var pageNum = page ? page : 1;
        var pageStr = pageNum.toString();
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('page', pageStr);
        return this.http.get(this.baseUrl + '/articles', { params: params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err.error.error.message || 'Something went wrong!');
        }));
    };
    ArticlesService.prototype.getArticleById = function (id) {
        return this.http
            .get(this.baseUrl + ("/articles/" + id))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err.error.error.message || 'Something went wrong!');
        }));
    };
    ArticlesService.prototype.saveNewArticle = function (article) {
        return this.http
            .post(this.baseUrl + "/articles", article)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err.error.error.message || 'Something went wrong!');
        }));
    };
    ArticlesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ArticlesService);
    return ArticlesService;
}());



/***/ }),

/***/ "./src/app/shared/services/categories.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/categories.service.ts ***!
  \*******************************************************/
/*! exports provided: CategoriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesService", function() { return CategoriesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config */ "./src/config/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CategoriesService = /** @class */ (function () {
    function CategoriesService(http) {
        this.http = http;
        this.baseUrl = _config__WEBPACK_IMPORTED_MODULE_4__["default"].baseUrl;
    }
    CategoriesService.prototype.getCategoriesByPage = function (page) {
        var pageNum = page ? page : 1;
        var pageStr = pageNum.toString();
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('page', pageStr);
        return this.http.get(this.baseUrl + '/categories', { params: params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err.error.error.message || 'Something went wrong!');
        }));
    };
    CategoriesService.prototype.getCategoryById = function (id) {
        return this.http
            .get(this.baseUrl + ("/categories/" + id))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err.error.error.message || 'Something went wrong!');
        }));
    };
    CategoriesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CategoriesService);
    return CategoriesService;
}());



/***/ }),

/***/ "./src/app/shared/services/users.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/users.service.ts ***!
  \**************************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config */ "./src/config/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UsersService = /** @class */ (function () {
    function UsersService(http) {
        this.http = http;
        this.baseUrl = _config__WEBPACK_IMPORTED_MODULE_4__["default"].baseUrl;
    }
    UsersService.prototype.getUsersByPage = function (page) {
        var pageNum = page ? page : 1;
        var pageStr = pageNum.toString();
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('page', pageStr);
        return this.http.get(this.baseUrl + '/users', { params: params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err.error.error.message || 'Something went wrong!');
        }));
    };
    UsersService.prototype.getUserById = function (id) {
        return this.http
            .get(this.baseUrl + ("/users/" + id))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err.error.error.message || 'Something went wrong!');
        }));
    };
    UsersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "./src/app/user-dashboard/articles/edit-article/edit-article.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/user-dashboard/articles/edit-article/edit-article.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  edit-article works!\n</p>\n"

/***/ }),

/***/ "./src/app/user-dashboard/articles/edit-article/edit-article.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/user-dashboard/articles/edit-article/edit-article.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user-dashboard/articles/edit-article/edit-article.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/user-dashboard/articles/edit-article/edit-article.component.ts ***!
  \********************************************************************************/
/*! exports provided: EditArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditArticleComponent", function() { return EditArticleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditArticleComponent = /** @class */ (function () {
    function EditArticleComponent() {
    }
    EditArticleComponent.prototype.ngOnInit = function () {
    };
    EditArticleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-article',
            template: __webpack_require__(/*! ./edit-article.component.html */ "./src/app/user-dashboard/articles/edit-article/edit-article.component.html"),
            styles: [__webpack_require__(/*! ./edit-article.component.scss */ "./src/app/user-dashboard/articles/edit-article/edit-article.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EditArticleComponent);
    return EditArticleComponent;
}());



/***/ }),

/***/ "./src/app/user-dashboard/articles/list-articles/list-articles.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/user-dashboard/articles/list-articles/list-articles.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article *ngFor=\"let article of articlesList\">\n  <h2>{{ article.title }}</h2>\n  <p>{{ article.body }}</p>\n  <a *ngIf=\"article.user\" [routerLink]=\"['/users', article.user._id]\">{{ article.user.firstName}}</a>\n</article>\n"

/***/ }),

/***/ "./src/app/user-dashboard/articles/list-articles/list-articles.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/user-dashboard/articles/list-articles/list-articles.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user-dashboard/articles/list-articles/list-articles.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/user-dashboard/articles/list-articles/list-articles.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ListArticlesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListArticlesComponent", function() { return ListArticlesComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_articles_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../shared/services/articles.service */ "./src/app/shared/services/articles.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListArticlesComponent = /** @class */ (function () {
    function ListArticlesComponent(articlesService, activatedRoute) {
        var _this = this;
        this.articlesService = articlesService;
        this.activatedRoute = activatedRoute;
        activatedRoute.queryParams
            .subscribe(function (queryParams) {
            _this.pageNum = parseInt(queryParams.page, 10) || 1;
        });
        articlesService.getArticlesListByPage(this.pageNum)
            .subscribe(function (articlesList) {
            console.dir(articlesList);
            _this.articlesList = articlesList;
        }, function (err) {
            console.log(err);
        });
    }
    ListArticlesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-list-articles',
            template: __webpack_require__(/*! ./list-articles.component.html */ "./src/app/user-dashboard/articles/list-articles/list-articles.component.html"),
            styles: [__webpack_require__(/*! ./list-articles.component.scss */ "./src/app/user-dashboard/articles/list-articles/list-articles.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_articles_service__WEBPACK_IMPORTED_MODULE_1__["ArticlesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]])
    ], ListArticlesComponent);
    return ListArticlesComponent;
}());



/***/ }),

/***/ "./src/app/user-dashboard/articles/new-article/new-article.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/user-dashboard/articles/new-article/new-article.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"onSubmit(newArticleForm)\" #newArticleForm=\"ngForm\" class=\"new-article-form\">\n  <mat-form-field class=\"full-width\">\n    <input matInput ngModel #title=\"ngModel\" name=\"title\" placeholder=\"Article Title\" required maxlength=\"100\">\n    <mat-error *ngIf=\"!title.valid && title.errors.required\">Title is required!</mat-error>\n  </mat-form-field>\n\n  <mat-form-field class=\"full-width\">\n    <textarea matInput ngModel #body=\"ngModel\" name=\"body\" rows=\"10\" placeholder=\"Write your Article here...\" required maxlength=\"1000\"></textarea>\n    <mat-error *ngIf=\"!body.valid && body.errors.required\">Article is required!</mat-error>\n  </mat-form-field>\n\n  <mat-form-field *ngIf=\"categories\" class=\"only-row\">\n    <mat-select multiple ngModel name=\"categories\" placeholder=\"Categories\">\n      <mat-option *ngFor=\"let category of categories\" [value]=\"category._id\">\n        {{category.category}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <button mat-flat-button type=\"submit\" color=\"primary\" class=\"only-row\">Publish</button>\n</form>\n"

/***/ }),

/***/ "./src/app/user-dashboard/articles/new-article/new-article.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/user-dashboard/articles/new-article/new-article.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width {\n  display: table;\n  width: 100%; }\n\n.only-row {\n  display: table; }\n"

/***/ }),

/***/ "./src/app/user-dashboard/articles/new-article/new-article.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/user-dashboard/articles/new-article/new-article.component.ts ***!
  \******************************************************************************/
/*! exports provided: NewArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewArticleComponent", function() { return NewArticleComponent; });
/* harmony import */ var _shared_services_articles_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../shared/services/articles.service */ "./src/app/shared/services/articles.service.ts");
/* harmony import */ var _shared_services_categories_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../shared/services/categories.service */ "./src/app/shared/services/categories.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewArticleComponent = /** @class */ (function () {
    function NewArticleComponent(articlesService, categoriesService) {
        var _this = this;
        this.articlesService = articlesService;
        this.categoriesService = categoriesService;
        categoriesService.getCategoriesByPage(1).subscribe(function (categories) {
            _this.categories = categories;
        });
    }
    NewArticleComponent.prototype.onSubmit = function (newArticleForm) {
        var articleObj;
        if (newArticleForm.valid) {
            articleObj = newArticleForm.value;
            this.articlesService.saveNewArticle(articleObj).subscribe(function (response) { return console.dir(response); }, function (err) { return console.dir(err); });
        }
    };
    NewArticleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-new-article',
            template: __webpack_require__(/*! ./new-article.component.html */ "./src/app/user-dashboard/articles/new-article/new-article.component.html"),
            styles: [__webpack_require__(/*! ./new-article.component.scss */ "./src/app/user-dashboard/articles/new-article/new-article.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_articles_service__WEBPACK_IMPORTED_MODULE_0__["ArticlesService"],
            _shared_services_categories_service__WEBPACK_IMPORTED_MODULE_1__["CategoriesService"]])
    ], NewArticleComponent);
    return NewArticleComponent;
}());



/***/ }),

/***/ "./src/app/user-dashboard/articles/user-articles.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/user-dashboard/articles/user-articles.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/user-dashboard/articles/user-articles.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/user-dashboard/articles/user-articles.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user-dashboard/articles/user-articles.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/user-dashboard/articles/user-articles.component.ts ***!
  \********************************************************************/
/*! exports provided: UserArticlesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserArticlesComponent", function() { return UserArticlesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserArticlesComponent = /** @class */ (function () {
    function UserArticlesComponent() {
    }
    UserArticlesComponent.prototype.ngOnInit = function () {
    };
    UserArticlesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-articles',
            template: __webpack_require__(/*! ./user-articles.component.html */ "./src/app/user-dashboard/articles/user-articles.component.html"),
            styles: [__webpack_require__(/*! ./user-articles.component.scss */ "./src/app/user-dashboard/articles/user-articles.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UserArticlesComponent);
    return UserArticlesComponent;
}());



/***/ }),

/***/ "./src/app/user-dashboard/user-dashboard-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/user-dashboard/user-dashboard-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: UserDashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDashboardRoutingModule", function() { return UserDashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-dashboard.component */ "./src/app/user-dashboard/user-dashboard.component.ts");
/* harmony import */ var _articles_user_articles_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./articles/user-articles.component */ "./src/app/user-dashboard/articles/user-articles.component.ts");
/* harmony import */ var _articles_list_articles_list_articles_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./articles/list-articles/list-articles.component */ "./src/app/user-dashboard/articles/list-articles/list-articles.component.ts");
/* harmony import */ var _articles_new_article_new_article_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./articles/new-article/new-article.component */ "./src/app/user-dashboard/articles/new-article/new-article.component.ts");
/* harmony import */ var _articles_edit_article_edit_article_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./articles/edit-article/edit-article.component */ "./src/app/user-dashboard/articles/edit-article/edit-article.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var userDashboardRoutes = [
    {
        path: 'dashboard',
        component: _user_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["UserDashboardComponent"],
        children: [
            {
                path: 'articles',
                component: _articles_user_articles_component__WEBPACK_IMPORTED_MODULE_3__["UserArticlesComponent"],
                children: [
                    { path: '', component: _articles_list_articles_list_articles_component__WEBPACK_IMPORTED_MODULE_4__["ListArticlesComponent"] },
                    { path: 'new', component: _articles_new_article_new_article_component__WEBPACK_IMPORTED_MODULE_5__["NewArticleComponent"] },
                    { path: 'edit', component: _articles_edit_article_edit_article_component__WEBPACK_IMPORTED_MODULE_6__["EditArticleComponent"] }
                ]
            },
        ]
    }
];
var UserDashboardRoutingModule = /** @class */ (function () {
    function UserDashboardRoutingModule() {
    }
    UserDashboardRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(userDashboardRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], UserDashboardRoutingModule);
    return UserDashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/user-dashboard/user-dashboard.component.html":
/*!**************************************************************!*\
  !*** ./src/app/user-dashboard/user-dashboard.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\n\n  <mat-toolbar color=\"primary\">\n    <span>Dashboard</span>\n  </mat-toolbar>\n\n  <mat-sidenav-container class=\"sidenav-container\">\n    <mat-sidenav opened=\"true\" mode=\"side\" class=\"sidenav\">\n      mat sidenav\n    </mat-sidenav>\n    <mat-sidenav-content class=\"sidenav-content\">\n      <router-outlet></router-outlet>\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n\n</div>\n<!-- /.page-container -->\n"

/***/ }),

/***/ "./src/app/user-dashboard/user-dashboard.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/user-dashboard/user-dashboard.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%; }\n  .page-container .sidenav-container {\n    flex: 1; }\n  .page-container .sidenav-container .sidenav {\n      width: 200px; }\n  .page-container .sidenav-container .sidenav-content {\n      padding: 30px; }\n"

/***/ }),

/***/ "./src/app/user-dashboard/user-dashboard.component.ts":
/*!************************************************************!*\
  !*** ./src/app/user-dashboard/user-dashboard.component.ts ***!
  \************************************************************/
/*! exports provided: UserDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDashboardComponent", function() { return UserDashboardComponent; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserDashboardComponent = /** @class */ (function () {
    function UserDashboardComponent() {
        this.faCoffee = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faCoffee"];
    }
    UserDashboardComponent.prototype.ngOnInit = function () {
    };
    UserDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-dashboard',
            template: __webpack_require__(/*! ./user-dashboard.component.html */ "./src/app/user-dashboard/user-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./user-dashboard.component.scss */ "./src/app/user-dashboard/user-dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UserDashboardComponent);
    return UserDashboardComponent;
}());



/***/ }),

/***/ "./src/app/user-dashboard/user-dashboard.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/user-dashboard/user-dashboard.module.ts ***!
  \*********************************************************/
/*! exports provided: UserDashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDashboardModule", function() { return UserDashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/material.module */ "./src/app/shared/material.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _user_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-dashboard-routing.module */ "./src/app/user-dashboard/user-dashboard-routing.module.ts");
/* harmony import */ var _user_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-dashboard.component */ "./src/app/user-dashboard/user-dashboard.component.ts");
/* harmony import */ var _articles_user_articles_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./articles/user-articles.component */ "./src/app/user-dashboard/articles/user-articles.component.ts");
/* harmony import */ var _articles_list_articles_list_articles_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./articles/list-articles/list-articles.component */ "./src/app/user-dashboard/articles/list-articles/list-articles.component.ts");
/* harmony import */ var _articles_new_article_new_article_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./articles/new-article/new-article.component */ "./src/app/user-dashboard/articles/new-article/new-article.component.ts");
/* harmony import */ var _articles_edit_article_edit_article_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./articles/edit-article/edit-article.component */ "./src/app/user-dashboard/articles/edit-article/edit-article.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var UserDashboardModule = /** @class */ (function () {
    function UserDashboardModule() {
    }
    UserDashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _shared_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
                _user_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserDashboardRoutingModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"]
            ],
            declarations: [
                _user_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["UserDashboardComponent"],
                _articles_user_articles_component__WEBPACK_IMPORTED_MODULE_7__["UserArticlesComponent"],
                _articles_list_articles_list_articles_component__WEBPACK_IMPORTED_MODULE_8__["ListArticlesComponent"],
                _articles_new_article_new_article_component__WEBPACK_IMPORTED_MODULE_9__["NewArticleComponent"],
                _articles_edit_article_edit_article_component__WEBPACK_IMPORTED_MODULE_10__["EditArticleComponent"]
            ]
        })
    ], UserDashboardModule);
    return UserDashboardModule;
}());



/***/ }),

/***/ "./src/app/users/users-list/users-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/users/users-list/users-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  users-list works!\n</p>\n\n<article *ngFor=\"let user of usersList\">\n  <h2>{{ user.firstName }}</h2>\n  <p>{{ user.email }}</p>\n</article>\n"

/***/ }),

/***/ "./src/app/users/users-list/users-list.component.scss":
/*!************************************************************!*\
  !*** ./src/app/users/users-list/users-list.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/users/users-list/users-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/users/users-list/users-list.component.ts ***!
  \**********************************************************/
/*! exports provided: UsersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersListComponent", function() { return UsersListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/users.service */ "./src/app/shared/services/users.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersListComponent = /** @class */ (function () {
    function UsersListComponent(usersService, activatedRoute) {
        var _this = this;
        this.usersService = usersService;
        this.activatedRoute = activatedRoute;
        activatedRoute.queryParams
            .subscribe(function (queryParams) {
            _this.pageNum = parseInt(queryParams.page, 10) || 1;
        });
        usersService.getUsersByPage(this.pageNum)
            .subscribe(function (usersList) {
            _this.usersList = usersList;
        }, function (err) {
            console.log(err);
        });
    }
    UsersListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users-list',
            template: __webpack_require__(/*! ./users-list.component.html */ "./src/app/users/users-list/users-list.component.html"),
            styles: [__webpack_require__(/*! ./users-list.component.scss */ "./src/app/users/users-list/users-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], UsersListComponent);
    return UsersListComponent;
}());



/***/ }),

/***/ "./src/app/users/users-single/users-single.component.html":
/*!****************************************************************!*\
  !*** ./src/app/users/users-single/users-single.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  users-single works!\n</p>\n\n<h1 *ngIf=\"userSingle\">{{ userSingle.firstName }}</h1>\n<p *ngIf=\"userSingle\">{{ userSingle.email }}</p>\n"

/***/ }),

/***/ "./src/app/users/users-single/users-single.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/users/users-single/users-single.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/users/users-single/users-single.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/users/users-single/users-single.component.ts ***!
  \**************************************************************/
/*! exports provided: UsersSingleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersSingleComponent", function() { return UsersSingleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/users.service */ "./src/app/shared/services/users.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersSingleComponent = /** @class */ (function () {
    function UsersSingleComponent(usersService, activatedRoute) {
        var _this = this;
        this.usersService = usersService;
        this.activatedRoute = activatedRoute;
        // get article id
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params.id;
        });
        this.usersService
            .getUserById(this.userId)
            .subscribe(function (user) {
            _this.userSingle = user;
        }, function (err) {
            console.log(err);
        });
    }
    UsersSingleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users-single',
            template: __webpack_require__(/*! ./users-single.component.html */ "./src/app/users/users-single/users-single.component.html"),
            styles: [__webpack_require__(/*! ./users-single.component.scss */ "./src/app/users/users-single/users-single.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], UsersSingleComponent);
    return UsersSingleComponent;
}());



/***/ }),

/***/ "./src/config/index.js":
/*!*****************************!*\
  !*** ./src/config/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  baseUrl: "/api"
});


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /media/aarjey/Ubuntu Data/Projects/blog-ng-node/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map