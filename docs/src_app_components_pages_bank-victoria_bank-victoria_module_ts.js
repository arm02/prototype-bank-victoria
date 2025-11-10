"use strict";
(self["webpackChunkcms_instruct_new"] = self["webpackChunkcms_instruct_new"] || []).push([["src_app_components_pages_bank-victoria_bank-victoria_module_ts"],{

/***/ 2603:
/*!********************************************************************************!*\
  !*** ./src/app/components/pages/bank-victoria/bank-victoria-routing.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BankVictoriaPagesRoutingModule: () => (/* binding */ BankVictoriaPagesRoutingModule),
/* harmony export */   TemplatePageTitleStrategy: () => (/* binding */ TemplatePageTitleStrategy)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_auth_auth_guards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/auth/auth.guards */ 4273);
/* harmony import */ var _program_program_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./program/program.component */ 6241);
/* harmony import */ var _bank_victoria_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bank-victoria.component */ 3184);
/* harmony import */ var _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./schedule/schedule.component */ 1899);
/* harmony import */ var _dashboard_victoria_pages_detail_article_detail_article_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dashboard-victoria/pages/detail-article/detail-article.component */ 8261);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 6480);









class TemplatePageTitleStrategy extends _angular_router__WEBPACK_IMPORTED_MODULE_5__.TitleStrategy {
  constructor(title) {
    super();
    this.title = title;
  }
  updateTitle(routerState) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(title);
    }
  }
}
TemplatePageTitleStrategy.ɵfac = function TemplatePageTitleStrategy_Factory(t) {
  return new (t || TemplatePageTitleStrategy)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.Title));
};
TemplatePageTitleStrategy.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: TemplatePageTitleStrategy,
  factory: TemplatePageTitleStrategy.ɵfac,
  providedIn: 'root'
});
const routes = [{
  path: '',
  component: _bank_victoria_component__WEBPACK_IMPORTED_MODULE_2__.BankVictoriaComponent,
  data: {
    navTitle: 'Beranda'
  },
  children: [{
    path: 'program',
    title: 'LMS Program | PT. Bank Victoria International, Tbk',
    component: _program_program_component__WEBPACK_IMPORTED_MODULE_1__.ProgramComponent,
    canActivate: [src_app_auth_auth_guards__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
    data: {
      navTitle: 'Daftar Program',
      role: 'all'
    }
  }, {
    path: 'jadwal-pelatihan',
    title: 'LMS Jadwal Pelatihan | PT. Bank Victoria International, Tbk',
    component: _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_3__.ScheduleComponent,
    canActivate: [src_app_auth_auth_guards__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
    data: {
      navTitle: 'Jadwal Pelatihan',
      role: 'all'
    }
  }, {
    path: 'article/detail-article',
    title: 'LMS Detail Artikel | PT. Bank Victoria International, Tbk',
    component: _dashboard_victoria_pages_detail_article_detail_article_component__WEBPACK_IMPORTED_MODULE_4__.DetailArticleComponent,
    canActivate: [src_app_auth_auth_guards__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
    data: {
      navTitle: 'Detail Artikel',
      role: 'all'
    }
  }]
}];
class BankVictoriaPagesRoutingModule {}
BankVictoriaPagesRoutingModule.ɵfac = function BankVictoriaPagesRoutingModule_Factory(t) {
  return new (t || BankVictoriaPagesRoutingModule)();
};
BankVictoriaPagesRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: BankVictoriaPagesRoutingModule
});
BankVictoriaPagesRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  providers: [src_app_auth_auth_guards__WEBPACK_IMPORTED_MODULE_0__.AuthGuard, {
    provide: _angular_router__WEBPACK_IMPORTED_MODULE_5__.TitleStrategy,
    useClass: TemplatePageTitleStrategy
  }],
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](BankVictoriaPagesRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 3821:
/*!************************************************************************!*\
  !*** ./src/app/components/pages/bank-victoria/bank-victoria.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BankVictoriaPagesModule: () => (/* binding */ BankVictoriaPagesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _bank_victoria_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bank-victoria-routing.module */ 2603);
/* harmony import */ var _program_program_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./program/program.component */ 6241);
/* harmony import */ var _bank_victoria_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bank-victoria.component */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./schedule/schedule.component */ 1899);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);







class BankVictoriaPagesModule {}
BankVictoriaPagesModule.ɵfac = function BankVictoriaPagesModule_Factory(t) {
  return new (t || BankVictoriaPagesModule)();
};
BankVictoriaPagesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: BankVictoriaPagesModule
});
BankVictoriaPagesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _bank_victoria_routing_module__WEBPACK_IMPORTED_MODULE_0__.BankVictoriaPagesRoutingModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](BankVictoriaPagesModule, {
    declarations: [_program_program_component__WEBPACK_IMPORTED_MODULE_1__.ProgramComponent, _bank_victoria_component__WEBPACK_IMPORTED_MODULE_2__.BankVictoriaComponent, _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_3__.ScheduleComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _bank_victoria_routing_module__WEBPACK_IMPORTED_MODULE_0__.BankVictoriaPagesRoutingModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    exports: [_program_program_component__WEBPACK_IMPORTED_MODULE_1__.ProgramComponent]
  });
})();

/***/ }),

/***/ 6241:
/*!*****************************************************************************!*\
  !*** ./src/app/components/pages/bank-victoria/program/program.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProgramComponent: () => (/* binding */ ProgramComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);


function ProgramComponent_ul_36_ul_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 22)(1, "li")(2, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Page 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li")(6, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Page 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
function ProgramComponent_ul_36_ul_16_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li")(1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const course_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r4);
  }
}
function ProgramComponent_ul_36_ul_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProgramComponent_ul_36_ul_16_li_1_Template, 4, 1, "li", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.courses);
  }
}
function ProgramComponent_ul_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 22)(1, "li")(2, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Site Home ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li")(6, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProgramComponent_ul_36_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.toggleMenu("sitePages"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Site Pages ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProgramComponent_ul_36_ul_10_Template, 9, 0, "ul", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li")(12, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProgramComponent_ul_36_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.toggleMenu("myCourses"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " My Courses ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ProgramComponent_ul_36_ul_16_Template, 2, 1, "ul", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("open", ctx_r0.isOpen("sitePages"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isOpen("sitePages"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("open", ctx_r0.isOpen("myCourses"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isOpen("myCourses"));
  }
}
class ProgramComponent {
  constructor() {
    this.openMenus = {
      dashboard: true,
      sitePages: true,
      myCourses: true
    };
    this.courses = ['CSL577399', 'CSL577398', 'CSL577397', 'CSL577396', 'CSL577395', 'CSL577394', 'CSL577393'];
  }
  toggleMenu(menu) {
    this.openMenus[menu] = !this.openMenus[menu];
  }
  isOpen(menu) {
    return !!this.openMenus[menu];
  }
}
ProgramComponent.ɵfac = function ProgramComponent_Factory(t) {
  return new (t || ProgramComponent)();
};
ProgramComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ProgramComponent,
  selectors: [["app-program"]],
  decls: 37,
  vars: 3,
  consts: [[1, "container"], [1, "courses"], [1, "header"], [1, "article-search-container-form-control"], ["name", "search-article", "type", "text", "placeholder", "Cari Kursus", 1, "article-search-container-input"], ["src", "./assets/bank-victoria/svg/ic-search.svg", "alt", "Search Icon", 1, "ic-search"], [1, "select"], [1, "article-search-container-select"], ["value", "", "disabled", "", "selected", ""], ["value", "all"], ["value", "business"], ["value", "technology"], ["value", "design"], [1, "navigation"], [1, "sidebar"], [1, "sidebar-title"], [1, "sidebar-divider"], [1, "menu"], [1, "menu-item", 3, "click"], [1, "arrow"], ["src", "assets/bank-victoria/svg/sidebar/arrow-down.svg", 1, "arrow"], ["class", "submenu", 4, "ngIf"], [1, "submenu"], [1, "menu-item", "inner"], ["src", "assets/bank-victoria/svg/sidebar/home.svg", "width", "15px", 1, "arrow"], [1, "menu-item", "inner", 3, "click"], [1, "menu-item", "inner", "highlight", 3, "click"], [1, "menu-link"], ["src", "assets/bank-victoria/svg/sidebar/arrow-right.svg", 1, "arrow"], [4, "ngFor", "ngForOf"]],
  template: function ProgramComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 4)(5, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6)(7, "select", 7)(8, "option", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Filter Kategori");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Semua Kategori");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Business");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Technology");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Design");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "select", 7)(19, "option", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Urutkan");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Nama Kursus");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Peserta");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13)(26, "nav", 14)(27, "h3", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Navigation");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "hr", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ul", 17)(31, "li")(32, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProgramComponent_Template_button_click_32_listener() {
        return ctx.toggleMenu("dashboard");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Dashboard ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, ProgramComponent_ul_36_Template, 17, 6, "ul", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("open", ctx.isOpen("dashboard"));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isOpen("dashboard"));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
  styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 48px;\n}\n.container[_ngcontent-%COMP%]   .courses[_ngcontent-%COMP%] {\n  width: 70%;\n}\n.container[_ngcontent-%COMP%]   .courses[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border-radius: 10px;\n  border: 1px solid #E6E4E4;\n  padding: 18px 10px;\n  display: flex;\n  justify-content: space-between;\n}\n.container[_ngcontent-%COMP%]   .courses[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.container[_ngcontent-%COMP%]   .courses[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .article-search-container[_ngcontent-%COMP%] {\n  padding: 20px 25px;\n  background-color: white;\n  border: 1px solid #E6E4E4;\n  border-radius: 10px;\n}\n@media only screen and (max-width: 768px) {\n  .container[_ngcontent-%COMP%]   .courses[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .article-search-container[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n  }\n}\n.container[_ngcontent-%COMP%]   .courses[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .article-search-container-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 400;\n  margin-bottom: 1rem;\n}\n.container[_ngcontent-%COMP%]   .courses[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .article-search-container-form-control[_ngcontent-%COMP%] {\n  position: relative;\n  width: 40%;\n}\n.container[_ngcontent-%COMP%]   .courses[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .article-search-container-form-control[_ngcontent-%COMP%]   .ic-search[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 20px;\n  top: 10px;\n  width: 14px;\n}\n.container[_ngcontent-%COMP%]   .courses[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .article-search-container-input[_ngcontent-%COMP%] {\n  position: relative;\n  width: calc(100% - 70px);\n  background-color: #F5F7FB;\n  border: none;\n  border-radius: 10px;\n  padding: 10px 50px 10px 20px;\n}\n.container[_ngcontent-%COMP%]   .courses[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .article-search-container-input[_ngcontent-%COMP%]:focus-visible {\n  outline: none;\n}\n.container[_ngcontent-%COMP%]   .courses[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .article-search-container-select[_ngcontent-%COMP%] {\n  position: relative;\n  color: #949494;\n  background-color: #F5F7FB;\n  border: none;\n  border-radius: 10px;\n  padding: 10px 50px 10px 20px;\n  appearance: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg width='10' height='6' viewBox='0 0 10 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%23999' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: right 14px center;\n  background-size: 12px;\n  cursor: pointer;\n}\n.container[_ngcontent-%COMP%]   .courses[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .article-search-container-select[_ngcontent-%COMP%]:focus-visible {\n  outline: none;\n}\n.container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n.sidebar[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 16px;\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.05);\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #111;\n  margin-bottom: 6px;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-divider[_ngcontent-%COMP%] {\n  border: none;\n  border-top: 1px solid #ed1a21;\n  margin: 6px 0 10px;\n}\n.sidebar[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.sidebar[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #111;\n  font-size: 15px;\n  font-weight: 500;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 0;\n  width: 100%;\n  text-align: left;\n  transition: color 0.2s;\n}\n.sidebar[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]:hover {\n  color: #dc2626;\n}\n.sidebar[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .menu-item.inner[_ngcontent-%COMP%] {\n  font-size: 14px;\n  padding-left: 16px;\n  font-weight: 400;\n}\n.sidebar[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .menu-item.highlight[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.sidebar[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%] {\n  list-style: none;\n  padding-left: 22px;\n  margin: 4px 0;\n}\n.sidebar[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%]   .menu-link[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #111;\n  padding: 8px 0;\n  display: flex;\n  gap: 10px;\n  margin-left: 24px;\n  cursor: pointer;\n  transition: color 0.2s;\n}\n.sidebar[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%]   .menu-link[_ngcontent-%COMP%]:hover {\n  color: #dc2626;\n}\n.sidebar[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  display: inline-block;\n  transition: transform 0.25s ease;\n  font-size: 12px;\n  margin-right: 4px;\n}\n.sidebar[_ngcontent-%COMP%]   .arrow.open[_ngcontent-%COMP%] {\n  transform: rotate(0deg);\n}\n.sidebar[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9iYW5rLXZpY3RvcmlhL3Byb2dyYW0vcHJvZ3JhbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0FBQ0Y7QUFDRTtFQUNFLFVBQUE7QUFDSjtBQUNJO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUFDTjtBQUNNO0VBQ0UsYUFBQTtFQUNBLFNBQUE7QUFDUjtBQUVNO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFBUjtBQUVRO0VBTkY7SUFPSSxtQkFBQTtFQUNSO0FBQ0Y7QUFDUTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ1Y7QUFFUTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQUFWO0FBRVU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQUFaO0FBSVE7RUFDRSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtBQUZWO0FBSVU7RUFDRSxhQUFBO0FBRlo7QUFNUTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFFQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSwyUEFBQTtFQUNBLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFMVjtBQU9VO0VBQ0UsYUFBQTtBQUxaO0FBYUU7RUFDRSxVQUFBO0FBWEo7O0FBZUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVDQUFBO0FBWkY7QUFjRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQVpKO0FBZUU7RUFDRSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtBQWJKO0FBZ0JFO0VBQ0UsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQWRKO0FBZ0JJO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBZE47QUFnQk07RUFDRSxjQUFBO0FBZFI7QUFpQk07RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQWZSO0FBa0JNO0VBQ0UsY0FBQTtBQWhCUjtBQW9CSTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBbEJOO0FBb0JNO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQWxCUjtBQW9CUTtFQUNFLGNBQUE7QUFsQlY7QUF3QkU7RUFDRSxxQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBdEJKO0FBd0JJO0VBQ0UsdUJBQUE7QUF0Qk47QUEwQkU7RUFDRSxlQUFBO0FBeEJKIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogNDhweDtcblxuICAuY291cnNlcyB7XG4gICAgd2lkdGg6IDcwJTtcblxuICAgIC5oZWFkZXIge1xuICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjRTZFNEU0O1xuICAgICAgcGFkZGluZzogMThweCAxMHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgICAgLnNlbGVjdCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGdhcDogMTBweDtcbiAgICAgIH1cblxuICAgICAgLmFydGljbGUtc2VhcmNoLWNvbnRhaW5lciB7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMjVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNFNkU0RTQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgIH1cblxuICAgICAgICAmLXRpdGxlIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1mb3JtLWNvbnRyb2wge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB3aWR0aDogNDAlO1xuXG4gICAgICAgICAgLmljLXNlYXJjaCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICByaWdodDogMjBweDtcbiAgICAgICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxNHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYtaW5wdXQge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNzBweCk7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjdGQjtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDUwcHggMTBweCAyMHB4O1xuXG4gICAgICAgICAgJjpmb2N1cy12aXNpYmxlIHtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi1zZWxlY3Qge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBjb2xvcjogIzk0OTQ5NDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGN0ZCO1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHggNTBweCAxMHB4IDIwcHg7XG5cbiAgICAgICAgICBhcHBlYXJhbmNlOiBub25lOyAvLyBoaWxhbmdrYW4gcGFuYWggYmF3YWFuIGJyb3dzZXJcbiAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PVVURi04LCUzQ3N2ZyB3aWR0aD0nMTAnIGhlaWdodD0nNicgdmlld0JveD0nMCAwIDEwIDYnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGQ9J00xIDFsNCA0IDQtNCcgc3Ryb2tlPSclMjM5OTknIHN0cm9rZS13aWR0aD0nMS41JyBmaWxsPSdub25lJyBzdHJva2UtbGluZWNhcD0ncm91bmQnLyUzRSUzQy9zdmclM0VcIik7XG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCAxNHB4IGNlbnRlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEycHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICAgJjpmb2N1cy12aXNpYmxlIHtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubmF2aWdhdGlvbiB7XG4gICAgd2lkdGg6IDMwJTtcbiAgfVxufVxuXG4uc2lkZWJhciB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJveC1zaGFkb3c6IDAgMCA0cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcblxuICAuc2lkZWJhci10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICMxMTE7XG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICB9XG5cbiAgLnNpZGViYXItZGl2aWRlciB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWQxYTIxO1xuICAgIG1hcmdpbjogNnB4IDAgMTBweDtcbiAgfVxuXG4gIC5tZW51IHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuXG4gICAgLm1lbnUtaXRlbSB7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgY29sb3I6ICMxMTE7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDZweDtcbiAgICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnM7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogI2RjMjYyNjtcbiAgICAgIH1cblxuICAgICAgJi5pbm5lciB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgfVxuXG4gICAgICAmLmhpZ2hsaWdodCB7XG4gICAgICAgIGNvbG9yOiAjZGMyNjI2O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5zdWJtZW51IHtcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDIycHg7XG4gICAgICBtYXJnaW46IDRweCAwO1xuXG4gICAgICAubWVudS1saW5rIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogIzExMTtcbiAgICAgICAgcGFkZGluZzogOHB4IDA7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGdhcDogMTBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI0cHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycztcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogI2RjMjYyNjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5hcnJvdyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cyBlYXNlO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcblxuICAgICYub3BlbiB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gIH1cblxuICAuaWNvbiB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 1899:
/*!*******************************************************************************!*\
  !*** ./src/app/components/pages/bank-victoria/schedule/schedule.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScheduleComponent: () => (/* binding */ ScheduleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class ScheduleComponent {}
ScheduleComponent.ɵfac = function ScheduleComponent_Factory(t) {
  return new (t || ScheduleComponent)();
};
ScheduleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ScheduleComponent,
  selectors: [["app-schedule"]],
  decls: 2,
  vars: 0,
  template: function ScheduleComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Jadwal Pelatihan coming soon!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_components_pages_bank-victoria_bank-victoria_module_ts.js.map