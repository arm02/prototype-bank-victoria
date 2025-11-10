"use strict";
(self["webpackChunkcms_instruct_new"] = self["webpackChunkcms_instruct_new"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _errors_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors/page-not-found/page-not-found.component */ 6606);
/* harmony import */ var _auth_auth_guards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/auth.guards */ 4273);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);





const routes = [{
  path: '',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_collection_auth_collection_ts-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("src_app_components_components_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/components.module */ 822)).then(m => m.ComponentsModule)
}, {
  path: 'auth',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_collection_auth_collection_ts-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("src_app_auth_auth_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./auth/auth.module */ 4788)).then(m => m.AuthModule)
}, {
  path: '**',
  pathMatch: 'full',
  component: _errors_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_0__.PageNotFoundComponent
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  providers: [_auth_auth_guards__WEBPACK_IMPORTED_MODULE_1__.AuthGuard],
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4520);
/* harmony import */ var src_environments_environments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environments */ 9413);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _layouts_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/loading/loading.component */ 8721);







class AppComponent {
  constructor(router, titleService) {
    this.router = router;
    this.titleService = titleService;
    this.title = src_environments_environments__WEBPACK_IMPORTED_MODULE_0__.environment.title;
  }
  ngOnInit() {
    this.router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd)).subscribe(() => this.titleService.setTitle(this.title));
    // setTimeout(() => {
    //   console.clear();
    // }, 1000);
  }
}

AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.Title));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 2,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-loading")(1, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _layouts_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__.LoadingComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _errors_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errors/page-not-found/page-not-found.component */ 6606);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _core_loader_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/loader.interceptor */ 1311);
/* harmony import */ var _layouts_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/loading/loading.component */ 8721);
/* harmony import */ var _layouts_layouts_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/layouts.service */ 8098);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ 3910);
/* harmony import */ var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @sweetalert2/ngx-sweetalert2 */ 4267);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);














class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  providers: [_layouts_layouts_service__WEBPACK_IMPORTED_MODULE_5__.LayoutsService, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HTTP_INTERCEPTORS,
    useClass: _core_loader_interceptor__WEBPACK_IMPORTED_MODULE_3__.LoaderInterceptor,
    multi: true
  }, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe, {
    provide: _angular_common__WEBPACK_IMPORTED_MODULE_8__.LocationStrategy,
    useClass: _angular_common__WEBPACK_IMPORTED_MODULE_8__.HashLocationStrategy
  }],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__.MatProgressSpinnerModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_12__.SweetAlert2Module.forRoot()]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _errors_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__.PageNotFoundComponent, _layouts_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__.LoadingComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__.MatProgressSpinnerModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_12__.SweetAlert2Module]
  });
})();

/***/ }),

/***/ 4273:
/*!*************************************!*\
  !*** ./src/app/auth/auth.guards.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthGuard: () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _Users_mac_Documents_Project_prototype_bank_victoria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 5148);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);




class AuthGuard {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate(next, state) {
    var _this = this;
    return (0,_Users_mac_Documents_Project_prototype_bank_victoria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let status = false;
      if (localStorage.getItem('lms-remember-me')) {
        status = true;
      } else {
        _this.router.navigate(['/auth/login'], {
          queryParams: {
            returnUrl: state.url
          }
        });
      }
      return status;
    })();
  }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) {
  return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};
AuthGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: AuthGuard,
  factory: AuthGuard.ɵfac
});

/***/ }),

/***/ 5148:
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 274);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 2389);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 6290);
/* harmony import */ var src_environments_environments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environments */ 9413);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _components_services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/services/http.service */ 2929);
/* harmony import */ var _layouts_layouts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/layouts.service */ 8098);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _components_services_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/services/state.service */ 8605);








class AuthService {
  constructor(httpClient, httpService, layoutService, route, router, stateService) {
    this.httpClient = httpClient;
    this.httpService = httpService;
    this.layoutService = layoutService;
    this.route = route;
    this.router = router;
    this.stateService = stateService;
    this.unsubcribed = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.isAuthenticated = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(false);
    this.user = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(null);
  }
  // async getAuthStatus(): Promise<any> {
  //   await this.authCheck().subscribe((data: any) => {
  //     if (data) {
  //       this.isAuthenticated.next(true);
  //     }
  //   });
  //   return false;
  // }
  authCheck(params) {
    return this.httpClient.get(src_environments_environments__WEBPACK_IMPORTED_MODULE_0__.environment.config.apiUrl + 'users/check', {
      withCredentials: true
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.unsubcribed), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(response => {
      return response.users;
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.catchError)(error => {
      this.router.navigate(['/auth/login']);
      if (!params) {
        this.layoutService.handleError(error);
      }
      return rxjs__WEBPACK_IMPORTED_MODULE_9__.EMPTY;
    }));
  }
  login(body) {
    this.isAuthenticated.next(true);
    return this.httpClient.post(src_environments_environments__WEBPACK_IMPORTED_MODULE_0__.environment.config.apiUrl + 'users/login', body, {
      withCredentials: true
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.unsubcribed), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(response => {
      if (response) {
        localStorage.setItem('user-investor-trust', JSON.stringify(response.user));
        if (response.writer) {
          this.stateService.setWriterCheckProfile(response.writer);
        } else {
          this.stateService.setWriterCheckProfile(null);
        }
        setTimeout(() => {
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          this.router.navigateByUrl(returnUrl);
        }, 1000);
      }
    }));
  }
  logout() {
    this.isAuthenticated.next(true);
    return this.httpClient.post(src_environments_environments__WEBPACK_IMPORTED_MODULE_0__.environment.config.apiUrl + 'users/logout', {}, {
      withCredentials: true
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.unsubcribed), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(response => {
      if (response) {
        localStorage.clear();
        this.router.navigate(['/auth/login']);
      }
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.catchError)(error => {
      this.layoutService.handleError(error);
      return rxjs__WEBPACK_IMPORTED_MODULE_9__.EMPTY;
    }));
  }
  getUserData() {
    return JSON.parse(localStorage.getItem('user-investor-trust'));
  }
  forgotPassword(body) {
    return this.httpService.Post('users/change-password', body);
  }
}
AuthService.ɵfac = function AuthService_Factory(t) {
  return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_components_services_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_layouts_layouts_service__WEBPACK_IMPORTED_MODULE_2__.LayoutsService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_components_services_state_service__WEBPACK_IMPORTED_MODULE_3__.StateService));
};
AuthService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({
  token: AuthService,
  factory: AuthService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 2929:
/*!*****************************************************!*\
  !*** ./src/app/components/services/http.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpService: () => (/* binding */ HttpService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2389);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 6290);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 6143);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 2607);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 7592);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 3252);
/* harmony import */ var src_environments_environments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environments */ 9413);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_layouts_layouts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/layouts/layouts.service */ 8098);






class HttpService {
  constructor(http, layoutService) {
    this.http = http;
    this.layoutService = layoutService;
    this.options = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    };
    this.ParamGet = object => {
      let params = '';
      let i = 0;
      for (const val in object) {
        if (i === 0) {
          params += `?${val}=${object[val]}`;
        } else {
          params += `&${val}=${object[val]}`;
        }
        i++;
      }
      return params;
    };
    this.GetFromJsonBlob = (path, request = '') => {
      if (typeof request === 'object' && request !== null) {
        request = this.ParamGet(request);
      }
      const url = src_environments_environments__WEBPACK_IMPORTED_MODULE_0__.environment.config.jsonBlob + path + request;
      return this.http.get(url, this.options).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
        return response;
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
        this.layoutService.handleError(error);
        return rxjs__WEBPACK_IMPORTED_MODULE_5__.EMPTY;
      }));
    };
    this.Get = (path, request = '', type) => {
      if (typeof request === 'object' && request !== null) {
        request = this.ParamGet(request);
      }
      const url = src_environments_environments__WEBPACK_IMPORTED_MODULE_0__.environment.config.apiUrl + path + request;
      if (type) this.options.responseType = type;
      return this.http.get(url, this.options).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.retryWhen)(errors => errors.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.mergeMap)((error, index) => {
        if (error.status >= 500 && index < 2) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(error).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.delay)(1000));
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.throwError)(() => error);
      }))), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(response => response), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
        this.layoutService.handleError(error);
        return rxjs__WEBPACK_IMPORTED_MODULE_5__.EMPTY;
      }));
    };
    this.Post = (path, body = {}, type = 'json') => {
      const url = src_environments_environments__WEBPACK_IMPORTED_MODULE_0__.environment.config.apiUrl + path;
      return this.http.post(url, body, type === 'json' ? this.options : {
        withCredentials: true
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.retryWhen)(errors => errors.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.mergeMap)((error, index) => {
        if (error.status >= 500 && index < 2) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(error).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.delay)(1000));
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.throwError)(() => error);
      }))), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(response => response), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
        this.layoutService.handleError(error);
        return rxjs__WEBPACK_IMPORTED_MODULE_5__.EMPTY;
      }));
    };
    this.Delete = (path, params, secondPath = '') => {
      let url = src_environments_environments__WEBPACK_IMPORTED_MODULE_0__.environment.config.apiUrl + path + '/' + params.id;
      if (secondPath) url += '/' + secondPath;
      return this.http.delete(url, this.options).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.retryWhen)(errors => errors.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.mergeMap)((error, index) => {
        if (error.status >= 500 && index < 2) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(error).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.delay)(1000));
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.throwError)(() => error);
      }))), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(response => response), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
        this.layoutService.handleError(error);
        return rxjs__WEBPACK_IMPORTED_MODULE_5__.EMPTY;
      }));
    };
    this.Put = (path, body = {}, secondPath = '') => {
      let url = src_environments_environments__WEBPACK_IMPORTED_MODULE_0__.environment.config.apiUrl + path;
      if (secondPath) url += '/' + secondPath;
      return this.http.put(url, body, this.options).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.retryWhen)(errors => errors.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.mergeMap)((error, index) => {
        if (error.status >= 500 && index < 2) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(error).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.delay)(1000));
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.throwError)(() => error);
      }))), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(response => response), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
        this.layoutService.handleError(error);
        return rxjs__WEBPACK_IMPORTED_MODULE_5__.EMPTY;
      }));
    };
  }
  delete() {}
}
HttpService.ɵfac = function HttpService_Factory(t) {
  return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](src_app_layouts_layouts_service__WEBPACK_IMPORTED_MODULE_1__.LayoutsService));
};
HttpService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjectable"]({
  token: HttpService,
  factory: HttpService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 8605:
/*!******************************************************!*\
  !*** ./src/app/components/services/state.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StateService: () => (/* binding */ StateService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


class StateService {
  constructor() {
    this.writerCheckProfile = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null); // Inisialisasi dengan null
  }

  setWriterCheckProfile(value) {
    this.writerCheckProfile.next(value);
  }
  getWriterCheckProfile() {
    return this.writerCheckProfile.value;
  }
}
StateService.ɵfac = function StateService_Factory(t) {
  return new (t || StateService)();
};
StateService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: StateService,
  factory: StateService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 1311:
/*!********************************************!*\
  !*** ./src/app/core/loader.interceptor.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoaderInterceptor: () => (/* binding */ LoaderInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 7474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _layouts_layouts_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layouts/layouts.service */ 8098);



class LoaderInterceptor {
  constructor(layoutService) {
    this.layoutService = layoutService;
  }
  intercept(request, next) {
    if (!request.url.includes('master-data/trading-view') && !request.url.includes('users/login')) this.layoutService.show();
    return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.finalize)(() => this.layoutService.hide()));
  }
}
LoaderInterceptor.ɵfac = function LoaderInterceptor_Factory(t) {
  return new (t || LoaderInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_layouts_layouts_service__WEBPACK_IMPORTED_MODULE_0__.LayoutsService));
};
LoaderInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: LoaderInterceptor,
  factory: LoaderInterceptor.ɵfac
});

/***/ }),

/***/ 6606:
/*!*******************************************************************!*\
  !*** ./src/app/errors/page-not-found/page-not-found.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageNotFoundComponent: () => (/* binding */ PageNotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class PageNotFoundComponent {
  constructor() {}
  ngOnInit() {}
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) {
  return new (t || PageNotFoundComponent)();
};
PageNotFoundComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PageNotFoundComponent,
  selectors: [["app-page-not-found"]],
  decls: 96,
  vars: 0,
  consts: [[1, "wrapper"], [1, "page-not-found"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 1920 1080"], ["id", "Layer_12 yellow-back-fig", "data-name", "Layer 12"], ["d", "M600.87,872H156a4,4,0,0,0-3.78,4.19h0a4,4,0,0,0,3.78,4.19H600.87a4,4,0,0,0,3.78-4.19h0A4,4,0,0,0,600.87,872Z", 1, "cls-1"], ["x", "680.91", "y", "871.98", "width", "513.38", "height", "8.39", "rx", "4.19", "ry", "4.19", 1, "cls-1"], ["d", "M1480,876.17h0c0,2.32,2.37,4.19,5.3,4.19h350.61c2.93,0,5.3-1.88,5.3-4.19h0c0-2.32-2.37-4.19-5.3-4.19H1485.26C1482.33,872,1480,873.86,1480,876.17Z", 1, "cls-1"], ["x", "492.21", "y", "920.64", "width", "249.8", "height", "8.39", "rx", "4.19", "ry", "4.19", 1, "cls-1"], ["d", "M1549.14,924.84h0a4.19,4.19,0,0,0-4.19-4.19H1067.46a14.66,14.66,0,0,1,.35,3.21v1A4.19,4.19,0,0,0,1072,929h472.94A4.19,4.19,0,0,0,1549.14,924.84Z", 1, "cls-1"], ["d", "M865.5,924.84h0a4.19,4.19,0,0,0,4.19,4.19h82.37a12.28,12.28,0,0,1-.19-2v-2.17a4.19,4.19,0,0,0-4.19-4.19h-78A4.19,4.19,0,0,0,865.5,924.84Z", 1, "cls-1"], ["x", "915.6", "y", "981.47", "width", "54.72", "height", "8.39", "rx", "4.19", "ry", "4.19", 1, "cls-1"], ["d", "M730.33,985.67h0c0,2.32,4.23,4.19,9.44,4.19h104.3c5.22,0,9.44-1.88,9.44-4.19h0c0-2.32-4.23-4.19-9.44-4.19H739.78C734.56,981.47,730.33,983.35,730.33,985.67Z", 1, "cls-1"], ["x", "997.06", "y", "981.47", "width", "78.11", "height", "8.39", "rx", "4.19", "ry", "4.19", 1, "cls-1"], ["id", "round-conf"], ["d", "M536.41,155.14a17.77,17.77,0,1,0,17.77,17.77A17.77,17.77,0,0,0,536.41,155.14Zm0,28.68a10.9,10.9,0,1,1,10.9-10.9A10.9,10.9,0,0,1,536.41,183.81Z", 1, "cls-1", "circle", "c1"], ["d", "M1345.09,82.44a17.77,17.77,0,1,0,17.77,17.77A17.77,17.77,0,0,0,1345.09,82.44Zm0,28.68a10.9,10.9,0,1,1,10.9-10.9A10.9,10.9,0,0,1,1345.09,111.12Z", 1, "cls-1", "circle", "c2"], ["d", "M70.12,363A17.77,17.77,0,1,0,87.89,380.8,17.77,17.77,0,0,0,70.12,363Zm0,28.68A10.9,10.9,0,1,1,81,380.8,10.9,10.9,0,0,1,70.12,391.7Z", 1, "cls-1", "circle", "c3"], ["d", "M170.47,751.82a17.77,17.77,0,1,0,17.77,17.77A17.77,17.77,0,0,0,170.47,751.82Zm0,28.68a10.9,10.9,0,1,1,10.9-10.9A10.9,10.9,0,0,1,170.47,780.5Z", 1, "cls-1", "circle", "c4"], ["d", "M1457.34,762.73a17.77,17.77,0,1,0,17.77,17.77A17.77,17.77,0,0,0,1457.34,762.73Zm0,28.68a10.9,10.9,0,1,1,10.9-10.9A10.9,10.9,0,0,1,1457.34,791.4Z", 1, "cls-1", "circle", "c5"], ["d", "M1829.15,407.49a17.77,17.77,0,1,0,17.77,17.77A17.77,17.77,0,0,0,1829.15,407.49Zm0,28.68a10.9,10.9,0,1,1,10.9-10.9A10.9,10.9,0,0,1,1829.15,436.17Z", 1, "cls-1", "circle", "c6"], ["id", "fortyfour", "data-name", "Layer 2"], [1, "four", "a"], ["x", "233.74", "y", "391.14", "width", "120.71", "height", "466.29", "rx", "57.1", "ry", "57.1", "transform", "translate(918.39 330.19) rotate(90)", 1, "cls-2"], ["x", "333.83", "y", "475.1", "width", "120.71", "height", "396.88", "rx", "60.36", "ry", "60.36", 1, "cls-3"], ["x", "197.13", "y", "122.89", "width", "120.71", "height", "604.75", "rx", "60.36", "ry", "60.36", "transform", "translate(290.49 -70.78) rotate(35)", 1, "cls-3"], [1, "four", "b"], ["x", "1558.84", "y", "391.91", "width", "120.71", "height", "466.29", "rx", "57.1", "ry", "57.1", "transform", "translate(2244.26 -994.14) rotate(90)", 1, "cls-2"], ["x", "1658.92", "y", "475.87", "width", "120.71", "height", "396.88", "rx", "60.36", "ry", "60.36", 1, "cls-3"], ["x", "1522.22", "y", "123.66", "width", "120.71", "height", "604.75", "rx", "60.36", "ry", "60.36", "transform", "translate(530.57 -830.68) rotate(35)", 1, "cls-3"], ["id", "ou", "d", "M956.54,168.2c-194.34,0-351.89,157.55-351.89,351.89S762.19,872,956.54,872s351.89-157.55,351.89-351.89S1150.88,168.2,956.54,168.2Zm0,584.49c-128.46,0-232.6-104.14-232.6-232.6s104.14-232.6,232.6-232.6,232.6,104.14,232.6,232.6S1085,752.69,956.54,752.69Z", 1, "cls-3"], ["id", "umbrella", "data-name", "Layer 3"], ["cx", "1187.53", "cy", "240.3", "r", "7.66", "transform", "translate(236.36 990.8) rotate(-49.71)", 1, "cls-4"], ["d", "M1219.56,359.67l55,100.52c32.7-48.48-6.87-142.43-91.75-214.38-84.41-71.55-183-95.33-225.81-56l114.21,44.14Z", 1, "cls-5"], ["d", "M1182.79,245.81c-84.41-71.55-183-95.33-225.81-56l114.21,44.14Z", 1, "cls-6"], ["points", "1182.79 245.81 1071.19 233.91 1219.56 359.67 1182.79 245.81", 1, "cls-7"], ["points", "1180.91 409.02 1274.54 460.19 1219.56 359.67 1071.19 233.91 956.98 189.76 1021.95 274.29 1180.91 409.02", 1, "cls-8"], ["x", "997.45", "y", "358.35", "width", "175.58", "height", "5.1", "transform", "translate(108.21 955.38) rotate(-49.71)", 1, "cls-4"], ["x", "1028.09", "y", "399.36", "width", "21.46", "height", "32.27", "rx", "10.73", "ry", "10.73", "transform", "translate(515.04 -573.16) rotate(40.29)", 1, "cls-4"], ["id", "pillow", "data-name", "Layer 4"], ["d", "M754,627.07c7,.54,12.92-2.82,13.35-7.59s-4.95-9.24-12-9.87a18.55,18.55,0,0,0-2.17,0l-74.9-81.64c0-.1,0-.19,0-.29,0-7.09-4-12.83-8.8-12.81s-8.75,5.77-8.73,12.87c0,0,0,.09,0,.13l-50.21,46.07h-.09c-7.06-.63-13.14,2.77-13.57,7.59s4.87,9.16,11.85,9.84l76.08,82.92s0,0,0,.06c0,7.09,4,12.83,8.8,12.81s8.65-5.66,8.71-12.65Z", 1, "cls-1"], ["d", "M669.46,514.82c-4.77-.83-8.75,5.77-8.73,12.87,0,0,0,.09,0,.13l-50.21,46.07h-.09c-7.06-.63-13.14,2.77-13.57,7.59s4.87,9.16,11.85,9.84l76.08,82.92s0,0,0,.06c0,7.09,4,12.83,8.8,12.81s8.65-5.66,8.71-12.65C570.55,573,702.07,520.47,669.46,514.82Z", 1, "cls-9"], ["id", "cup", "data-name", "Layer 7"], ["points", "1173.69 748.21 1140.52 715.42 1195.79 647.35 1241.13 692.16 1173.69 748.21", 1, "cls-1"], ["points", "1173.69 748.21 1140.52 715.42 1143.93 711.27 1177.81 744.75 1173.69 748.21", 1, "cls-8"], ["points", "1194.68 731.46 1157.04 694.24 1183.8 661.7 1226.91 704.32 1194.68 731.46", 1, "cls-5"], [1, "cls-10"], ["d", "M1176.32,667.78h0a4.19,4.19,0,0,1,4.19,4.19v33.54a0,0,0,0,1,0,0h-8.38a0,0,0,0,1,0,0V672a4.19,4.19,0,0,1,4.19-4.19Z", "transform", "translate(822.53 -628.67) rotate(44.67)", 1, "cls-8"], ["d", "M1172.73,709.7l23.58-23.85a4.19,4.19,0,0,1,5.92,0h0a4.19,4.19,0,0,1,0,5.92l-23.58,23.85Z", 1, "cls-8"], ["d", "M1185.11,722.09l23.58-23.85a4.19,4.19,0,0,1,5.92,0h0a4.19,4.19,0,0,1,0,5.92L1191.06,728Z", 1, "cls-8"], ["d", "M1197.85,660.5h45.69a5.7,5.7,0,0,1,5.7,5.7v8.32a0,0,0,0,1,0,0h-57.09a0,0,0,0,1,0,0v-8.32A5.7,5.7,0,0,1,1197.85,660.5Z", "transform", "translate(829.53 -667.66) rotate(45)", 1, "cls-5"], ["d", "M1191.49,664.74h53.94a5.25,5.25,0,0,1,5.25,5.25v4.79a0,0,0,0,1,0,0h-64.44a0,0,0,0,1,0,0V670a5.25,5.25,0,0,1,5.25-5.25Z", "transform", "translate(822.83 -663.17) rotate(44.67)", 1, "cls-8"], ["id", "clock", "data-name", "Layer 8"], ["cx", "847.7", "cy", "247.59", "r", "74.66", "transform", "translate(-32.91 314.05) rotate(-20.6)", 1, "cls-5"], ["cx", "847.7", "cy", "247.59", "r", "63.44", "transform", "translate(-32.91 314.05) rotate(-20.6)", 1, "cls-1"], ["x", "845", "y", "189.5", "width", "6.04", "height", "58", "rx", "3.02", "ry", "3.02", 1, "cls-3", "clock-hand-1"], ["x", "845", "y", "209.5", "width", "6.04", "height", "38", "rx", "3.02", "ry", "3.02", "transform", "translate(1611.22 -230.4) rotate(130.4)", 1, "cls-3", "clock-hand-2"], ["cx", "847.7", "cy", "247.59", "transform", "translate(-32.91 314.05) rotate(-20.6)", "r", "3", 1, "cls-3"], ["id", "box", "data-name", "Layer 9"], ["id", "box-top"], ["points", "569.71 382.28 653.74 329.39 747.13 320.1 679.2 369.85 569.71 382.28", 1, "cls-8"], ["points", "691.95 367.2 570.87 392.34 565.32 383.35 687.8 357.45 691.95 367.2", 1, "cls-5"], ["points", "661.54 337.48 570.87 392.34 562.42 378.92 652.25 322.38 658.12 321.34 661.54 337.48", 1, "cls-5"], ["points", "661.54 337.48 570.87 392.34 562.42 378.92 652.25 322.38 658.12 321.34 661.54 337.48", 1, "cls-7"], ["points", "747.13 320.1 661.54 337.48 652.25 322.38 738.4 307.1 747.13 320.1", 1, "cls-5"], ["d", "M588.28,420.26s3.44,5.2,5.19,8l43.1,68.48,158.81-100-43.1-68.48q-2.63-4.17-5.47-8Z", 1, "cls-5"], ["d", "M588.28,420.26s3.44,5.2,5.19,8l43.1,68.48,158.81-100-43.1-68.48q-2.63-4.17-5.47-8Z", 1, "cls-7"], ["x", "693.73", "y", "335.51", "width", "83.99", "height", "90.58", "transform", "translate(-89.78 450.43) rotate(-32.19)", 1, "cls-5"], ["id", "rucksack", "data-name", "Layer 6"], ["id", "stripe"], ["d", "M1200.32,473.91h0a13.74,13.74,0,0,0-18.41,7.44l-55,129.86a14.82,14.82,0,0,0,7.13,19.21h0a13.74,13.74,0,0,0,18.41-7.44l55-129.86A14.82,14.82,0,0,0,1200.32,473.91Z", 1, "cls-12"], ["d", "M1202.18,606.34h0a14,14,0,0,0-16.18-11.8l-48.83,9c-7.59,1.4-12.66,9-11.31,16.89h0a14,14,0,0,0,16.18,11.8l48.83-9C1198.46,621.82,1203.53,614.26,1202.18,606.34Z", 1, "cls-13"], ["d", "M1300.86,603l-122.93,22.74-15.44-90.91c-5.75-33.86,15.89-66.17,48.34-72.18l11.58-2.08c32.45-6,57.26,17.66,63,51.51Z", 1, "cls-8"], ["d", "M1307,601.91l-112.32,20.78-15.9-93.61c-5.5-32.36,15.19-63.25,46.2-69h0c31-5.74,60.62,15.85,66.12,48.21Z", 1, "cls-1"], ["d", "M1296.76,603.8,1215,618.92l-4.89-28.77c-2.11-12.42,5.83-24.27,17.73-26.47l38.67-7.15c11.9-2.2,23.26,6.08,25.37,18.5Z", 1, "cls-8"], ["d", "M1296.76,603.8l-73.41,13.58-4.92-29c-2-11.62,5.45-22.72,16.6-24.78l33.07-6.12c11.14-2.06,21.77,5.69,23.75,17.32Z", 1, "cls-5"], ["d", "M1231.77,469.69l-13.42,2.48a10.25,10.25,0,0,0-8,11.92l2.38,14a9.9,9.9,0,0,0,11.42,8.33l13.42-2.48a10.25,10.25,0,0,0,8-11.92l-2.38-14A9.9,9.9,0,0,0,1231.77,469.69Zm7.17,20.84a6.39,6.39,0,0,1-5,7.43l-8.36,1.55a6.17,6.17,0,0,1-7.12-5.19l-1.48-8.73a6.39,6.39,0,0,1,5-7.43l8.36-1.55a6.17,6.17,0,0,1,7.12,5.19Z", 1, "cls-4"], ["d", "M1233.74,471.13l-13.42,2.48a10.25,10.25,0,0,0-8,11.92l2.38,14a9.9,9.9,0,0,0,11.42,8.33l13.42-2.48a10.25,10.25,0,0,0,8-11.92l-2.38-14A9.9,9.9,0,0,0,1233.74,471.13Zm7.17,20.84a6.39,6.39,0,0,1-5,7.43l-8.36,1.55a6.17,6.17,0,0,1-7.12-5.19L1219,487a6.39,6.39,0,0,1,5-7.43l8.36-1.55a6.17,6.17,0,0,1,7.12,5.19Z", 1, "cls-14"], ["id", "bike", "data-name", "Layer 5"], ["d", "M1139.82,780.44a76.59,76.59,0,1,0-57.9,91.53A76.59,76.59,0,0,0,1139.82,780.44Zm-28.12,6.33a47.59,47.59,0,0,1,.83,15.8c-30.14-6.28-47.68-21.65-54.39-52.52A47.73,47.73,0,0,1,1111.69,786.77Zm-70.46-30.9c10.35,26.88,10.14,50.4-13.73,70.77a47.67,47.67,0,0,1,13.73-70.77Zm34.35,88a47.55,47.55,0,0,1-34.94-5.62c16.8-20.36,41.71-25.94,67.09-19.46A47.66,47.66,0,0,1,1075.58,843.85Z", 1, "cls-8", "wheel"], ["d", "M864.89,789.69a76.59,76.59,0,1,0-66.13,85.78A76.59,76.59,0,0,0,864.89,789.69Zm-28.59,3.7a47.59,47.59,0,0,1-.64,15.81c-29.43-9-45.47-26-49.3-57.33A47.73,47.73,0,0,1,836.3,793.39ZM769,756.1c7.82,27.72,5.43,51.12-20.22,69.2A47.67,47.67,0,0,1,769,756.1Zm26.06,90.78a47.55,47.55,0,0,1-34.27-8.83c18.61-18.72,43.93-22,68.6-13.16A47.66,47.66,0,0,1,795.06,846.88Z", 1, "cls-8", "wheel"], ["x", "871.39", "y", "693.37", "width", "12.87", "height", "53.21", "transform", "translate(-165.97 273.38) rotate(-16.19)", 1, "cls-1"], ["d", "M813.93,679.35c-3.72-5.2,2.24-18.5,9.16-16.13,33.43,11.46,73.85,10.45,73.85,10.45,8.84.15,14.44,10.34,7.27,15.48-14.36,8.79-33.13,17-56.35,9.76C830.17,693.41,819.83,687.6,813.93,679.35Z", 1, "cls-5"], ["d", "M813.93,679.35c-3.72-5.2,2.24-18.5,9.16-16.13,33.43,11.46,73.85,10.45,73.85,10.45,8.84.15,14.44,10.34,7.27,15.48-14.36,8.79-33.13,17-56.35,9.76C830.17,693.41,819.83,687.6,813.93,679.35Z", 1, "cls-7"], ["d", "M817.15,680.06c-3.59-5,1.69-16.51,8.37-14.22,32.3,11.09,71.41,7.83,71.41,7.83,8.54.14,17.45,9.94,7.43,15.88-13.87,8.51-32,16.44-54.44,9.44C832.84,693.67,822.85,688,817.15,680.06Z", 1, "cls-5"], ["cx", "1022.66", "cy", "599.55", "r", "11.57", "transform", "translate(-4.86 8.38) rotate(-0.47)", 1, "cls-9"], ["d", "M1069.76,792.37l-34.89-96.74,1.93-.8-1.71-4.15-1.74.72-13.26-36.76,1.27-.42-2.25-6.76,5.94-2-2.57-7.72-9.7,3.22c-11.55-22.55,2-36.33,15-41.86l-5.57-8.81c-23,10.29-29.61,28.75-19.53,54l-9.38,3.12,2.56,7.72,5.47-1.82,2.25,6.76,2.36-.78,13.62,37.76-2.35,1,1.71,4.15,2.16-.89,34.65,96.09a7.47,7.47,0,0,0,9.56,4.49h0A7.47,7.47,0,0,0,1069.76,792.37Z", 1, "cls-1"], ["cx", "1027.9", "cy", "587.94", "r", "12.99", "transform", "translate(-4.77 8.42) rotate(-0.47)", 1, "cls-11"], ["d", "M1021.29,654l-17.73,6.15,1.72,5.59-31.41,82.36c-19.35,32.53-66.3,36.72-75.56,16.68l-7.09-21.5L879,747.1l3.28,10.09-94.65,33.95c-11.49,2.29-11.85,15.79-2.61,17.84,0,0,39.11,3.66,103,9.5a92.75,92.75,0,0,0,40.89-5.29c44.32-16.56,57.73-50.67,57.73-50.67l26.82-67.26a1.37,1.37,0,0,1,2.53,0l1.42,3.33,17.75-7.62Z", 1, "cls-5"], ["d", "M1021.29,654l-17.73,6.15,1.72,5.59-31.41,82.36c-19.35,32.53-66.3,36.72-75.56,16.68l-7.09-21.5L879,747.1l3.28,10.09-94.65,33.95c-11.49,2.29-11.85,15.79-2.61,17.84,0,0,39.11,3.66,103,9.5a92.75,92.75,0,0,0,40.89-5.29c44.32-16.56,57.73-50.67,57.73-50.67l26.82-67.26a1.37,1.37,0,0,1,2.53,0l1.42,3.33,17.75-7.62Z", 1, "cls-7"]],
  template: function PageNotFoundComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 2)(3, "title");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "404");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "g", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 4)(7, "rect", 5)(8, "path", 6)(9, "rect", 7)(10, "path", 8)(11, "path", 9)(12, "rect", 10)(13, "path", 11)(14, "rect", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "g", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 14)(17, "path", 15)(18, "path", 16)(19, "path", 17)(20, "path", 18)(21, "path", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "g", 20)(23, "g", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "rect", 22)(25, "rect", 23)(26, "rect", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "g", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "rect", 26)(29, "rect", 27)(30, "rect", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "path", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "g", 30)(33, "g");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "circle", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "g");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "path", 32)(37, "path", 33)(38, "polygon", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "polygon", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "g");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "rect", 36)(42, "rect", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "g", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "path", 39)(45, "path", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "g", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "polygon", 42)(48, "polygon", 43)(49, "polygon", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "g", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "path", 46)(52, "path", 47)(53, "path", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "path", 49)(55, "path", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "g", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "circle", 52)(58, "circle", 53)(59, "rect", 54)(60, "rect", 55)(61, "circle", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "g", 57)(63, "g", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "polygon", 59)(65, "polygon", 60)(66, "polygon", 61)(67, "polygon", 62)(68, "polygon", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "path", 64)(70, "path", 65)(71, "rect", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "g", 67)(73, "g", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "path", 69)(75, "path", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "path", 71)(77, "path", 72)(78, "path", 73)(79, "path", 74)(80, "path", 75)(81, "path", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "g", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "path", 78)(84, "path", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "g");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "rect", 80)(87, "path", 81)(88, "path", 82)(89, "path", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "g");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "circle", 84)(92, "path", 85)(93, "circle", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "path", 87)(95, "path", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
  },
  styles: [".cls-1[_ngcontent-%COMP%] {\n  fill: #ffc541;\n}\n\n.cls-2[_ngcontent-%COMP%] {\n  fill: #212121;\n}\n\n.cls-3[_ngcontent-%COMP%] {\n  fill: #212121;\n}\n\n.cls-4[_ngcontent-%COMP%] {\n  fill: #f78d5e;\n}\n\n.cls-5[_ngcontent-%COMP%] {\n  fill: #fa976c;\n}\n\n.cls-6[_ngcontent-%COMP%], .cls-7[_ngcontent-%COMP%], .cls-8[_ngcontent-%COMP%] {\n  fill: #b65c32;\n}\n\n.cls-10[_ngcontent-%COMP%], .cls-6[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n\n.cls-7[_ngcontent-%COMP%] {\n  opacity: 0.4;\n}\n\n.cls-9[_ngcontent-%COMP%] {\n  fill: #f4b73b;\n}\n\n.cls-11[_ngcontent-%COMP%] {\n  fill: #f9c358;\n}\n\n.cls-12[_ngcontent-%COMP%] {\n  fill: #9b462c;\n}\n\n.cls-13[_ngcontent-%COMP%] {\n  fill: #aa512e;\n}\n\n.cls-14[_ngcontent-%COMP%] {\n  fill: #7d6aa5;\n}\n\n\n\n.wheel[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_wheel-rotate 6s ease infinite;\n  transform-origin: center;\n  transform-box: fill-box;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  height: 100%;\n  align-items: center;\n}\n.wrapper[_ngcontent-%COMP%]   .page-not-found[_ngcontent-%COMP%] {\n  width: 70%;\n}\n\n@keyframes _ngcontent-%COMP%_wheel-rotate {\n  50% {\n    transform: rotate(360deg);\n    animation-timing-function: cubic-bezier(0.55, 0.085, 0.68, 0.53);\n  }\n  100% {\n    transform: rotate(960deg);\n  }\n}\n.clock-hand-1[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_clock-rotate 3s linear infinite;\n  transform-origin: bottom;\n  transform-box: fill-box;\n}\n\n.clock-hand-2[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_clock-rotate 6s linear infinite;\n  transform-origin: bottom;\n  transform-box: fill-box;\n}\n\n@keyframes _ngcontent-%COMP%_clock-rotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n#box-top[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_box-top-anim 2s linear infinite;\n  transform-origin: right top;\n  transform-box: fill-box;\n}\n\n@keyframes _ngcontent-%COMP%_box-top-anim {\n  50% {\n    transform: rotate(-5deg);\n  }\n}\n#umbrella[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_umbrella-anim 6s linear infinite;\n  transform-origin: center;\n  transform-box: fill-box;\n}\n\n@keyframes _ngcontent-%COMP%_umbrella-anim {\n  25% {\n    transform: translateY(10px) rotate(5deg);\n  }\n  75% {\n    transform: rotate(-5deg);\n  }\n}\n#cup[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_cup-rotate 3s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;\n  transform-origin: top left;\n  transform-box: fill-box;\n}\n\n@keyframes _ngcontent-%COMP%_cup-rotate {\n  50% {\n    transform: rotate(-5deg);\n  }\n}\n#pillow[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_pillow-anim 3s linear infinite;\n  transform-origin: center;\n  transform-box: fill-box;\n}\n\n@keyframes _ngcontent-%COMP%_pillow-anim {\n  25% {\n    transform: rotate(10deg) translateY(5px);\n  }\n  75% {\n    transform: rotate(-10deg);\n  }\n}\n#stripe[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_stripe-anim 3s linear infinite;\n  transform-origin: center;\n  transform-box: fill-box;\n}\n\n@keyframes _ngcontent-%COMP%_stripe-anim {\n  25% {\n    transform: translate(10px, 0) rotate(-10deg);\n  }\n  75% {\n    transform: translateX(10px);\n  }\n}\n#bike[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_bike-anim 6s ease infinite;\n}\n\n@keyframes _ngcontent-%COMP%_bike-anim {\n  0% {\n    transform: translateX(-1300px);\n  }\n  50% {\n    transform: translateX(0);\n    animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);\n  }\n  100% {\n    transform: translateX(1300px);\n  }\n}\n#rucksack[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_ruck-anim 3s linear infinite;\n  transform-origin: top;\n  transform-box: fill-box;\n}\n\n@keyframes _ngcontent-%COMP%_ruck-anim {\n  50% {\n    transform: rotate(5deg);\n  }\n}\n.circle[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_circle-anim ease infinite;\n  transform-origin: center;\n  transform-box: fill-box;\n  perspective: 0px;\n}\n\n.circle.c1[_ngcontent-%COMP%] {\n  animation-duration: 2s;\n}\n\n.circle.c2[_ngcontent-%COMP%] {\n  animation-duration: 3s;\n}\n\n.circle.c3[_ngcontent-%COMP%] {\n  animation-duration: 1s;\n}\n\n.circle.c4[_ngcontent-%COMP%] {\n  animation-duration: 1s;\n}\n\n.circle.c5[_ngcontent-%COMP%] {\n  animation-duration: 2s;\n}\n\n.circle.c6[_ngcontent-%COMP%] {\n  animation-duration: 3s;\n}\n\n@keyframes _ngcontent-%COMP%_circle-anim {\n  50% {\n    transform: scale(0.2) rotateX(360deg) rotateY(360deg);\n  }\n}\n.four[_ngcontent-%COMP%], #ou[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_four-anim cubic-bezier(0.39, 0.575, 0.565, 1) infinite;\n}\n\n.four.a[_ngcontent-%COMP%] {\n  transform-origin: bottom left;\n  animation-duration: 3s;\n  transform-box: fill-box;\n}\n\n.four.b[_ngcontent-%COMP%] {\n  transform-origin: bottom right;\n  animation-duration: 3s;\n  transform-box: fill-box;\n}\n\n#ou[_ngcontent-%COMP%] {\n  animation-duration: 6s;\n  transform-origin: center;\n  transform-box: fill-box;\n}\n\n@keyframes _ngcontent-%COMP%_four-anim {\n  50% {\n    transform: scale(0.98);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZXJyb3JzL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQUNKOztBQUVFO0VBQ0UsYUFBQTtBQUNKOztBQUVFO0VBQ0UsYUFBQTtBQUNKOztBQUVFO0VBQ0UsYUFBQTtBQUNKOztBQUVFO0VBQ0UsYUFBQTtBQUNKOztBQUVFOzs7RUFHRSxhQUFBO0FBQ0o7O0FBRUE7O0VBRUksWUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtBQUNKOztBQUdBLGVBQUE7QUFFQTtFQUNJLHdDQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtBQURKOztBQUlBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQURKO0FBRUk7RUFDSSxVQUFBO0FBQVI7O0FBSUE7RUFDSTtJQUNJLHlCQUFBO0lBQ0EsZ0VBQUE7RUFETjtFQUlFO0lBQ0kseUJBQUE7RUFGTjtBQUNGO0FBS0E7RUFDSSwwQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7QUFISjs7QUFNQTtFQUNJLDBDQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtBQUhKOztBQU1BO0VBQ0k7SUFDSSx5QkFBQTtFQUhOO0FBQ0Y7QUFNQTtFQUNJLDBDQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtBQUpKOztBQU9BO0VBQ0k7SUFDSSx3QkFBQTtFQUpOO0FBQ0Y7QUFPQTtFQUNJLDJDQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtBQUxKOztBQVFBO0VBQ0k7SUFDSSx3Q0FBQTtFQUxOO0VBUUU7SUFDSSx3QkFBQTtFQU5OO0FBQ0Y7QUFTQTtFQUNJLHlFQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtBQVBKOztBQVVBO0VBQ0k7SUFDSSx3QkFBQTtFQVBOO0FBQ0Y7QUFVQTtFQUNJLHlDQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtBQVJKOztBQVdBO0VBQ0k7SUFDSSx3Q0FBQTtFQVJOO0VBV0U7SUFDSSx5QkFBQTtFQVROO0FBQ0Y7QUFZQTtFQUNJLHlDQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtBQVZKOztBQWFBO0VBQ0k7SUFDSSw0Q0FBQTtFQVZOO0VBYUU7SUFDSSwyQkFBQTtFQVhOO0FBQ0Y7QUFjQTtFQUNJLHFDQUFBO0FBWko7O0FBZUE7RUFDSTtJQUNJLDhCQUFBO0VBWk47RUFlRTtJQUNJLHdCQUFBO0lBQ0EsOERBQUE7RUFiTjtFQWdCRTtJQUNJLDZCQUFBO0VBZE47QUFDRjtBQWlCQTtFQUNJLHVDQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtBQWZKOztBQWtCQTtFQUNJO0lBQ0ksdUJBQUE7RUFmTjtBQUNGO0FBa0JBO0VBQ0ksb0NBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFoQko7O0FBbUJBO0VBQ0ksc0JBQUE7QUFoQko7O0FBbUJBO0VBQ0ksc0JBQUE7QUFoQko7O0FBbUJBO0VBQ0ksc0JBQUE7QUFoQko7O0FBbUJBO0VBQ0ksc0JBQUE7QUFoQko7O0FBbUJBO0VBQ0ksc0JBQUE7QUFoQko7O0FBbUJBO0VBQ0ksc0JBQUE7QUFoQko7O0FBbUJBO0VBQ0k7SUFDSSxxREFBQTtFQWhCTjtBQUNGO0FBbUJBOztFQUVJLGlFQUFBO0FBakJKOztBQW9CQTtFQUNJLDZCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQWpCSjs7QUFvQkE7RUFDSSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFqQko7O0FBb0JBO0VBQ0ksc0JBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0FBakJKOztBQW9CQTtFQUNJO0lBQ0ksc0JBQUE7RUFqQk47QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5jbHMtMSB7XG4gICAgZmlsbDogI2ZmYzU0MTtcbiAgfVxuICBcbiAgLmNscy0yIHtcbiAgICBmaWxsOiAjMjEyMTIxO1xuICB9XG4gIFxuICAuY2xzLTMge1xuICAgIGZpbGw6ICMyMTIxMjE7XG4gIH1cbiAgXG4gIC5jbHMtNCB7XG4gICAgZmlsbDogI2Y3OGQ1ZTtcbiAgfVxuICBcbiAgLmNscy01IHtcbiAgICBmaWxsOiAjZmE5NzZjO1xuICB9XG4gIFxuICAuY2xzLTYsXG4gIC5jbHMtNyxcbiAgLmNscy04IHtcbiAgICBmaWxsOiAjYjY1YzMyO1xufVxuXG4uY2xzLTEwLFxuLmNscy02IHtcbiAgICBvcGFjaXR5OiAwLjY7XG59XG5cbi5jbHMtNyB7XG4gICAgb3BhY2l0eTogMC40O1xufVxuXG4uY2xzLTkge1xuICAgIGZpbGw6ICNmNGI3M2I7XG59XG5cbi5jbHMtMTEge1xuICAgIGZpbGw6ICNmOWMzNTg7XG59XG5cbi5jbHMtMTIge1xuICAgIGZpbGw6ICM5YjQ2MmM7XG59XG5cbi5jbHMtMTMge1xuICAgIGZpbGw6ICNhYTUxMmU7XG59XG5cbi5jbHMtMTQge1xuICAgIGZpbGw6ICM3ZDZhYTU7XG59XG5cblxuLyogYW5pbWF0aW9ucyAqL1xuXG4ud2hlZWwge1xuICAgIGFuaW1hdGlvbjogd2hlZWwtcm90YXRlIDZzIGVhc2UgaW5maW5pdGU7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICAgIHRyYW5zZm9ybS1ib3g6IGZpbGwtYm94O1xufVxuXG4ud3JhcHBlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAucGFnZS1ub3QtZm91bmQge1xuICAgICAgICB3aWR0aDogNzAlO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyB3aGVlbC1yb3RhdGUge1xuICAgIDUwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLjA4NSwgMC42OCwgMC41Myk7XG4gICAgfVxuXG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDk2MGRlZylcbiAgICB9XG59XG5cbi5jbG9jay1oYW5kLTEge1xuICAgIGFuaW1hdGlvbjogY2xvY2stcm90YXRlIDNzIGxpbmVhciBpbmZpbml0ZTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207XG4gICAgdHJhbnNmb3JtLWJveDogZmlsbC1ib3g7XG59XG5cbi5jbG9jay1oYW5kLTIge1xuICAgIGFuaW1hdGlvbjogY2xvY2stcm90YXRlIDZzIGxpbmVhciBpbmZpbml0ZTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207XG4gICAgdHJhbnNmb3JtLWJveDogZmlsbC1ib3g7XG59XG5cbkBrZXlmcmFtZXMgY2xvY2stcm90YXRlIHtcbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKVxuICAgIH1cbn1cblxuI2JveC10b3Age1xuICAgIGFuaW1hdGlvbjogYm94LXRvcC1hbmltIDJzIGxpbmVhciBpbmZpbml0ZTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCB0b3A7XG4gICAgdHJhbnNmb3JtLWJveDogZmlsbC1ib3g7XG59XG5cbkBrZXlmcmFtZXMgYm94LXRvcC1hbmltIHtcbiAgICA1MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZylcbiAgICB9XG59XG5cbiN1bWJyZWxsYSB7XG4gICAgYW5pbWF0aW9uOiB1bWJyZWxsYS1hbmltIDZzIGxpbmVhciBpbmZpbml0ZTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gICAgdHJhbnNmb3JtLWJveDogZmlsbC1ib3g7XG59XG5cbkBrZXlmcmFtZXMgdW1icmVsbGEtYW5pbSB7XG4gICAgMjUlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpIHJvdGF0ZSg1ZGVnKTtcbiAgICB9XG5cbiAgICA3NSUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XG4gICAgfVxufVxuXG4jY3VwIHtcbiAgICBhbmltYXRpb246IGN1cC1yb3RhdGUgM3MgY3ViaWMtYmV6aWVyKDAuNDU1LCAwLjAzLCAwLjUxNSwgMC45NTUpIGluZmluaXRlO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xuICAgIHRyYW5zZm9ybS1ib3g6IGZpbGwtYm94O1xufVxuXG5Aa2V5ZnJhbWVzIGN1cC1yb3RhdGUge1xuICAgIDUwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC01ZGVnKVxuICAgIH1cbn1cblxuI3BpbGxvdyB7XG4gICAgYW5pbWF0aW9uOiBwaWxsb3ctYW5pbSAzcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICAgIHRyYW5zZm9ybS1ib3g6IGZpbGwtYm94O1xufVxuXG5Aa2V5ZnJhbWVzIHBpbGxvdy1hbmltIHtcbiAgICAyNSUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMGRlZykgdHJhbnNsYXRlWSg1cHgpXG4gICAgfVxuXG4gICAgNzUlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKVxuICAgIH1cbn1cblxuI3N0cmlwZSB7XG4gICAgYW5pbWF0aW9uOiBzdHJpcGUtYW5pbSAzcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICAgIHRyYW5zZm9ybS1ib3g6IGZpbGwtYm94O1xufVxuXG5Aa2V5ZnJhbWVzIHN0cmlwZS1hbmltIHtcbiAgICAyNSUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMHB4LCAwKSByb3RhdGUoLTEwZGVnKVxuICAgIH1cblxuICAgIDc1JSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KVxuICAgIH1cbn1cblxuI2Jpa2Uge1xuICAgIGFuaW1hdGlvbjogYmlrZS1hbmltIDZzIGVhc2UgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgYmlrZS1hbmltIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTMwMHB4KVxuICAgIH1cblxuICAgIDUwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNDcsIDAsIDAuNzQ1LCAwLjcxNSk7XG4gICAgfVxuXG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMzAwcHgpXG4gICAgfVxufVxuXG4jcnVja3NhY2sge1xuICAgIGFuaW1hdGlvbjogcnVjay1hbmltIDNzIGxpbmVhciBpbmZpbml0ZTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gICAgdHJhbnNmb3JtLWJveDogZmlsbC1ib3g7XG59XG5cbkBrZXlmcmFtZXMgcnVjay1hbmltIHtcbiAgICA1MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg1ZGVnKVxuICAgIH1cbn1cblxuLmNpcmNsZSB7XG4gICAgYW5pbWF0aW9uOiBjaXJjbGUtYW5pbSBlYXNlIGluZmluaXRlO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgICB0cmFuc2Zvcm0tYm94OiBmaWxsLWJveDtcbiAgICBwZXJzcGVjdGl2ZTogMHB4O1xufVxuXG4uY2lyY2xlLmMxIHtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDJzXG59XG5cbi5jaXJjbGUuYzIge1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogM3Ncbn1cblxuLmNpcmNsZS5jMyB7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxc1xufVxuXG4uY2lyY2xlLmM0IHtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzXG59XG5cbi5jaXJjbGUuYzUge1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMnNcbn1cblxuLmNpcmNsZS5jNiB7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzc1xufVxuXG5Aa2V5ZnJhbWVzIGNpcmNsZS1hbmltIHtcbiAgICA1MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC4yKSByb3RhdGVYKDM2MGRlZykgcm90YXRlWSgzNjBkZWcpXG4gICAgfVxufVxuXG4uZm91cixcbiNvdSB7XG4gICAgYW5pbWF0aW9uOiBmb3VyLWFuaW0gY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSkgaW5maW5pdGU7XG59XG5cbi5mb3VyLmEge1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0O1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XG4gICAgdHJhbnNmb3JtLWJveDogZmlsbC1ib3g7XG59XG5cbi5mb3VyLmIge1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSByaWdodDtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xuICAgIHRyYW5zZm9ybS1ib3g6IGZpbGwtYm94O1xufVxuXG4jb3Uge1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNnM7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICAgIHRyYW5zZm9ybS1ib3g6IGZpbGwtYm94O1xufVxuXG5Aa2V5ZnJhbWVzIGZvdXItYW5pbSB7XG4gICAgNTAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSguOTgpXG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 8098:
/*!********************************************!*\
  !*** ./src/app/layouts/layouts.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayoutsService: () => (/* binding */ LayoutsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6290);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 7889);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);





class LayoutsService {
  constructor(http, router) {
    this.http = http;
    this.router = router;
    this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  }
  show() {
    this.isLoading.next(true);
  }
  hide() {
    this.isLoading.next(false);
  }
  successMessageDialog(message) {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
      toast: true,
      position: 'top-right',
      showConfirmButton: false,
      timer: 3000,
      title: message,
      icon: 'success'
    }).then(data => {});
  }
  errorMessageDialog(message) {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
      toast: true,
      position: 'top-right',
      showConfirmButton: false,
      timer: 3000,
      title: 'Oops',
      text: message,
      icon: 'error'
    }).then(data => {});
  }
  setCookie(name, value, expireDays, path = '') {
    let d = new Date();
    d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
    let expires = `expires=${d.toUTCString()}`;
    let cpath = path ? `; path=${path}` : '';
    document.cookie = `${name}=${value}; ${expires}${cpath}`;
  }
  getCookie(name) {
    let ca = document.cookie.split(';');
    let caLen = ca.length;
    let cookieName = `${name}=`;
    let c;
    for (let i = 0; i < caLen; i += 1) {
      c = ca[i].replace(/^\s+/g, '');
      if (c.indexOf(cookieName) == 0) {
        return c.substring(cookieName.length, c.length);
      }
    }
    return '';
  }
  deleteCookie(name) {
    this.setCookie(name, '', -1);
  }
  getUTCDate() {
    const epochNow = new Date().getTime();
    return epochNow;
  }
  deleteConfirmation() {
    return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#337d92',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    });
  }
  successMessage(title, message) {
    return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire(title, message, 'success');
  }
  errorMessage(title, message) {
    return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire(title, message, 'error');
  }
  deletedConfirmed() {
    return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Deleted!', 'Your data has been deleted.', 'success');
  }
  postCreated() {
    return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Created!', 'Your news has been create.', 'success');
  }
  postUpdated() {
    return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Updated!', 'Your news has been update.', 'success');
  }
  copyToClipboard(value) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = value;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.successMessageDialog('Copy to Clipboard');
  }
  loadImageBlob(url) {
    return this.http.get(url, {
      responseType: 'blob'
    });
  }
  handleError(error) {
    const isServerError = error?.status >= 500 || error?.status === 0 || error?.status === undefined;
    const isBadRequest = error?.status === 400 || error?.status === 422;
    const isAuthError = error?.status === 401 || error?.error?.message === 'jwt must be provided' || error?.error?.message === 'jwt expired';
    let title = 'Oops';
    let message = error?.error?.message === 'jwt must be provided' ? 'Please login first' : error?.error?.message ?? error?.error?.error ?? error?.error ?? error?.message;
    if (isAuthError) {
      title = 'Please Re-Login';
      message = 'Session Expired or Token Invalid';
      this.router.navigate(['/auth/login']);
    }
    if (isServerError) {
      title = 'Connection Issue';
      message = 'Something went wrong, please try again later.';
    } else if (isBadRequest) {
      title = 'Bad Request';
      message = error?.error?.message || error?.error?.error || 'Invalid request. Please check your input.';
    }
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
      toast: true,
      position: 'top-right',
      showConfirmButton: false,
      timer: 3000,
      title: `${title}`,
      text: message,
      icon: 'error'
    });
    return rxjs__WEBPACK_IMPORTED_MODULE_2__.EMPTY;
  }
  formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear(),
      hour = '' + d.getHours(),
      minute = '' + d.getMinutes(),
      second = '' + d.getSeconds();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
  }
  downloadFromBlob(response, filename) {
    const url = window.URL.createObjectURL(response);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  }
  removeLocalStorageLike(pattern) {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.includes(pattern)) {
        localStorage.removeItem(key);
        i--;
      }
    }
  }
}
LayoutsService.ɵfac = function LayoutsService_Factory(t) {
  return new (t || LayoutsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
};
LayoutsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: LayoutsService,
  factory: LayoutsService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 8721:
/*!******************************************************!*\
  !*** ./src/app/layouts/loading/loading.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadingComponent: () => (/* binding */ LoadingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _layouts_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layouts.service */ 8098);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);



function LoadingComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div")(3, "div")(4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
class LoadingComponent {
  constructor(layoutService) {
    this.layoutService = layoutService;
    this.isLoading = this.layoutService.isLoading;
  }
  ngOnInit() {}
}
LoadingComponent.ɵfac = function LoadingComponent_Factory(t) {
  return new (t || LoadingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_layouts_service__WEBPACK_IMPORTED_MODULE_0__.LayoutsService));
};
LoadingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: LoadingComponent,
  selectors: [["app-loading"]],
  decls: 2,
  vars: 3,
  consts: [["class", "overlay", 4, "ngIf"], [1, "overlay"], [1, "loader"]],
  template: function LoadingComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, LoadingComponent_div_0_Template, 5, 0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.isLoading));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe],
  styles: [".overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  display: block;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background-color: rgba(74, 74, 74, 0.8);\n  z-index: 99999;\n}\n\n.loader[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 40%;\n  left: 48%;\n  transform: translate(-50%, -50%);\n}\n\n.loader[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: absolute;\n  left: 8px;\n  width: 16px;\n  background: #fff;\n  animation: _ngcontent-%COMP%_loader 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;\n}\n\n.loader[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1) {\n  left: 8px;\n  animation-delay: -0.24s;\n}\n\n.loader[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  left: 32px;\n  animation-delay: -0.12s;\n}\n\n.loader[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\n  left: 56px;\n  animation-delay: 0;\n}\n\n@keyframes _ngcontent-%COMP%_loader {\n  0% {\n    top: 8px;\n    height: 64px;\n  }\n  50%, 100% {\n    top: 24px;\n    height: 32px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGF5b3V0cy9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSx1Q0FBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0REFBQTtBQUNKOztBQUVBO0VBQ0ksU0FBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0k7SUFDSSxRQUFBO0lBQ0EsWUFBQTtFQUNOO0VBRUU7SUFFSSxTQUFBO0lBQ0EsWUFBQTtFQUROO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIub3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc0LCA3NCwgNzQsIC44KTtcbiAgICB6LWluZGV4OiA5OTk5OTtcbn1cblxuLmxvYWRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNDAlO1xuICAgIGxlZnQ6IDQ4JTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLmxvYWRlciBkaXYge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogOHB4O1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYW5pbWF0aW9uOiBsb2FkZXIgMS4ycyBjdWJpYy1iZXppZXIoMCwgMC41LCAwLjUsIDEpIGluZmluaXRlO1xufVxuXG4ubG9hZGVyIGRpdjpudGgtY2hpbGQoMSkge1xuICAgIGxlZnQ6IDhweDtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjI0cztcbn1cblxuLmxvYWRlciBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgICBsZWZ0OiAzMnB4O1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMTJzO1xufVxuXG4ubG9hZGVyIGRpdjpudGgtY2hpbGQoMykge1xuICAgIGxlZnQ6IDU2cHg7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwO1xufVxuXG5Aa2V5ZnJhbWVzIGxvYWRlciB7XG4gICAgMCUge1xuICAgICAgICB0b3A6IDhweDtcbiAgICAgICAgaGVpZ2h0OiA2NHB4O1xuICAgIH1cblxuICAgIDUwJSxcbiAgICAxMDAlIHtcbiAgICAgICAgdG9wOiAyNHB4O1xuICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 9413:
/*!******************************************!*\
  !*** ./src/environments/environments.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  title: 'CMS Investor Trust',
  production: false,
  config: {
    apiUrl: 'https://dev.engine.investortrust.id/api/',
    cloudinaryBaseUrl: 'https://api.cloudinary.com/v1_1/dzvyafhg1/',
    cloudinaryApiSecret: 'iXWYg7zYNktd5sk82B3dlgh_LNw',
    jsonBlob: 'https://jsonblob.com/api/jsonBlob/',
    updateId: '1160952349488701440',
    updateCmsId: '1162382521861529600'
  },
  flag: {
    generativeAds: true,
    dialogDeletedNews: true
  }
};

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map