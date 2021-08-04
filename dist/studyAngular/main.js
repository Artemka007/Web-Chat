(self["webpackChunkstudy_angular"] = self["webpackChunkstudy_angular"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 1157:
/*!**************************************************!*\
  !*** ./src/app/all-chats/all-chats.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllChatsComponent": () => (/* binding */ AllChatsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/chat.service */ 9014);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ 3071);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);






function AllChatsComponent_li_8_ng_container_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const u_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](u_r3.first_name + " " + u_r3.last_name);
} }
function AllChatsComponent_li_8_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AllChatsComponent_li_8_ng_container_3_div_1_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const u_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.user && u_r3.id !== ctx_r2.user.id);
} }
const _c0 = function (a0) { return { id: a0 }; };
function AllChatsComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AllChatsComponent_li_8_ng_container_3_Template, 2, 1, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "/chat")("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c0, c_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", c_r1.users);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](c_r1.chat_messages[c_r1.chat_messages.length - 1] && c_r1.chat_messages[c_r1.chat_messages.length - 1].body);
} }
class AllChatsComponent {
    constructor(_chatService, _userService) {
        this._chatService = _chatService;
        this._userService = _userService;
        this.user = null;
        this.chats = [];
    }
    ngOnInit() {
        this._chatService.getAllChats().subscribe(data => {
            this.chats = data.chats;
        });
        this._userService.getAuthUser().subscribe(data => {
            this.user = data.user;
        });
    }
}
AllChatsComponent.ɵfac = function AllChatsComponent_Factory(t) { return new (t || AllChatsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_chat_service__WEBPACK_IMPORTED_MODULE_0__.ChatService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService)); };
AllChatsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AllChatsComponent, selectors: [["app-all-chats"]], decls: 9, vars: 5, consts: [[1, "container", "all_chats"], [1, "container", "row", "all_chats__search_form"], [1, "container", "row", "all_chats__search_form__container"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24"], ["d", "M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"], [1, "form__item", 2, "width", "100%", 3, "placeholder"], ["aria-label", "All chats container", 1, "container", "all_chats__list"], ["style", "width: 100%", 4, "ngFor", "ngForOf"], [2, "width", "100%"], ["aria-label", "All chats container item", 1, "container", "row", "all_chats__list__item", 3, "routerLink", "queryParams"], [1, "container", "all_chats__item__info"], [4, "ngFor", "ngForOf"], [1, "container", "all_chats__item__last_message"], ["class", "container all_chats__item__user_info", 4, "ngIf"], [1, "container", "all_chats__item__user_info"]], template: function AllChatsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, AllChatsComponent_li_8_Template, 6, 6, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("width", 31)("height", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("fill", "#525252");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("placeholder", "\u041F\u043E\u0438\u0441\u043A...");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.chats);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf], styles: [".all_chats[_ngcontent-%COMP%] {\r\n  width: 1000px;\r\n  height: 100%;\r\n  background: #FFFFFF;\r\n  border-radius: 10px;\r\n  box-shadow: rgba(0,0,0,.25) 0 4px 8px 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.all_chats__search_form[_ngcontent-%COMP%] {\r\n  border-radius: 10px;\r\n}\r\n\r\n.all_chats__search_form__container[_ngcontent-%COMP%] {\r\n  border-radius: 5px;\r\n  box-shadow: rgba(0,0,0,0.25) 0 4px 4px 0;\r\n  padding: 10px;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.all_chats__search_form__container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  border-radius: 5px 0 0 5px;\r\n}\r\n\r\n.all_chats__search_form__container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  border-radius: 0 5px 5px 0;\r\n  margin: 0;\r\n  border: none;\r\n}\r\n\r\n.all_chats__list[_ngcontent-%COMP%] {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.all_chats__list__item[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  text-decoration: none;\r\n  padding: 10px;\r\n  border-bottom: rgba(0,0,0,0.25) solid 1px;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.all_chats__list__item[_ngcontent-%COMP%]:hover {\r\n  background-color: rgba(0,0,0,.025);\r\n}\r\n\r\n.all_chats__item__user_info[_ngcontent-%COMP%] {\r\n  color: #000;\r\n  font-size: 20px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.all_chats__item__last_message[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  color: #000;\r\n  font-size: 15px;\r\n}\r\n\r\n.all_chats__item__info[_ngcontent-%COMP%] {\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsbC1jaGF0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHVDQUF1QztFQUN2QyxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsd0NBQXdDO0VBQ3hDLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsU0FBUztFQUNULFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IseUNBQXlDO0VBQ3pDLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0FBQ0EiLCJmaWxlIjoiYWxsLWNoYXRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxsX2NoYXRzIHtcclxuICB3aWR0aDogMTAwMHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogcmdiYSgwLDAsMCwuMjUpIDAgNHB4IDhweCAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5hbGxfY2hhdHNfX3NlYXJjaF9mb3JtIHtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uYWxsX2NoYXRzX19zZWFyY2hfZm9ybV9fY29udGFpbmVyIHtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm94LXNoYWRvdzogcmdiYSgwLDAsMCwwLjI1KSAwIDRweCA0cHggMDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5hbGxfY2hhdHNfX3NlYXJjaF9mb3JtX19jb250YWluZXIgc3BhbiB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4IDAgMCA1cHg7XHJcbn1cclxuXHJcbi5hbGxfY2hhdHNfX3NlYXJjaF9mb3JtX19jb250YWluZXIgaW5wdXQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgNXB4IDVweCAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5hbGxfY2hhdHNfX2xpc3Qge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmFsbF9jaGF0c19fbGlzdF9faXRlbSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogcmdiYSgwLDAsMCwwLjI1KSBzb2xpZCAxcHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmFsbF9jaGF0c19fbGlzdF9faXRlbTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuMDI1KTtcclxufVxyXG5cclxuLmFsbF9jaGF0c19faXRlbV9fdXNlcl9pbmZvIHtcclxuICBjb2xvcjogIzAwMDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4uYWxsX2NoYXRzX19pdGVtX19sYXN0X21lc3NhZ2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG4uYWxsX2NoYXRzX19pdGVtX19pbmZvIHtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./posts/posts.component */ 495);
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ 439);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ 8458);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ 9087);
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chat/chat.component */ 2226);
/* harmony import */ var _all_chats_all_chats_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./all-chats/all-chats.component */ 1157);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);









const routes = [
    { path: 'posts', component: _posts_posts_component__WEBPACK_IMPORTED_MODULE_0__.PostsComponent },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__.RegisterComponent },
    { path: 'all_chats', component: _all_chats_all_chats_component__WEBPACK_IMPORTED_MODULE_5__.AllChatsComponent },
    { path: 'chat', component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_4__.ChatComponent },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_1__.PageNotFoundComponent },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forRoot(routes, { enableTracing: true }),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ 7238);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/user.service */ 3071);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);





function AppComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function AppComponent_div_8_Template_a_mouseenter_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1.openOrClose(true); })("mouseleave", function AppComponent_div_8_Template_a_mouseleave_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.openOrClose(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "aside", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function AppComponent_div_8_Template_aside_mouseenter_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.openOrClose(true); })("mouseleave", function AppComponent_div_8_Template_aside_mouseleave_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.openOrClose(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_div_8_Template_button_click_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.logout($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.user.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@openClose", ctx_r0.isOpen ? "open" : "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]("\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]("\u0412\u044B\u0439\u0442\u0438");
} }
class AppComponent {
    constructor(userService, router, r) {
        this.userService = userService;
        this.router = router;
        this.r = r;
        this.user = null;
        this.isOpen = false;
        this.r.queryParams.subscribe(params => {
            let username = params['user'];
            if (username) {
                this.userService.getAuthUser().subscribe(data => {
                    this.user = data.user;
                });
            }
        });
    }
    ngOnInit() {
        this.userService.getAuthUser().subscribe(data => {
            this.user = data.user;
            if (!data.user)
                this.router.navigateByUrl('/login');
            // else this.router.navigateByUrl('/posts')
        });
    }
    ngAfterViewInit() {
    }
    ngAfterViewChecked() {
    }
    ngAfterContentInit() {
    }
    ngAfterContentChecked() {
    }
    openOrClose(isOpen) {
        this.isOpen = isOpen;
    }
    logout(ev) {
        this.userService.logoutUser().subscribe(data => {
            console.log(data.result);
        });
        this.userService.getAuthUser().subscribe(data => {
            this.user = data.user;
        });
        this.router.navigateByUrl('login');
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 10, vars: 1, consts: [[1, "main"], [1, "navbar"], [1, "navbar__item_container"], ["routerLink", "/posts", 1, "navbar__item"], ["routerLink", "/all_chats", 1, "navbar__item"], ["class", "navbar__submenu", 4, "ngIf"], [1, "navbar__submenu"], ["routerLink", "/posts", 1, "navbar__item", 3, "mouseenter", "mouseleave"], [1, "submenu", 3, "mouseenter", "mouseleave"], ["routerLink", "/posts", 1, "submenu__item"], [1, "submenu__item", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Chats");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AppComponent_div_8_Template, 8, 4, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.main[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100%;\r\n  align-items: center;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n  width: 100%;\r\n  box-sizing: border-box;\r\n  background: linear-gradient(to bottom, #0077D7, #036abd);\r\n}\r\n\r\n.navbar__item_container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  width: auto;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n}\r\n\r\n.navbar__submenu[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.navbar__item[_ngcontent-%COMP%] {\r\n  color: #FFFFFF;\r\n  font-size: 20px;\r\n  text-decoration: none;\r\n  padding: 18px 8px;\r\n  box-sizing: border-box;\r\n  border-top: rgba(0, 0, 0, 0) solid 2px;\r\n  border-bottom: rgba(0, 0, 0, 0) solid 2px;\r\n  transition: color .1s;\r\n  margin: 0 10px;\r\n}\r\n\r\n.navbar__item[_ngcontent-%COMP%]:hover {\r\n  color: #d7d4ff;\r\n}\r\n\r\n.submenu[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 10px;\r\n  background-color: #FFFFFF;\r\n  border-radius: 10px;\r\n  box-shadow: rgba(0, 0, 0, 0.25) 0 4px 8px 0;\r\n  top: 63px;\r\n  transform-origin: top;\r\n  transform: scaleY(0);\r\n  z-index: 1000;\r\n}\r\n\r\n.submenu__item[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  outline: none;\r\n  background-color: #FFFFFF;\r\n  width: 200px;\r\n  padding: 10px 0;\r\n  box-sizing: border-box;\r\n  border: none;\r\n  border-bottom: rgba(0, 0, 0, 0.25) solid 1px;\r\n  text-decoration: none;\r\n  font-size: 20px;\r\n  cursor: pointer;\r\n  color: #000;\r\n}\r\n\r\n.submenu__item[_ngcontent-%COMP%]:hover {\r\n  color: rgba(0, 0, 0, 0.6);\r\n  background-color: rgba(129, 151, 255, 0.1);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLFdBQVc7RUFDWCxzQkFBc0I7RUFJdEIsd0RBQXdEO0FBQzFEOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixzQ0FBc0M7RUFDdEMseUNBQXlDO0VBQ3pDLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLDJDQUEyQztFQUMzQyxTQUFTO0VBQ1QscUJBQXFCO0VBQ3JCLG9CQUFvQjtFQUNwQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWiw0Q0FBNEM7RUFDNUMscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDBDQUEwQztBQUM1QyIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsIGJvZHkge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4ubWFpbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubmF2YmFyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMwMDc3RDcsICMwMzZhYmQpO1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzAwNzdENywgIzAzNmFiZCk7XHJcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzAwNzdENywgIzAzNmFiZCk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzAwNzdENywgIzAzNmFiZCk7XHJcbn1cclxuXHJcbi5uYXZiYXJfX2l0ZW1fY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG59XHJcblxyXG4ubmF2YmFyX19zdWJtZW51IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5uYXZiYXJfX2l0ZW0ge1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgcGFkZGluZzogMThweCA4cHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXItdG9wOiByZ2JhKDAsIDAsIDAsIDApIHNvbGlkIDJweDtcclxuICBib3JkZXItYm90dG9tOiByZ2JhKDAsIDAsIDAsIDApIHNvbGlkIDJweDtcclxuICB0cmFuc2l0aW9uOiBjb2xvciAuMXM7XHJcbiAgbWFyZ2luOiAwIDEwcHg7XHJcbn1cclxuXHJcbi5uYXZiYXJfX2l0ZW06aG92ZXIge1xyXG4gIGNvbG9yOiAjZDdkNGZmO1xyXG59XHJcblxyXG4uc3VibWVudSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDAgNHB4IDhweCAwO1xyXG4gIHRvcDogNjNweDtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XHJcbiAgei1pbmRleDogMTAwMDtcclxufVxyXG5cclxuLnN1Ym1lbnVfX2l0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItYm90dG9tOiByZ2JhKDAsIDAsIDAsIDAuMjUpIHNvbGlkIDFweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuLnN1Ym1lbnVfX2l0ZW06aG92ZXIge1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjksIDE1MSwgMjU1LCAwLjEpO1xyXG59XHJcbiJdfQ== */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('openClose', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('open', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({ transform: 'none' })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('close', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({ transform: 'scaleY(0)' })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('close <=> open', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)(100))
            ])
        ] } });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./posts/posts.component */ 495);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ 439);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ 8458);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser/animations */ 5835);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loader/loader.component */ 8263);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ 9087);
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chat/chat.component */ 2226);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var _modal_window_modal_window_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modal-window/modal-window.component */ 5291);
/* harmony import */ var _delete_message_content_delete_message_content_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./delete-message-content/delete-message-content.component */ 5181);
/* harmony import */ var _all_chats_all_chats_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./all-chats/all-chats.component */ 1157);
/* harmony import */ var ng_audio_recorder__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-audio-recorder */ 1289);
/* harmony import */ var _audio_message_audio_message_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./audio-message/audio-message.component */ 5894);
/* harmony import */ var _upload_files_upload_files_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./upload-files/upload-files.component */ 1079);
/* harmony import */ var _call_call_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./call/call.component */ 3884);
/* harmony import */ var _take_call_take_call_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./take-call/take-call.component */ 8290);
/* harmony import */ var _change_call_volume_change_call_volume_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./change-call-volume/change-call-volume.component */ 273);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 8583);

























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ providers: [
        rxjs__WEBPACK_IMPORTED_MODULE_17__.Subject
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__.BrowserModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__.BrowserAnimationsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormsModule,
            ng_audio_recorder__WEBPACK_IMPORTED_MODULE_22__.NgAudioRecorderModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _posts_posts_component__WEBPACK_IMPORTED_MODULE_1__.PostsComponent,
        _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__.PageNotFoundComponent,
        _login_login_component__WEBPACK_IMPORTED_MODULE_4__.LoginComponent,
        _loader_loader_component__WEBPACK_IMPORTED_MODULE_5__.LoaderComponent,
        _register_register_component__WEBPACK_IMPORTED_MODULE_6__.RegisterComponent,
        _chat_chat_component__WEBPACK_IMPORTED_MODULE_7__.ChatComponent,
        _modal_window_modal_window_component__WEBPACK_IMPORTED_MODULE_8__.ModalWindowComponent,
        _delete_message_content_delete_message_content_component__WEBPACK_IMPORTED_MODULE_9__.DeleteMessageContentComponent,
        _all_chats_all_chats_component__WEBPACK_IMPORTED_MODULE_10__.AllChatsComponent,
        _audio_message_audio_message_component__WEBPACK_IMPORTED_MODULE_11__.AudioMessageComponent,
        _upload_files_upload_files_component__WEBPACK_IMPORTED_MODULE_12__.UploadFilesComponent,
        _call_call_component__WEBPACK_IMPORTED_MODULE_13__.CallComponent,
        _take_call_take_call_component__WEBPACK_IMPORTED_MODULE_14__.TakeCallComponent,
        _change_call_volume_change_call_volume_component__WEBPACK_IMPORTED_MODULE_15__.ChangeCallVolumeComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__.BrowserModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__.BrowserAnimationsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormsModule,
        ng_audio_recorder__WEBPACK_IMPORTED_MODULE_22__.NgAudioRecorderModule] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetComponentScope"](_chat_chat_component__WEBPACK_IMPORTED_MODULE_7__.ChatComponent, [_angular_common__WEBPACK_IMPORTED_MODULE_23__.NgIf, _modal_window_modal_window_component__WEBPACK_IMPORTED_MODULE_8__.ModalWindowComponent,
    _call_call_component__WEBPACK_IMPORTED_MODULE_13__.CallComponent, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgClass, _audio_message_audio_message_component__WEBPACK_IMPORTED_MODULE_11__.AudioMessageComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgModel], [_angular_common__WEBPACK_IMPORTED_MODULE_23__.DatePipe]);


/***/ }),

/***/ 5894:
/*!**********************************************************!*\
  !*** ./src/app/audio-message/audio-message.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AudioMessageComponent": () => (/* binding */ AudioMessageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8583);


const _c0 = ["KjlKdD"];
function AudioMessageComponent_div_2__svg_svg_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudioMessageComponent_div_2__svg_svg_1_Template__svg_svg_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.playAudio($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("color", "#221fe5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("fill", "#221fe5");
} }
function AudioMessageComponent_div_2__svg_svg_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudioMessageComponent_div_2__svg_svg_2_Template__svg_svg_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.pauseAudio($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("color", "#221fe5");
} }
function AudioMessageComponent_div_2__svg_svg_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "line", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "line", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("stroke", "#909090");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x2", ctx_r4.currentTime / ctx_r4.duration * 250)("stroke", "#b5ff7a");
} }
function AudioMessageComponent_div_2_small_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.currentTime + " / " + ctx_r5.duration);
} }
function AudioMessageComponent_div_2_small_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.duration);
} }
function AudioMessageComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AudioMessageComponent_div_2__svg_svg_1_Template, 2, 2, "svg", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AudioMessageComponent_div_2__svg_svg_2_Template, 2, 1, "svg", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AudioMessageComponent_div_2__svg_svg_3_Template, 3, 3, "svg", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AudioMessageComponent_div_2_small_4_Template, 2, 1, "small", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AudioMessageComponent_div_2_small_5_Template, 2, 1, "small", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.play);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.play);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.play);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.play);
} }
class AudioMessageComponent {
    constructor() {
        this.play = false;
        this.loading = true;
        this.currentTime = 0;
        this.duration = 1;
    }
    ngOnInit() {
        if (this.audio) {
            this.audio.nativeElement.ondurationchange = () => {
                this.duration = this.audio.nativeElement.duration;
                console.log(this.duration);
            };
            this.audio.nativeElement.onloadedmetadata = (e) => {
                this.duration = this.audio.nativeElement.duration;
                console.log(this.duration);
                this.loading = false;
            };
            this.audio.nativeElement.onended = (e) => {
                this.play = false;
                if (this.audio)
                    this.audio.nativeElement.currentTime = 0;
            };
        }
    }
    playAudio(ev) {
        ev.stopPropagation();
        if (this.audio) {
            console.log('playing...');
            this.audio.nativeElement.ontimeupdate = (e) => {
                var _a;
                this.currentTime = ((_a = this.audio) === null || _a === void 0 ? void 0 : _a.nativeElement.currentTime) || 0;
            };
            this.play = true;
            this.audio && this.audio.nativeElement.play();
        }
    }
    pauseAudio(ev) {
        ev.stopPropagation();
        if (this.audio) {
            this.audio.nativeElement.pause();
            this.play = false;
        }
    }
}
AudioMessageComponent.ɵfac = function AudioMessageComponent_Factory(t) { return new (t || AudioMessageComponent)(); };
AudioMessageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AudioMessageComponent, selectors: [["app-audio-message"]], viewQuery: function AudioMessageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.audio = _t.first);
    } }, inputs: { src: "src" }, decls: 3, vars: 3, consts: [[2, "display", "none", 3, "src", "controls"], ["KjlKdD", ""], ["class", "container row", "style", "height: 30px;align-items: center", 4, "ngIf"], [1, "container", "row", 2, "height", "30px", "align-items", "center"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "currentColor", "style", "background: #FFF; width: 30px;border-radius: 50%;padding-left: 2px", 3, "click", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "currentColor", "style", "background: #FFF; width: 30px;border-radius: 50%;padding-left: 2px", "viewBox", "0 0 16 16", 3, "click", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "class", "audio_progress", "style", "height: 6px; width: 250px; margin-left: 10px", 4, "ngIf"], [4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "currentColor", 2, "background", "#FFF", "width", "30px", "border-radius", "50%", "padding-left", "2px", 3, "click"], ["d", "M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "currentColor", "viewBox", "0 0 16 16", 2, "background", "#FFF", "width", "30px", "border-radius", "50%", "padding-left", "2px", 3, "click"], ["d", "M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"], ["xmlns", "http://www.w3.org/2000/svg", 1, "audio_progress", 2, "height", "6px", "width", "250px", "margin-left", "10px"], ["y1", "3", "y2", "3", "x1", "0", "x2", "250", 1, "audio_progress__line", 2, "z-index", "10"], ["y1", "3", "y2", "3", "x1", "0", 1, "audio_progress__line", 2, "z-index", "20"]], template: function AudioMessageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "audio", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AudioMessageComponent_div_2_Template, 6, 5, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("controls", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.audio);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: [".audio_progress__line[_ngcontent-%COMP%] {\r\n  stroke-width: 3px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1ZGlvLW1lc3NhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJhdWRpby1tZXNzYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXVkaW9fcHJvZ3Jlc3NfX2xpbmUge1xyXG4gIHN0cm9rZS13aWR0aDogM3B4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 3884:
/*!****************************************!*\
  !*** ./src/app/call/call.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CallComponent": () => (/* binding */ CallComponent)
/* harmony export */ });
/* harmony import */ var D_IBLS_projects_djangoGRPCPostServer_front_studyAngular_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 6304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/chat.service */ 9014);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);





const _c0 = ["localVideo"];

function CallComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "video", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const r_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](r_r6.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("srcObject", r_r6.stream)("autoplay", true);
  }
}

function CallComponent__svg_svg_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "svg", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "path", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("fill", "#fff");
  }
}

function CallComponent__svg_svg_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "svg", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "path", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("fill", "#fff");
  }
}

function CallComponent__svg_svg_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "svg", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "path", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("fill", "#fff");
  }
}

function CallComponent__svg_svg_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "svg", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "path", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("fill", "#fff");
  }
}

class CallComponent {
  constructor(_chatService) {
    this._chatService = _chatService;
    this.remotePeers = {};
    this.sid = -1;
    this.isOpen = false;
    this.meetingName = "";
    this.user = null;
    this.onexit = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter(); // current other id of peer connection

    this.otherSid = -1; // other ids of peer connections

    this.otherSids = [];
    this.videoEnabled = false;
    this.audioEnabled = false;
    this.remoteStreams = [];
    this.lastStreamId = '';
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this._chatService.connectToCalls();

    this.callHandle();

    this._chatService.calls.next({
      event: "call-connect",
      sid: this.sid,
      data: {}
    });
  }

  callHandle() {
    var _this = this;

    if (this.localVideo) {
      this.getUserMediaStream({
        audio: !this.audioEnabled,
        video: !this.videoEnabled
      }).then(() => {
        this.localVideo.nativeElement.play().catch(e => {
          console.log(e.message);
        });
      }).catch(e => {
        console.log(e.message);
      });
    }

    this.call().then(() => {
      this._chatService.calls.subscribe( /*#__PURE__*/function () {
        var _ref = (0,D_IBLS_projects_djangoGRPCPostServer_front_studyAngular_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (data) {
          yield _this.subscribeToWSConnection(data);
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    });
  }

  stopCall(sid) {
    var _a;

    if (!sid) {
      this._chatService.calls.next({
        event: "call-disconnect",
        sid: this.sid,
        data: {}
      });
    }

    this.remotePeers[sid || this.sid].close();

    if (!sid) {
      (_a = this.localStream) === null || _a === void 0 ? void 0 : _a.getTracks().forEach(t => {
        t.stop();
      });
      this.onexit.emit();
      if (this.localVideo) this.localVideo.nativeElement.srcObject = null;
    } else {
      let r = this.remoteStreams;
      const el = r.find(i => i.id === sid);

      if (el) {
        const id = r.indexOf(el);
        r.splice(id, 1);
        this.remoteStreams = r;
      }
    }
  }

  setEnabled(stream, enabled) {
    this.enable(stream, enabled);
  }

  enable(stream, enabled) {
    const isAllEnabled = stream === "audio" && this.videoEnabled && enabled || stream === "video" && this.audioEnabled && enabled;

    if (this.localStream) {
      if (!isAllEnabled) {
        if (stream === "audio") this.audioEnabled = enabled;else if (stream === "video") this.videoEnabled = enabled;
      } else {
        this.audioEnabled = true;
        this.videoEnabled = true;
      }

      this.getUserMediaStream({
        video: !this.videoEnabled,
        audio: isAllEnabled ? true : !this.audioEnabled
      }).then(s => {
        if (isAllEnabled) {
          this.localStream.getTracks().forEach(t => {
            t.stop();
          });
        }

        this.localVideo.nativeElement.srcObject = this.localStream;
        this.call().catch(e => {
          console.log(e.name + '\n' + e.message);
        });
      }).catch(e => {
        console.log(e.name + '\n' + e.message);
      });
    }
  }

  getUserMediaStream(mediaConstrains) {
    var _this2 = this;

    return (0,D_IBLS_projects_djangoGRPCPostServer_front_studyAngular_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const isStart = !!_this2.localStream;
      const stream = yield navigator.mediaDevices.getUserMedia(mediaConstrains);
      let audioContext = new AudioContext();
      _this2.gainNode = audioContext.createGain();
      let audioSource = audioContext.createMediaStreamSource(stream);
      let audioDestination = audioContext.createMediaStreamDestination();
      audioSource.connect(_this2.gainNode);

      _this2.gainNode.connect(audioDestination);

      stream.removeTrack(stream.getAudioTracks()[0]);
      stream.addTrack(audioDestination.stream.getAudioTracks()[0]);
      console.log(stream.getAudioTracks());
      _this2.gainNode.gain.value = 0;
      _this2.localStream = stream;
      _this2.localVideo.nativeElement.srcObject = _this2.localStream;
      isStart && _this2.localVideo.nativeElement.play();
      return stream;
    })();
  }

  call() {
    var _this3 = this;

    return (0,D_IBLS_projects_djangoGRPCPostServer_front_studyAngular_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      !_this3.remotePeers[_this3.sid] && _this3.createPeerConnection();

      if (_this3.localStream && _this3.remotePeers[_this3.sid]) {
        _this3.localStream.getTracks().length > 0 && _this3.localStream.getTracks().forEach(track => {
          var _a;

          (_a = _this3.remotePeers[_this3.sid]) === null || _a === void 0 ? void 0 : _a.addTrack(track, _this3.localStream);
          console.log({
            track
          });
        });

        try {
          const offer = yield _this3.remotePeers[_this3.sid].createOffer({
            offerToReceiveAudio: true,
            offerToReceiveVideo: true
          });
          yield _this3.remotePeers[_this3.sid].setLocalDescription(offer);

          _this3._chatService.calls.next({
            event: "offer",
            data: offer,
            sid: _this3.sid
          });
        } catch (e) {
          console.error(e);
        }
      }
    })();
  }

  createPeerConnection() {
    let peerConnection = new RTCPeerConnection();
    this.remotePeers[this.sid] = this.setPeerCallbacks(peerConnection, this.sid);
  }

  setPeerCallbacks(peer, sid) {
    peer.onicecandidate = e => {
      if (e.candidate) {
        this._chatService.calls.next({
          event: 'ice-candidate',
          data: e.candidate,
          sid: sid
        });
      }
    };

    peer.ontrack = e => {
      var _a;

      const mediaStream = e.streams[0];

      if (e.streams[0].id === this.lastStreamId) {
        let s = this.remoteStreams.find(i => i.stream.id === this.lastStreamId);
        s && this.remoteStreams.splice(this.remoteStreams.indexOf(s), 1);
      } else {
        this.lastStreamId = e.streams[0].id;
      }

      this.otherSids.forEach(id => {
        const s = this.remoteStreams.find(i => i.id === id);
        s && this.remoteStreams.splice(this.remoteStreams.indexOf(s), 1);
      });
      this.remoteStreams.push({
        id: this.otherSid,
        username: ((_a = this.user) === null || _a === void 0 ? void 0 : _a.username) || "",
        stream: mediaStream
      });
    };

    peer.onconnectionstatechange = e => {};

    return peer;
  }

  offerHandle(data) {
    var _this4 = this;

    return (0,D_IBLS_projects_djangoGRPCPostServer_front_studyAngular_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (data.sid !== _this4.sid) {
        _this4.otherSid = data.sid;
        if (!_this4.remotePeers[data.sid]) _this4.remotePeers[data.sid] = _this4.setPeerCallbacks(new RTCPeerConnection({
          'iceServers': [{
            'urls': 'stun:stun.l.google.com:19302'
          }]
        }), data.sid);

        _this4.remotePeers[data.sid].setRemoteDescription(new RTCSessionDescription(data.data)).then( /*#__PURE__*/(0,D_IBLS_projects_djangoGRPCPostServer_front_studyAngular_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
          const answer = yield _this4.remotePeers[data.sid].createAnswer();
          yield _this4.remotePeers[data.sid].setLocalDescription(answer);

          _this4._chatService.calls.next({
            event: 'answer',
            sid: data.sid,
            data: answer
          });
        }));
      }

      _this4.otherSids.push(data.sid);
    })();
  }

  subscribeToWSConnection(data) {
    var _this5 = this;

    return (0,D_IBLS_projects_djangoGRPCPostServer_front_studyAngular_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var _a;

      switch (data.event) {
        case "call-connect":
          {
            _this5.call();

            break;
          }

        case "call-disconnect":
          {
            _this5.stopCall(data.sid);

            break;
          }

        case "offer":
          {
            yield _this5.offerHandle(data);
            break;
          }

        case 'ice-candidate':
          {
            // add ICE candidate to added peer conection
            yield (_a = _this5.remotePeers[data.sid]) === null || _a === void 0 ? void 0 : _a.addIceCandidate(new RTCIceCandidate(data.data)).catch(e => {
              console.log(e.name + '\n' + e.message);
            });
            break;
          }

        case 'answer':
          {
            if (data.sid === _this5.sid && _this5.remotePeers[data.sid]) {
              // create new peer connection
              let sd = new RTCSessionDescription(data.data); // add this in remote peers connections

              yield _this5.remotePeers[data.sid].setRemoteDescription(sd);
            }

            break;
          }

        default:
          console.log("ERROR! Unresolved event");
      }
    })();
  }

}

CallComponent.ɵfac = function CallComponent_Factory(t) {
  return new (t || CallComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_chat_service__WEBPACK_IMPORTED_MODULE_1__.ChatService));
};

CallComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: CallComponent,
  selectors: [["app-call"]],
  viewQuery: function CallComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.localVideo = _t.first);
    }
  },
  inputs: {
    sid: "sid",
    isOpen: "isOpen",
    meetingName: "meetingName",
    user: "user"
  },
  outputs: {
    onexit: "onexit"
  },
  decls: 21,
  vars: 9,
  consts: [[1, "container", "call_container"], [1, "call_container__header"], [1, "call__container__header__title"], [1, "call__container__header__users_count"], [3, "autoplay"], ["localVideo", ""], [1, "container", "remote_videos_container"], ["class", "container row", 4, "ngFor", "ngForOf"], [1, "container", "row", "call_container__manage_panel"], [1, "container", "call_container__manage_panel__container"], [1, "call_container__button", "call_container__button__ok", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", 4, "ngIf"], [1, "call_container__button", "call_container__button__err", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24"], ["d", "M4,12a1,1,0,0,0,1,1h7.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-4-4a1,1,0,1,0-1.42,1.42L12.59,11H5A1,1,0,0,0,4,12ZM17,2H7A3,3,0,0,0,4,5V8A1,1,0,0,0,6,8V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V16a1,1,0,0,0-2,0v3a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V5A3,3,0,0,0,17,2Z"], [1, "container", "row"], [2, "color", "#FFF", "position", "absolute", "bottom", "5px", "font-size", "13px"], [3, "srcObject", "autoplay"], ["d", "M10.5,3.73a2,2,0,0,1,2.95-.14A2,2,0,0,1,14,5V8.41a1,1,0,0,0,2,0V5A4,4,0,0,0,9,2.47,1,1,0,1,0,10.5,3.73Zm8.22,9.54.2,0a1,1,0,0,0,1-.81A7.91,7.91,0,0,0,20,11a1,1,0,0,0-2,0,5.54,5.54,0,0,1-.11,1.1A1,1,0,0,0,18.72,13.27Zm3,6.06-18-18a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L8,8.48V11a4,4,0,0,0,6,3.46l1.46,1.46A6,6,0,0,1,6,11a1,1,0,0,0-2,0,8,8,0,0,0,7,7.93V21H9a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2H13V18.93a7.87,7.87,0,0,0,3.85-1.59l3.4,3.4a1,1,0,0,0,1.42-1.41ZM12,13a2,2,0,0,1-2-2v-.52l2.45,2.46A1.74,1.74,0,0,1,12,13Z"], ["xmlns", "http://www.w3.org/2000/svg", "d", "M12,15a4,4,0,0,0,4-4V5A4,4,0,0,0,8,5v6A4,4,0,0,0,12,15ZM10,5a2,2,0,0,1,4,0v6a2,2,0,0,1-4,0Zm10,6a1,1,0,0,0-2,0A6,6,0,0,1,6,11a1,1,0,0,0-2,0,8,8,0,0,0,7,7.93V21H9a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2H13V18.93A8,8,0,0,0,20,11Z"], ["d", "M21.53,7.15a1,1,0,0,0-1,0L17,8.89A3,3,0,0,0,14,6H5A3,3,0,0,0,2,9v6a3,3,0,0,0,3,3h9a3,3,0,0,0,3-2.89l3.56,1.78A1,1,0,0,0,21,17a1,1,0,0,0,.53-.15A1,1,0,0,0,22,16V8A1,1,0,0,0,21.53,7.15ZM15,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V9A1,1,0,0,1,5,8h9a1,1,0,0,1,1,1Zm5-.62-3-1.5V11.12l3-1.5Z"], ["d", "M7.71,6.29h0l-4-4A1,1,0,0,0,2.29,3.71L4.62,6A3,3,0,0,0,2,9v6a3,3,0,0,0,3,3h9a3,3,0,0,0,1.9-.69l4.39,4.4a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42ZM14,16H5a1,1,0,0,1-1-1V9A1,1,0,0,1,5,8H6.59l7.87,7.88A1,1,0,0,1,14,16Zm7.53-8.85a1,1,0,0,0-1,0L17,8.89A3,3,0,0,0,14,6H12.66a1,1,0,0,0,0,2H14a1,1,0,0,1,1,1v1.5h0a1.62,1.62,0,0,0,0,.19.65.65,0,0,0,.05.2h0s.05.06.07.1a1,1,0,0,0,.15.21s.1.06.15.1l.17.11a.85.85,0,0,0,.23,0,.7.7,0,0,0,.14,0h0a1.62,1.62,0,0,0,.19,0,.65.65,0,0,0,.2-.05h0L20,9.62v5.72a1,1,0,1,0,2,0V8A1,1,0,0,0,21.53,7.15Z"]],
  template: function CallComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "video", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, CallComponent_div_9_Template, 4, 3, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CallComponent_Template_button_click_12_listener() {
        return ctx.setEnabled("audio", !ctx.audioEnabled);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, CallComponent__svg_svg_13_Template, 2, 1, "svg", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, CallComponent__svg_svg_14_Template, 2, 1, "svg", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CallComponent_Template_button_click_15_listener() {
        return ctx.setEnabled("video", !ctx.videoEnabled);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, CallComponent__svg_svg_16_Template, 2, 1, "svg", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, CallComponent__svg_svg_17_Template, 2, 1, "svg", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CallComponent_Template_button_click_18_listener() {
        return ctx.stopCall();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "svg", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "path", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.meetingName);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.remoteStreams.length + 1 + " \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("autoplay", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.remoteStreams);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.audioEnabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.audioEnabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.videoEnabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.videoEnabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("fill", "#fff");
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
  styles: [".call_container[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    flex-direction: row;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 1000;\r\n    flex-wrap: wrap;\r\n    background: #FFFFFF;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.call_container__header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-around;\r\n    background: linear-gradient(to bottom, #030324, #030c30);\r\n    padding: 10px;\r\n    font-size: 23px;\r\n    color: #fff;\r\n    width: 100%;\r\n}\r\n\r\n.call_container__button[_ngcontent-%COMP%] {\r\n    border-radius: 100%;\r\n    width: auto;\r\n    height: auto;\r\n    padding: 7px 7px 3px 7px;\r\n    margin-top: 10px;\r\n    border: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.call_container__button[_ngcontent-%COMP%]:first-child {\r\n    margin-top: 0;\r\n}\r\n\r\n.call_container__button__ok[_ngcontent-%COMP%] {\r\n    background: linear-gradient(to top, rgb(0, 122, 0), rgb(0, 122, 0));\r\n}\r\n\r\n.call_container__button__ok[_ngcontent-%COMP%]:hover {\r\n    background: linear-gradient(to top, rgb(0, 122, 0), rgb(3, 161, 3));\r\n}\r\n\r\n.call_container__button__err[_ngcontent-%COMP%] {\r\n    background: linear-gradient(to top, rgb(255, 41, 41), rgb(255, 41, 41));\r\n}\r\n\r\n.call_container__button__err[_ngcontent-%COMP%]:hover {\r\n    background: linear-gradient(to top, rgb(255, 41, 41), rgb(255, 83, 83));\r\n}\r\n\r\n.call_container[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    background: rgb(2, 4, 39);\r\n    height: calc(100% - 46px);\r\n    width: 100%;\r\n}\r\n\r\n.call_container__manage_panel[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    position: absolute;\r\n    right: 20px;\r\n    height: 100%;\r\n    width: auto;\r\n}\r\n\r\n.call_container__manage_panel[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    width: 30px;\r\n    height: 30px;\r\n}\r\n\r\n.remote_videos_container[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    padding: 20px;\r\n    overflow-y: auto;\r\n    width: auto;\r\n    top: 60px;\r\n    left: 20px;\r\n}\r\n\r\n.remote_videos_container[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\r\n    width: auto;\r\n    height: 100px;\r\n    margin-right: 10px;\r\n    top: 80px;\r\n}\r\n\r\n.call_container__manage_panel__container[_ngcontent-%COMP%] {\r\n    border-radius: 50px;\r\n    background-color: rgb(2, 3, 20);\r\n    padding: 5px;\r\n}\r\n\r\nvideo[_ngcontent-%COMP%]::-webkit-media-controls {\r\n    display: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLHdEQUF3RDtJQUN4RCxhQUFhO0lBQ2IsZUFBZTtJQUNmLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLG1FQUFtRTtBQUN2RTs7QUFFQTtJQUNJLG1FQUFtRTtBQUN2RTs7QUFFQTtJQUNJLHVFQUF1RTtBQUMzRTs7QUFFQTtJQUNJLHVFQUF1RTtBQUMzRTs7QUFFQTtJQUNJLGFBQWE7SUFDYix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQiwrQkFBK0I7SUFDL0IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoiY2FsbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhbGxfY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5jYWxsX2NvbnRhaW5lcl9faGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMDMwMzI0LCAjMDMwYzMwKTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY2FsbF9jb250YWluZXJfX2J1dHRvbiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nOiA3cHggN3B4IDNweCA3cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2FsbF9jb250YWluZXJfX2J1dHRvbjpmaXJzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcblxyXG4uY2FsbF9jb250YWluZXJfX2J1dHRvbl9fb2sge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiKDAsIDEyMiwgMCksIHJnYigwLCAxMjIsIDApKTtcclxufVxyXG5cclxuLmNhbGxfY29udGFpbmVyX19idXR0b25fX29rOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYigwLCAxMjIsIDApLCByZ2IoMywgMTYxLCAzKSk7XHJcbn1cclxuXHJcbi5jYWxsX2NvbnRhaW5lcl9fYnV0dG9uX19lcnIge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiKDI1NSwgNDEsIDQxKSwgcmdiKDI1NSwgNDEsIDQxKSk7XHJcbn1cclxuXHJcbi5jYWxsX2NvbnRhaW5lcl9fYnV0dG9uX19lcnI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiKDI1NSwgNDEsIDQxKSwgcmdiKDI1NSwgODMsIDgzKSk7XHJcbn1cclxuXHJcbi5jYWxsX2NvbnRhaW5lciB2aWRlbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDIsIDQsIDM5KTtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNDZweCk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNhbGxfY29udGFpbmVyX19tYW5hZ2VfcGFuZWwge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuLmNhbGxfY29udGFpbmVyX19tYW5hZ2VfcGFuZWwgc3ZnIHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4ucmVtb3RlX3ZpZGVvc19jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIHRvcDogNjBweDtcclxuICAgIGxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5yZW1vdGVfdmlkZW9zX2NvbnRhaW5lciB2aWRlbyB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB0b3A6IDgwcHg7XHJcbn1cclxuXHJcbi5jYWxsX2NvbnRhaW5lcl9fbWFuYWdlX3BhbmVsX19jb250YWluZXIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyLCAzLCAyMCk7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbnZpZGVvOjotd2Via2l0LW1lZGlhLWNvbnRyb2xzIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn0iXX0= */"]
});

/***/ }),

/***/ 273:
/*!********************************************************************!*\
  !*** ./src/app/change-call-volume/change-call-volume.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangeCallVolumeComponent": () => (/* binding */ ChangeCallVolumeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class ChangeCallVolumeComponent {
    constructor() { }
    ngOnInit() {
    }
}
ChangeCallVolumeComponent.ɵfac = function ChangeCallVolumeComponent_Factory(t) { return new (t || ChangeCallVolumeComponent)(); };
ChangeCallVolumeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChangeCallVolumeComponent, selectors: [["app-change-call-volume"]], decls: 2, vars: 0, template: function ChangeCallVolumeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "change-call-volume works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFuZ2UtY2FsbC12b2x1bWUuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 2226:
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatComponent": () => (/* binding */ ChatComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 945);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 409);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 5257);
/* harmony import */ var ng_audio_recorder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-audio-recorder */ 1289);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/user.service */ 3071);
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/chat.service */ 9014);








const _c0 = ["chatBody"];
function ChatComponent_app_modal_window_0_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-modal-window", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onclose", function ChatComponent_app_modal_window_0_Template_app_modal_window_onclose_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r13.setComponentStatus(); })("oncheck", function ChatComponent_app_modal_window_0_Template_app_modal_window_oncheck_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r15.check(); })("oncallback", function ChatComponent_app_modal_window_0_Template_app_modal_window_oncallback_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r16.delete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("header", ctx_r0.status.toUpperCase())("status", ctx_r0.status);
} }
function ChatComponent_app_call_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-call", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onexit", function ChatComponent_app_call_1_Template_app_call_onexit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r17.exitCall(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("user", ctx_r1.user)("meetingName", (ctx_r1.otherUser == null ? null : ctx_r1.otherUser.username) || "")("sid", (ctx_r1.user == null ? null : ctx_r1.user.id) || -1);
} }
function ChatComponent_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r19.otherUser.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r19.reader && ctx_r19.user && ctx_r19.reader.id !== ctx_r19.user.id ? "writing..." : "online");
} }
function ChatComponent_div_3_div_5_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChatComponent_div_3_div_5_button_5_Template_button_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24); const i_r22 = restoredCtx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r23.setComponentStatus(i_r22.status); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r22.text);
} }
function ChatComponent_div_3_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ChatComponent_div_3_div_5_button_5_Template, 2, 1, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]("Selected " + ctx_r20.selectedMessages.length + " / " + ctx_r20.chat.chat_messages.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r20.checkPossibleMethods());
} }
function ChatComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ChatComponent_div_3_div_1_Template, 5, 2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChatComponent_div_3_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r25.call(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "svg", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "path", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ChatComponent_div_3_div_5_Template, 6, 2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.selectedMessages.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("fill", "#6563ff");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.selectedMessages.length > 0 && ctx_r2.chat);
} }
function ChatComponent_div_4_ng_container_3_li_1_div_2_audio_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "audio", 9);
} if (rf & 2) {
    const m_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", m_r29.reply_to_message.audio_message.audio, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function ChatComponent_div_4_ng_container_3_li_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ChatComponent_div_4_ng_container_3_li_1_div_2_audio_1_Template, 1, 1, "audio", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", m_r29.reply_to_message.audio_message);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](m_r29.reply_to_message.body);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](6, 3, m_r29.reply_to_message.date, "HH:mm"));
} }
function ChatComponent_div_4_ng_container_3_li_1_app_audio_message_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-audio-message", 9);
} if (rf & 2) {
    const m_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", m_r29.audio_message.audio);
} }
const _c1 = function (a0, a1, a2) { return { "chat__messages_container__item__left": a0, "chat__messages_container__item__right": a1, "chat__messages_container__item__select": a2 }; };
function ChatComponent_div_4_ng_container_3_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChatComponent_div_4_ng_container_3_li_1_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r39); const m_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r37.select(m_r29.id || -1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ChatComponent_div_4_ng_container_3_li_1_div_2_Template, 7, 6, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ChatComponent_div_4_ng_container_3_li_1_app_audio_message_3_Template, 1, 1, "app-audio-message", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "small", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](8, _c1, ctx_r30.otherUser && ctx_r30.otherUser.id !== m_r29.user, ctx_r30.otherUser && ctx_r30.otherUser.id === m_r29.user, ctx_r30.checkMessageIsSelect(m_r29.id || -1)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", m_r29.reply_to_message);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", m_r29.audio_message);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](m_r29.body);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](8, 5, m_r29.date, "HH:mm"));
} }
function ChatComponent_div_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ChatComponent_div_4_ng_container_3_li_1_Template, 9, 12, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const m_r29 = ctx.$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", m_r29.is_remove === false || m_r29.is_remove === null && m_r29.user !== (ctx_r28.user == null ? null : ctx_r28.user.id));
} }
function ChatComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ul", 34, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ChatComponent_div_4_ng_container_3_Template, 2, 1, "ng-container", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.chat.chat_messages);
} }
function ChatComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChatComponent_div_5_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r41.setComponentStatus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ChatComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u041E\u0442\u0432\u0435\u0442\u0438\u0442\u044C \u043D\u0430 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChatComponent_div_6_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r43.setComponentStatus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ChatComponent_input_13_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ChatComponent_input_13_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r46); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r45.message.body = $event; })("ngModelChange", function ChatComponent_input_13_Template_input_ngModelChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r46); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r47.read(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r7.message.body);
} }
function ChatComponent_input_14_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ChatComponent_input_14_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r48.editBody = $event; })("ngModelChange", function ChatComponent_input_14_Template_input_ngModelChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r49); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r50.read(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r8.editBody);
} }
function ChatComponent_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChatComponent_button_16_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r52); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r51.startRecording(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "svg", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "path", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("fill", "#6563ff");
} }
function ChatComponent_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChatComponent_button_17_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r54); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r53.stopRecording(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "svg", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "path");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("fill", "#6563ff")("d", "M18.71,7.21a1,1,0,0,0-1.42,0L9.84,14.67,6.71,11.53A1,1,0,1,0,5.29,13l3.84,3.84a1,1,0,0,0,1.42,0l8.16-8.16A1,1,0,0,0,18.71,7.21Z");
} }
function ChatComponent_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChatComponent_button_18_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r56); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r55.resetRecording(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ChatComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r12.selectedMessages[0].body);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](5, 2, ctx_r12.selectedMessages[0].date, "HH:mm"));
} }
class ChatComponent {
    constructor(_route, _userService, _chatService, _audioRecorderService) {
        var _a, _b, _c, _d, _e;
        this._route = _route;
        this._userService = _userService;
        this._chatService = _chatService;
        this._audioRecorderService = _audioRecorderService;
        this.chatId = -1;
        this.reader = null;
        this.user = null;
        this.chat = null;
        this.otherUser = (_a = this.chat) === null || _a === void 0 ? void 0 : _a.users.filter(i => { var _a; return i.id !== ((_a = this.user) === null || _a === void 0 ? void 0 : _a.id); })[0];
        this.selectedMessages = [];
        this.isLoading = false;
        this.editBody = "";
        this.isCheck = null;
        this.isRecording = false;
        this.callIsOpen = false;
        this.message = {
            user: ((_b = this.user) === null || _b === void 0 ? void 0 : _b.id) ? (_c = this.user) === null || _c === void 0 ? void 0 : _c.id : -1,
            chat: ((_d = this.chat) === null || _d === void 0 ? void 0 : _d.id) ? (_e = this.chat) === null || _e === void 0 ? void 0 : _e.id : -1,
            body: "",
            date: (new Date()).toDateString(),
        };
    }
    ngOnInit() {
        this.subscribeToMessage();
        this._route.queryParams.subscribe(p => {
            this.chatId = parseInt(p['id']);
            this.message.chat = parseInt(p['id']);
        });
        this._userService.getAuthUser().subscribe(data => {
            var _a;
            this.user = data.user;
            if (data.user)
                this.message.user = (_a = data.user) === null || _a === void 0 ? void 0 : _a.id;
        });
        this._chatService.message.next({ event: "get_chat", id: this.chatId });
        (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.interval)(2000)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeWhile)((i) => {
            return true;
        }))
            .subscribe(i => {
            if (this.reader)
                this.reader = null;
        });
    }
    submit() {
        this.isLoading = true;
        this.message.date = new Date().toDateString();
        if (this.status === 'edit')
            this.edit();
        else if (this.status === 'reply')
            this.reply();
        else
            this._chatService.message.next(Object.assign({ event: "send_message" }, this.message));
        this.message.body = "";
    }
    exitCall() {
        this.callIsOpen = false;
    }
    read() {
        this._chatService.message.next({ event: "reading_message" });
    }
    edit() {
        this.selectedMessages[0].body = this.editBody;
        this._chatService.message.next({ event: "edit_message", message: this.selectedMessages[0] });
    }
    delete() {
        this.isLoading = true;
        let ids = this.selectedMessages.map(i => {
            return i.id;
        });
        this._chatService.message.next({ event: 'delete_message', messages: JSON.stringify(ids), for_all: this.isCheck });
    }
    forward(id, chatId) {
    }
    reply() {
        this._chatService.message.next({ event: "reply_message", message: this.message, pk: this.selectedMessages[0].id });
    }
    call() {
        this.callIsOpen = true;
    }
    stopCall() {
        this.callIsOpen = false;
    }
    select(id) {
        if (this.chat) {
            let m = this.chat.chat_messages.find(i => i.id === id);
            if (m) {
                let idx = this.selectedMessages.indexOf(m);
                if (idx > -1)
                    this.selectedMessages.splice(idx, 1);
                else
                    this.selectedMessages.push(m);
            }
        }
    }
    checkMessageIsSelect(id) {
        if (this.chat) {
            let m = this.chat.chat_messages.find(i => i.id === id);
            if (m) {
                let idx = this.selectedMessages.indexOf(m);
                return idx > -1;
            }
        }
        return false;
    }
    checkPossibleMethods() {
        var _a, _b;
        let defaultValues = [
            {
                text: "Редактировать",
                status: "edit",
                method: this.edit
            },
            {
                text: "Удалить",
                status: "delete",
                method: this.delete
            },
            {
                text: "Переслать",
                status: "forward",
                method: this.forward
            },
            {
                text: "Ответить",
                status: "reply",
                method: this.reply
            }
        ];
        let ms = this.selectedMessages;
        if (ms.length === 0)
            return [];
        else if (ms.length === 1 && ms[0].user === ((_a = this.user) === null || _a === void 0 ? void 0 : _a.id))
            return defaultValues;
        else if (ms.length === 1 && ms[0].user !== ((_b = this.user) === null || _b === void 0 ? void 0 : _b.id))
            return [defaultValues[1], defaultValues[2], defaultValues[3]];
        else if (ms.length > 1)
            return [defaultValues[1], defaultValues[2]];
        else
            return [];
    }
    setComponentStatus(status) {
        if (status === 'edit')
            this.editBody = this.selectedMessages[0].body;
        this.status = status;
    }
    check() {
        this.isCheck = !this.isCheck ? true : null;
    }
    ngAfterViewInit() {
    }
    startRecording() {
        this.isRecording = true;
        this._audioRecorderService.startRecording();
    }
    stopRecording() {
        this.isRecording = false;
        this._audioRecorderService.stopRecording(ng_audio_recorder__WEBPACK_IMPORTED_MODULE_5__.OutputFormat.WEBM_BLOB).then((output) => {
            let f = new FormData();
            f.append('audio', output);
            this._chatService.uploadAudioMessage(f).subscribe(data => {
                console.log(data);
                this.message.audio_message = data.audio;
                this.submit();
                this.message.audio_message = undefined;
            });
        }).catch(errorCase => {
            console.log(errorCase);
        });
    }
    resetRecording() {
        this.isRecording = false;
        this._audioRecorderService.stopRecording(ng_audio_recorder__WEBPACK_IMPORTED_MODULE_5__.OutputFormat.WEBM_BLOB).then(out => {
        });
    }
    getChatHandle(data) {
        var _a;
        this.chat = data.chat;
        this.otherUser = (_a = this.chat) === null || _a === void 0 ? void 0 : _a.users.filter(i => { var _a; return i.id !== ((_a = this.user) === null || _a === void 0 ? void 0 : _a.id); })[0];
        if (this.chatBody && this.chat)
            this.chatBody.nativeElement.scrollTop = this.chatBody.nativeElement.scrollHeight;
    }
    sendChatHandle(data) {
        this.chat && this.chat.chat_messages.push(data.message);
        if (this.chatBody)
            (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.interval)(100).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(2)).subscribe(i => {
                this.chatBody.nativeElement.scrollTop = this.chatBody.nativeElement.scrollHeight;
            });
    }
    editMessageHandle(data) {
        if (this.chat) {
            let m = this.chat.chat_messages.find(i => i.id === data['message'].id);
            if (m) {
                m.body = data['message'].body;
            }
        }
    }
    deleteMessageHandle(data) {
        var _a;
        if (this.chat) {
            this.chat.chat_messages = (_a = this.chat) === null || _a === void 0 ? void 0 : _a.chat_messages.filter(i => data.ids.indexOf(i.id) === -1);
            this.selectedMessages = [];
        }
    }
    subscribeToMessage() {
        this._chatService.message.subscribe((data) => {
            switch (data.event) {
                case 'get_chat': {
                    this.getChatHandle(data);
                    break;
                }
                case 'send_message': {
                    this.sendChatHandle(data);
                    break;
                }
                case 'reading_message': {
                    this.reader = data.reader;
                    break;
                }
                case 'edit_message': {
                    this.editMessageHandle(data);
                    break;
                }
                case 'delete_message': {
                    this.deleteMessageHandle(data);
                }
            }
            this.isLoading = false;
        });
    }
}
ChatComponent.ɵfac = function ChatComponent_Factory(t) { return new (t || ChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_chat_service__WEBPACK_IMPORTED_MODULE_1__.ChatService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_audio_recorder__WEBPACK_IMPORTED_MODULE_5__.NgAudioRecorderService)); };
ChatComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ChatComponent, selectors: [["app-chat"]], viewQuery: function ChatComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.chatBody = _t.first);
    } }, decls: 22, vars: 14, consts: [[3, "header", "status", "onclose", "oncheck", "oncallback", 4, "ngIf"], [3, "user", "meetingName", "sid", "onexit", 4, "ngIf"], ["aria-label", "Chat", 1, "chat"], ["class", "chat__header", "aria-label", "Chat header", 4, "ngIf"], ["class", "chat__body", "aria-label", "Chat body", "id", "chatBody", 4, "ngIf"], ["class", "container row status_text_container", 4, "ngIf"], ["aria-label", "Chat footer", 1, "chat_form", 3, "ngSubmit"], ["chatForm", "ngForm"], [1, "chat_form__container"], [3, "src"], [1, "container", "row"], [1, "container"], ["class", "chat__from_input", "name", "body", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "chat__from_input", "name", "body", "style", "border-radius: 0 0 10px 10px", 3, "ngModel", "ngModelChange", 4, "ngIf"], [1, "container", "row", "chat_form__buttons_container"], ["type", "button", 3, "click", 4, "ngIf"], [1, "form__button", "chat_form__button"], ["class", "container reply_message_container", 4, "ngIf"], [3, "header", "status", "onclose", "oncheck", "oncallback"], [3, "user", "meetingName", "sid", "onexit"], ["aria-label", "Chat header", 1, "chat__header"], ["style", "display: flex; flex-direction: column; align-items: center", 4, "ngIf"], [1, "form__button", "call_container__button", 2, "width", "auto", "height", "auto", "margin", "0", "padding", "5px 5px 0 5px", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", 2, "width", "23px", "height", "23px"], ["d", "M20,12a1,1,0,0,0-1-1H11.41l2.3-2.29a1,1,0,1,0-1.42-1.42l-4,4a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l4,4a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L11.41,13H19A1,1,0,0,0,20,12ZM17,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V16a1,1,0,0,0-2,0v3a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V8a1,1,0,0,0,2,0V5A3,3,0,0,0,17,2Z"], ["style", "display: flex; flex-direction: row", 4, "ngIf"], [2, "display", "flex", "flex-direction", "column", "align-items", "center"], [2, "display", "flex", "flex-direction", "row"], [2, "display", "flex", "flex-direction", "row", "align-items", "center", "justify-content", "center"], [2, "font-size", "25px"], [1, "chat__header__button_group"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], ["aria-label", "Chat body", "id", "chatBody", 1, "chat__body"], [1, "chat__messages_container"], ["chatBody", ""], [4, "ngFor", "ngForOf"], ["class", "chat__messages_container__item", 3, "ngClass", "click", 4, "ngIf"], [1, "chat__messages_container__item", 3, "ngClass", "click"], [1, "chat__messages_container__item__message"], ["class", "container chat__messages_container__item__reply_message", 4, "ngIf"], [3, "src", 4, "ngIf"], [1, "chat__messages_container__item__body"], [1, "chat__messages_container__item__date"], [1, "container", "chat__messages_container__item__reply_message"], [1, "container", "row", "status_text_container"], [2, "font-size", "22px", "cursor", "pointer", 3, "click"], ["name", "body", 1, "chat__from_input", 3, "ngModel", "ngModelChange"], ["name", "body", 1, "chat__from_input", 2, "border-radius", "0 0 10px 10px", 3, "ngModel", "ngModelChange"], ["type", "button", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24"], ["d", "M12,15a4,4,0,0,0,4-4V5A4,4,0,0,0,8,5v6A4,4,0,0,0,12,15ZM10,5a2,2,0,0,1,4,0v6a2,2,0,0,1-4,0Zm10,6a1,1,0,0,0-2,0A6,6,0,0,1,6,11a1,1,0,0,0-2,0,8,8,0,0,0,7,7.93V21H9a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2H13V18.93A8,8,0,0,0,20,11Z"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "width", "30", "height", "30"], [1, "container", "reply_message_container"]], template: function ChatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ChatComponent_app_modal_window_0_Template, 1, 2, "app-modal-window", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ChatComponent_app_call_1_Template, 1, 3, "app-call", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ChatComponent_div_3_Template, 6, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ChatComponent_div_4_Template, 4, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ChatComponent_div_5_Template, 5, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ChatComponent_div_6_Template, 5, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "form", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ChatComponent_Template_form_ngSubmit_7_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "audio", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, ChatComponent_input_13_Template, 1, 1, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, ChatComponent_input_14_Template, 1, 1, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ChatComponent_button_16_Template, 3, 1, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, ChatComponent_button_17_Template, 3, 2, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, ChatComponent_button_18_Template, 2, 0, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, ChatComponent_div_21_Template, 6, 5, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.status && ctx.status === "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.callIsOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.chat && ctx.otherUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.chat);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.status === "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.status === "reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.audio, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.status || ctx.status === "reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.status === "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isRecording);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isRecording);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isRecording);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.isLoading ? "Loading..." : "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.status === "reply");
    } }, styles: [".chat[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 1200px;\r\n    height: 100%;\r\n    max-height: 100%;\r\n    background: #FFFFFF;\r\n    box-shadow: rgba(0, 0, 0, 0.25) 0 4px 8px 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.chat__header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    width: 100%;\r\n    padding: 5px 0;\r\n    box-shadow: rgba(0, 0, 0, 0.25) 0 4px 8px 0;\r\n    z-index: 10;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.chat__header__button_group[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    padding: 5px;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.chat__header__button_group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    color: #FFFFFF;\r\n    background: #46a8ff;\r\n    padding: 5px 8px;\r\n    margin: 0 7px;\r\n    outline: none;\r\n    border: none;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n}\r\n\r\n.chat__header__button_group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n    background: #0077D7;\r\n}\r\n\r\n.chat__body[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: calc(100% - 84px);\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.chat__messages_container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 100%;\r\n    max-width: 100%;\r\n    height: 100%;\r\n    padding-inline-start: 40px;\r\n    padding-inline-end: 40px;\r\n    margin: 0;\r\n    overflow-y: auto;\r\n    list-style-type: none;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.chat__messages_container__item[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    width: 100%;\r\n    padding: 10px 0;\r\n    box-sizing: border-box;\r\n    cursor: pointer;\r\n}\r\n\r\n.chat__messages_container__item__message[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n    max-width: 400px;\r\n    min-width: 100px;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.chat__messages_container__item[_ngcontent-%COMP%]:hover:not(.chat__messages_container__item__select)   .chat__messages_container__item__message[_ngcontent-%COMP%] {\r\n    box-shadow: rgba(0, 0, 0, 0.2) 0 4px 8px 0;\r\n}\r\n\r\n.chat__messages_container__item__right[_ngcontent-%COMP%] {\r\n    justify-content: flex-end;\r\n}\r\n\r\n.chat__messages_container__item__left[_ngcontent-%COMP%] {\r\n    justify-content: flex-start;\r\n}\r\n\r\n.chat__messages_container__item__select[_ngcontent-%COMP%]   .chat__messages_container__item__message[_ngcontent-%COMP%] {\r\n    box-shadow: inset rgba(0, 0, 0, 0.1) 0 4px 8px 0;\r\n}\r\n\r\n.chat__messages_container__item__left[_ngcontent-%COMP%]   .chat__messages_container__item__message[_ngcontent-%COMP%] {\r\n    background: #b9e7ff;\r\n    border-radius: 0 10px 10px 10px;\r\n}\r\n\r\n.chat__messages_container__item__right[_ngcontent-%COMP%]   .chat__messages_container__item__message[_ngcontent-%COMP%] {\r\n    background: #9cf0ff;\r\n    border-radius: 10px 0 10px 10px;\r\n}\r\n\r\n.chat__messages_container__item__reply_message[_ngcontent-%COMP%] {\r\n    background: rgba(0, 0, 0, 0.07);\r\n    padding: 10px;\r\n    box-sizing: border-box;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.chat__messages_container__item__right[_ngcontent-%COMP%]   .chat__messages_container__item__reply_message[_ngcontent-%COMP%] {\r\n    border-left: #056dcd solid 4px;\r\n    border-radius: 5px 0 5px 5px;\r\n}\r\n\r\n.chat__messages_container__item__left[_ngcontent-%COMP%]   .chat__messages_container__item__reply_message[_ngcontent-%COMP%] {\r\n    border-right: #056dcd solid 4px;\r\n    border-radius: 0 5px 5px 5px;\r\n}\r\n\r\n.chat_form[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n.chat_form__container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 100%;\r\n}\r\n\r\n.reading[_ngcontent-%COMP%] {\r\n    flex-direction: row;\r\n}\r\n\r\n.edit[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n}\r\n\r\n.chat__from_input[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    border: #e8e8e8 solid 2px;\r\n    border-radius: 5px;\r\n    padding: 7px;\r\n    box-sizing: border-box;\r\n    width: 100%;\r\n    height: 100%;\r\n    outline-color: #bdbdbd;\r\n}\r\n\r\n.chat_form__button[_ngcontent-%COMP%] {\r\n    margin: 0 0 0 10px;\r\n    width: auto;\r\n}\r\n\r\n.status_text_container[_ngcontent-%COMP%] {\r\n    justify-content: space-between;\r\n    background: #0077D7;\r\n    color: #FFFFFF;\r\n    border-radius: 10px 10px 0 0;\r\n    padding: 10px;\r\n    font-size: 22px;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.reply_message_container[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    padding: 10px 0 0 10px;\r\n    background: rgba(0, 0, 0, 0.07);\r\n    box-sizing: border-box;\r\n    border-radius: 10px 0 0 10px;\r\n    border-left: #0077D7 solid 5px;\r\n}\r\n\r\n.chat_form__buttons_container[_ngcontent-%COMP%] {\r\n    width: auto;\r\n}\r\n\r\n.chat_form__buttons_container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    height: 30px;\r\n    width: 30px;\r\n    color: #6563ff;\r\n    outline: none;\r\n    background: #FFFFFF;\r\n    border-radius: 5px;\r\n    border: none;\r\n    cursor: pointer;\r\n    margin-left: 5px;\r\n    box-sizing: border-box;\r\n    font-size: 30px;\r\n    padding: 0;\r\n}\r\n\r\n.chat_form__buttons_container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.chat_form__buttons_container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n    box-shadow: rgba(0, 0, 0, 0.25) 0 4px 8px 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLDJDQUEyQztJQUMzQyxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsY0FBYztJQUNkLDJDQUEyQztJQUMzQyxXQUFXO0lBQ1gsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsWUFBWTtJQUNaLDBCQUEwQjtJQUMxQix3QkFBd0I7SUFDeEIsU0FBUztJQUNULGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksMENBQTBDO0FBQzlDOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksZ0RBQWdEO0FBQ3BEOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsZUFBZTtJQUNmLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsK0JBQStCO0lBQy9CLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxjQUFjO0lBQ2QsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDJDQUEyQztBQUMvQyIsImZpbGUiOiJjaGF0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiAxMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMCA0cHggOHB4IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uY2hhdF9faGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KSAwIDRweCA4cHggMDtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmNoYXRfX2hlYWRlcl9fYnV0dG9uX2dyb3VwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmNoYXRfX2hlYWRlcl9fYnV0dG9uX2dyb3VwIGJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgYmFja2dyb3VuZDogIzQ2YThmZjtcclxuICAgIHBhZGRpbmc6IDVweCA4cHg7XHJcbiAgICBtYXJnaW46IDAgN3B4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNoYXRfX2hlYWRlcl9fYnV0dG9uX2dyb3VwIGJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA3N0Q3O1xyXG59XHJcblxyXG4uY2hhdF9fYm9keSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gODRweCk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5jaGF0X19tZXNzYWdlc19jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA0MHB4O1xyXG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiA0MHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5jaGF0X19tZXNzYWdlc19jb250YWluZXJfX2l0ZW0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jaGF0X19tZXNzYWdlc19jb250YWluZXJfX2l0ZW1fX21lc3NhZ2Uge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmNoYXRfX21lc3NhZ2VzX2NvbnRhaW5lcl9faXRlbTpob3Zlcjpub3QoLmNoYXRfX21lc3NhZ2VzX2NvbnRhaW5lcl9faXRlbV9fc2VsZWN0KSAuY2hhdF9fbWVzc2FnZXNfY29udGFpbmVyX19pdGVtX19tZXNzYWdlIHtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yKSAwIDRweCA4cHggMDtcclxufVxyXG5cclxuLmNoYXRfX21lc3NhZ2VzX2NvbnRhaW5lcl9faXRlbV9fcmlnaHQge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuLmNoYXRfX21lc3NhZ2VzX2NvbnRhaW5lcl9faXRlbV9fbGVmdCB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbi5jaGF0X19tZXNzYWdlc19jb250YWluZXJfX2l0ZW1fX3NlbGVjdCAuY2hhdF9fbWVzc2FnZXNfY29udGFpbmVyX19pdGVtX19tZXNzYWdlIHtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IHJnYmEoMCwgMCwgMCwgMC4xKSAwIDRweCA4cHggMDtcclxufVxyXG5cclxuLmNoYXRfX21lc3NhZ2VzX2NvbnRhaW5lcl9faXRlbV9fbGVmdCAuY2hhdF9fbWVzc2FnZXNfY29udGFpbmVyX19pdGVtX19tZXNzYWdlIHtcclxuICAgIGJhY2tncm91bmQ6ICNiOWU3ZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDEwcHggMTBweCAxMHB4O1xyXG59XHJcblxyXG4uY2hhdF9fbWVzc2FnZXNfY29udGFpbmVyX19pdGVtX19yaWdodCAuY2hhdF9fbWVzc2FnZXNfY29udGFpbmVyX19pdGVtX19tZXNzYWdlIHtcclxuICAgIGJhY2tncm91bmQ6ICM5Y2YwZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDAgMTBweCAxMHB4O1xyXG59XHJcblxyXG4uY2hhdF9fbWVzc2FnZXNfY29udGFpbmVyX19pdGVtX19yZXBseV9tZXNzYWdlIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNyk7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5jaGF0X19tZXNzYWdlc19jb250YWluZXJfX2l0ZW1fX3JpZ2h0IC5jaGF0X19tZXNzYWdlc19jb250YWluZXJfX2l0ZW1fX3JlcGx5X21lc3NhZ2Uge1xyXG4gICAgYm9yZGVyLWxlZnQ6ICMwNTZkY2Qgc29saWQgNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDAgNXB4IDVweDtcclxufVxyXG5cclxuLmNoYXRfX21lc3NhZ2VzX2NvbnRhaW5lcl9faXRlbV9fbGVmdCAuY2hhdF9fbWVzc2FnZXNfY29udGFpbmVyX19pdGVtX19yZXBseV9tZXNzYWdlIHtcclxuICAgIGJvcmRlci1yaWdodDogIzA1NmRjZCBzb2xpZCA0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDVweCA1cHggNXB4O1xyXG59XHJcblxyXG4uY2hhdF9mb3JtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4uY2hhdF9mb3JtX19jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnJlYWRpbmcge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLmVkaXQge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmNoYXRfX2Zyb21faW5wdXQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBib3JkZXI6ICNlOGU4ZTggc29saWQgMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogN3B4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3V0bGluZS1jb2xvcjogI2JkYmRiZDtcclxufVxyXG5cclxuLmNoYXRfZm9ybV9fYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMCAwIDAgMTBweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG4uc3RhdHVzX3RleHRfY29udGFpbmVyIHtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJhY2tncm91bmQ6ICMwMDc3RDc7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLnJlcGx5X21lc3NhZ2VfY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweCAwIDAgMTBweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNyk7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAwIDAgMTBweDtcclxuICAgIGJvcmRlci1sZWZ0OiAjMDA3N0Q3IHNvbGlkIDVweDtcclxufVxyXG5cclxuLmNoYXRfZm9ybV9fYnV0dG9uc19jb250YWluZXIge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbi5jaGF0X2Zvcm1fX2J1dHRvbnNfY29udGFpbmVyIGJ1dHRvbiB7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGNvbG9yOiAjNjU2M2ZmO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5jaGF0X2Zvcm1fX2J1dHRvbnNfY29udGFpbmVyIGJ1dHRvbiBzdmcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5jaGF0X2Zvcm1fX2J1dHRvbnNfY29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDAgNHB4IDhweCAwO1xyXG59Il19 */"] });


/***/ }),

/***/ 5181:
/*!****************************************************************************!*\
  !*** ./src/app/delete-message-content/delete-message-content.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteMessageContentComponent": () => (/* binding */ DeleteMessageContentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8583);



const _c0 = function (a0, a1) { return { "check_mark": a0, "fill_check_mark": a1 }; };
const _c1 = function () { return { "opacity": 0 }; };
const _c2 = function () { return { "opacity": 1 }; };
class DeleteMessageContentComponent {
    constructor() {
        this.check = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.checkDeleteForAll = null;
    }
    ngOnInit() {
    }
    setCheckDeleteForAll() {
        this.checkDeleteForAll = this.checkDeleteForAll ? null : true;
        this.check.emit();
    }
}
DeleteMessageContentComponent.ɵfac = function DeleteMessageContentComponent_Factory(t) { return new (t || DeleteMessageContentComponent)(); };
DeleteMessageContentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeleteMessageContentComponent, selectors: [["app-delete-message-content"]], outputs: { check: "check" }, decls: 6, vars: 8, consts: [[1, "checker_container"], [3, "ngClass", "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", 2, "width", "20px", "height", "20px"], ["d", "M18.71,7.21a1,1,0,0,0-1.42,0L9.84,14.67,6.71,11.53A1,1,0,1,0,5.29,13l3.84,3.84a1,1,0,0,0,1.42,0l8.16-8.16A1,1,0,0,0,18.71,7.21Z", 3, "ngStyle"], [2, "display", "flex", "flex-direction", "row", "margin-left", "5px", "font-size", "20px", "color", "#000", "align-items", "center"]], template: function DeleteMessageContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteMessageContentComponent_Template_div_click_1_listener() { return ctx.setCheckDeleteForAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0434\u043B\u044F \u0432\u0441\u0435\u0445 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, !ctx.checkDeleteForAll, ctx.checkDeleteForAll));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", !ctx.checkDeleteForAll ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1) : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("fill", ctx.checkDeleteForAll ? "#fff" : "#0077D7");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle], styles: [".check_mark[_ngcontent-%COMP%], .fill_check_mark[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  border: rgba(0,0,0,0.2) solid 2px;\r\n  border-radius: 5px;\r\n  width: 20px;\r\n  height: 20px;\r\n  margin: 10px;\r\n  color: #0077D7;\r\n}\r\n\r\n.fill_check_mark[_ngcontent-%COMP%] {\r\n  border-color: #0077D7;\r\n  background: #0077D7;\r\n  color: #FFFFFF;\r\n}\r\n\r\n.checker_container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbGV0ZS1tZXNzYWdlLWNvbnRlbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUNBQWlDO0VBQ2pDLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2IiLCJmaWxlIjoiZGVsZXRlLW1lc3NhZ2UtY29udGVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoZWNrX21hcmssIC5maWxsX2NoZWNrX21hcmsge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBib3JkZXI6IHJnYmEoMCwwLDAsMC4yKSBzb2xpZCAycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgY29sb3I6ICMwMDc3RDc7XHJcbn1cclxuXHJcbi5maWxsX2NoZWNrX21hcmsge1xyXG4gIGJvcmRlci1jb2xvcjogIzAwNzdENztcclxuICBiYWNrZ3JvdW5kOiAjMDA3N0Q3O1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG59XHJcblxyXG4uY2hlY2tlcl9jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 8263:
/*!********************************************!*\
  !*** ./src/app/loader/loader.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderComponent": () => (/* binding */ LoaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class LoaderComponent {
}
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(); };
LoaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoaderComponent, selectors: [["app-loader"]], decls: 1, vars: 0, template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Loading...\n");
    } }, styles: [".loader[_ngcontent-%COMP%] {\r\n  border: 4px solid #f3f3f3;\r\n  border-radius: 50%;\r\n  border-top: 4px solid #3498db;\r\n  width: 30px;\r\n  height: 30px;\r\n  animation: spin 1s linear infinite;\r\n}\r\n\r\n@keyframes spin {\r\n  0% { transform: rotate(0deg); }\r\n  100% { transform: rotate(360deg); }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IsV0FBVztFQUNYLFlBQVk7RUFFWixrQ0FBa0M7QUFDcEM7O0FBT0E7RUFDRSxLQUFLLHVCQUF1QixFQUFFO0VBQzlCLE9BQU8seUJBQXlCLEVBQUU7QUFDcEMiLCJmaWxlIjoibG9hZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGVyIHtcclxuICBib3JkZXI6IDRweCBzb2xpZCAjZjNmM2YzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXItdG9wOiA0cHggc29saWQgIzM0OThkYjtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xyXG4gIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBzcGluIHtcclxuICAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxyXG4gIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 8458:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_localize_init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/localize/init */ 5240);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ 3071);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loader/loader.component */ 8263);







function LoginComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.errors.__all__[0]);
} }
function LoginComponent_span_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18n"](1, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LoginComponent_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, LoginComponent_span_8_div_1_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r2.errors == null ? null : _r2.errors.required);
} }
function LoginComponent_span_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18n"](1, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LoginComponent_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, LoginComponent_span_12_div_1_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r4.errors == null ? null : _r4.errors.required);
} }
function LoginComponent_button_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18n"](1, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", _r0.invalid || ctx_r6.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18nExp"]("Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18nApply"](1);
} }
function LoginComponent_button_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18nStart"](1, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", true);
} }
class LoginComponent {
    constructor(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
        this.username = null;
        this.password = null;
        this.isLoading = false;
    }
    ngOnInit() {
    }
    submit(loginForm) {
        if (this.username && this.password) {
            this.isLoading = true;
            this._userService.loginUser(loginForm.form.value).subscribe(data => {
                this.errors = data.errors;
                console.log(data.errors);
                this.isLoading = false;
                if (data.result) {
                    this._userService.getAuthUser().subscribe(data => {
                        if (data.user)
                            this._router.navigate(['posts'], { queryParams: { 'user': data.user.username } });
                        else
                            this.errors.__all__ = ['Something was wrong... Please, try again!'];
                    });
                }
            });
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 18, vars: 8, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8427791050069072310$$SRC_APP_LOGIN_LOGIN_COMPONENT_TS_1 = goog.getMsg("{$interpolation}", { "interpolation": "\uFFFD0\uFFFD" });
        i18n_0 = MSG_EXTERNAL_8427791050069072310$$SRC_APP_LOGIN_LOGIN_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `${"\uFFFD0\uFFFD"}:INTERPOLATION:`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3742496118436585286$$SRC_APP_LOGIN_LOGIN_COMPONENT_TS___3 = goog.getMsg(" Username is required. ");
        i18n_2 = MSG_EXTERNAL_3742496118436585286$$SRC_APP_LOGIN_LOGIN_COMPONENT_TS___3;
    }
    else {
        i18n_2 = $localize ` Username is required. `;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7218179738293233410$$SRC_APP_LOGIN_LOGIN_COMPONENT_TS___5 = goog.getMsg(" Password is required. ");
        i18n_4 = MSG_EXTERNAL_7218179738293233410$$SRC_APP_LOGIN_LOGIN_COMPONENT_TS___5;
    }
    else {
        i18n_4 = $localize ` Password is required. `;
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8427791050069072310$$SRC_APP_LOGIN_LOGIN_COMPONENT_TS__7 = goog.getMsg("{$interpolation}", { "interpolation": "\uFFFD0\uFFFD" });
        i18n_6 = MSG_EXTERNAL_8427791050069072310$$SRC_APP_LOGIN_LOGIN_COMPONENT_TS__7;
    }
    else {
        i18n_6 = $localize `${"\uFFFD0\uFFFD"}:INTERPOLATION:`;
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8253205773021834385$$SRC_APP_LOGIN_LOGIN_COMPONENT_TS__9 = goog.getMsg("{$startTagAppLoader}{$closeTagAppLoader}", { "startTagAppLoader": "\uFFFD#2\uFFFD", "closeTagAppLoader": "\uFFFD/#2\uFFFD" });
        i18n_8 = MSG_EXTERNAL_8253205773021834385$$SRC_APP_LOGIN_LOGIN_COMPONENT_TS__9;
    }
    else {
        i18n_8 = $localize `${"\uFFFD#2\uFFFD"}:START_TAG_APP_LOADER:${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_APP_LOADER:`;
    } return [[1, "form", 3, "ngSubmit"], ["loginForm", "ngForm"], ["class", "error", "style", "border-radius: 0 0 10px 10px", 4, "ngIf"], [1, "form__title"], i18n_0, [1, "form__item__container"], ["placeholder", "Username", "name", "username", "required", "", 1, "form__item", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], ["class", "error", 4, "ngIf"], ["placeholder", "Password", "name", "password", "required", "", "type", "password", 1, "form__item", 3, "ngModel", "ngModelChange"], ["passwordField", "ngModel"], ["class", "form__button", 3, "disabled", 4, "ngIf"], ["routerLink", "/register"], [1, "error", 2, "border-radius", "0 0 10px 10px"], [1, "error"], [4, "ngIf"], i18n_2, i18n_4, [1, "form__button", 3, "disabled"], i18n_6, i18n_8]; }, template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1); return ctx.submit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, LoginComponent_span_2_Template, 2, 1, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18n"](4, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_6_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, LoginComponent_span_8_Template, 2, 1, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_10_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, LoginComponent_span_12_Template, 2, 1, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, LoginComponent_button_13_Template, 2, 2, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, LoginComponent_button_14_Template, 3, 1, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](7);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.errors && ctx.errors.__all__);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18nExp"]("Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18nApply"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r2.invalid && (_r2.dirty || _r2.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r4.invalid && (_r4.dirty || _r4.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _loader_loader_component__WEBPACK_IMPORTED_MODULE_2__.LoaderComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 5291:
/*!********************************************************!*\
  !*** ./src/app/modal-window/modal-window.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalWindowComponent": () => (/* binding */ ModalWindowComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _delete_message_content_delete_message_content_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../delete-message-content/delete-message-content.component */ 5181);




const _c0 = ["window"];
function ModalWindowComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalWindowComponent_div_1_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.header);
} }
function ModalWindowComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "app-delete-message-content", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("check", function ModalWindowComponent_div_3_Template_app_delete_message_content_check_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.check(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class ModalWindowComponent {
    constructor() {
        this.onclose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.oncheck = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.oncallback = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    ngOnInit() {
    }
    close() {
        this.onclose.emit();
    }
    check() {
        this.oncheck.emit();
    }
    callback() {
        this.oncallback.emit();
    }
}
ModalWindowComponent.ɵfac = function ModalWindowComponent_Factory(t) { return new (t || ModalWindowComponent)(); };
ModalWindowComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ModalWindowComponent, selectors: [["app-modal-window"]], viewQuery: function ModalWindowComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.modalWindow = _t.first);
    } }, inputs: { status: "status", header: "header" }, outputs: { onclose: "onclose", oncheck: "oncheck", oncallback: "oncallback" }, decls: 9, vars: 2, consts: [["aria-label", "Modal window", 1, "modal_window"], ["class", "modal_window__header", "aria-label", "Modal window header", 4, "ngIf"], [2, "display", "flex", "flex-direction", "column"], ["class", "modal_window__body", "aria-label", "Modal window body", 4, "ngIf"], [1, "container", "row"], [3, "click"], ["aria-label", "Modal window header", 1, "modal_window__header"], [2, "cursor", "pointer", "font-size", "30px", 3, "click"], ["aria-label", "Modal window body", 1, "modal_window__body"], ["window", ""], [3, "check"]], template: function ModalWindowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ModalWindowComponent_div_1_Template, 5, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ModalWindowComponent_div_3_Template, 3, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalWindowComponent_Template_button_click_5_listener() { return ctx.callback(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u041E\u0442\u043C\u0435\u043D\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.close && ctx.header);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.status === "delete");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _delete_message_content_delete_message_content_component__WEBPACK_IMPORTED_MODULE_0__.DeleteMessageContentComponent], styles: [".modal_window[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top: 200px;\r\n  left: calc(50% - 250px);\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 500px;\r\n  background: #FFFFFF;\r\n  border-radius: 10px;\r\n  box-shadow: rgba(0,0,0,.25) 0 4px 8px 0;\r\n  min-height: 100px;\r\n  z-index: 1000;\r\n}\r\n\r\n.modal_window__header[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n  background: #056dcd;\r\n  color: #FFFFFF;\r\n  font-size: 20px;\r\n  align-items: center;\r\n  border-radius: 10px 10px 0 0;\r\n}\r\n\r\n.modal_window__body[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  border-radius: 0 0 10px 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLXdpbmRvdy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7RUFDVix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix1Q0FBdUM7RUFDdkMsaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2Qiw0QkFBNEI7QUFDOUIiLCJmaWxlIjoibW9kYWwtd2luZG93LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWxfd2luZG93IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAyMDBweDtcclxuICBsZWZ0OiBjYWxjKDUwJSAtIDI1MHB4KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3gtc2hhZG93OiByZ2JhKDAsMCwwLC4yNSkgMCA0cHggOHB4IDA7XHJcbiAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgei1pbmRleDogMTAwMDtcclxufVxyXG5cclxuLm1vZGFsX3dpbmRvd19faGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYmFja2dyb3VuZDogIzA1NmRjZDtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xyXG59XHJcblxyXG4ubW9kYWxfd2luZG93X19ib2R5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 5366:
/*!*************************************!*\
  !*** ./src/app/models/api.model.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "baseURI": () => (/* binding */ baseURI)
/* harmony export */ });
const baseURI = "http://127.0.0.1:8000/api/1.0/";


/***/ }),

/***/ 439:
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageNotFoundComponent": () => (/* binding */ PageNotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 3, vars: 0, template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Page not found (404)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 495:
/*!******************************************!*\
  !*** ./src/app/posts/posts.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostsComponent": () => (/* binding */ PostsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_localize_init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/localize/init */ 5240);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/posts.service */ 752);
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loader/loader.component */ 8263);






function PostsComponent_div_0_ul_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "strong", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "article", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "small", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18n"](8, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 3, p_r4.user.first_name + " " + p_r4.user.last_name));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](p_r4.body);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18nExp"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 5, p_r4.date));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18nApply"](8);
} }
function PostsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PostsComponent_div_0_ul_1_Template, 10, 7, "ul", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.posts);
} }
function PostsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18nStart"](1, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PostsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18n"](1, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class PostsComponent {
    constructor(postsService) {
        this.postsService = postsService;
        this.isLoading = false;
        this.posts = [];
    }
    ngOnInit() {
        this.isLoading = true;
        this.postsService.getPosts().subscribe(data => {
            this.posts = data.posts;
            this.isLoading = false;
        });
    }
}
PostsComponent.ɵfac = function PostsComponent_Factory(t) { return new (t || PostsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_posts_service__WEBPACK_IMPORTED_MODULE_1__.PostsService)); };
PostsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PostsComponent, selectors: [["app-posts"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_4__.Location, { provide: _angular_common__WEBPACK_IMPORTED_MODULE_4__.LocationStrategy, useClass: _angular_common__WEBPACK_IMPORTED_MODULE_4__.PathLocationStrategy }])], decls: 3, vars: 3, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1243918731446162749$$SRC_APP_POSTS_POSTS_COMPONENT_TS___1 = goog.getMsg("{$interpolation}", { "interpolation": "\uFFFD0\uFFFD" });
        i18n_0 = MSG_EXTERNAL_1243918731446162749$$SRC_APP_POSTS_POSTS_COMPONENT_TS___1;
    }
    else {
        i18n_0 = $localize `${"\uFFFD0\uFFFD"}:INTERPOLATION:`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2524006660287020914$$SRC_APP_POSTS_POSTS_COMPONENT_TS__3 = goog.getMsg("{$startTagAppLoader}{$closeTagAppLoader}", { "startTagAppLoader": "\uFFFD#2\uFFFD", "closeTagAppLoader": "\uFFFD/#2\uFFFD" });
        i18n_2 = MSG_EXTERNAL_2524006660287020914$$SRC_APP_POSTS_POSTS_COMPONENT_TS__3;
    }
    else {
        i18n_2 = $localize `${"\uFFFD#2\uFFFD"}:START_TAG_APP_LOADER:${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_APP_LOADER:`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6255489117520951898$$SRC_APP_POSTS_POSTS_COMPONENT_TS__5 = goog.getMsg(" Nothing to show\n");
        i18n_4 = MSG_EXTERNAL_6255489117520951898$$SRC_APP_POSTS_POSTS_COMPONENT_TS__5;
    }
    else {
        i18n_4 = $localize ` Nothing to show
`;
    } return [[4, "ngIf"], ["class", "nothing_posts__error", 4, "ngIf"], ["class", "posts_container", 4, "ngFor", "ngForOf"], [1, "posts_container"], [1, "post"], [1, "post__username"], [1, "post__body"], [1, "post__date"], i18n_0, [1, "nothing_posts__error"], i18n_2, i18n_4]; }, template: function PostsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, PostsComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PostsComponent_div_1_Template, 3, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PostsComponent_div_2_Template, 2, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.posts.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.posts.length === 0 && !ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _loader_loader_component__WEBPACK_IMPORTED_MODULE_2__.LoaderComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe], styles: [".posts_container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  width: 700px;\r\n  list-style-type: none;\r\n}\r\n\r\n.post[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background: #FFF;\r\n  box-shadow: rgba(0,0,0,0.25) 0 4px 8px 0;\r\n  margin: 20px;\r\n  padding: 10px;\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n}\r\n\r\n.nothing_posts__error[_ngcontent-%COMP%] {\r\n  font-size: 25px;\r\n  color: rgba(0,0,0,0.7);\r\n}\r\n\r\n.post__username[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n  border-bottom: rgba(0,0,0,0.25) solid 1px;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.post__body[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n  border-bottom: rgba(0,0,0,0.25) solid 1px;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.post__date[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-end;\r\n  padding: 10px;\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsd0NBQXdDO0VBQ3hDLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUNBQXlDO0VBQ3pDLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix5Q0FBeUM7RUFDekMsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2IiLCJmaWxlIjoicG9zdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3N0c19jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiA3MDBweDtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuXHJcbi5wb3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYmFja2dyb3VuZDogI0ZGRjtcclxuICBib3gtc2hhZG93OiByZ2JhKDAsMCwwLDAuMjUpIDAgNHB4IDhweCAwO1xyXG4gIG1hcmdpbjogMjBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5ub3RoaW5nX3Bvc3RzX19lcnJvciB7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGNvbG9yOiByZ2JhKDAsMCwwLDAuNyk7XHJcbn1cclxuXHJcbi5wb3N0X191c2VybmFtZSB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXItYm90dG9tOiByZ2JhKDAsMCwwLDAuMjUpIHNvbGlkIDFweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4ucG9zdF9fYm9keSB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXItYm90dG9tOiByZ2JhKDAsMCwwLDAuMjUpIHNvbGlkIDFweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4ucG9zdF9fZGF0ZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 9087:
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/user.service */ 3071);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../loader/loader.component */ 8263);






function RegisterComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.errors.__all__[0]);
} }
function RegisterComponent_span_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](1, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterComponent_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RegisterComponent_span_8_div_1_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r2.errors == null ? null : _r2.errors.required);
} }
function RegisterComponent_span_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](1, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterComponent_span_12_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](1, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterComponent_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RegisterComponent_span_12_div_1_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RegisterComponent_span_12_div_2_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r4.errors == null ? null : _r4.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r4.errors == null ? null : _r4.errors.email);
} }
function RegisterComponent_span_16_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](1, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterComponent_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RegisterComponent_span_16_div_1_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r6.errors == null ? null : _r6.errors.required);
} }
function RegisterComponent_span_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](1, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterComponent_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RegisterComponent_span_20_div_1_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r8.errors == null ? null : _r8.errors.required);
} }
function RegisterComponent_span_24_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](1, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterComponent_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RegisterComponent_span_24_div_1_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r10.errors == null ? null : _r10.errors.required);
} }
function RegisterComponent_span_28_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](1, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterComponent_span_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RegisterComponent_span_28_div_1_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r12.errors == null ? null : _r12.errors.required);
} }
function RegisterComponent_button_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](1, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", _r0.invalid || ctx_r14.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18nExp"]("Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18nApply"](1);
} }
function RegisterComponent_button_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18nStart"](1, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", true);
} }
class RegisterComponent {
    constructor(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
        this.username = "";
        this.email = "";
        this.first_name = "";
        this.last_name = "";
        this.password1 = "";
        this.password2 = "";
        this.isLoading = false;
    }
    ngOnInit() {
    }
    submit(registerForm) {
        this.isLoading = true;
        this._userService.registerUser(registerForm.form.value).subscribe(data => {
            this.isLoading = false;
            if (data.result)
                this._router.navigate(['login']);
            else
                this.errors = data.errors;
        });
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
RegisterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 31, vars: 16, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8784893861138527443$$SRC_APP_REGISTER_REGISTER_COMPONENT_TS_1 = goog.getMsg("{$interpolation}", { "interpolation": "\uFFFD0\uFFFD" });
        i18n_0 = MSG_EXTERNAL_8784893861138527443$$SRC_APP_REGISTER_REGISTER_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `${"\uFFFD0\uFFFD"}:INTERPOLATION:`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3742496118436585286$$SRC_APP_REGISTER_REGISTER_COMPONENT_TS___3 = goog.getMsg(" Username is required. ");
        i18n_2 = MSG_EXTERNAL_3742496118436585286$$SRC_APP_REGISTER_REGISTER_COMPONENT_TS___3;
    }
    else {
        i18n_2 = $localize ` Username is required. `;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3209914399734529122$$SRC_APP_REGISTER_REGISTER_COMPONENT_TS___5 = goog.getMsg(" Email is required. ");
        i18n_4 = MSG_EXTERNAL_3209914399734529122$$SRC_APP_REGISTER_REGISTER_COMPONENT_TS___5;
    }
    else {
        i18n_4 = $localize ` Email is required. `;
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4705557653735442214$$SRC_APP_REGISTER_REGISTER_COMPONENT_TS___7 = goog.getMsg(" Email is email. ");
        i18n_6 = MSG_EXTERNAL_4705557653735442214$$SRC_APP_REGISTER_REGISTER_COMPONENT_TS___7;
    }
    else {
        i18n_6 = $localize ` Email is email. `;
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4923992624425972697$$SRC_APP_REGISTER_REGISTER_COMPONENT_TS___9 = goog.getMsg(" First name is required. ");
        i18n_8 = MSG_EXTERNAL_4923992624425972697$$SRC_APP_REGISTER_REGISTER_COMPONENT_TS___9;
    }
    else {
        i18n_8 = $localize ` First name is required. `;
    } let i18n_10; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3491092907214398010$$SRC_APP_REGISTER_REGISTER_COMPONENT_TS___11 = goog.getMsg(" Last name is required. ");
        i18n_10 = MSG_EXTERNAL_3491092907214398010$$SRC_APP_REGISTER_REGISTER_COMPONENT_TS___11;
    }
    else {
        i18n_10 = $localize ` Last name is required. `;
    } let i18n_12; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7218179738293233410$$SRC_APP_REGISTER_REGISTER_COMPONENT_TS___13 = goog.getMsg(" Password is required. ");
        i18n_12 = MSG_EXTERNAL_7218179738293233410$$SRC_APP_REGISTER_REGISTER_COMPONENT_TS___13;
    }
    else {
        i18n_12 = $localize ` Password is required. `;
    } let i18n_14; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4673762439619520641$$SRC_APP_REGISTER_REGISTER_COMPONENT_TS___15 = goog.getMsg(" Repeat password is required. ");
        i18n_14 = MSG_EXTERNAL_4673762439619520641$$SRC_APP_REGISTER_REGISTER_COMPONENT_TS___15;
    }
    else {
        i18n_14 = $localize ` Repeat password is required. `;
    } let i18n_16; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2169107748657641781$$SRC_APP_REGISTER_REGISTER_COMPONENT_TS__17 = goog.getMsg("{$interpolation}", { "interpolation": "\uFFFD0\uFFFD" });
        i18n_16 = MSG_EXTERNAL_2169107748657641781$$SRC_APP_REGISTER_REGISTER_COMPONENT_TS__17;
    }
    else {
        i18n_16 = $localize `${"\uFFFD0\uFFFD"}:INTERPOLATION:`;
    } let i18n_18; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8253205773021834385$$SRC_APP_REGISTER_REGISTER_COMPONENT_TS__19 = goog.getMsg("{$startTagAppLoader}{$closeTagAppLoader}", { "startTagAppLoader": "\uFFFD#2\uFFFD", "closeTagAppLoader": "\uFFFD/#2\uFFFD" });
        i18n_18 = MSG_EXTERNAL_8253205773021834385$$SRC_APP_REGISTER_REGISTER_COMPONENT_TS__19;
    }
    else {
        i18n_18 = $localize `${"\uFFFD#2\uFFFD"}:START_TAG_APP_LOADER:${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_APP_LOADER:`;
    } return [[1, "form", 3, "ngSubmit"], ["registerForm", "ngForm"], ["class", "error", "style", "border-radius: 0 0 10px 10px", 4, "ngIf"], [1, "form__title"], i18n_0, [1, "form__item__container"], ["placeholder", "Username", "name", "username", "required", "", 1, "form__item", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], ["class", "error", 4, "ngIf"], ["placeholder", "Email", "name", "email", "required", "", "email", "", 1, "form__item", 3, "ngModel", "ngModelChange"], ["emailField", "ngModel"], ["placeholder", "First name", "name", "first_name", "required", "", 1, "form__item", 3, "ngModel", "ngModelChange"], ["firstName", "ngModel"], ["placeholder", "Last name", "name", "last_name", "required", "", 1, "form__item", 3, "ngModel", "ngModelChange"], ["lastName", "ngModel"], ["placeholder", "Password", "name", "password1", "required", "", "type", "password", 1, "form__item", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], ["placeholder", "Repeat password", "name", "password2", "required", "", "type", "password", 1, "form__item", 3, "ngModel", "ngModelChange"], ["repeatPassword", "ngModel"], ["class", "form__button", 3, "disabled", 4, "ngIf"], [1, "error", 2, "border-radius", "0 0 10px 10px"], [1, "error"], [4, "ngIf"], i18n_2, i18n_4, i18n_6, i18n_8, i18n_10, i18n_12, i18n_14, [1, "form__button", 3, "disabled"], i18n_16, i18n_18]; }, template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1); return ctx.submit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RegisterComponent_span_2_Template, 2, 1, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](4, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_6_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, RegisterComponent_span_8_Template, 2, 1, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_10_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, RegisterComponent_span_12_Template, 3, 2, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_14_listener($event) { return ctx.first_name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, RegisterComponent_span_16_Template, 2, 1, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_18_listener($event) { return ctx.last_name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, RegisterComponent_span_20_Template, 2, 1, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_22_listener($event) { return ctx.password1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, RegisterComponent_span_24_Template, 2, 1, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_26_listener($event) { return ctx.password2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, RegisterComponent_span_28_Template, 2, 1, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, RegisterComponent_button_29_Template, 2, 2, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, RegisterComponent_button_30_Template, 3, 1, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](11);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](15);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](19);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](23);
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.errors && ctx.errors.__all__);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18nExp"]("Registration");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18nApply"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r2.invalid && (_r2.dirty || _r2.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r4.invalid && (_r4.dirty || _r4.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.first_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r6.invalid && (_r6.dirty || _r6.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.last_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r8.invalid && (_r8.dirty || _r8.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.password1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r10.invalid && (_r10.dirty || _r10.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.password2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r12.invalid && (_r12.dirty || _r12.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.EmailValidator, _loader_loader_component__WEBPACK_IMPORTED_MODULE_1__.LoaderComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 5830:
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1841);


class ApiService {
    constructor(_http) {
        this._http = _http;
    }
    _getCookie(name) {
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
    getRequest(url) {
        return this._http.get(url, {
            headers: {
                'X-CSRFToken': this._getCookie('csrftoken'),
            }
        });
    }
    postRequest(url, data) {
        return this._http.post(url, data, {
            headers: {
                'X-CSRFToken': this._getCookie('csrftoken'),
            }
        });
    }
    putRequest(url, data) {
        return this._http.put(url, data, {
            headers: {
                'X-CSRFToken': this._getCookie('csrftoken'),
            }
        });
    }
    deleteRequest(url) {
        return this._http.delete(url, {
            headers: {
                'X-CSRFToken': this._getCookie('csrftoken'),
            }
        });
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
ApiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 9014:
/*!******************************************!*\
  !*** ./src/app/services/chat.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatService": () => (/* binding */ ChatService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var _models_api_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/api.model */ 5366);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var _websockets_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./websockets.service */ 7651);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ 5830);






class ChatService {
    constructor(message, calls, wsService, _api) {
        this.message = message;
        this.calls = calls;
        this.wsService = wsService;
        this._api = _api;
        this.message = wsService.connect('ws://127.0.0.1:8000/chat/').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((res) => {
            return JSON.parse(res.data);
        }));
    }
    getAllChats() {
        return this._api.getRequest(_models_api_model__WEBPACK_IMPORTED_MODULE_0__.baseURI + 'chats/');
    }
    uploadAudioMessage(formData) {
        return this._api.postRequest(_models_api_model__WEBPACK_IMPORTED_MODULE_0__.baseURI + 'upload_message/', formData);
    }
    connectToCalls() {
        this.calls = this.wsService.connect(`ws://127.0.0.1:8000/call/${1}/`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((res) => {
            return JSON.parse(res.data);
        }));
        return this.calls;
    }
}
ChatService.ɵfac = function ChatService_Factory(t) { return new (t || ChatService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_websockets_service__WEBPACK_IMPORTED_MODULE_1__.WebsocketsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService)); };
ChatService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: ChatService, factory: ChatService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 752:
/*!*******************************************!*\
  !*** ./src/app/services/posts.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostsService": () => (/* binding */ PostsService)
/* harmony export */ });
/* harmony import */ var _models_api_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/api.model */ 5366);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1841);



class PostsService {
    constructor(http) {
        this.http = http;
        this.posts = [];
    }
    getPosts() {
        return this.http.get(_models_api_model__WEBPACK_IMPORTED_MODULE_0__.baseURI + "post/", {});
    }
}
PostsService.ɵfac = function PostsService_Factory(t) { return new (t || PostsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
PostsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PostsService, factory: PostsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3071:
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var _models_api_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/api.model */ 5366);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ 5830);



class UserService {
    constructor(_api) {
        this._api = _api;
        this.url = _models_api_model__WEBPACK_IMPORTED_MODULE_0__.baseURI + 'user/';
    }
    getAuthUser() {
        return this._api.getRequest(this.url);
    }
    registerUser(data) {
        return this._api.postRequest(this.url, data);
    }
    loginUser(data) {
        return this._api.putRequest(this.url, data);
    }
    logoutUser() {
        return this._api.deleteRequest(this.url);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService)); };
UserService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7651:
/*!************************************************!*\
  !*** ./src/app/services/websockets.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebsocketsService": () => (/* binding */ WebsocketsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9165);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);



class WebsocketsService {
    constructor(subject) {
        this.subject = subject;
    }
    connect(url) {
        console.log("Connecting...");
        if (!this.subject.observers.length) {
            this.subject = this.create(url);
        }
        return this.subject;
    }
    create(url) {
        let ws = new WebSocket(url);
        let observable = rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable.create((obs) => {
            ws.onmessage = obs.next.bind(obs);
            ws.onerror = obs.error.bind(obs);
            ws.onclose = obs.error.bind(obs);
            return ws.close.bind(ws);
        });
        let observer = {
            next: (data) => {
                if (ws.readyState === WebSocket.OPEN) {
                    ws.send(JSON.stringify(data));
                }
                else {
                    setTimeout(() => {
                        ws.send(JSON.stringify(data));
                    }, 1000);
                }
            }
        };
        return rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject.create(observer, observable);
    }
}
WebsocketsService.ɵfac = function WebsocketsService_Factory(t) { return new (t || WebsocketsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject)); };
WebsocketsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: WebsocketsService, factory: WebsocketsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8290:
/*!**************************************************!*\
  !*** ./src/app/take-call/take-call.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TakeCallComponent": () => (/* binding */ TakeCallComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class TakeCallComponent {
    constructor() { }
    ngOnInit() {
    }
}
TakeCallComponent.ɵfac = function TakeCallComponent_Factory(t) { return new (t || TakeCallComponent)(); };
TakeCallComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TakeCallComponent, selectors: [["app-take-call"]], decls: 5, vars: 0, consts: [[1, "take-call"], [1, "take-call__preview-container"], ["previewVideo", ""], [1, "take-call__buttons-container"]], template: function TakeCallComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "video", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWtlLWNhbGwuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 1079:
/*!********************************************************!*\
  !*** ./src/app/upload-files/upload-files.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadFilesComponent": () => (/* binding */ UploadFilesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class UploadFilesComponent {
    constructor() { }
    ngOnInit() {
    }
}
UploadFilesComponent.ɵfac = function UploadFilesComponent_Factory(t) { return new (t || UploadFilesComponent)(); };
UploadFilesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UploadFilesComponent, selectors: [["app-upload-files"]], decls: 2, vars: 0, template: function UploadFilesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "upload-files works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGxvYWQtZmlsZXMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map