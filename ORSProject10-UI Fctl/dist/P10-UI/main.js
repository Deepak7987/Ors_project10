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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _marksheet_marksheet_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./marksheet/marksheet.component */ "./src/app/marksheet/marksheet.component.ts");
/* harmony import */ var _student_student_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./student/student.component */ "./src/app/student/student.component.ts");
/* harmony import */ var _college_college_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./college/college.component */ "./src/app/college/college.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _login_forgotpassword_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/forgotpassword.component */ "./src/app/login/forgotpassword.component.ts");
/* harmony import */ var _login_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/signup.component */ "./src/app/login/signup.component.ts");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./message/message.component */ "./src/app/message/message.component.ts");
/* harmony import */ var _message_message_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./message/message-list.component */ "./src/app/message/message-list.component.ts");
/* harmony import */ var _marksheet_marksheet_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./marksheet/marksheet-list.component */ "./src/app/marksheet/marksheet-list.component.ts");
/* harmony import */ var _college_college_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./college/college-list.component */ "./src/app/college/college-list.component.ts");
/* harmony import */ var _student_student_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./student/student-list.component */ "./src/app/student/student-list.component.ts");
/* harmony import */ var _user_user_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user/user-list.component */ "./src/app/user/user-list.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _role_role_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./role/role.component */ "./src/app/role/role.component.ts");
/* harmony import */ var _course_course_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./course/course.component */ "./src/app/course/course.component.ts");
/* harmony import */ var _subject_subject_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./subject/subject.component */ "./src/app/subject/subject.component.ts");
/* harmony import */ var _role_role_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./role/role-list.component */ "./src/app/role/role-list.component.ts");
/* harmony import */ var _course_course_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./course/course-list.component */ "./src/app/course/course-list.component.ts");
/* harmony import */ var _faculty_faculty_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./faculty/faculty.component */ "./src/app/faculty/faculty.component.ts");
/* harmony import */ var _faculty_faculty_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./faculty/faculty-list.component */ "./src/app/faculty/faculty-list.component.ts");
/* harmony import */ var _timetable_timetable_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./timetable/timetable.component */ "./src/app/timetable/timetable.component.ts");
/* harmony import */ var _file_file_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./file/file.component */ "./src/app/file/file.component.ts");
/* harmony import */ var _timetable_timetable_list_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./timetable/timetable-list.component */ "./src/app/timetable/timetable-list.component.ts");
/* harmony import */ var _subject_subject_list_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./subject/subject-list.component */ "./src/app/subject/subject-list.component.ts");
/* harmony import */ var _marksheet_marksheetmerit_list_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./marksheet/marksheetmerit-list.component */ "./src/app/marksheet/marksheetmerit-list.component.ts");
/* harmony import */ var _marksheet_getmarksheet_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./marksheet/getmarksheet.component */ "./src/app/marksheet/getmarksheet.component.ts");
/* harmony import */ var _user_changepassword_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./user/changepassword.component */ "./src/app/user/changepassword.component.ts");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./loader/loader.component */ "./src/app/loader/loader.component.ts");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./spinner/spinner.component */ "./src/app/spinner/spinner.component.ts");
/* harmony import */ var _user_myprofile_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./user/myprofile.component */ "./src/app/user/myprofile.component.ts");
/* harmony import */ var _owner_owner_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./owner/owner.component */ "./src/app/owner/owner.component.ts");
/* harmony import */ var _owner_ownerlist_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./owner/ownerlist.component */ "./src/app/owner/ownerlist.component.ts");
/* harmony import */ var _position_position_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./position/position.component */ "./src/app/position/position.component.ts");
/* harmony import */ var _position_positionlist_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./position/positionlist.component */ "./src/app/position/positionlist.component.ts");
/* harmony import */ var _asset_asset_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./asset/asset.component */ "./src/app/asset/asset.component.ts");
/* harmony import */ var _asset_assetlist_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./asset/assetlist.component */ "./src/app/asset/assetlist.component.ts");
/* harmony import */ var _proprietor_proprietor_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./proprietor/proprietor.component */ "./src/app/proprietor/proprietor.component.ts");
/* harmony import */ var _proprietor_proprietorlist_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./proprietor/proprietorlist.component */ "./src/app/proprietor/proprietorlist.component.ts");
/* harmony import */ var _path_path_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./path/path.component */ "./src/app/path/path.component.ts");
/* harmony import */ var _path_pathlist_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./path/pathlist.component */ "./src/app/path/pathlist.component.ts");
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./employee/employee.component */ "./src/app/employee/employee.component.ts");
/* harmony import */ var _employee_employeelist_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./employee/employeelist.component */ "./src/app/employee/employeelist.component.ts");
/* harmony import */ var _customer_customerlist_customerlist_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./customer/customerlist/customerlist.component */ "./src/app/customer/customerlist/customerlist.component.ts");
/* harmony import */ var _customer_customer_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./customer/customer.component */ "./src/app/customer/customer.component.ts");
/* harmony import */ var _cart_cartlist_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./cart/cartlist.component */ "./src/app/cart/cartlist.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _item_item_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./item/item.component */ "./src/app/item/item.component.ts");
/* harmony import */ var _item_itemlist_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./item/itemlist.component */ "./src/app/item/itemlist.component.ts");




















































var routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"]
    },
    {
        path: 'loader',
        component: _loader_loader_component__WEBPACK_IMPORTED_MODULE_31__["LoaderComponent"]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
    },
    {
        path: 'login/:userparams',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
    },
    {
        path: 'spinner',
        component: _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_32__["SpinnerComponent"]
    },
    {
        path: 'forgotpassword',
        component: _login_forgotpassword_component__WEBPACK_IMPORTED_MODULE_8__["ForgotPasswordComponent"]
    },
    {
        path: 'signup',
        component: _login_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignUpComponent"]
    },
    {
        path: 'message',
        component: _message_message_component__WEBPACK_IMPORTED_MODULE_10__["MessageComponent"],
    },
    {
        path: 'message/:id',
        component: _message_message_component__WEBPACK_IMPORTED_MODULE_10__["MessageComponent"]
    },
    {
        path: 'messagelist',
        component: _message_message_list_component__WEBPACK_IMPORTED_MODULE_11__["MessageListComponent"]
    },
    {
        path: 'marksheet',
        component: _marksheet_marksheet_component__WEBPACK_IMPORTED_MODULE_3__["MarksheetComponent"]
    },
    {
        path: 'marksheet/:id',
        component: _marksheet_marksheet_component__WEBPACK_IMPORTED_MODULE_3__["MarksheetComponent"]
    },
    {
        path: 'marksheetlist',
        component: _marksheet_marksheet_list_component__WEBPACK_IMPORTED_MODULE_12__["MarksheetListComponent"]
    },
    {
        path: 'proprietor',
        component: _proprietor_proprietor_component__WEBPACK_IMPORTED_MODULE_40__["ProprietorComponent"]
    },
    {
        path: 'proprietor/:id',
        component: _proprietor_proprietor_component__WEBPACK_IMPORTED_MODULE_40__["ProprietorComponent"]
    },
    {
        path: 'proprietorlist',
        component: _proprietor_proprietorlist_component__WEBPACK_IMPORTED_MODULE_41__["ProprietorlistComponent"]
    },
    {
        path: 'employee',
        component: _employee_employee_component__WEBPACK_IMPORTED_MODULE_44__["EmployeeComponent"]
    },
    {
        path: 'employee/:id',
        component: _employee_employee_component__WEBPACK_IMPORTED_MODULE_44__["EmployeeComponent"]
    },
    {
        path: 'employeelist',
        component: _employee_employeelist_component__WEBPACK_IMPORTED_MODULE_45__["EmployeelistComponent"]
    },
    {
        path: 'path',
        component: _path_path_component__WEBPACK_IMPORTED_MODULE_42__["PathComponent"]
    },
    {
        path: 'path/:id',
        component: _path_path_component__WEBPACK_IMPORTED_MODULE_42__["PathComponent"]
    },
    {
        path: 'pathlist',
        component: _path_pathlist_component__WEBPACK_IMPORTED_MODULE_43__["PathlistComponent"]
    },
    {
        path: 'marksheetmeritlist',
        component: _marksheet_marksheetmerit_list_component__WEBPACK_IMPORTED_MODULE_28__["MarksheetmeritListComponent"]
    },
    {
        path: 'getmarksheet',
        component: _marksheet_getmarksheet_component__WEBPACK_IMPORTED_MODULE_29__["GetmarksheetComponent"]
    },
    {
        path: 'college',
        component: _college_college_component__WEBPACK_IMPORTED_MODULE_5__["CollegeComponent"]
    },
    {
        path: 'college/:id',
        component: _college_college_component__WEBPACK_IMPORTED_MODULE_5__["CollegeComponent"]
    },
    {
        path: 'collegelist',
        component: _college_college_list_component__WEBPACK_IMPORTED_MODULE_13__["CollegeListComponent"]
    },
    {
        path: 'asset/:id',
        component: _asset_asset_component__WEBPACK_IMPORTED_MODULE_38__["AssetComponent"]
    },
    {
        path: 'assetlist',
        component: _asset_assetlist_component__WEBPACK_IMPORTED_MODULE_39__["AssetListComponent"]
    },
    {
        path: 'asset',
        component: _asset_asset_component__WEBPACK_IMPORTED_MODULE_38__["AssetComponent"]
    },
    {
        path: 'student',
        component: _student_student_component__WEBPACK_IMPORTED_MODULE_4__["StudentComponent"]
    },
    {
        path: 'student/:id',
        component: _student_student_component__WEBPACK_IMPORTED_MODULE_4__["StudentComponent"]
    },
    {
        path: 'studentlist',
        component: _student_student_list_component__WEBPACK_IMPORTED_MODULE_14__["StudentListComponent"]
    },
    {
        path: 'user',
        component: _user_user_component__WEBPACK_IMPORTED_MODULE_16__["UserComponent"]
    },
    {
        path: 'user/:id',
        component: _user_user_component__WEBPACK_IMPORTED_MODULE_16__["UserComponent"]
    },
    {
        path: 'userlist',
        component: _user_user_list_component__WEBPACK_IMPORTED_MODULE_15__["UserListComponent"]
    },
    {
        path: 'owner',
        component: _owner_owner_component__WEBPACK_IMPORTED_MODULE_34__["OwnerComponent"]
    },
    {
        path: 'owner/:id',
        component: _owner_owner_component__WEBPACK_IMPORTED_MODULE_34__["OwnerComponent"]
    },
    {
        path: 'ownerlist',
        component: _owner_ownerlist_component__WEBPACK_IMPORTED_MODULE_35__["OwnerlistComponent"]
    },
    {
        path: 'role',
        component: _role_role_component__WEBPACK_IMPORTED_MODULE_17__["RoleComponent"]
    },
    {
        path: 'rolelist',
        component: _role_role_list_component__WEBPACK_IMPORTED_MODULE_20__["RoleListComponent"]
    },
    {
        path: 'role/:id',
        component: _role_role_component__WEBPACK_IMPORTED_MODULE_17__["RoleComponent"]
    },
    {
        path: 'course',
        component: _course_course_component__WEBPACK_IMPORTED_MODULE_18__["CourseComponent"]
    },
    {
        path: 'courselist',
        component: _course_course_list_component__WEBPACK_IMPORTED_MODULE_21__["CourseListComponent"]
    },
    {
        path: 'course/:id',
        component: _course_course_component__WEBPACK_IMPORTED_MODULE_18__["CourseComponent"]
    },
    {
        path: 'faculty',
        component: _faculty_faculty_component__WEBPACK_IMPORTED_MODULE_22__["FacultyComponent"]
    },
    {
        path: 'facultylist',
        component: _faculty_faculty_list_component__WEBPACK_IMPORTED_MODULE_23__["FacultyListComponent"]
    },
    {
        path: 'faculty/:id',
        component: _faculty_faculty_component__WEBPACK_IMPORTED_MODULE_22__["FacultyComponent"]
    },
    {
        path: 'timetable',
        component: _timetable_timetable_component__WEBPACK_IMPORTED_MODULE_24__["TimetableComponent"]
    },
    {
        path: 'timetablelist',
        component: _timetable_timetable_list_component__WEBPACK_IMPORTED_MODULE_26__["TimetableListComponent"]
    },
    {
        path: 'timetable/:id',
        component: _timetable_timetable_component__WEBPACK_IMPORTED_MODULE_24__["TimetableComponent"]
    },
    {
        path: 'subject',
        component: _subject_subject_component__WEBPACK_IMPORTED_MODULE_19__["SubjectComponent"]
    },
    {
        path: 'subjectlist',
        component: _subject_subject_list_component__WEBPACK_IMPORTED_MODULE_27__["SubjectListComponent"]
    },
    {
        path: 'subject/:id',
        component: _subject_subject_component__WEBPACK_IMPORTED_MODULE_19__["SubjectComponent"]
    },
    {
        path: 'myprofile',
        component: _user_myprofile_component__WEBPACK_IMPORTED_MODULE_33__["MyprofileComponent"]
    },
    {
        path: 'file',
        component: _file_file_component__WEBPACK_IMPORTED_MODULE_25__["FileComponent"]
    },
    { path: 'changepassword',
        component: _user_changepassword_component__WEBPACK_IMPORTED_MODULE_30__["ChangepasswordComponent"]
    },
    {
        path: 'position',
        component: _position_position_component__WEBPACK_IMPORTED_MODULE_36__["PositionComponent"]
    },
    {
        path: 'positionlist',
        component: _position_positionlist_component__WEBPACK_IMPORTED_MODULE_37__["PositionlistComponent"]
    },
    {
        path: 'position/:id',
        component: _position_position_component__WEBPACK_IMPORTED_MODULE_36__["PositionComponent"]
    },
    {
        path: 'customer',
        component: _customer_customer_component__WEBPACK_IMPORTED_MODULE_47__["CustomerComponent"]
    },
    {
        path: 'customerlist',
        component: _customer_customerlist_customerlist_component__WEBPACK_IMPORTED_MODULE_46__["CustomerListComponent"]
    },
    {
        path: 'customer/:id',
        component: _customer_customer_component__WEBPACK_IMPORTED_MODULE_47__["CustomerComponent"]
    },
    {
        path: 'cart',
        component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_49__["CartComponent"]
    },
    {
        path: 'cartlist',
        component: _cart_cartlist_component__WEBPACK_IMPORTED_MODULE_48__["CartListComponent"]
    },
    {
        path: 'cart/:id',
        component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_49__["CartComponent"]
    },
    {
        path: 'item',
        component: _item_item_component__WEBPACK_IMPORTED_MODULE_50__["ItemComponent"]
    },
    {
        path: 'itemlist',
        component: _item_itemlist_component__WEBPACK_IMPORTED_MODULE_51__["ItemListComponent"]
    },
    {
        path: 'item/:id',
        component: _item_item_component__WEBPACK_IMPORTED_MODULE_50__["ItemComponent"]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropbtn {\n    background-color: #4CAF50;\n    color: white;\n    padding: 16px;\n    font-size: 16px;\n    border: none;\n  }\n  \n  .dropdown {\n    position: relative;\n    display: inline-block;\n  }\n  \n  .dropdown-content {\n    display: none;\n    position: absolute;\n    background-color: #f1f1f1;\n    min-width: 160px;\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    z-index: 1;\n  }\n  \n  .dropdown-content a {\n    color: black;\n    padding: 12px 16px;\n    text-decoration: none;\n    display: block;\n  }\n  \n  .app {\n    margin: 48px;\n  }\n  \n  .buttons {\n    display: flex;\n    max-width: 500px;\n    justify-content: space-evenly;\n    margin-bottom: 48px;\n\n  }\n\n  \n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0lBQ2YsWUFBWTtFQUNkOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQiw0Q0FBNEM7SUFDNUMsVUFBVTtFQUNaOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsY0FBYztFQUNoQjs7RUFDQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsNkJBQTZCO0lBQzdCLG1CQUFtQjs7RUFFckIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbiAgXG4gIC5kcm9wZG93biB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICBcbiAgLmRyb3Bkb3duLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gICAgbWluLXdpZHRoOiAxNjBweDtcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICB6LWluZGV4OiAxO1xuICB9XG4gIFxuICAuZHJvcGRvd24tY29udGVudCBhIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgcGFkZGluZzogMTJweCAxNnB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAuYXBwIHtcbiAgICBtYXJnaW46IDQ4cHg7XG4gIH1cbiAgXG4gIC5idXR0b25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgbWFyZ2luLWJvdHRvbTogNDhweDtcblxuICB9XG5cbiAgXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: myHttpLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myHttpLoader", function() { return myHttpLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _marksheet_marksheet_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./marksheet/marksheet.component */ "./src/app/marksheet/marksheet.component.ts");
/* harmony import */ var _student_student_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./student/student.component */ "./src/app/student/student.component.ts");
/* harmony import */ var _college_college_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./college/college.component */ "./src/app/college/college.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _utility_data_validator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./utility/data-validator */ "./src/app/utility/data-validator.ts");
/* harmony import */ var _login_forgotpassword_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./login/forgotpassword.component */ "./src/app/login/forgotpassword.component.ts");
/* harmony import */ var _login_signup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./login/signup.component */ "./src/app/login/signup.component.ts");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./message/message.component */ "./src/app/message/message.component.ts");
/* harmony import */ var _message_message_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./message/message-list.component */ "./src/app/message/message-list.component.ts");
/* harmony import */ var _marksheet_marksheet_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./marksheet/marksheet-list.component */ "./src/app/marksheet/marksheet-list.component.ts");
/* harmony import */ var _college_college_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./college/college-list.component */ "./src/app/college/college-list.component.ts");
/* harmony import */ var _student_student_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./student/student-list.component */ "./src/app/student/student-list.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _user_user_list_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./user/user-list.component */ "./src/app/user/user-list.component.ts");
/* harmony import */ var _role_role_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./role/role.component */ "./src/app/role/role.component.ts");
/* harmony import */ var _course_course_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./course/course.component */ "./src/app/course/course.component.ts");
/* harmony import */ var _subject_subject_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./subject/subject.component */ "./src/app/subject/subject.component.ts");
/* harmony import */ var _role_role_list_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./role/role-list.component */ "./src/app/role/role-list.component.ts");
/* harmony import */ var _timetable_timetable_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./timetable/timetable.component */ "./src/app/timetable/timetable.component.ts");
/* harmony import */ var _course_course_list_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./course/course-list.component */ "./src/app/course/course-list.component.ts");
/* harmony import */ var _faculty_faculty_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./faculty/faculty.component */ "./src/app/faculty/faculty.component.ts");
/* harmony import */ var _faculty_faculty_list_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./faculty/faculty-list.component */ "./src/app/faculty/faculty-list.component.ts");
/* harmony import */ var _file_file_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./file/file.component */ "./src/app/file/file.component.ts");
/* harmony import */ var _timetable_timetable_list_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./timetable/timetable-list.component */ "./src/app/timetable/timetable-list.component.ts");
/* harmony import */ var _subject_subject_list_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./subject/subject-list.component */ "./src/app/subject/subject-list.component.ts");
/* harmony import */ var _marksheet_marksheetmerit_list_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./marksheet/marksheetmerit-list.component */ "./src/app/marksheet/marksheetmerit-list.component.ts");
/* harmony import */ var _marksheet_getmarksheet_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./marksheet/getmarksheet.component */ "./src/app/marksheet/getmarksheet.component.ts");
/* harmony import */ var _user_changepassword_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./user/changepassword.component */ "./src/app/user/changepassword.component.ts");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./loader/loader.component */ "./src/app/loader/loader.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./spinner/spinner.component */ "./src/app/spinner/spinner.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _user_myprofile_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./user/myprofile.component */ "./src/app/user/myprofile.component.ts");
/* harmony import */ var _auth_service_service__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./auth-service.service */ "./src/app/auth-service.service.ts");
/* harmony import */ var _owner_owner_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./owner/owner.component */ "./src/app/owner/owner.component.ts");
/* harmony import */ var _flate_flate_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./flate/flate.component */ "./src/app/flate/flate.component.ts");
/* harmony import */ var _owner_ownerlist_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./owner/ownerlist.component */ "./src/app/owner/ownerlist.component.ts");
/* harmony import */ var _position_position_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./position/position.component */ "./src/app/position/position.component.ts");
/* harmony import */ var _position_positionlist_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./position/positionlist.component */ "./src/app/position/positionlist.component.ts");
/* harmony import */ var _asset_asset_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./asset/asset.component */ "./src/app/asset/asset.component.ts");
/* harmony import */ var _asset_assetlist_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./asset/assetlist.component */ "./src/app/asset/assetlist.component.ts");
/* harmony import */ var _proprietor_proprietor_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./proprietor/proprietor.component */ "./src/app/proprietor/proprietor.component.ts");
/* harmony import */ var _proprietor_proprietorlist_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./proprietor/proprietorlist.component */ "./src/app/proprietor/proprietorlist.component.ts");
/* harmony import */ var _path_path_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./path/path.component */ "./src/app/path/path.component.ts");
/* harmony import */ var _path_pathlist_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./path/pathlist.component */ "./src/app/path/pathlist.component.ts");
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./employee/employee.component */ "./src/app/employee/employee.component.ts");
/* harmony import */ var _employee_employeelist_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./employee/employeelist.component */ "./src/app/employee/employeelist.component.ts");
/* harmony import */ var _customer_customer_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./customer/customer.component */ "./src/app/customer/customer.component.ts");
/* harmony import */ var _customer_customerlist_customerlist_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./customer/customerlist/customerlist.component */ "./src/app/customer/customerlist/customerlist.component.ts");
/* harmony import */ var _item_item_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./item/item.component */ "./src/app/item/item.component.ts");
/* harmony import */ var _item_itemlist_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./item/itemlist.component */ "./src/app/item/itemlist.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _cart_cartlist_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./cart/cartlist.component */ "./src/app/cart/cartlist.component.ts");

































































function myHttpLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _marksheet_marksheet_component__WEBPACK_IMPORTED_MODULE_9__["MarksheetComponent"],
                _marksheet_marksheet_list_component__WEBPACK_IMPORTED_MODULE_21__["MarksheetListComponent"],
                _student_student_component__WEBPACK_IMPORTED_MODULE_10__["StudentComponent"],
                _student_student_list_component__WEBPACK_IMPORTED_MODULE_23__["StudentListComponent"],
                _college_college_component__WEBPACK_IMPORTED_MODULE_11__["CollegeComponent"],
                _college_college_list_component__WEBPACK_IMPORTED_MODULE_22__["CollegeListComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_15__["DashboardComponent"],
                _login_forgotpassword_component__WEBPACK_IMPORTED_MODULE_17__["ForgotPasswordComponent"],
                _login_signup_component__WEBPACK_IMPORTED_MODULE_18__["SignUpComponent"],
                _message_message_component__WEBPACK_IMPORTED_MODULE_19__["MessageComponent"],
                _message_message_list_component__WEBPACK_IMPORTED_MODULE_20__["MessageListComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_24__["UserComponent"],
                _user_user_list_component__WEBPACK_IMPORTED_MODULE_25__["UserListComponent"],
                _role_role_component__WEBPACK_IMPORTED_MODULE_26__["RoleComponent"],
                _role_role_list_component__WEBPACK_IMPORTED_MODULE_29__["RoleListComponent"],
                _course_course_component__WEBPACK_IMPORTED_MODULE_27__["CourseComponent"],
                _subject_subject_component__WEBPACK_IMPORTED_MODULE_28__["SubjectComponent"],
                _subject_subject_list_component__WEBPACK_IMPORTED_MODULE_36__["SubjectListComponent"],
                _timetable_timetable_component__WEBPACK_IMPORTED_MODULE_30__["TimetableComponent"],
                _course_course_list_component__WEBPACK_IMPORTED_MODULE_31__["CourseListComponent"],
                _faculty_faculty_component__WEBPACK_IMPORTED_MODULE_32__["FacultyComponent"],
                _faculty_faculty_list_component__WEBPACK_IMPORTED_MODULE_33__["FacultyListComponent"],
                _timetable_timetable_list_component__WEBPACK_IMPORTED_MODULE_35__["TimetableListComponent"],
                _marksheet_marksheetmerit_list_component__WEBPACK_IMPORTED_MODULE_37__["MarksheetmeritListComponent"],
                _marksheet_getmarksheet_component__WEBPACK_IMPORTED_MODULE_38__["GetmarksheetComponent"],
                _user_changepassword_component__WEBPACK_IMPORTED_MODULE_39__["ChangepasswordComponent"],
                _loader_loader_component__WEBPACK_IMPORTED_MODULE_40__["LoaderComponent"],
                _file_file_component__WEBPACK_IMPORTED_MODULE_34__["FileComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_41__["NavbarComponent"],
                _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_42__["SpinnerComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_43__["FooterComponent"],
                _user_myprofile_component__WEBPACK_IMPORTED_MODULE_44__["MyprofileComponent"],
                _owner_owner_component__WEBPACK_IMPORTED_MODULE_46__["OwnerComponent"],
                _flate_flate_component__WEBPACK_IMPORTED_MODULE_47__["FlateComponent"],
                _owner_ownerlist_component__WEBPACK_IMPORTED_MODULE_48__["OwnerlistComponent"],
                _position_position_component__WEBPACK_IMPORTED_MODULE_49__["PositionComponent"],
                _position_positionlist_component__WEBPACK_IMPORTED_MODULE_50__["PositionlistComponent"],
                _asset_asset_component__WEBPACK_IMPORTED_MODULE_51__["AssetComponent"],
                _asset_assetlist_component__WEBPACK_IMPORTED_MODULE_52__["AssetListComponent"],
                _proprietor_proprietor_component__WEBPACK_IMPORTED_MODULE_53__["ProprietorComponent"],
                _proprietor_proprietorlist_component__WEBPACK_IMPORTED_MODULE_54__["ProprietorlistComponent"],
                _path_path_component__WEBPACK_IMPORTED_MODULE_55__["PathComponent"],
                _path_pathlist_component__WEBPACK_IMPORTED_MODULE_56__["PathlistComponent"],
                _employee_employee_component__WEBPACK_IMPORTED_MODULE_57__["EmployeeComponent"],
                _employee_employeelist_component__WEBPACK_IMPORTED_MODULE_58__["EmployeelistComponent"],
                _customer_customer_component__WEBPACK_IMPORTED_MODULE_59__["CustomerComponent"],
                _customer_customerlist_customerlist_component__WEBPACK_IMPORTED_MODULE_60__["CustomerListComponent"],
                _item_item_component__WEBPACK_IMPORTED_MODULE_61__["ItemComponent"],
                _item_itemlist_component__WEBPACK_IMPORTED_MODULE_62__["ItemListComponent"],
                _cart_cart_component__WEBPACK_IMPORTED_MODULE_63__["CartComponent"],
                _cart_cartlist_component__WEBPACK_IMPORTED_MODULE_64__["CartListComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateLoader"],
                        useFactory: myHttpLoader,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]]
                    }
                }),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
                    useClass: _auth_service_service__WEBPACK_IMPORTED_MODULE_45__["AuthService"],
                    multi: true
                },
                _http_service_service__WEBPACK_IMPORTED_MODULE_13__["HttpServiceService"],
                _utility_data_validator__WEBPACK_IMPORTED_MODULE_16__["DataValidator"],
                ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/asset/asset.component.css":
/*!*******************************************!*\
  !*** ./src/app/asset/asset.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fzc2V0L2Fzc2V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/asset/asset.component.html":
/*!********************************************!*\
  !*** ./src/app/asset/asset.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  asset works!\n</p>\n<app-navbar></app-navbar>\n\n<style>\n  .grad {\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\n    background-repeat: no-repeat;\n    background-size: 100%;\n    padding-bottom: 25px;\n  }\n\n  .background {\n    padding-top: 3%;\n    padding-bottom: 13%;\n    background: url('assets/files/wall.jpg') no-repeat center center;\n    background-attachment: fixed;\n    background-size: cover;\n    width: 100%;\n    height: auto;\n  }\n\n  .required-field {\n    color: red;\n  }\n\n  .alertRedColor {\n    color: red;\n  }\n</style>\n\n<div class=\"container-fluid background\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-sm-8 col-md-6 col-lg-4\">\n      <div class=\"card\">\n        <div class=\"card-body shadow-lg grad\">\n          <form name=\"assetForm\">\n            <h2 *ngIf=\"!form.data.id\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">\n              {{ 'Add Asset' | translate }}\n            </h2>\n            <h2 *ngIf=\"form.data.id\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">\n              {{ 'Update Asset' | translate }}\n            </h2>\n\n            <!-- Form error messages -->\n            <div *ngIf=\"form.error && form.message\" class=\"alert alert-danger alert-dismissible fade show\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n              {{ form.message }}\n            </div>\n            <div *ngIf=\"!form.error && form.message\" class=\"alert alert-success alert-dismissible fade show\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n              {{ form.message }}\n            </div>\n\n            <div class=\"form-group pt-2\">\n              <label><b>{{ 'Registration Number' | translate }}</b><span class=\"required-field\">*</span></label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-id-badge grey-text\"></i></div>\n                </div>\n                <input type=\"text\" name=\"registrationNumber\" [(ngModel)]=\"form.data.registrationNumber\" class=\"form-control\"\n                  (keydown)=\"filterInput($event, 'errorMessageRegistrationNumber', 20, '')\"\n                  placeholder=\"{{ 'Enter Registration Number' | translate }}\" required>\n              </div>\n              <span *ngIf=\"errorMessageRegistrationNumber\" class=\"alertRedColor\">{{ errorMessageRegistrationNumber }}</span>\n              <span *ngIf=\"form.inputerror?.registrationNumber\" class=\"alertRedColor\">{{ form.inputerror.registrationNumber }}</span>\n            </div>\n            \n            <div class=\"form-group pt-2\">\n              <label><b>{{ 'Acquisition Date' | translate }}</b><span class=\"required-field\">*</span></label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-calendar grey-text\"></i></div>\n                </div>\n                <input type=\"date\" name=\"acquisitionDate\" [value]=\"form.data.acquisitionDate | date:'yyyy-MM-dd'\" class=\"form-control\"\n                (input)=\"form.data.acquisitionDate=parseDate($event.target.value)\"\n                  placeholder=\"{{ 'Enter Acquisition Date' | translate }}\" required>\n              </div>\n              \n              <span *ngIf=\"form.inputerror?.acquisitionDate\" class=\"alertRedColor\">{{ form.inputerror.acquisitionDate }}</span>\n            </div>\n\n            <div class=\"form-group pt-2\">\n              <label><b>{{ 'Coverage Amount' | translate }}</b><span class=\"required-field\">*</span></label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-dollar-sign grey-text\"></i></div>\n                </div>\n                <input type=\"text\" name=\"coverageAmount\" [(ngModel)]=\"form.data.coverageAmount\" class=\"form-control\"\n                  (keydown)=\"filterInput($event, 'errorMessageCoverageAmount', 10, 'int')\"\n                  placeholder=\"{{ 'Enter Coverage Amount' | translate }}\" required>\n              </div>\n              <span *ngIf=\"errorMessageCoverageAmount\" class=\"alertRedColor\">{{ errorMessageCoverageAmount }}</span>\n              <span *ngIf=\"form.inputerror?.coverageAmount\" class=\"alertRedColor\">{{ form.inputerror.coverageAmount }}</span>\n            </div>\n\n            <div class=\"form-group pt-2\">\n              <label><b>{{ 'Paint Color' | translate }}</b><span class=\"required-field\">*</span></label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-paint-brush grey-text\"></i></div>\n                </div>\n                <select class=\"form-control\" name=\"paintColor\" [(ngModel)]=\"form.data.paintColor\" aria-label=\"ngSelected\" required>\n                  <option [ngValue]=\"undefined\">{{ 'Select Paint Color' | translate }}</option>\n                  <option *ngFor=\"let color of form.preload.paintColorList\" [value]=\"color.key\">{{ color.value }}</option>\n                </select>\n              </div>\n              <span *ngIf=\"form.inputerror?.paintColor\" class=\"alertRedColor\">{{ form.inputerror.paintColor }}</span>\n            </div>\n\n            <div class=\"row pt-2 pl-2 pb-3\">\n  \n              <div class=\"col-md-3\"></div>\n              \n              <div class=\"pt-2\">\n                <button *ngIf=\"!form.data.id > 0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\n                  {{ 'Save' | translate }}\n                </button>\n              </div>\n            \n              <div class=\"col-md-1\"></div>\n            \n              <div class=\"pt-2\">\n                <button *ngIf=\"form.data.id > 0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\n                  {{ 'Update' | translate }}\n                </button>\n              </div>\n              \n              <div class=\"pt-2\">\n                <a class=\"btn btn-warning mr-1\" type=\"button\" [routerLink]=\"['/assetlist']\"\n                   style=\"text-decoration: none; color: white;\">\n                  {{ 'List' | translate }}\n                </a>\n              </div>\n              \n            </div>\n            \n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/asset/asset.component.ts":
/*!******************************************!*\
  !*** ./src/app/asset/asset.component.ts ***!
  \******************************************/
/*! exports provided: AssetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetComponent", function() { return AssetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");





var AssetComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AssetComponent, _super);
    function AssetComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.ASSET, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.errorMessageTitle = '';
        return _this;
    }
    AssetComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.registrationNumber);
        flag = flag && validator.isNotNullObject(form.acquisitionDate);
        flag = flag && validator.isNotNullObject(form.coverageAmount);
        flag = flag && validator.isNotNullObject(form.paintColor);
        return flag;
    };
    AssetComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.registrationNumber = data.registrationNumber;
        form.acquisitionDate = data.acquisitionDate;
        form.coverageAmount = data.coverageAmount;
        form.paintColor = data.paintColor;
    };
    AssetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-asset',
            template: __webpack_require__(/*! ./asset.component.html */ "./src/app/asset/asset.component.html"),
            styles: [__webpack_require__(/*! ./asset.component.css */ "./src/app/asset/asset.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AssetComponent);
    return AssetComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/asset/assetlist.component.css":
/*!***********************************************!*\
  !*** ./src/app/asset/assetlist.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fzc2V0L2Fzc2V0bGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/asset/assetlist.component.html":
/*!************************************************!*\
  !*** ./src/app/asset/assetlist.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  assetlist works!\n</p>\n<app-navbar></app-navbar>\n\n<style>\n  #nnn {\n    background: none;\n    border: none;\n    cursor: pointer;\n  }\n\n  .panel-heading {\n    height: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .search-inputs {\n    margin-top: 20px;\n  }\n\n  .search-inputs .form-control,\n  .search-inputs .btn {\n    margin-bottom: 10px;\n  }\n\n  .content-wrapper {\n    background: url('assets/files/teahu.png') no-repeat center center;\n    background-attachment: fixed;\n    background-size: cover;\n    width: auto;\n    height: 105vh;\n    padding: 20px;\n  }\n\n  .table-responsive {\n    margin-top: 20px;\n  }\n\n  .search-inputs .col-sm-2,\n  .search-inputs .col-sm-1 {\n    padding: 0 5px;\n  }\n\n  .alertRedColor {\n    color: red;\n  }\n</style>\n<div class=\"content-wrapper\">\n  <div class=\"container-fluid\">\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\">\n        <h1 class=\"text-primary font-weight-bold\">{{ 'Asset List' | translate }}</h1>\n      </div>\n\n      <div class=\"row search-inputs p-1 justify-content-center\">\n        <div class=\"col-sm-2\">\n          <input type=\"text\" name=\"registrationNumber\" [(ngModel)]=\"form.searchParams.registrationNumber\" class=\"form-control\"\n          (keydown)=\"filterInput($event, 'errorMessageRegistrationNumber', 20, '')\"\n            placeholder=\"{{ 'Enter Registration Number' | translate }}\">\n            <span *ngIf=\"errorMessageRegistrationNumber\" class=\"alertRedColor\">{{ errorMessageRegistrationNumber }}</span>\n        </div>\n        <div class=\"col-sm-2\">\n          <input type=\"date\" name=\"acquisitionDate\" [(ngModel)]=\"form.searchParams.acquisitionDate\" class=\"form-control\"\n            placeholder=\"{{ 'Enter Acquisition Date' | translate }}\">\n        </div>\n\n        <div class=\"col-sm-2\">\n          <input type=\"text\" name=\"coverageAmount\" [(ngModel)]=\"form.searchParams.coverageAmount\" class=\"form-control\"\n            (keydown)=\"filterInput($event, 'errorMessageCoverageAmount', 10, 'int')\"\n            placeholder=\"{{ 'Enter Coverage Amount' | translate }}\">\n          <span *ngIf=\"errorMessageCoverageAmount\" class=\"alertRedColor\">{{ errorMessageCoverageAmount }}</span>\n        </div>\n\n        <div class=\"col-sm-2\">\n          <select class=\"form-control\" name=\"paintColor\" [(ngModel)]=\"form.searchParams.paintColor\" aria-label=\"ngSelected\" required>\n            <option [ngValue]=\"undefined\">{{ 'Select Paint Color' | translate }}</option>\n            <option *ngFor=\"let color of form.preload.paintColorList\" [value]=\"color.key\">{{ color.value }}</option>\n          </select>\n          \n        </div>\n\n        <div class=\"col-sm-1\">\n          <button (click)=\"submit()\" class=\"btn btn-primary\">{{ 'Search' | translate }}</button>\n        </div>\n\n        <div class=\"col-sm-2\">\n          <button (click)=\"forward('/asset')\" type=\"button\" class=\"btn btn-success\">\n            {{ 'Add Asset' | translate }}\n          </button>\n        </div>\n\n        <div class=\"col-sm-1\">\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">{{ 'Delete' | translate }}</button>\n        </div>\n      </div>\n\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{ form.message }}\n      </div>\n\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{ form.message }}\n      </div>\n\n      <div class=\"table-responsive\">\n        <table class=\"table table-bordered table-hover font-weight-bold text-dark\">\n          <thead class=\"thead-dark text-uppercase\">\n            <tr align=\"center\">\n              <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\"\n                  (change)=\"checkUncheckAll($event)\" /></th>\n              <th>{{ 'S.No' | translate }}</th>\n              <th>{{ 'Registration Number' | translate }}</th>\n              <th>{{ 'Acquisition Date' | translate }}</th>\n              <th>{{ 'Coverage Amount' | translate }}</th>\n              <th>{{ 'Paint Color' | translate }}</th>\n              <th>{{ 'Edit' | translate }}</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\n              <td><input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" [id]=\"m.id\" /></td>\n              <td>{{ (form.pageNo * 5) + i + 1 }}</td>\n              <td>{{ m.registrationNumber }}</td>\n              <td>{{ m.acquisitionDate | date:'yyyy-MM-dd' }}</td>\n              <td>{{ m.coverageAmount }}</td>\n              <td>{{ findSelValueByKey(m.paintColor,form.preload.paintColorList) }}</td>\n\n              <td>\n                <button class=\"fa fa-edit text-primary\" id=\"nnn\" (click)=\"forward('/asset/' + m.id)\">\n                </button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n\n        <div class=\"d-flex justify-content-between mt-3\">\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\">{{ 'Previous' | translate }}</button>\n\n          <div>\n            <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/assetlist']\" (click)=\"exit()\">\n              {{ 'Reset' | translate }}\n            </a>\n          </div>\n\n          <div *ngIf=\"form.list.length == 0\">\n            <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/assetlist']\" (click)=\"exit()\">\n              {{ 'Back' | translate }}\n            </a>\n          </div>\n          <button (click)=\"next()\" [disabled]=\"nextList == 0\" class=\"btn btn-info\">{{ 'Next' | translate }}</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/asset/assetlist.component.ts":
/*!**********************************************!*\
  !*** ./src/app/asset/assetlist.component.ts ***!
  \**********************************************/
/*! exports provided: AssetListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetListComponent", function() { return AssetListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var AssetListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AssetListComponent, _super);
    function AssetListComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.ASSET, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.myKey = "";
        _this.form = {
            error: false,
            message: null,
            preload: [],
            data: { id: null },
            inputerror: {},
            searchParams: {},
            searchMessage: null,
            list: [],
            pageNo: 0
        };
        return _this;
    }
    AssetListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-assetlist',
            template: __webpack_require__(/*! ./assetlist.component.html */ "./src/app/asset/assetlist.component.html"),
            styles: [__webpack_require__(/*! ./assetlist.component.css */ "./src/app/asset/assetlist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], AssetListComponent);
    return AssetListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/auth-service.service.ts":
/*!*****************************************!*\
  !*** ./src/app/auth-service.service.ts ***!
  \*****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http-service.service */ "./src/app/http-service.service.ts");



//Yeh interceptor ensure karta hai ki har ek HTTP request ke sath kuch extra 
//information (jaise user ka naam) headers mein bheji jaye,
// jo aapke server ko user-specific ya customized response dene mein madad kar sakti hai.
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.intercept = function (req, next) {
        if (localStorage.getItem('fname')) {
            req = req.clone({
                setHeaders: {
                    "withCredentials": "true",
                    "name": "Deepak",
                }
            });
        }
        console.log(req.headers.get("Authorization") + "------------------->>>");
        return next.handle(req);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service_service__WEBPACK_IMPORTED_MODULE_2__["HttpServiceService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/base-list.component.ts":
/*!****************************************!*\
  !*** ./src/app/base-list.component.ts ***!
  \****************************************/
/*! exports provided: BaseListCtl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseListCtl", function() { return BaseListCtl; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.component */ "./src/app/base.component.ts");



var BaseListCtl = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BaseListCtl, _super);
    function BaseListCtl(endpoint, locator, route) {
        var _this = _super.call(this, endpoint, locator, route) || this;
        _this.endpoint = endpoint;
        _this.locator = locator;
        _this.route = route;
        _this.deleteRecordList = [];
        _this.isMasterSel = false;
        _this.checkList = 0;
        return _this;
    }
    /**
     * Initialize component
     */
    BaseListCtl.prototype.ngOnInit = function () {
        this.preload();
        this.search();
        this.isMasterSel = false;
    };
    BaseListCtl.prototype.display = function () {
        this.search();
    };
    BaseListCtl.prototype.submit = function () {
        this.form.pageNo = 0;
        if (this.form.searchParams.roleId == "undefined" || this.form.searchParams.id == "undefined") {
            this.form.searchParams = {};
            this.search();
        }
        else {
            this.search();
        }
    };
    BaseListCtl.prototype.delete = function (id) {
        _super.prototype.delete.call(this, id, function () {
            this.search();
        });
    };
    BaseListCtl.prototype.next = function () {
        this.form.pageNo++;
        this.display();
        this.isMasterSel = false;
        //  this.searchOperation('previous');
    };
    BaseListCtl.prototype.exit = function () {
        location.reload();
    };
    BaseListCtl.prototype.previous = function () {
        if (this.form.pageNo > 0) {
            this.form.pageNo--;
            //  this.display(); 
            this.isMasterSel = false;
            this.searchOperation('previous');
        }
    };
    BaseListCtl.prototype.checkUncheckAll = function (event) {
        var checked = event.target.checked;
        this.checkboxes.forEach(function (element) {
            element.nativeElement.checked = checked;
        });
    };
    BaseListCtl.prototype.checklistUpdate = function () {
        var _this = this;
        this.isMasterSel = false;
        this.checkList = 0;
        this.checkboxes.forEach(function (element) {
            if (element.nativeElement.checked == true) {
                _this.checkList = _this.checkList + 1;
            }
        });
        if (this.checkList == this.form.list.length) {
            this.isMasterSel = true;
        }
    };
    //   deleteMany(){
    //   console.log('delete Many Records starts ');
    //   console.log('this.form.pageNo ' +this.form.pageNo);  
    //   var msg : String =''
    //   this.deleteRecordList.length=0;
    //   console.log('record deleting start ')
    //   var isRecordSelected:boolean = false ;
    //     this.checkboxes.forEach((element) => {
    //       if (element.nativeElement.checked) {
    //         // console.log('record deleting ' + element.nativeElement.id)
    //         this.deleteRecordList.push(element.nativeElement.id);
    //         isRecordSelected = true ;
    //       }
    //     });     
    //     if(isRecordSelected){
    //       console.log('record(s) for delete ' + this.deleteRecordList)        
    //       this.serviceLocator.httpService.get(this.api.deleteMany + "/" + this.deleteRecordList + '?pageNo=' +this.form.pageNo, function (res) {
    //         if (res.success) {
    //             console.log('Inside response success ')
    //           //  this.deleteMany();
    //          //  this.form.message = "Data is deleted";
    //        //  msg ="Data is deleted";
    //         //  this.form.message = res.result.message;
    //           console.log('deleteMany Calling Callback'); 
    //           this.search();  
    //     } else {
    //       this.form.error = true;
    //       this.form.message = res.result.message;
    //     }
    //   });
    //   this.form.message = "Data is deleted" ;
    //   console.log('this.form.pageNo ' +this.form.pageNo);  
    //     }else{
    //       this.form.message = "Select Atleast One Record";
    //         this.form.error = true;
    //     console.log('No record(s) for delete ')
    //   }
    //   console.log('delete Many Records ends ');
    // }
    BaseListCtl.prototype.deleteMany = function () {
        var _this = this;
        console.log('delete Many Records starts ');
        console.log('this.form.pageNo ' + this.form.pageNo);
        this.form.error = false;
        this.deleteRecordList.length = 0;
        console.log('record deleting start ');
        var isRecordSelected = false;
        this.form.pageNo = 0;
        this.checkboxes.forEach(function (element) {
            if (element.nativeElement.checked) {
                // console.log('record deleting ' + element.nativeElement.id)
                _this.deleteRecordList.push(element.nativeElement.id);
                isRecordSelected = true;
            }
        });
        if (isRecordSelected) {
            console.log('record(s) for delete ' + this.deleteRecordList);
            _super.prototype.deleteMany.call(this, this.deleteRecordList + '?pageNo=' + this.form.pageNo, function () {
                //  this.search();  
            });
        }
        else {
            this.form.message = "Select Atleast One Record";
            this.form.error = true;
            console.log('No record(s) for delete ');
        }
        this.isMasterSel = false;
        console.log('delete Many Records ends ');
    };
    BaseListCtl.prototype.generateReport = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])("checkboxes"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], BaseListCtl.prototype, "checkboxes", void 0);
    return BaseListCtl;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/base.component.ts":
/*!***********************************!*\
  !*** ./src/app/base.component.ts ***!
  \***********************************/
/*! exports provided: BaseCtl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseCtl", function() { return BaseCtl; });
var BaseCtl = /** @class */ (function () {
    /**
     * Initialize services
     *
     * @param serviceLocator
     * @param route
     */
    function BaseCtl(endpoint, serviceLocator, route) {
        this.endpoint = endpoint;
        this.serviceLocator = serviceLocator;
        this.route = route;
        this.api = {
            endpoint: null,
            get: null,
            save: null,
            search: null,
            delete: null,
            deleteMany: null,
            preload: null,
            report: null,
            address: null
        };
        /**
         * Form contains preload data, error/sucess message
         */
        this.form = {
            error: false,
            message: null,
            preload: [],
            data: { id: null },
            inputerror: {},
            searchParams: {},
            searchMessage: null,
            list: [],
            pageNo: 0
        };
        this.nextList = 0;
        var _self = this;
        _self.initApi(endpoint);
        /**
         * Get primary key from path variale
         */
        serviceLocator.getPathVariable(route, function (params) {
            _self.form.data.id = params["id"];
            console.log('I GOT ID', _self.form.data.id);
        });
    }
    BaseCtl.prototype.initApi = function (ep) {
        this.api.endpoint = ep;
        this.api.get = ep + "/get";
        this.api.save = ep + "/save";
        this.api.search = ep + "/search";
        this.api.delete = ep + "/delete";
        this.api.deleteMany = ep + "/deleteMany";
        this.api.preload = ep + "/preload";
        this.api.report = ep + "/report";
        this.api.address = ep + "/address";
        console.log("API", this.api);
    };
    /**
     * Initialize component
     */
    BaseCtl.prototype.ngOnInit = function () {
        this.preload();
        if (this.form.data.id && this.form.data.id > 0) {
            this.display();
        }
    };
    /**
     * Loded preload data
     */
    BaseCtl.prototype.preload = function () {
        console.log("preload start");
        var _self = this;
        this.serviceLocator.httpService.get(_self.api.preload, function (res) {
            console.log("base list preload", _self.api.preload);
            if (res.success) {
                _self.form.preload = res.result;
            }
            else {
                _self.form.error = true;
                _self.form.message = res.result.message;
            }
            console.log('FORM', _self.form);
        });
    };
    BaseCtl.prototype.validate = function () {
        return this.validateForm(this.form.data);
    };
    /**
     * Override by childs
     *
     * @param form
     */
    BaseCtl.prototype.validateForm = function (form) {
    };
    /**
     * Searhs records
     */
    BaseCtl.prototype.search = function () {
        console.log("search start");
        var _self = this;
        console.log("Search Form", _self.form.searchParams);
        this.serviceLocator.httpService.post(_self.api.search + "/" + _self.form.pageNo, _self.form.searchParams, function (res) {
            if (res.success) {
                _self.form.list = res.result.data;
                _self.nextList = res.result.nextList;
                if (_self.form.list.length == 0) {
                    _self.form.message = "No record found";
                    _self.form.error = true;
                }
                console.log("List Size", _self.form.list.length);
            }
            else {
                _self.form.error = false;
                _self.form.message = res.result.message;
            }
            console.log('FORM', _self.form);
        });
    };
    BaseCtl.prototype.searchOperation = function (operation) {
        console.log("previous/next search start");
        var _self = this;
        console.log("Search Form", _self.form.searchParams);
        this.serviceLocator.httpService.post(_self.api.search + "/" + _self.form.pageNo, _self.form.searchParams, function (res) {
            if (operation == 'next' || operation == 'previous') {
                _self.nextList = res.result.nextList;
                _self.form.message = null;
                _self.form.error = false;
            }
            if (res.success) {
                _self.form.list = res.result.data;
                if (_self.form.list.length == 0) {
                    _self.form.message = "No record found";
                    _self.form.error = true;
                }
                console.log("List Size", _self.form.list.length);
            }
            else {
                _self.form.error = false;
                _self.form.message = res.result.message;
            }
            console.log('FORM', _self.form);
        });
    };
    /**
     * Contains display logic. It fetches data from database for the primary key
     */
    BaseCtl.prototype.display = function () {
        var _self = this;
        console.log('Inside display method');
        this.serviceLocator.httpService.get(_self.api.get + "/" + _self.form.data.id, function (res) {
            _self.form.data.id = 0;
            if (res.success) {
                _self.populateForm(_self.form.data, res.result.data);
            }
            else {
                _self.form.error = true;
                _self.form.message = res.result.message;
            }
            console.log('FORM', _self.form);
        });
    };
    /**
     * Populate HTML form data
     * Overridden by child classes.
     *
     * @param form
     * @param data
     */
    BaseCtl.prototype.populateForm = function (form, data) {
        form.id = data.id;
        console.log(form.iduser + 'formid in base ctl populate form');
    };
    /**
     * Contains submit logic. It saves data
     */
    BaseCtl.prototype.submit = function () {
        var _self = this;
        console.log(this.form + "submit running start");
        console.log("form data going to be submit" + this.form.data);
        //  console.log("form data going to be submit" + this.studentId);
        this.serviceLocator.httpService.post(this.api.save, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.inputerror = {};
            console.log('dataa ===== > ', res.result.data);
            if (res.success) {
                _self.form.message = "Data is saved";
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                //  console.log("--------------------.");
                //return _self.form.data.id ;
            }
            else {
                _self.form.error = true;
                if (res.result.inputerror) {
                    _self.form.inputerror = res.result.inputerror;
                }
                _self.form.message = res.result.message;
            }
            _self.form.data.id = res.result.data.id;
            console.log('FORM', _self.form);
        });
    };
    BaseCtl.prototype.delete = function (id, callback) {
        var _self = this;
        this.serviceLocator.httpService.get(_self.api.delete + "/" + id, function (res) {
            if (res.success) {
                _self.form.message = "Data is deleted";
                if (callback) {
                    console.log('Response Success and now Calling Callback');
                    //  callback();  
                    this.search();
                }
            }
            else {
                _self.form.error = true;
                _self.form.message = res.result.message;
            }
        });
    };
    BaseCtl.prototype.deleteMany = function (id, callback) {
        var _self = this;
        this.serviceLocator.httpService.post(_self.api.deleteMany + "/" + id, this.form.searchParams, function (res) {
            if (res.success) {
                _self.form.message = "Data is deleted";
                if (callback) {
                    console.log('Response Success and now Calling Callback');
                    _self.form.list = res.result.data;
                    console.log("List ::  ", +res.data);
                    console.log("List Size", _self.form.list.length);
                    //  callback();       
                }
            }
            else {
                _self.form.error = true;
                _self.form.message = res.result.message;
            }
        });
    };
    BaseCtl.prototype.generateReport = function () {
        var _self = this;
        console.log('********* Generating Report ********************');
        this.serviceLocator.httpService.get(_self.api.report, function (res) {
            if (res.success) {
                console.log('*********  Report Generated ********************');
                alert('pass');
            }
            else {
                console.log('********* Error in Generating Report  ********************');
                alert('fail');
            }
        });
    };
    /**
     * Forward to page
     * @param page
     */
    BaseCtl.prototype.forward = function (page) {
        console.log(page + '--->>page value');
        this.serviceLocator.forward(page);
    };
    BaseCtl.prototype.filterInput = function (event, errorField, maxLength, type) {
        var _this = this;
        var charCode = event.which ? event.which : event.keyCode;
        var charStr = String.fromCharCode(charCode);
        var allowedChars;
        var errorMsg, lerrorMsg;
        switch (type) {
            case 'int':
                allowedChars = /^[0-9]$/; // Allows numbers and numpad keys
                errorMsg = 'Only integers are allowed.';
                lerrorMsg = 'digits';
                break;
            case 'double':
                allowedChars = /^[0-9.]$/;
                errorMsg = 'Only numbers are allowed.';
                lerrorMsg = 'digits';
                break;
            case 'char':
                allowedChars = /^[a-zA-Z\s.]$/;
                errorMsg = 'Only letters are allowed.';
                lerrorMsg = 'characters';
            default:
                allowedChars = /^[a-zA-Z\s.]$/;
                errorMsg = 'Only letters are allowed.';
                lerrorMsg = 'characters';
                break;
        }
        var inputElement = event.target;
        var input = inputElement.value;
        // Numpad key codes range from 96 (Numpad 0) to 105 (Numpad 9)
        var isNumpadKey = charCode >= 96 && charCode <= 105;
        // Check if the typed character matches the allowed characters
        if ((!allowedChars.test(charStr) && charCode !== 8 && charCode !== 32 && charCode !== 16 && charCode !== 46)
            || (type === 'char' && isNumpadKey)) {
            event.preventDefault();
            this[errorField] = errorMsg;
        }
        else if (charCode !== 8 && input.length >= maxLength) {
            event.preventDefault();
            this[errorField] = "Only " + maxLength + " " + lerrorMsg + " are allowed.";
        }
        else {
            this[errorField] = '';
        }
        inputElement.addEventListener('blur', function () {
            _this[errorField] = '';
        });
        console.log('Input:', input);
    };
    BaseCtl.prototype.findSelValueByKey = function (selKey, preloadList) {
        if (preloadList) {
            console.log("preloadList:", preloadList);
            console.log("Searching for selKey:", selKey);
            var sel = preloadList.find(function (a) { return a.key === Number(selKey); });
            console.log("Found sel:", sel);
            return sel ? sel.value : '';
        }
        return '';
    };
    BaseCtl.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    return BaseCtl;
}());



/***/ }),

/***/ "./src/app/cart/cart.component.css":
/*!*****************************************!*\
  !*** ./src/app/cart/cart.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcnQvY2FydC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/cart/cart.component.html":
/*!******************************************!*\
  !*** ./src/app/cart/cart.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<style>\n  .grad {\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\n    background-repeat: no-repeat;\n    background-size: 100%;\n    padding-bottom: 25px;\n  }\n\n  .background {\n    padding-top: 3%;\n    padding-bottom: 13%;\n    background: url('assets/files/wall.jpg') no-repeat center center;\n    background-attachment: fixed;\n    background-size: cover;\n    width: 100%;\n    height: auto;\n  }\n\n  .required-field {\n    color: red;\n  }\n\n  .alertRedColor {\n    color: red;\n  }\n</style>\n\n<div class=\"container-fluid background\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-sm-8 col-md-6 col-lg-4\">\n      <div class=\"card\">\n        <div class=\"card-body shadow-lg grad\">\n          <form name=\"cartForm\">\n            <h2 *ngIf=\"!form.data.id > 0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{ 'Add Cart Overview'\n              | translate }}</h2>\n            <h2 *ngIf=\"form.data.id > 0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{ 'Update\n              Cart' | translate }}</h2>\n\n            <!-- Form error messages -->\n            <div *ngIf=\"form.error && form.message\" class=\"alert alert-danger alert-dismissible fade show\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n              {{ form.message }}\n            </div>\n\n            <div *ngIf=\"!form.error && form.message\" class=\"alert alert-success alert-dismissible fade show\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n              {{ form.message }}\n            </div>\n\n            <div class=\"form-group pt-2\">\n              <label><b>{{ 'customerName' | translate }}</b><span class=\"required-field\">*</span></label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i></div>\n                </div>\n                <input type=\"text\" name=\"customerName\" [(ngModel)]=\"form.data.customerName\" class=\"form-control\"\n                  (keydown)=\"filterInput($event, 'errorMessagecustomerName', 20, 'char')\"\n                  placeholder=\"{{ 'Enter customerName' | translate }}\">\n              </div>\n              <span *ngIf=\"errorMessagecustomerName\" class=\"alertRedColor\">{{ errorMessagecustomerName }}</span>\n              <span *ngIf=\"form.inputerror?.customerName\" class=\"alertRedColor\">{{ form.inputerror.customerName }}</span>\n            </div>\n\n          \n            <div class=\"form-group\">\n              <label><b>{{ 'Product' | translate }}</b><span class=\"required-field\">*</span></label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i></div>\n                </div>\n                <select class=\"form-control\" name=\"product\" [(ngModel)]=\"form.data.product\" aria-label=\"ngSelected\">\n                  <option [ngValue]=\"undefined\">{{ 'Select product' | translate }}</option>\n                  <option *ngFor=\"let product of form.preload.Cartlist\" [value]=\"product\">{{ product }}</option>\n                </select>\n              </div>\n              <span *ngIf=\"form.inputerror.product\" class=\"alertRedColor\">{{ form.inputerror.product }}</span>\n            </div>\n            \n            <div class=\"form-group pt-2\">\n              <label><b>{{ 'Transation Date' | translate }}</b><span class=\"required-field\">*</span></label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-calendar grey-text\"></i></div>\n                </div>\n                <input type=\"date\" name=\"transationDate\" [value]=\"form.data.transationDate | date:'yyyy-MM-dd'\" class=\"form-control\"\n                (input)=\"form.data.transationDate=parseDate($event.target.value)\"\n                  placeholder=\"{{ 'Enter Transation Date' | translate }}\" required>\n              </div>\n              \n              <span *ngIf=\"form.inputerror?.transationDate\" class=\"alertRedColor\">{{ form.inputerror.transationDate }}</span>\n            </div>\n\n            <div class=\"form-group pt-2\">\n              <label><b>{{ 'quantityOrdered' | translate }}</b><span class=\"required-field\">*</span></label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-mobile grey-text\"></i></div>\n                </div>\n                <input type=\"text\" name=\"quantityOrdered\" [(ngModel)]=\"form.data.quantityOrdered\" class=\"form-control\"\n                (keydown)=\"filterInput($event, 'errorMessagequantityOrdered', 10, 'int')\"\n                  placeholder=\"{{ 'Enter quantityOrdered' | translate }}\" >\n              </div>\n              <span *ngIf=\"errorMessagequantityOrdered\" class=\"alertRedColor\">{{ errorMessagequantityOrdered }}</span>\n              <span *ngIf=\"form.inputerror?.quantityOrdered\" class=\"alertRedColor\">{{ form.inputerror.quantityOrdered }}</span>\n            </div>\n\n\n            <!-- Form buttons -->\n            <div class=\"form-group text-center\">\n              <button (click)=\"submit()\" class=\"btn btn-success mr-2\">{{ 'Save' | translate }}</button>\n              <button (click)=\"forward('/cartlist')\" type=\"button\" class=\"btn btn-warning\">{{ 'List' | translate\n                }}</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");





var CartComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CartComponent, _super);
    function CartComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.CART, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.errorMessageTitle = '';
        return _this;
    }
    CartComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.customerName);
        flag = flag && validator.isNotNullObject(form.product);
        flag = flag && validator.isNotNullObject(form.quantityOrdered);
        flag = flag && validator.isNotNullObject(form.transationDate);
        return flag;
    };
    CartComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.customerName = data.customerName;
        form.product = data.product;
        form.quantityOrdered = data.quantityOrdered;
        form.transationDate = data.transationDate;
    };
    CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/cart/cart.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CartComponent);
    return CartComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/cart/cartlist.component.css":
/*!*********************************************!*\
  !*** ./src/app/cart/cartlist.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcnQvY2FydGxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/cart/cartlist.component.html":
/*!**********************************************!*\
  !*** ./src/app/cart/cartlist.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<style>\n  #nnn {\n    background: none;\n    border: none;\n    cursor: pointer;\n  }\n\n  .panel-heading {\n    height: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .search-inputs {\n    margin-top: 20px;\n  }\n\n  .search-inputs .form-control,\n  .search-inputs .btn {\n    margin-bottom: 10px;\n  }\n\n  .content-wrapper {\n    background: url('assets/files/1024.jpg') no-repeat center center;\n    background-attachment: fixed;\n    background-size: cover;\n    width: auto;\n    height: 105vh;\n    padding: 20px;\n  }\n\n  .table-responsive {\n    margin-top: 20px;\n  }\n\n  .search-inputs .col-sm-2,\n  .search-inputs .col-sm-1 {\n    padding: 0 5px;\n  }\n\n  .alertRedColor {\n    color: red;\n  }\n</style>\n\n<div class=\"content-wrapper\">\n  <div class=\"container-fluid\">\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\">\n        <h1 class=\"text-primary font-weight-bold\">{{ 'Cart Overview List' | translate }}</h1>\n      </div>\n\n      <div class=\"row search-inputs p-1 justify-content-center\">\n        <div class=\"col-sm-2\">\n          <input type=\"text\" name=\"customerName\" [(ngModel)]=\"form.searchParams.customerName\" class=\"form-control\"\n            (keydown)=\"filterInput($event, 'errorMessagecustomerName', 20, 'char')\"\n            placeholder=\"{{ 'Enter customerName' | translate }}\">\n\n          <span *ngIf=\"errorMessagecustomerName\" class=\"alertRedColor\">{{ errorMessagecustomerName }}</span>\n        </div>\n\n        <div class=\"col-sm-2\">\n          <input type=\"date\" name=\"transationDate\" [(ngModel)]=\"form.searchParams.transationDate\" class=\"form-control\"\n            placeholder=\"{{ 'Enter Transation Date' | translate }}\">\n        </div>\n\n\n        <div class=\"col-sm-2\">\n          <input type=\"text\" name=\"quantityOrdered\" [(ngModel)]=\"form.searchParams.quantityOrdered\" class=\"form-control\"\n            (keydown)=\"filterInput($event, 'errorMessagequantityOrdered', 10, 'int')\"\n            placeholder=\"{{ 'Enter quantityOrdered' | translate }}\">\n          <span *ngIf=\"errorMessagequantityOrdered\" class=\"alertRedColor\">{{ errorMessagequantityOrdered }}</span>\n        </div>\n        \n        <div class=\"col-sm-2\">\n          <select class=\"form-control\" name=\"product\" [(ngModel)]=\"form.searchParams.product\" aria-label=\"ngSelected\">\n            <option [ngValue]=\"undefined\">{{ 'Select product' | translate }}</option>\n            <option *ngFor=\"let product of form.preload.Cartlist\" [value]=\"product\">{{ product }}</option>\n          </select>\n          <span *ngIf=\"form.inputerror.product\" class=\"alertRedColor\">{{ form.inputerror.product }}</span>\n        </div>\n\n      \n\n      \n\n        <div class=\"col-sm-1\">\n          <button (click)=\"submit()\" class=\"btn btn-primary\">{{ 'Search' | translate }}</button>\n        </div>\n\n        <div class=\"col-sm-2\">\n          <button (click)=\"forward('/cart')\" type=\"button\" class=\"btn btn-success\">\n            {{ 'Add Cart' | translate }}\n          </button>\n        </div>\n\n        <div class=\"col-sm-1\">\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">{{ 'Delete' | translate }}</button>\n        </div>\n      </div>\n\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{ form.message }}\n      </div>\n\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{ form.message }}\n      </div>\n\n      <div class=\"table-responsive\">\n        <table class=\"table table-bordered table-hover font-weight-bold text-dark\">\n          <thead class=\"thead-dark text-uppercase\">\n            <tr align=\"center\">\n              <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\"\n                  (change)=\"checkUncheckAll($event)\" /></th>\n              <th>{{ 'S.No' | translate }}</th>\n              <th>{{ 'CUSTOMERNAME' | translate }}</th>\n              <th>{{ 'PRODUCT' | translate }}</th>\n              <th>{{ 'QUANTITYORDERED' | translate }}</th>\n              <th>{{ 'TRANSACTIONDATE' | translate }}</th>\n              <th>{{ 'Edit' | translate }}</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\n              <td><input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" [id]=\"m.id\" />\n              </td>\n              <td>{{ (form.pageNo * 5) + i + 1 }}</td>\n              <td>{{ m.customerName }}</td>\n              <td>{{ m.product }}</td>\n              <td>{{ m.quantityOrdered}}</td>\n              <td>{{ m.transationDate | date:'yyyy-MM-dd'}}</td>\n              \n\n              <td>\n                <button class=\"fa fa-edit text-primary\" id=\"nnn\" (click)=\"forward('/cart/' + m.id)\">\n                </button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n\n        <div class=\"d-flex justify-content-between mt-3\">\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\">{{ 'Previous' | translate\n            }}\n          </button>\n          <div *ngIf=\"form.list.length == 0\">\n            <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/Cartlist']\" (click)=\"exit()\">\n              {{ 'Back' | translate }}\n            </a>\n          </div>\n          <button (click)=\"next()\" [disabled]=\"nextList == 0\" class=\"btn btn-info\">{{ 'Next' | translate }}</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/cart/cartlist.component.ts":
/*!********************************************!*\
  !*** ./src/app/cart/cartlist.component.ts ***!
  \********************************************/
/*! exports provided: CartListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartListComponent", function() { return CartListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_base_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var src_app_service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service-locator.service */ "./src/app/service-locator.service.ts");





var CartListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CartListComponent, _super);
    function CartListComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.CART, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.myKey = "";
        _this.form = {
            error: false,
            message: null,
            preload: [],
            data: { id: null },
            inputerror: {},
            searchParams: {},
            searchMessage: null,
            list: [],
            pageNo: 0
        };
        _this.isValidexperienceInput = true; // Property to track validity of cost input
        _this.isValidtitleInput = true; // Property to track validity of description input
        return _this;
    }
    CartListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cartlist',
            template: __webpack_require__(/*! ./cartlist.component.html */ "./src/app/cart/cartlist.component.html"),
            styles: [__webpack_require__(/*! ./cartlist.component.css */ "./src/app/cart/cartlist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], CartListComponent);
    return CartListComponent;
}(src_app_base_list_component__WEBPACK_IMPORTED_MODULE_3__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/college/college-list.component.html":
/*!*****************************************************!*\
  !*** ./src/app/college/college-list.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"content-wrapper\" style=\"padding-top: 3%;padding-bottom: 15%;\nbackground: url(assets/files/211.jpg) no-repeat center center;\n background-repeat: no-repeat;\nbackground-attachment: fixed;\nbackground-size: cover;width:auto;\n  height: 90vh;\" >\n  <div class=\"container-fluid\">\n\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\" style=\"height: 70px;\">\n       <div class=\"text-center\">\n          <h1 class=\"text-white font-weight-bold\">{{'College List' | translate }}</h1>\n        </div>\n      </div> \n\n      <div class=\"row p-1\">\n        <div class=\"col-sm-1\"></div>\n        <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.name\"\n            placeholder=\"{{'Search Name' | translate}}\">\n\n        </div>\n        <!-- <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.loginId\" placeholder=\"{{'Search Email' | translate}}\">\n        </div> -->\n        <div class=\"col-sm-2\">\n\n          <select class=\"form-control\" name=\"id\" [(ngModel)]=\"form.searchParams.id\" aria-label=\"ngSelected\">\n            <option [ngValue]=\"\" value=\"undefined\">{{' Select name' | translate }}</option>\n            <option *ngFor=\"let obj of form.preload.collegeList\" [value]=\"obj.key\">{{obj.value}}</option>\n          </select>\n        </div>\n\n        \n        <div class=\"col-sm-2\">\n          <!-- <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.status\" placeholder=\"{{'Search Status' | translate}}\"> -->\n        </div>\n        <div class=\"col-sm-1 ml-3\">\n          <button (click)=\"submit()\" class=\"btn btn-primary\">\n            {{'Search' | translate }}</button>\n        </div>\n        <div class=\"col-lg-2 ml-4\">\n          <button (click)=\"forward('/college')\" type=\"button\" class=\"btn btn-success\">{{'Add College' | translate}}\n          </button>\n        </div>\n\n        <div class=\"col-sm-1\">\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\n            {{'Delete'| translate}}</button>\n        </div>\n      </div>\n\n     \n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n\n      <div class=\"p-1\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-bordered table-striped table-hover font-weight-bold text-white\">\n            <thead class=\"thead-light text-uppercase\">\n              <tr>\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\" value=\"h1\" (change)=\"checkUncheckAll($event)\"/></th>\n                <th>{{'S.No.' | translate }}</th>\n                <th>{{'Name' | translate }}</th>\n                <th>{{'Address' | translate }}</th>\n                <th>{{'Phone' | translate }}</th>\n                <th>{{'City' | translate }}</th>\n                <th>{{'State' | translate }}</th>\n                <th>{{'Edit' | translate}}</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let m of form.list; let i = index\">\n                <td> <input type=\"checkbox\"  #checkboxes (change)=\"checklistUpdate()\"  name=\"list_name\"  id=\"{{m.id}}\" value=\"{{isMasterSel}}\"/>\n                </td>\n                <td> {{(form.pageNo*5)+i+ 1}} </td>\n                <td> {{ m.name }} </td>\n                <td> {{ m.address }} </td>\n                <td> {{ m.phoneNo }} </td>\n                <td> {{ m.city }} </td>\n                <td> {{ m.state }} </td>\n                <td>\n                  <a (click)=\"forward( '/college/' +  m.id)\" style=\"cursor: pointer;\">\n                    <i class=\"fa fa-edit text-info\"></i>\n                  </a>\n                  <!-- /\n                  <a (click)=\"delete(m.id)\" style=\"cursor: pointer;\">\n                    <i class=\"fa fa-trash text-danger\"></i>\n                  </a> -->\n                </td>\n                \n              </tr>\n            </tbody>\n            </table>\n              <table style=\"width: 100%;\">\n                <tr>\n                  <td style=\"width: 50%;\">\n              <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous' | translate\n                }} </button></td>\n                <td *ngIf=\"form.list.length!=0\" style=\"width: 50%;\"></td>\n                <td *ngIf=\"form.list.length==0\" style=\"width: 50%;\"><a class=\"btn btn-warning mr-1\" [routerLink]=\"['/collegelist']\"  (click)=\"exit()\">{{'Back' | translate}}</a></td>\n    \n    \n            \n                <td><button (click)=\"next()\" [disabled]=\"nextList==0\" type=\"button\" class=\"btn btn-info\"> {{'Next' |\n                  translate }}</button></td>\n                </tr>\n                </table>\n    \n            \n          \n        </div>\n      </div>\n\n    </div>\n\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/college/college-list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/college/college-list.component.ts ***!
  \***************************************************/
/*! exports provided: CollegeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollegeListComponent", function() { return CollegeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");





var CollegeListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CollegeListComponent, _super);
    function CollegeListComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.COLLEGE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    CollegeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-college-list',
            template: __webpack_require__(/*! ./college-list.component.html */ "./src/app/college/college-list.component.html"),
            styles: [__webpack_require__(/*! ./college.component.css */ "./src/app/college/college.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CollegeListComponent);
    return CollegeListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_4__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/college/college.component.css":
/*!***********************************************!*\
  !*** ./src/app/college/college.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alertRedColor {\n    color: red;\n}\n\n\n.required-field::after { \t\t\n  content: \"*\";\t\t\n  color: red;\t\t\n   }\n\n\n.successColor{\n    color: green;\n   }\n\n\n.btn-space {\n    margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29sbGVnZS9jb2xsZWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2Q7OztBQUdBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7R0FDVDs7O0FBRUE7SUFDQyxZQUFZO0dBQ2I7OztBQUVBO0lBQ0MsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29sbGVnZS9jb2xsZWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxlcnRSZWRDb2xvciB7XG4gICAgY29sb3I6IHJlZDtcbn1cblxuXG4ucmVxdWlyZWQtZmllbGQ6OmFmdGVyIHsgXHRcdFxuICBjb250ZW50OiBcIipcIjtcdFx0XG4gIGNvbG9yOiByZWQ7XHRcdFxuICAgfVx0XG5cbiAgIC5zdWNjZXNzQ29sb3J7XG4gICAgY29sb3I6IGdyZWVuO1xuICAgfVxuXG4gICAuYnRuLXNwYWNlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/college/college.component.html":
/*!************************************************!*\
  !*** ./src/app/college/college.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<style>\n  .grad{\n background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\n background-repeat: no repeat;\n background-size: 100%;\n padding-bottom: 25px\n ;\n }\n</style>\n\n<div class=\"row \" style=\"padding-top: 3%; padding-bottom:3%;\nbackground: url(assets/files/wall.jpg) no-repeat center center;\nbackground-attachment: fixed;\nbackground-size: cover;width:auto;\n  height: auto;\">\n\n  <div class=\"col-sm-4\"></div>\n  <div class=\"col-sm-4\">\n    <div class=\"card\">\n      <div class=\"card-body shadow-lg grad\">\n        <form>\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Add College' | translate }}</h2>\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Update College' | translate }}</h2>\n\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Name' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"name\" [(ngModel)]=\"form.data.name\" class=\"form-control\"\n                  placeholder=\"{{'Enter Name' | translate }}\">\n              </div>\n            </div><span class=\"alertRedColor\"> {{form.inputerror.name}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Address' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-map-marker grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"addr\" [(ngModel)]=\"form.data.address\" class=\"form-control\"\n                  placeholder=\"{{'Enter Address' | translate }}\">\n              </div>\n              <span class=\"alertRedColor\"> {{form.inputerror.address}} </span>\n            </div>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'City' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-location-arrow grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"city\" [(ngModel)]=\"form.data.city\" class=\"form-control\"\n                  placeholder=\"{{'Enter City' | translate }}\">\n              </div>\n              <span class=\"alertRedColor\"> {{form.inputerror.city}} </span>\n            </div>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'State' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-address-card grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"state\" [(ngModel)]=\"form.data.state\" class=\"form-control\"\n                  placeholder=\"{{'Enter State' | translate }}\">\n              </div>\n              <span class=\"alertRedColor\"> {{form.inputerror.state}} </span>\n            </div>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Phone No.' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-phone grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"phnNo\" [(ngModel)]=\"form.data.phoneNo\" class=\"form-control\"\n                  placeholder=\"{{'Enter Phone No.' | translate }}\">\n              </div>\n              <span class=\"alertRedColor\"> {{form.inputerror.phoneNo}} </span>\n            </div>\n          </div>\n\n          <div class=\"row pt-3 pl-3 pb-3\">\n            <div class=\"pt-2\">\n              <button *ngIf=\"!form.data.id>0\" (click)=\"submit()\" [disabled]=\"!validate()\" class=\"btn btn-success mr-2\">\n                {{'Save' | translate }}</button>\n            </div>\n            <div class=\"pt-2\">\n              <button *ngIf=\"form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\n                {{'Update' | translate }}</button>\n            </div>\n\n            <div class=\"pl-3 pt-2\">\n              <button (click)=\"forward('/collegelist')\" type=\"button\"\n                class=\"btn btn-warning mr-1\">{{'List' | translate }}\n              </button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/college/college.component.ts":
/*!**********************************************!*\
  !*** ./src/app/college/college.component.ts ***!
  \**********************************************/
/*! exports provided: CollegeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollegeComponent", function() { return CollegeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var CollegeComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CollegeComponent, _super);
    function CollegeComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.COLLEGE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    CollegeComponent.prototype.validate = function () {
        return this.validateForm(this.form.data);
    };
    CollegeComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.name);
        flag = flag && validator.isNotNullObject(form.phoneNo);
        return flag;
    };
    CollegeComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.name = data.name;
        form.address = data.address;
        form.state = data.state;
        form.city = data.city;
        form.phoneNo = data.phoneNo;
        console.log('Populated Form', form);
    };
    CollegeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-college',
            template: __webpack_require__(/*! ./college.component.html */ "./src/app/college/college.component.html"),
            styles: [__webpack_require__(/*! ./college.component.css */ "./src/app/college/college.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], CollegeComponent);
    return CollegeComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/course/course-list.component.html":
/*!***************************************************!*\
  !*** ./src/app/course/course-list.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"content-wrapper\"\n style=\"padding-top: 3%;\npadding-bottom: 15%;\nbackground: url(assets/files/wav1.jpg) no-repeat center center;\n background-repeat: no-repeat;\nbackground-attachment: fixed;\nbackground-size: cover;width:auto;\nheight:90vh;\">\n  <div class=\"container-fluid\">\n\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\" style=\"height: 70px;\">\n        <div class=\"text-center\">\n          <h1 class=\"text-white font-weight-bold\">{{'Course List' | translate }}</h1>\n        </div>\n      </div>\n\n      <div class=\"row p-1\">\n        <div class=\"col-sm-1\"></div>\n        <div class=\"col-sm-2\">\n\n          <select class=\"form-control\" name=\"courseName\" [(ngModel)]=\"form.searchParams.id\" aria-label=\"ngSelected\">\n            <option [ngValue]=\"\" value=\"undefined\">{{' Select CourseName' | translate }}</option>\n            <option *ngFor=\"let obj of form.preload.courseList\" [value]=\"obj.key\">{{obj.value}}</option>\n          </select>\n        </div>\n        <!-- <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.loginId\" placeholder=\"{{'Search Email' | translate}}\">\n        </div> -->\n        <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.duration\"\n            placeholder=\"{{'Search Duration' | translate}}\">\n\n        </div>\n\n        \n        <div class=\"col-sm-2\">\n          <!-- <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.status\" placeholder=\"{{'Search Status' | translate}}\"> -->\n        </div>\n        <div class=\"col-sm-1 ml-3\">\n          <button (click)=\"submit()\" class=\"btn btn-primary\">\n            {{'Search' | translate }}</button>\n        </div>\n        <div class=\"col-lg-2 ml-4\">\n          <button (click)=\"forward('/course')\" type=\"button\" class=\"btn btn-success\">{{'Add Course' | translate}}\n          </button>\n        </div>\n\n        <div class=\"col-sm-1\">\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\n            {{'Delete'| translate}}</button>\n        </div>\n      </div>\n\n\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n\n\n      <div class=\"p-1\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-bordered table-striped table-hover font-weight-bold text-white\">\n            <thead class=\"thead-light text-uppercase\">\n              <tr>\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\" value=\"h1\"\n                    (change)=\"checkUncheckAll($event)\" /></th>\n                <th>{{'S.No.' | translate }}</th>\n                <th>{{'Name' | translate }}</th>\n                <th>{{'Duration' | translate }}</th>\n                <th>{{'Description' | translate }}</th>\n                <th>{{'Edit' | translate }}</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let m of form.list; let i = index\">\n                <td> <input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" id=\"{{m.id}}\" value=\"{{isMasterSel}}\" />\n                </td>\n                <td> {{(form.pageNo*5)+i+ 1}} </td>\n                <td> {{ m.courseName}} </td>\n                <td> {{ m.duration }} </td>\n                <td> {{ m.description }} </td>\n                <td>\n                  <a (click)=\"forward( '/course/' +  m.id)\" style=\"cursor: pointer;\">\n                    <i class=\"fa fa-edit text-info\"></i>\n                  </a>\n                  <!-- /\n                  <a (click)=\"delete(m.id)\" style=\"cursor: pointer;\">\n                    <i class=\"fa fa-trash text-danger\"></i>\n                  </a> -->\n                </td>\n\n              </tr>\n              \n            </tbody>\n          </table>\n          <table style=\"width: 100%;\">\n            <tr>\n              <td style=\"width: 50%;\">\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous' | translate\n            }} </button></td>\n            <td *ngIf=\"form.list.length!=0\" style=\"width: 50%;\"></td>\n            <td *ngIf=\"form.list.length==0\" style=\"width: 50%;\"><a class=\"btn btn-warning mr-1\" [routerLink]=\"['/courselist']\"  (click)=\"exit()\">{{'Back' | translate}}</a></td>\n\n        \n            <td><button (click)=\"next()\" [disabled]=\"nextList==0\" type=\"button\" class=\"btn btn-info\"> {{'Next' |\n              translate }}</button></td>\n            </tr>\n            </table>\n\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/course/course-list.component.ts":
/*!*************************************************!*\
  !*** ./src/app/course/course-list.component.ts ***!
  \*************************************************/
/*! exports provided: CourseListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseListComponent", function() { return CourseListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");





var CourseListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CourseListComponent, _super);
    function CourseListComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.COURSE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    CourseListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-course-list',
            template: __webpack_require__(/*! ./course-list.component.html */ "./src/app/course/course-list.component.html"),
            styles: [__webpack_require__(/*! ./course.component.css */ "./src/app/course/course.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CourseListComponent);
    return CourseListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_4__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/course/course.component.css":
/*!*********************************************!*\
  !*** ./src/app/course/course.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdXJzZS9jb3Vyc2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/course/course.component.html":
/*!**********************************************!*\
  !*** ./src/app/course/course.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<style>\n  .grad{\n background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\n background-repeat: no repeat;\n background-size: 100%;\n padding-bottom: 25px\n ;\n }\n</style>\n<div class=\"row \" style=\"padding-top: 3%; padding-bottom:15%;\nbackground: url(assets/files/wall.jpg) no-repeat center center;\nbackground-attachment: fixed;\nbackground-size: cover;width:auto;\n  height: auto;\">\n\n  <div class=\"col-sm-4\"></div>\n  <div class=\"col-sm-4\">\n    <div class=\"card\">\n      <div class=\"card-body shadow-lg grad\">\n        <form>\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Add Course' | translate }}</h2>\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Update Course' | translate }}</h2>\n\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Course Name' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-file grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"courseName\" [(ngModel)]=\"form.data.courseName\" class=\"form-control\"\n                  placeholder=\"{{'Enter Course Name' | translate }}\">\n              </div>\n            </div><span class=\"alertRedColor\"> {{form.inputerror.courseName}} </span>\n          </div>\n\n\n\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Duration' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\" >\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-clock-o grey-text\"></i> </div>\n                </div>\n            \n                <select class=\"form-control\" name=\"duration\"\n                  [(ngModel)]=\"form.data.duration\" style=\"cursor: pointer;\">\n                  <option [ngValue]=\"\" value=\"undefined\">{{'Please select' | translate }}</option>\n                  <option [value]=\"1\">1 Year</option>\n                  <option [value]=\"2\">2 Year</option>\n                  <option [value]=\"3\">3 Year</option>\n                  <option [value]=\"4\">4 Year</option>\n                  <option [value]=\"5\">5 Year</option>\n\n                </select>\n              </div>\n              <span class=\"alertRedColor\"> {{form.inputerror.duration}} </span>\n            </div>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Description' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-bars grey-text\"></i> </div>\n                </div>\n                <textarea class=\"form-control\" placeholder=\"{{'Enter Description' | translate }}\" name=\"description\"\n                  [(ngModel)]=\"form.data.description\"></textarea>\n              </div>\n            </div><span class=\"alertRedColor\"> {{form.inputerror.description}} </span>\n          </div>\n\n\n          <div class=\"row pt-3 pl-3 pb-3\">\n            <div class=\"pt-2\">\n              <button *ngIf=\"!form.data.id>0\" (click)=\"submit()\" [disabled]=\"!validate()\" class=\"btn btn-success mr-2\">\n                {{'Save' | translate }}</button>\n            </div>\n            <div class=\"pt-2\">\n              <button *ngIf=\"form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\n                {{'Update' | translate }}</button>\n            </div>\n            <div class=\"pl-3 pt-2\">\n              <button (click)=\"forward('/courselist')\" type=\"button\" class=\"btn btn-warning mr-1\">{{'List\n                ' | translate }}              </button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/course/course.component.ts":
/*!********************************************!*\
  !*** ./src/app/course/course.component.ts ***!
  \********************************************/
/*! exports provided: CourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseComponent", function() { return CourseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");





var CourseComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CourseComponent, _super);
    function CourseComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.COURSE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.selected = null;
        return _this;
    }
    CourseComponent.prototype.validate = function () {
        return this.validateForm(this.form.data);
    };
    CourseComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.courseName);
        flag = flag && validator.isNotNullObject(form.duration);
        flag = flag && validator.isNotNullObject(form.description);
        return flag;
    };
    CourseComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.courseName = data.courseName;
        form.duration = data.duration;
        form.description = data.description;
        console.log('Populated Form', form);
    };
    CourseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-course',
            template: __webpack_require__(/*! ./course.component.html */ "./src/app/course/course.component.html"),
            styles: [__webpack_require__(/*! ./course.component.css */ "./src/app/course/course.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], CourseComponent);
    return CourseComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseCtl"]));



/***/ }),

/***/ "./src/app/customer/customer.component.css":
/*!*************************************************!*\
  !*** ./src/app/customer/customer.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyL2N1c3RvbWVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/customer/customer.component.html":
/*!**************************************************!*\
  !*** ./src/app/customer/customer.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<style>\n  .grad {\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\n    background-repeat: no-repeat;\n    background-size: 100%;\n    padding-bottom: 25px;\n  }\n\n  .background {\n    padding-top: 3%;\n    padding-bottom: 13%;\n    background: url('assets/files/wall.jpg') no-repeat center center;\n    background-attachment: fixed;\n    background-size: cover;\n    width: 100%;\n    height: auto;\n  }\n\n  .required-field {\n    color: red;\n  }\n\n  .alertRedColor {\n    color: red;\n  }\n</style>\n\n<div class=\"container-fluid background\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-sm-8 col-md-6 col-lg-4\">\n      <div class=\"card\">\n        <div class=\"card-body shadow-lg grad\">\n          <form name=\"positionForm\">\n            <h2 *ngIf=\"!form.data.id > 0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{ 'Add Customer'\n              | translate }}</h2>\n            <h2 *ngIf=\"form.data.id > 0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{ 'Update\n              Customer' | translate }}</h2>\n\n            <!-- Form error messages -->\n            <div *ngIf=\"form.error && form.message\" class=\"alert alert-danger alert-dismissible fade show\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n              {{ form.message }}\n            </div>\n            <div *ngIf=\"!form.error && form.message\" class=\"alert alert-success alert-dismissible fade show\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n              {{ form.message }}\n            </div>\n\n            <div class=\"form-group pt-2\">\n              <label><b>{{ 'clientname' | translate }}</b><span class=\"required-field\">*</span></label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i></div>\n                </div>\n                <input type=\"text\" name=\"clientname\" [(ngModel)]=\"form.data.clientname\" class=\"form-control\"\n                  (keydown)=\"filterInput($event, 'errorMessageClientName', 20, 'char')\"\n                  placeholder=\"{{ 'Enter clientname' | translate }}\">\n              </div>\n              <span *ngIf=\"errorMessageClientName\" class=\"alertRedColor\">{{ errorMessageClientName }}</span>\n              <span *ngIf=\"form.inputerror?.clientname\" class=\"alertRedColor\">{{ form.inputerror.clientname }}</span>\n            </div>\n\n            <div class=\"form-group pt-2\">\n              <label><b>{{ 'location' | translate }}</b><span class=\"required-field\">*</span></label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i></div>\n                </div>\n                <input type=\"text\" name=\"location\" [(ngModel)]=\"form.data.location\" class=\"form-control\"\n                  (keydown)=\"filterInput($event, 'errorMessageLocation', 20, 'char')\"\n                  placeholder=\"{{ 'Enter location' | translate }}\">\n              </div>\n              <span *ngIf=\"errorMessageLocation\" class=\"alertRedColor\">{{ errorMessageLocation }}</span>\n              <span *ngIf=\"form.inputerror?.location\" class=\"alertRedColor\">{{ form.inputerror.location }}</span>\n            </div>\n\n            <div class=\"form-group\">\n              <label><b>{{ 'importance' | translate }}</b><span class=\"required-field\">*</span></label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i></div>\n                </div>\n                <select class=\"form-control\" name=\"importance\" [(ngModel)]=\"form.data.importance\" aria-label=\"ngSelected\">\n                  <option [ngValue]=\"undefined\">{{ 'Select importance' | translate }}</option>\n                  <option *ngFor=\"let customer of form.preload.Customerlist\" [value]=\"customer\">{{ customer }}</option>\n                </select>\n              </div>\n              <span *ngIf=\"form.inputerror.importance\" class=\"alertRedColor\">{{ form.inputerror.importance }}</span>\n            </div>\n\n            <div class=\"form-group pt-2\">\n              <label><b>{{ 'contactnumber' | translate }}</b><span class=\"required-field\">*</span></label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-mobile grey-text\"></i></div>\n                </div>\n                <input type=\"text\" name=\"contactnumber\" [(ngModel)]=\"form.data.contactnumber\" class=\"form-control\"\n                (keydown)=\"filterInput($event, 'errorMessagecontactnumber', 10, 'int')\"\n                  placeholder=\"{{ 'Enter contactnumber' | translate }}\" >\n              </div>\n              <span *ngIf=\"errorMessagecontactnumber\" class=\"alertRedColor\">{{ errorMessagecontactnumber }}</span>\n              <span *ngIf=\"form.inputerror?.contactnumber\" class=\"alertRedColor\">{{ form.inputerror.contactnumber }}</span>\n            </div>\n\n\n            <!-- Form buttons -->\n            <div class=\"form-group text-center\">\n              <button (click)=\"submit()\" class=\"btn btn-success mr-2\">{{ 'Save' | translate }}</button>\n              <button (click)=\"forward('/customerlist')\" type=\"button\" class=\"btn btn-warning\">{{ 'List' | translate\n                }}</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/customer/customer.component.ts":
/*!************************************************!*\
  !*** ./src/app/customer/customer.component.ts ***!
  \************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");





var CustomerComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CustomerComponent, _super);
    function CustomerComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.CUSTOMER, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.errorMessageTitle = '';
        return _this;
    }
    CustomerComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.clientname);
        flag = flag && validator.isNotNullObject(form.contactnumber);
        flag = flag && validator.isNotNullObject(form.location);
        flag = flag && validator.isNotNullObject(form.importance);
        return flag;
    };
    CustomerComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.clientname = data.clientname;
        form.contactnumber = data.contactnumber;
        form.location = data.location;
        form.importance = data.importance;
    };
    CustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer',
            template: __webpack_require__(/*! ./customer.component.html */ "./src/app/customer/customer.component.html"),
            styles: [__webpack_require__(/*! ./customer.component.css */ "./src/app/customer/customer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CustomerComponent);
    return CustomerComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/customer/customerlist/customerlist.component.css":
/*!******************************************************************!*\
  !*** ./src/app/customer/customerlist/customerlist.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyL2N1c3RvbWVybGlzdC9jdXN0b21lcmxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/customer/customerlist/customerlist.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/customer/customerlist/customerlist.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<style>\n  #nnn {\n    background: none;\n    border: none;\n    cursor: pointer;\n  }\n\n  .panel-heading {\n    height: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .search-inputs {\n    margin-top: 20px;\n  }\n\n  .search-inputs .form-control,\n  .search-inputs .btn {\n    margin-bottom: 10px;\n  }\n\n  .content-wrapper {\n    background: url('assets/files/1024.jpg') no-repeat center center;\n    background-attachment: fixed;\n    background-size: cover;\n    width: auto;\n    height: 105vh;\n    padding: 20px;\n  }\n\n  .table-responsive {\n    margin-top: 20px;\n  }\n\n  .search-inputs .col-sm-2,\n  .search-inputs .col-sm-1 {\n    padding: 0 5px;\n  }\n\n  .alertRedColor {\n    color: red;\n  }\n</style>\n\n<div class=\"content-wrapper\">\n  <div class=\"container-fluid\">\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\">\n        <h1 class=\"text-primary font-weight-bold\">{{ 'Customer List' | translate }}</h1>\n      </div>\n\n      <div class=\"row search-inputs p-1 justify-content-center\">\n        <div class=\"col-sm-2\">\n          <input type=\"text\" name=\"clientname\" [(ngModel)]=\"form.searchParams.clientname\" class=\"form-control\"\n            (keydown)=\"filterInput($event, 'errorMessageclientname', 20, 'char')\"\n            placeholder=\"{{ 'Enter clientname' | translate }}\">\n\n          <span *ngIf=\"errorMessageclientname\" class=\"alertRedColor\">{{ errorMessageclientname }}</span>\n        </div>\n\n        <div class=\"col-sm-2\">\n          <input type=\"text\" name=\"location\" [(ngModel)]=\"form.searchParams.location\" class=\"form-control\"\n            (keydown)=\"filterInput($event, 'errorMessagelocation', 20, 'char')\"\n            placeholder=\"{{ 'Enter location' | translate }}\">\n\n          <span *ngIf=\"errorMessagelocation\" class=\"alertRedColor\">{{ errorMessagelocation }}</span>\n        </div>\n\n        <div class=\"col-sm-2\">\n          <input type=\"text\" name=\"contactnumber\" [(ngModel)]=\"form.searchParams.contactnumber\" class=\"form-control\"\n            (keydown)=\"filterInput($event, 'errorMessagecontactnumber', 10, 'int')\"\n            placeholder=\"{{ 'Enter contactnumber' | translate }}\">\n          <span *ngIf=\"errorMessagecontactnumber\" class=\"alertRedColor\">{{ errorMessagecontactnumber }}</span>\n        </div>\n        \n        <div class=\"col-sm-2\">\n          <select class=\"form-control\" name=\"importance\" [(ngModel)]=\"form.searchParams.importance\" aria-label=\"ngSelected\">\n            <option [ngValue]=\"undefined\">{{ 'Select importance' | translate }}</option>\n            <option *ngFor=\"let importance of form.preload.Customerlist\" [value]=\"importance\">{{ importance }}</option>\n          </select>\n          <span *ngIf=\"form.inputerror.importance\" class=\"alertRedColor\">{{ form.inputerror.importance }}</span>\n        </div>\n\n      \n\n      \n\n        <div class=\"col-sm-1\">\n          <button (click)=\"submit()\" class=\"btn btn-primary\">{{ 'Search' | translate }}</button>\n        </div>\n\n        <div class=\"col-sm-2\">\n          <button (click)=\"forward('/customer')\" type=\"button\" class=\"btn btn-success\">\n            {{ 'Add Customer' | translate }}\n          </button>\n        </div>\n\n        <div class=\"col-sm-1\">\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">{{ 'Delete' | translate }}</button>\n        </div>\n      </div>\n\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{ form.message }}\n      </div>\n\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{ form.message }}\n      </div>\n\n      <div class=\"table-responsive\">\n        <table class=\"table table-bordered table-hover font-weight-bold text-dark\">\n          <thead class=\"thead-dark text-uppercase\">\n            <tr align=\"center\">\n              <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\"\n                  (change)=\"checkUncheckAll($event)\" /></th>\n              <th>{{ 'S.No' | translate }}</th>\n              <th>{{ 'CLIENTNAME' | translate }}</th>\n              <th>{{ 'CONTACTNUMBER' | translate }}</th>\n              <th>{{ 'LOCATION' | translate }}</th>\n              <th>{{ 'IMPORTANCE' | translate }}</th>\n              <th>{{ 'Edit' | translate }}</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\n              <td><input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" [id]=\"m.id\" />\n              </td>\n              <td>{{ (form.pageNo * 5) + i + 1 }}</td>\n              <td>{{ m.clientname }}</td>\n              <td>{{ m.contactnumber }}</td>\n              <td>{{ m.location}}</td>\n              <td>{{ m.importance }}</td>\n              \n\n              <td>\n                <button class=\"fa fa-edit text-primary\" id=\"nnn\" (click)=\"forward('/customer/' + m.id)\">\n                </button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n\n        <div class=\"d-flex justify-content-between mt-3\">\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\">{{ 'Previous' | translate\n            }}\n          </button>\n          <div *ngIf=\"form.list.length == 0\">\n            <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/Customerlist']\" (click)=\"exit()\">\n              {{ 'Back' | translate }}\n            </a>\n          </div>\n          <button (click)=\"next()\" [disabled]=\"nextList == 0\" class=\"btn btn-info\">{{ 'Next' | translate }}</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/customer/customerlist/customerlist.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/customer/customerlist/customerlist.component.ts ***!
  \*****************************************************************/
/*! exports provided: CustomerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerListComponent", function() { return CustomerListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_base_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var src_app_service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service-locator.service */ "./src/app/service-locator.service.ts");





var CustomerListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CustomerListComponent, _super);
    function CustomerListComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.CUSTOMER, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.myKey = "";
        _this.form = {
            error: false,
            message: null,
            preload: [],
            data: { id: null },
            inputerror: {},
            searchParams: {},
            searchMessage: null,
            list: [],
            pageNo: 0
        };
        _this.isValidexperienceInput = true; // Property to track validity of cost input
        _this.isValidtitleInput = true; // Property to track validity of description input
        return _this;
    }
    CustomerListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customerlist',
            template: __webpack_require__(/*! ./customerlist.component.html */ "./src/app/customer/customerlist/customerlist.component.html"),
            styles: [__webpack_require__(/*! ./customerlist.component.css */ "./src/app/customer/customerlist/customerlist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], CustomerListComponent);
    return CustomerListComponent;
}(src_app_base_list_component__WEBPACK_IMPORTED_MODULE_3__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\n  .cl {\n    font-family: Lucida Calligraphy;\n  }\n</style>\n\n<app-navbar></app-navbar>\n\n<div>\n  <div class=\"row\" style=\"padding-bottom: 14%; background: url(assets/files/background.jpg) no-repeat center center; background-attachment: fixed; background-size: cover; width: cover; height: 120vh;\">\n    <p class=\"text-cs1 font-family ml-4 font-weight-bold\" style=\"padding-top: 1%; padding-left: 36%; font-size: 45px; color: rgb(4, 204, 226);\">{{'WELCOME TO ORS' | translate}}</p>\n  </div>\n</div>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/employee/employee.component.css":
/*!*************************************************!*\
  !*** ./src/app/employee/employee.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlL2VtcGxveWVlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/employee/employee.component.html":
/*!**************************************************!*\
  !*** ./src/app/employee/employee.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-navbar></app-navbar>\n\n<style>\n  .grad {\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\n    background-repeat: no-repeat;\n    background-size: 100%;\n    padding-bottom: 25px;\n  }\n\n  .background {\n    padding-top: 3%;\n    padding-bottom: 13%;\n    background: url('assets/files/wall.jpg') no-repeat center center;\n    background-attachment: fixed;\n    background-size: cover;\n    width: 100%;\n    height: auto;\n  }\n\n  .required-field {\n    color: red;\n  }\n\n  .alertRedColor {\n    color: red;\n  }\n</style>\n\n<div class=\"container-fluid background\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-sm-8 col-md-6 col-lg-4\">\n      <div class=\"card\">\n        <div class=\"card-body shadow-lg grad\">\n          <form name=\"employeeForm\">\n            <h2 *ngIf=\"!form.data.id\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">\n              {{ 'Add Employee' | translate }}\n            </h2>\n            <h2 *ngIf=\"form.data.id\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">\n              {{ 'Update Employee' | translate }}\n            </h2>\n\n            <!-- Form error messages -->\n            <div *ngIf=\"form.error && form.message\" class=\"alert alert-danger alert-dismissible fade show\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n              {{ form.message }}\n            </div>\n            <div *ngIf=\"!form.error && form.message\" class=\"alert alert-success alert-dismissible fade show\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n              {{ form.message }}\n            </div>\n\n            <div class=\"form-group pt-2\">\n              <label><b>{{ ' Name' | translate }}</b><span class=\"required-field\">*</span></label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-id-badge grey-text\"></i></div>\n                </div>\n                <input type=\"text\" name=\"name\" [(ngModel)]=\"form.data.name\" class=\"form-control\"\n                  (keydown)=\"filterInput($event, 'errorMessageName', 20, '')\"\n                  placeholder=\"{{ 'Enter Name' | translate }}\" required>\n              </div>\n              <span *ngIf=\"errorMessageName\" class=\"alertRedColor\">{{ errorMessageName}}</span>\n              <span *ngIf=\"form.inputerror?.name\" class=\"alertRedColor\">{{ form.inputerror.name }}</span>\n            </div>\n            \n            <div class=\"form-group pt-2\">\n              <label><b>{{ 'Date Of Joining' | translate }}</b><span class=\"required-field\">*</span></label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-calendar grey-text\"></i></div>\n                </div>\n                <input type=\"date\"  name=\"dateOfJoining\" [value]=\"form.data.dateOfJoining | date:'yyyy-MM-dd'\" class=\"form-control\"\n                (input)=\"form.data.dateOfJoining=parseDate($event.target.value)\"\n                  placeholder=\"{{ 'Enter Date Of Joining' | translate }}\" required>\n              </div>\n              \n              <span *ngIf=\"form.inputerror?.dateOfJoining\" class=\"alertRedColor\">{{ form.inputerror.dateOfJoining }}</span>\n            </div>\n\n            <div class=\"form-group pt-2\">\n              <label><b>{{ ' LastName' | translate }}</b><span class=\"required-field\">*</span></label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-id-badge grey-text\"></i></div>\n                </div>\n                <input type=\"text\" name=\"lastName\" [(ngModel)]=\"form.data.lastName\" class=\"form-control\"\n                  (keydown)=\"filterInput($event, 'errorMessageLastName', 20, '')\"\n                  placeholder=\"{{ 'Enter LastName' | translate }}\" required>\n              </div>\n              <span *ngIf=\"errorMessageLastName\" class=\"alertRedColor\">{{ errorMessageLastName}}</span>\n              <span *ngIf=\"form.inputerror?.lastName\" class=\"alertRedColor\">{{ form.inputerror.lastName }}</span>\n            </div>\n                       \n            <div class=\"form-group pt-2\">\n              <label><b>{{ 'Department' | translate }}</b><span class=\"required-field\">*</span></label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-paint-brush grey-text\"></i></div>\n                </div>\n                <select class=\"form-control\" name=\"department\" [(ngModel)]=\"form.data.department\" aria-label=\"ngSelected\" required>\n                  <option [ngValue]=\"undefined\">{{ 'Select Department' | translate }}</option>\n                  <option *ngFor=\"let employeee of form.preload.employeeeList\" [value]=\"employeee.key\">{{ employeee.value }}</option>\n                </select>\n              </div>\n              <span *ngIf=\"form.inputerror?.department\" class=\"alertRedColor\">{{ form.inputerror.department }}</span>\n            </div>\n\n            <div class=\"row pt-2 pl-2 pb-3\">\n  \n              <div class=\"col-md-3\"></div>\n              \n              <div class=\"pt-2\">\n                <button *ngIf=\"!form.data.id > 0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\n                  {{ 'Save' | translate }}\n                </button>\n              </div>\n            \n              <div class=\"col-md-1\"></div>\n            \n              <div class=\"pt-2\">\n                <button *ngIf=\"form.data.id > 0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\n                  {{ 'Update' | translate }}\n                </button>\n              </div>\n              \n              <div class=\"pt-2\">\n                <a class=\"btn btn-warning mr-1\" type=\"button\" [routerLink]=\"['/employeelist']\"\n                   style=\"text-decoration: none; color: white;\">\n                  {{ 'List' | translate }}\n                </a>\n              </div>\n              \n            </div>\n            \n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/employee/employee.component.ts":
/*!************************************************!*\
  !*** ./src/app/employee/employee.component.ts ***!
  \************************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");





var EmployeeComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](EmployeeComponent, _super);
    function EmployeeComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.EMPLOYEE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.errorMessageTitle = '';
        return _this;
    }
    EmployeeComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.name);
        flag = flag && validator.isNotNullObject(form.dateOfJoining);
        flag = flag && validator.isNotNullObject(form.lastName);
        flag = flag && validator.isNotNullObject(form.department);
        return flag;
    };
    EmployeeComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.name = data.name;
        form.dateOfJoining = data.dateOfJoining;
        form.lastName = data.lastName;
        form.department = data.department;
    };
    EmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-asset',
            template: __webpack_require__(/*! ./employee.component.html */ "./src/app/employee/employee.component.html"),
            styles: [__webpack_require__(/*! ./employee.component.css */ "./src/app/employee/employee.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], EmployeeComponent);
    return EmployeeComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/employee/employeelist.component.css":
/*!*****************************************************!*\
  !*** ./src/app/employee/employeelist.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlL2VtcGxveWVlbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/employee/employeelist.component.html":
/*!******************************************************!*\
  !*** ./src/app/employee/employeelist.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  assetlist works!\n</p>\n<app-navbar></app-navbar>\n\n<style>\n  #nnn {\n    background: none;\n    border: none;\n    cursor: pointer;\n  }\n\n  .panel-heading {\n    height: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .search-inputs {\n    margin-top: 20px;\n  }\n\n  .search-inputs .form-control,\n  .search-inputs .btn {\n    margin-bottom: 10px;\n  }\n\n  .content-wrapper {\n    background: url('assets/files/teahu.png') no-repeat center center;\n    background-attachment: fixed;\n    background-size: cover;\n    width: auto;\n    height: 105vh;\n    padding: 20px;\n  }\n\n  .table-responsive {\n    margin-top: 20px;\n  }\n\n  .search-inputs .col-sm-2,\n  .search-inputs .col-sm-1 {\n    padding: 0 5px;\n  }\n\n  .alertRedColor {\n    color: red;\n  }\n</style>\n<div class=\"content-wrapper\">\n  <div class=\"container-fluid\">\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\">\n        <h1 class=\"text-primary font-weight-bold\">{{ 'Employee List' | translate }}</h1>\n      </div>\n\n      <div class=\"row search-inputs p-1 justify-content-center\">\n        <div class=\"col-sm-2\">\n          <input type=\"text\" name=\"name\" [(ngModel)]=\"form.searchParams.name\" class=\"form-control\"\n          (keydown)=\"filterInput($event, 'errorMessageName', 20, '')\"\n            placeholder=\"{{ 'Enter Name' | translate }}\">\n            <span *ngIf=\"errorMessageName\" class=\"alertRedColor\">{{ errorMessageName }}</span>\n        </div>\n        <div class=\"col-sm-2\">\n          <input type=\"date\" name=\"dateOfJoining\" [(ngModel)]=\"form.searchParams.dateOfJoining\" class=\"form-control\"\n            placeholder=\"{{ 'Enter Date Of Joining' | translate }}\">\n        </div>\n\n        <div class=\"col-sm-2\">\n          <input type=\"text\" name=\"lastName\" [(ngModel)]=\"form.searchParams.lastName\" class=\"form-control\"\n          (keydown)=\"filterInput($event, 'errorMessageLastName', 20, '')\"\n            placeholder=\"{{ 'Enter LastName' | translate }}\">\n            <span *ngIf=\"errorMessageLastName\" class=\"alertRedColor\">{{ errorMessageLastName }}</span>\n        </div>\n        \n        <div class=\"col-sm-2\">\n          <select class=\"form-control\" name=\"department\" [(ngModel)]=\"form.searchParams.department\" aria-label=\"ngSelected\" required>\n            <option [ngValue]=\"undefined\">{{ 'Select Department' | translate }}</option>\n            <option *ngFor=\"let department of form.preload.employeeeList\" [value]=\"department.key\">{{ department.value }}</option>\n          </select>\n          \n        </div>\n\n        <div class=\"col-sm-1\">\n          <button (click)=\"submit()\" class=\"btn btn-primary\">{{ 'Search' | translate }}</button>\n        </div>\n\n        <div class=\"col-sm-2\">\n          <button (click)=\"forward('/employee')\" type=\"button\" class=\"btn btn-success\">\n            {{ 'Add Employee' | translate }}\n          </button>\n        </div>\n\n        <div class=\"col-sm-1\">\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">{{ 'Delete' | translate }}</button>\n        </div>\n      </div>\n\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{ form.message }}\n      </div>\n\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{ form.message }}\n      </div>\n\n      <div class=\"table-responsive\">\n        <table class=\"table table-bordered table-hover font-weight-bold text-dark\">\n          <thead class=\"thead-dark text-uppercase\">\n            <tr align=\"center\">\n              <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\"\n                  (change)=\"checkUncheckAll($event)\" /></th>\n              <th>{{ 'S.No' | translate }}</th>\n              <th>{{ 'Name' | translate }}</th>\n              <th>{{ 'DateOfJoining' | translate }}</th>\n              <th>{{ 'LastName' | translate }}</th>\n              <th>{{ 'Department' | translate }}</th>\n              <th>{{ 'Edit' | translate }}</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\n              <td><input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" [id]=\"m.id\" /></td>\n              <td>{{ (form.pageNo * 5) + i + 1 }}</td>\n              <td>{{ m.name }}</td>\n              <td>{{ m.dateOfJoining | date:'yyyy-MM-dd' }}</td>\n              <td>{{ m.lastName }}</td>\n              <td>{{ findSelValueByKey(m.department,form.preload.employeeeList) }}</td>\n\n              <td>\n                <button class=\"fa fa-edit text-primary\" id=\"nnn\" (click)=\"forward('/employee/' + m.id)\">\n                </button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n\n        <div class=\"d-flex justify-content-between mt-3\">\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\">{{ 'Previous' | translate }}</button>\n\n          <div>\n            <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/employeelist']\" (click)=\"exit()\">\n              {{ 'Reset' | translate }}\n            </a>\n          </div>\n\n          <div *ngIf=\"form.list.length == 0\">\n            <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/employeelist']\" (click)=\"exit()\">\n              {{ 'Back' | translate }}\n            </a>\n          </div>\n          <button (click)=\"next()\" [disabled]=\"nextList == 0\" class=\"btn btn-info\">{{ 'Next' | translate }}</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/employee/employeelist.component.ts":
/*!****************************************************!*\
  !*** ./src/app/employee/employeelist.component.ts ***!
  \****************************************************/
/*! exports provided: EmployeelistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeelistComponent", function() { return EmployeelistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var EmployeelistComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](EmployeelistComponent, _super);
    function EmployeelistComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.EMPLOYEE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.myKey = "";
        _this.form = {
            error: false,
            message: null,
            preload: [],
            data: { id: null },
            inputerror: {},
            searchParams: {},
            searchMessage: null,
            list: [],
            pageNo: 0
        };
        return _this;
    }
    EmployeelistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-assetlist',
            template: __webpack_require__(/*! ./employeelist.component.html */ "./src/app/employee/employeelist.component.html"),
            styles: [__webpack_require__(/*! ./employeelist.component.css */ "./src/app/employee/employeelist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], EmployeelistComponent);
    return EmployeelistComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/endpoint-service.service.ts":
/*!*********************************************!*\
  !*** ./src/app/endpoint-service.service.ts ***!
  \*********************************************/
/*! exports provided: EndpointServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndpointServiceService", function() { return EndpointServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EndpointServiceService = /** @class */ (function () {
    function EndpointServiceService() {
        this.SERVER_URL = "http://localhost:8084";
        this.MESSAGE = this.SERVER_URL + "/Message";
        this.USER = this.SERVER_URL + "/User";
        this.OWNER = this.SERVER_URL + "/Owner";
        this.ROLE = this.SERVER_URL + "/Role";
        this.COLLEGE = this.SERVER_URL + "/College";
        this.MARKSHEET = this.SERVER_URL + "/Marksheet";
        this.STUDENT = this.SERVER_URL + "/Student";
        this.SUBJECT = this.SERVER_URL + "/Subject";
        this.FACULTY = this.SERVER_URL + "/Faculty";
        this.COURSE = this.SERVER_URL + "/Course";
        this.TIMETABLE = this.SERVER_URL + "/TimeTable";
        this.JASPERREPORT = this.SERVER_URL + "/Jasper";
        this.POSITION = this.SERVER_URL + "/Position";
        this.STAFFMEMBER = this.SERVER_URL + "/Staffmember";
        this.ASSET = this.SERVER_URL + "/Asset";
        this.PROPRIETOR = this.SERVER_URL + "/Proprietor";
        this.PATH = this.SERVER_URL + "/Path";
        this.EMPLOYEE = this.SERVER_URL + "/Employee";
        this.CUSTOMER = this.SERVER_URL + "/Customer";
        this.ITEM = this.SERVER_URL + "/Item";
        this.CART = this.SERVER_URL + "/Cart";
    }
    EndpointServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EndpointServiceService);
    return EndpointServiceService;
}());



/***/ }),

/***/ "./src/app/faculty/faculty-list.component.html":
/*!*****************************************************!*\
  !*** ./src/app/faculty/faculty-list.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"content-wrapper\" style=\"padding-top: 3%;padding-bottom: 15%; \nbackground: url(assets/files/gettyimages-1132439283-640x640.jpg) no-repeat center center;\nbackground-attachment: fixed;\nbackground-size: cover;width:auto;\n  height: 90vh;\">\n  <div class=\"container-fluid\">\n\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\" style=\"height: 70px;\">\n        <div class=\"text-center\">\n          <h1 class=\"text-primary font-weight-bold\">{{'Faculty List' | translate }}</h1>\n        </div>\n      </div>\n\n      <div class=\"row p-1\">\n        <div class=\"col-sm-1\"></div>\n        <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.collegeName\"\n            placeholder=\"{{'Search College' | translate}}\">\n\n        </div>\n        <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.subjectName\"\n            placeholder=\"{{'Search Subject' | translate}}\">\n\n        </div>\n        <!-- <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.loginId\" placeholder=\"{{'Search Email' | translate}}\">\n        </div> -->\n\n        \n\n        \n        <div class=\"col-sm-2\">\n          <!-- <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.status\" placeholder=\"{{'Search Status' | translate}}\"> -->\n        </div>\n        <div class=\"col-sm-1 ml-3\">\n          <button (click)=\"submit()\" class=\"btn btn-primary\">\n            {{'Search' | translate }}</button>\n        </div>\n        <div class=\"col-lg-2 ml-4\">\n          <button (click)=\"forward('/faculty')\" type=\"button\" class=\"btn btn-success\">{{'Add Faculty' | translate}}\n          </button>\n        </div>\n\n        <div class=\"col-sm-1\">\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\n            {{'Delete'| translate}}</button>\n        </div>\n      </div>\n\n      \n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n\n      <div class=\"p-1\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-bordered table-striped table-hover\">\n            <thead class=\"thead-light text-uppercase\">\n              <tr>\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\" value=\"h1\" (change)=\"checkUncheckAll($event)\"/></th>\n                <th>{{'S.No.' | translate}}</th>\n                <th>{{'Name' | translate}}</th>\n                <th>{{'DOB' | translate}}</th>\n                <th>{{'Gender' | translate}}</th>\n                <th>{{'College' | translate}}</th>\n                <th>{{'Course' | translate}}</th>\n                <th>{{'Subject' | translate}}</th>\n                <th>{{'Mobile' | translate}}</th>\n                <th>{{'Email' | translate}}</th>\n                <th>{{'Qualification' | translate}}</th>\n                <th>{{'Edit' | translate}}</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let m of form.list; let i = index\">\n                <td> <input type=\"checkbox\"  #checkboxes (change)=\"checklistUpdate()\"  name=\"list_name\"  id=\"{{m.id}}\" value=\"{{isMasterSel}}\"/>\n                </td>\n                <td>{{(form.pageNo*5)+i+ 1}} </td>\n                <td>{{ m.firstName }} {{m.lastName}} </td>\n                <td>{{m.dob | date : 'dd-MM-yyyy'}} </td>\n                <td>{{ m.gender }} </td>\n                <td>{{m.collegeName}}</td>\n                <td>{{m.courseName}}</td>\n                <td>{{m.subjectName}}</td>\n                <td>{{ m.phoneNo}}</td>\n                <td>{{m.email}}</td>\n                <td>{{m.qualification}}</td>\n                <td>\n                  <a (click)=\"forward( '/faculty/' +  m.id)\" style=\"cursor: pointer;\">\n                    <i class=\"fa fa-edit text-info\"></i>\n                  </a>\n                  <!-- /\n                  <a (click)=\"delete(m.id)\" style=\"cursor: pointer;\">\n                    <i class=\"fa fa-trash  text-danger\"></i>\n                  </a> -->\n                </td>\n\n              </tr>\n            </tbody>\n          </table>\n          <table style=\"width: 100%;\">\n            <tr>\n              <td style=\"width: 50%;\">\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous' | translate\n            }} </button></td>\n            <td *ngIf=\"form.list.length!=0\" style=\"width: 50%;\"></td>\n            <td *ngIf=\"form.list.length==0\" style=\"width: 50%;\"><a class=\"btn btn-warning mr-1\" [routerLink]=\"['/facultylist']\"  (click)=\"exit()\">{{'Back' | translate}}</a></td>\n\n\n        \n            <td><button (click)=\"next()\" [disabled]=\"nextList==0\" type=\"button\" class=\"btn btn-info\"> {{'Next' |\n              translate }}</button></td>\n            </tr>\n            </table>\n\n            \n        </div>\n      </div>\n\n    </div>\n\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/faculty/faculty-list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/faculty/faculty-list.component.ts ***!
  \***************************************************/
/*! exports provided: FacultyListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacultyListComponent", function() { return FacultyListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");





var FacultyListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FacultyListComponent, _super);
    function FacultyListComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.FACULTY, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    FacultyListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-faculty-list',
            template: __webpack_require__(/*! ./faculty-list.component.html */ "./src/app/faculty/faculty-list.component.html"),
            styles: [__webpack_require__(/*! ./faculty.component.css */ "./src/app/faculty/faculty.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], FacultyListComponent);
    return FacultyListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_4__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/faculty/faculty.component.css":
/*!***********************************************!*\
  !*** ./src/app/faculty/faculty.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZhY3VsdHkvZmFjdWx0eS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/faculty/faculty.component.html":
/*!************************************************!*\
  !*** ./src/app/faculty/faculty.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<style>\n  .grad {\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\n    background-repeat: no repeat;\n    background-size: 100%;\n    padding-bottom: 25px;\n  }\n</style>\n<div class=\"row \" style=\"padding-top: 3%; padding-bottom:3%;\nbackground: url(assets/files/wall.jpg) no-repeat center center;\nbackground-attachment: fixed;\nbackground-size: cover;width:auto;\n  height: auto;\">\n\n  <div class=\"col-sm-4\"></div>\n  <div class=\"col-sm-4\">\n    <div class=\"card\">\n      <div class=\"card-body shadow-lg grad\">\n        <form>\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Add Faculty'\n            | translate}}</h2>\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Update\n            Faculty' | translate}}</h2>\n\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'First Name' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"firstName\" [(ngModel)]=\"form.data.firstName\" class=\"form-control\"\n                  placeholder=\"{{'Enter First Name' | translate}}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.firstName}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Last Name' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-user-circle grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"lastName\" [(ngModel)]=\"form.data.lastName\" class=\"form-control\"\n                  placeholder=\"{{'Enter Last Name' | translate}}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.lastName}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Email' | translate}} </b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"email\" [(ngModel)]=\"form.data.email\" class=\"form-control\"\n                  placeholder=\"{{'Enter Email Id' | translate}}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.email}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Qualification' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-graduation-cap grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"qualification\" [(ngModel)]=\"form.data.qualification\" class=\"form-control\"\n                  placeholder=\"{{'Enter Your Qualification' | translate}}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.qualification}} </span>\n          </div>\n\n\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Subject' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-file grey-text\"></i> </div>\n                </div>\n                <select class=\"form-control\" name=\"subjectId\" [(ngModel)]=\"form.data.subjectId\"\n                  style=\"cursor: pointer;\">\n                  <option *ngFor=\"let obj of form.preload.subjectList\" [value]=\"obj.key\">{{obj.value}}</option>\n                </select>\n              </div>\n              <span class=\"alertRedColor\"> {{form.inputerror.subject}} </span>\n            </div>\n          </div>\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'College' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-university grey-text\"></i> </div>\n                </div>\n\n\n                <select class=\"form-control\" name=\"collegeId\" [(ngModel)]=\"form.data.collegeId\"\n                  style=\"cursor: pointer;\">\n                  <option *ngFor=\"let obj of form.preload.collegeList\" [value]=\"obj.key\">{{obj.value}}</option>\n                </select>\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.qualification}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Course' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-list grey-text\"></i> </div>\n                </div>\n                <select class=\"form-control\" name=\"courseId\" [(ngModel)]=\"form.data.courseId\" style=\"cursor: pointer;\">\n                  <option *ngFor=\"let obj of form.preload.courseList\" [value]=\"obj.key\">{{obj.value}}</option>\n                </select>\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.qualification}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Gender' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-venus grey-text\"></i> </div>\n                </div>\n                <select class=\"form-control\" name=\"gender\" [(ngModel)]=\"form.data.gender\">\n                  <option [ngValue]=\"\" value=\"undefined\">{{'Please select' | translate}}</option>\n                  <option value=\"Male\">{{'Male' | translate}} </option>\n                  <option value=\"Female\">{{'Female' | translate}} </option>\n                </select>\n              </div>\n            </div>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Mobile No' | translate}} </b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-phone grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"phoneNo\" [(ngModel)]=\"form.data.phoneNo\" class=\"form-control\"\n                  placeholder=\"{{'Enter Mobile Number' | translate}}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.phoneNo}} </span>\n          </div>\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'DOB' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-table grey-text\"></i> </div>\n                </div>\n                <input type=\"date\" name=\"dob\" [value]=\"form.data.dob| date:'yyyy-MM-dd'\"\n                  (input)=\"form.data.dob=parseDate($event.target.value)\" class=\"form-control form-control-sm\"\n                  required />\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.dob}} </span>\n          </div>\n\n          <div class=\"row pt-3 pl-3 pb-3\">\n            <div class=\"pt-2\">\n              <button *ngIf=\"!form.data.id>0\" (click)=\"submit()\" [disabled]=\"!validate()\" class=\"btn btn-success mr-2\">\n                {{'Save' | translate}}</button>\n            </div>\n            <div class=\"pt-2\">\n              <button *ngIf=\"form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\n                {{'Update' | translate}}</button>\n            </div>\n            <div class=\"pt-2\">\n              <button (click)=\"forward('/facultylist')\" type=\"button\" class=\"btn btn-warning mr-1\">{{'List' |\n                translate}}\n              </button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/faculty/faculty.component.ts":
/*!**********************************************!*\
  !*** ./src/app/faculty/faculty.component.ts ***!
  \**********************************************/
/*! exports provided: FacultyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacultyComponent", function() { return FacultyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");





var FacultyComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FacultyComponent, _super);
    function FacultyComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.FACULTY, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.selected = null;
        return _this;
    }
    FacultyComponent.prototype.validate = function () {
        return this.validateForm(this.form.data);
    };
    FacultyComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.firstName);
        console.log(form.firstName);
        flag = flag && validator.isNotNullObject(form.lastName);
        console.log(form.lastName);
        flag = flag && validator.isNotNullObject(form.email);
        console.log(form.email);
        flag = flag && validator.isNotNullObject(form.qualification);
        console.log(form.qualification);
        flag = flag && validator.isNotNullObject(form.gender);
        console.log(form.gender);
        flag = flag && validator.isNotNullObject(form.phoneNo);
        console.log(form.phoneNo + "in validateForm----------------------------");
        flag = flag && validator.isNotNullObject(form.courseId);
        console.log(form.courseId);
        flag = flag && validator.isNotNullObject(form.collegeId);
        console.log(form.collegeId);
        flag = flag && validator.isNotNullObject(form.subjectId);
        console.log(form.subjectId);
        return flag;
    };
    FacultyComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.subjectId = data.subjectId;
        console.log(form.subjectId + 'subject--');
        form.collegeId = data.collegeId;
        form.courseId = data.courseId;
        console.log(form.courseId + 'course ----');
        form.firstName = data.firstName;
        form.lastName = data.lastName;
        form.email = data.email;
        form.qualification = data.qualification;
        form.gender = data.gender;
        form.dob = data.dob;
        form.phoneNo = data.phoneNo;
        console.log("phoneno----------------" + form.phoneNo);
    };
    FacultyComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    FacultyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-faculty',
            template: __webpack_require__(/*! ./faculty.component.html */ "./src/app/faculty/faculty.component.html"),
            styles: [__webpack_require__(/*! ./faculty.component.css */ "./src/app/faculty/faculty.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], FacultyComponent);
    return FacultyComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseCtl"]));



/***/ }),

/***/ "./src/app/file/file.component.css":
/*!*****************************************!*\
  !*** ./src/app/file/file.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbGUvZmlsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/file/file.component.html":
/*!******************************************!*\
  !*** ./src/app/file/file.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container row\">\n\n    <div class=\"col-md-12\">\n\n        <h1 class=\"text-primary pt-4\">Upload Image Test Page</h1>\n\n    </div>\n\n</div>\n\n<div class=\"container row pl-4\">\n <div class=\"form-group\">\n        <input type=\"file\" id=\"file\" (change)=\"handleFileInput($event.target.files)\">\n    </div>\n\n    <div class=\"col-md-6\">\n\n        <input type=\"button\" class=\"btn btn-success\" (click)=\"onUpload()\" value=\"upload\">\n\n    </div>\n\n</div>\n\n<hr />\n<!--   \n  <div class=\"container row\">\n  \n      <div class=\"col-md-12\">\n  \n          <div *ngIf=message>{{message}}</div>\n  \n      </div>\n  \n  </div>\n  \n  \n  <div class=\"container row\">\n  \n      <div class=\"col-md-6\">\n\n          <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"image name\" [(ngModel)]=\"imageName\"\n  \n              name=\"name\" />\n  \n      </div>\n  \n      <div class=\"col-md-6\">\n  \n          <input type=\"button\" (click)=\"getImage()\" value=\"Get Image\">\n  \n      </div>\n  \n  </div>\n  \n  \n  <div class=\"container row\">\n  \n      <div class=\"col-md-12\">\n            <div *ngIf=retrievedImage>\n  \n              <img [src]=\"retrievedImage\">\n  \n          </div>\n  \n      </div>\n  \n  </div> -->"

/***/ }),

/***/ "./src/app/file/file.component.ts":
/*!****************************************!*\
  !*** ./src/app/file/file.component.ts ***!
  \****************************************/
/*! exports provided: FileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileComponent", function() { return FileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var FileComponent = /** @class */ (function () {
    function FileComponent(formBuilder, httpClient) {
        this.formBuilder = formBuilder;
        this.httpClient = httpClient;
        this.fileToUpload = null;
    }
    FileComponent.prototype.ngOnInit = function () { };
    FileComponent.prototype.handleFileInput = function (files) {
        this.fileToUpload = files.item(0);
        console.log(this.fileToUpload);
    };
    FileComponent.prototype.onUpload = function () {
        var _this = this;
        this.onSubmit(this.fileToUpload).subscribe(function (data) {
            console.log(_this.fileToUpload);
        }, function (error) {
            console.log(error);
        });
    };
    FileComponent.prototype.onSubmit = function (fileToUpload) {
        var formData = new FormData();
        formData.append('file', fileToUpload);
        return this.httpClient.post("http://localhost:8080/User/profilePic/1", formData);
    };
    FileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-file',
            template: __webpack_require__(/*! ./file.component.html */ "./src/app/file/file.component.html"),
            styles: [__webpack_require__(/*! ./file.component.css */ "./src/app/file/file.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], FileComponent);
    return FileComponent;
}());



/***/ }),

/***/ "./src/app/flate/flate.component.css":
/*!*******************************************!*\
  !*** ./src/app/flate/flate.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZsYXRlL2ZsYXRlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/flate/flate.component.html":
/*!********************************************!*\
  !*** ./src/app/flate/flate.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  flate works!\n</p>\n"

/***/ }),

/***/ "./src/app/flate/flate.component.ts":
/*!******************************************!*\
  !*** ./src/app/flate/flate.component.ts ***!
  \******************************************/
/*! exports provided: FlateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlateComponent", function() { return FlateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FlateComponent = /** @class */ (function () {
    function FlateComponent() {
    }
    FlateComponent.prototype.ngOnInit = function () {
    };
    FlateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-flate',
            template: __webpack_require__(/*! ./flate.component.html */ "./src/app/flate/flate.component.html"),
            styles: [__webpack_require__(/*! ./flate.component.css */ "./src/app/flate/flate.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FlateComponent);
    return FlateComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer{\n    position: fixed;\n    \n    bottom: 0px;\n    height: 40px;\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTs7SUFFZixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlcntcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgXG4gICAgYm90dG9tOiAwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"text-center \"\n style=\"background: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\">\n  <!-- Copyright -->\n  <div class=\"text-center pt-2 pb-2 text-light\" >\n    &copy; {{'COPYRIGHT' | translate}}\n    <a class=\"text-light\" href=\"\">{{'NCS PVT. LTD' | translate}}</a>\n  </div>\n  <!-- Copyright -->\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/http-service.service.ts":
/*!*****************************************!*\
  !*** ./src/app/http-service.service.ts ***!
  \*****************************************/
/*! exports provided: HttpServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpServiceService", function() { return HttpServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HttpServiceService = /** @class */ (function () {
    function HttpServiceService(router, httpClient) {
        this.router = router;
        this.httpClient = httpClient;
        this.form = { message: '', error: false };
        this.userparams = { url: '', sessionExpiredMsg: '', methodType: '' };
    }
    HttpServiceService.prototype.get = function (endpoint, callback) {
        var _this = this;
        return this.httpClient.get(endpoint, { withCredentials: true }).subscribe(function (data) {
            console.log('Data:', data);
            callback(data);
        }, function (error) {
            console.log('ORS Error:', error);
            if (error.status === 401) {
                localStorage.clear();
                _this.userparams.url = _this.router.url;
                console.log('URL:', _this.router.url);
                _this.router.navigate(['/login'], { queryParams: { errorMessage: error.error.error } });
            }
        });
    };
    HttpServiceService.prototype.post = function (endpoint, bean, callback) {
        var _this = this;
        return this.httpClient.post(endpoint, bean, { withCredentials: true }).subscribe(function (data) {
            console.log(data);
            callback(data);
        }, function (error) {
            console.log('ORS Error:', error);
            if (error.status === 401) {
                localStorage.clear();
                _this.router.navigate(['/login'], { queryParams: { errorMessage: error.error.error } });
            }
        });
    };
    HttpServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpServiceService);
    return HttpServiceService;
}());



/***/ }),

/***/ "./src/app/item/item.component.css":
/*!*****************************************!*\
  !*** ./src/app/item/item.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2l0ZW0vaXRlbS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/item/item.component.html":
/*!******************************************!*\
  !*** ./src/app/item/item.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<style>\n  .grad {\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\n    background-repeat: no-repeat;\n    background-size: 100%;\n    padding-bottom: 25px;\n  }\n\n  .background {\n    padding-top: 3%;\n    padding-bottom: 13%;\n    background: url('assets/files/wall.jpg') no-repeat center center;\n    background-attachment: fixed;\n    background-size: cover;\n    width: 100%;\n    height: auto;\n  }\n\n  .required-field {\n    color: red;\n  }\n\n  .alertRedColor {\n    color: red;\n  }\n</style>\n\n<div class=\"container-fluid background\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-sm-8 col-md-6 col-lg-4\">\n      <div class=\"card\">\n        <div class=\"card-body shadow-lg grad\">\n          <form name=\"itemForm\">\n            <h2 *ngIf=\"!form.data.id > 0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{ 'Add Item Information'\n              | translate }}</h2>\n            <h2 *ngIf=\"form.data.id > 0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{ 'Update\n              Item Information' | translate }}</h2>\n\n            <!-- Form error messages -->\n            <div *ngIf=\"form.error && form.message\" class=\"alert alert-danger alert-dismissible fade show\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n              {{ form.message }}\n            </div>\n            <div *ngIf=\"!form.error && form.message\" class=\"alert alert-success alert-dismissible fade show\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n              {{ form.message }}\n            </div>\n\n            <div class=\"form-group pt-2\">\n              <label><b>{{ 'title' | translate }}</b><span class=\"required-field\">*</span></label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i></div>\n                </div>\n                <input type=\"text\" name=\"title\" [(ngModel)]=\"form.data.title\" class=\"form-control\"\n                  (keydown)=\"filterInput($event, 'errorMessageTitle', 20, 'char')\"\n                  placeholder=\"{{ 'Enter title' | translate }}\">\n              </div>\n              <span *ngIf=\"errorMessageTitle\" class=\"alertRedColor\">{{ errorMessageTitle }}</span>\n              <span *ngIf=\"form.inputerror?.title\" class=\"alertRedColor\">{{ form.inputerror.title }}</span>\n            </div>\n\n            <div class=\"form-group pt-2\">\n              <label><b>{{ 'overview' | translate }}</b><span class=\"required-field\">*</span></label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i></div>\n                </div>\n                <textarea type=\"text\" name=\"overview\" [(ngModel)]=\"form.data.overview\" class=\"form-control\"\n                  (keydown)=\"filterInput($event, 'errorMessageOverview', 20, 'char')\"\n                  placeholder=\"{{ 'Enter overview' | translate }}\"></textarea>\n              </div>\n              <span *ngIf=\"errorMessageOverview\" class=\"alertRedColor\">{{ errorMessageOverview }}</span>\n              <span *ngIf=\"form.inputerror?.overview\" class=\"alertRedColor\">{{ form.inputerror.overview }}</span>\n            </div> \n\n            <div class=\"form-group\">\n              <label><b>{{ 'category' | translate }}</b><span class=\"required-field\">*</span></label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i></div>\n                </div>\n                <select class=\"form-control\" name=\"category\" [(ngModel)]=\"form.data.category\" aria-label=\"ngSelected\">\n                  <option [ngValue]=\"undefined\">{{ 'Select category' | translate }}</option>\n                  <option *ngFor=\"let category of form.preload.Itemlist\" [value]=\"category\">{{ category }}</option>\n                </select>\n              </div>\n              <span *ngIf=\"form.inputerror.category\" class=\"alertRedColor\">{{ form.inputerror.category }}</span>\n            </div>\n            <div class=\"form-group pt-2\">\n              <label><b>{{ 'Purchase Date' | translate }}</b><span class=\"required-field\">*</span></label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-calendar grey-text\"></i></div>\n                </div>\n                <input type=\"date\" name=\"purchaseDate\" [value]=\"form.data.purchaseDate | date:'yyyy-MM-dd'\" class=\"form-control\"\n                (input)=\"form.data.purchaseDate=parseDate($event.target.value)\"\n                  placeholder=\"{{ 'Enter Purchase Date' | translate }}\" required>\n              </div>\n              \n              <span *ngIf=\"form.inputerror?.purchaseDate\" class=\"alertRedColor\">{{ form.inputerror.purchaseDate }}</span>\n            </div>\n\n            <div class=\"form-group pt-2\">\n              <label><b>{{ 'cost' | translate }}</b><span class=\"required-field\">*</span></label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-mobile grey-text\"></i></div>\n                </div>\n                <input type=\"text\" name=\"cost\" [(ngModel)]=\"form.data.cost\" class=\"form-control\"\n                (keydown)=\"filterInput($event, 'errorMessagecost', 10, 'int')\"\n                  placeholder=\"{{ 'Enter cost' | translate }}\" >\n              </div>\n              <span *ngIf=\"errorMessagecost\" class=\"alertRedColor\">{{ errorMessagecost }}</span>\n              <span *ngIf=\"form.inputerror?.cost\" class=\"alertRedColor\">{{ form.inputerror.cost }}</span>\n            </div>\n\n\n            <!-- Form buttons -->\n            <div class=\"form-group text-center\">\n              <button (click)=\"submit()\" class=\"btn btn-success mr-2\">{{ 'Save' | translate }}</button>\n              <button (click)=\"forward('/itemlist')\" type=\"button\" class=\"btn btn-warning\">{{ 'List' | translate\n                }}</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/item/item.component.ts":
/*!****************************************!*\
  !*** ./src/app/item/item.component.ts ***!
  \****************************************/
/*! exports provided: ItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemComponent", function() { return ItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");





var ItemComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ItemComponent, _super);
    function ItemComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.ITEM, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.errorMessageTitle = '';
        return _this;
    }
    ItemComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.title);
        flag = flag && validator.isNotNullObject(form.overview);
        flag = flag && validator.isNotNullObject(form.cost);
        flag = flag && validator.isNotNullObject(form.purchaseDate);
        flag = flag && validator.isNotNullObject(form.category);
        return flag;
    };
    ItemComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.title = data.title;
        form.overview = data.overview;
        form.cost = data.cost;
        form.purchaseDate = data.purchaseDate;
        form.category = data.category;
    };
    ItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-item',
            template: __webpack_require__(/*! ./item.component.html */ "./src/app/item/item.component.html"),
            styles: [__webpack_require__(/*! ./item.component.css */ "./src/app/item/item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ItemComponent);
    return ItemComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/item/itemlist.component.css":
/*!*********************************************!*\
  !*** ./src/app/item/itemlist.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2l0ZW0vaXRlbWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/item/itemlist.component.html":
/*!**********************************************!*\
  !*** ./src/app/item/itemlist.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<style>\n  #nnn {\n    background: none;\n    border: none;\n    cursor: pointer;\n  }\n\n  .panel-heading {\n    height: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .search-inputs {\n    margin-top: 20px;\n  }\n\n  .search-inputs .form-control,\n  .search-inputs .btn {\n    margin-bottom: 10px;\n  }\n\n  .content-wrapper {\n    background: url('assets/files/1024.jpg') no-repeat center center;\n    background-attachment: fixed;\n    background-size: cover;\n    width: auto;\n    height: 105vh;\n    padding: 20px;\n  }\n\n  .table-responsive {\n    margin-top: 20px;\n  }\n\n  .search-inputs .col-sm-2,\n  .search-inputs .col-sm-1 {\n    padding: 0 5px;\n  }\n\n  .alertRedColor {\n    color: red;\n  }\n</style>\n\n<div class=\"content-wrapper\">\n  <div class=\"container-fluid\">\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\">\n        <h1 class=\"text-primary font-weight-bold\">{{ 'Item Information List' | translate }}</h1>\n      </div>\n\n      <div class=\"row search-inputs p-1 justify-content-center\">\n        <div class=\"col-sm-2\">\n          <input type=\"text\" name=\"title\" [(ngModel)]=\"form.searchParams.title\" class=\"form-control\"\n            (keydown)=\"filterInput($event, 'errorMessagetitle', 20, 'char')\"\n            placeholder=\"{{ 'Enter title' | translate }}\">\n\n          <span *ngIf=\"errorMessagetitle\" class=\"alertRedColor\">{{ errorMessagetitle }}</span>\n        </div>\n\n        <div class=\"col-sm-2\">\n          <input type=\"text\" name=\"overview\" [(ngModel)]=\"form.searchParams.overview\" class=\"form-control\"\n            (keydown)=\"filterInput($event, 'errorMessageoverview', 20, 'char')\"\n            placeholder=\"{{ 'Enter overview' | translate }}\">\n\n          <span *ngIf=\"errorMessageoverview\" class=\"alertRedColor\">{{ errorMessageoverview }}</span>\n        </div>\n\n        <div class=\"col-sm-2\">\n          <input type=\"text\" name=\"cost\" [(ngModel)]=\"form.searchParams.cost\" class=\"form-control\"\n            (keydown)=\"filterInput($event, 'errorMessagecost', 10, 'int')\"\n            placeholder=\"{{ 'Enter cost' | translate }}\">\n          <span *ngIf=\"errorMessagecost\" class=\"alertRedColor\">{{ errorMessagecost }}</span>\n        </div>\n        \n        <div class=\"col-sm-2\">\n          <select class=\"form-control\" name=\"category\" [(ngModel)]=\"form.searchParams.category\" aria-label=\"ngSelected\">\n            <option [ngValue]=\"undefined\">{{ 'Select category' | translate }}</option>\n            <option *ngFor=\"let category of form.preload.Itemlist\" [value]=\"category\">{{ category }}</option>\n          </select>\n          <span *ngIf=\"form.inputerror.category\" class=\"alertRedColor\">{{ form.inputerror.category }}</span>\n        </div>\n\n        <div class=\"col-sm-2\">\n          <input type=\"date\" name=\"purchaseDate\" [(ngModel)]=\"form.searchParams.purchaseDate\" class=\"form-control\"\n            placeholder=\"{{ 'Enter Purchase Date' | translate }}\">\n        </div>\n\n      \n\n        <div class=\"col-sm-1\">\n          <button (click)=\"submit()\" class=\"btn btn-primary\">{{ 'Search' | translate }}</button>\n        </div>\n\n        <div class=\"col-sm-2\">\n          <button (click)=\"forward('/item')\" type=\"button\" class=\"btn btn-success\">\n            {{ 'Add Customer' | translate }}\n          </button>\n        </div>\n\n        <div class=\"col-sm-1\">\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">{{ 'Delete' | translate }}</button>\n        </div>\n      </div>\n\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{ form.message }}\n      </div>\n\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{ form.message }}\n      </div>\n\n      <div class=\"table-responsive\">\n        <table class=\"table table-bordered table-hover font-weight-bold text-dark\">\n          <thead class=\"thead-dark text-uppercase\">\n            <tr align=\"center\">\n              <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\"\n                  (change)=\"checkUncheckAll($event)\" /></th>\n              <th>{{ 'S.No' | translate }}</th>\n              <th>{{ 'TITLE' | translate }}</th>\n              <th>{{ 'OVERVIEW' | translate }}</th>\n              <th>{{ 'COST' | translate }}</th>\n              <th>{{ 'PURCHASEDATE' | translate }}</th>\n              <th>{{ 'CATEGORY' | translate }}</th>\n              <th>{{ 'Edit' | translate }}</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\n              <td><input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" [id]=\"m.id\" />\n              </td>\n              <td>{{ (form.pageNo * 5) + i + 1 }}</td>\n              <td>{{ m.title }}</td>\n              <td>{{ m.overview }}</td>\n              <td>{{ m.cost}}</td>\n              <td>{{ m.purchaseDate }}</td>\n              <td>{{ m.category }}</td>\n              \n\n              <td>\n                <button class=\"fa fa-edit text-primary\" id=\"nnn\" (click)=\"forward('/item/' + m.id)\">\n                </button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n\n        <div class=\"d-flex justify-content-between mt-3\">\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\">{{ 'Previous' | translate\n            }}\n          </button>\n          <div *ngIf=\"form.list.length == 0\">\n            <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/Itemlist']\" (click)=\"exit()\">\n              {{ 'Back' | translate }}\n            </a>\n          </div>\n          <button (click)=\"next()\" [disabled]=\"nextList == 0\" class=\"btn btn-info\">{{ 'Next' | translate }}</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/item/itemlist.component.ts":
/*!********************************************!*\
  !*** ./src/app/item/itemlist.component.ts ***!
  \********************************************/
/*! exports provided: ItemListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemListComponent", function() { return ItemListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_base_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var src_app_service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service-locator.service */ "./src/app/service-locator.service.ts");





var ItemListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ItemListComponent, _super);
    function ItemListComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.ITEM, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.myKey = "";
        _this.form = {
            error: false,
            message: null,
            preload: [],
            data: { id: null },
            inputerror: {},
            searchParams: {},
            searchMessage: null,
            list: [],
            pageNo: 0
        };
        _this.isValidexperienceInput = true; // Property to track validity of cost input
        _this.isValidtitleInput = true; // Property to track validity of description input
        return _this;
    }
    ItemListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-itemlist',
            template: __webpack_require__(/*! ./itemlist.component.html */ "./src/app/item/itemlist.component.html"),
            styles: [__webpack_require__(/*! ./itemlist.component.css */ "./src/app/item/itemlist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ItemListComponent);
    return ItemListComponent;
}(src_app_base_list_component__WEBPACK_IMPORTED_MODULE_3__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/loader/loader.component.css":
/*!*********************************************!*\
  !*** ./src/app/loader/loader.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/loader/loader.component.html":
/*!**********************************************!*\
  !*** ./src/app/loader/loader.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div id=\"loader\">\n      <div class=\"dot\"></div>\n      <div class=\"dot\"></div>\n      <div class=\"dot\"></div>\n      <div class=\"dot\"></div>\n      <div class=\"dot\"></div>\n      <div class=\"dot\"></div>\n      <div class=\"dot\"></div>\n      <div class=\"dot\"></div>\n      <div class=\"loading\"></div>\n    </div>\n\n    <p class=\"spinner-message\" *ngIf=\"message && message !== ''\">\n      {{message}}\n    </p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/loader/loader.component.ts":
/*!********************************************!*\
  !*** ./src/app/loader/loader.component.ts ***!
  \********************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
    }
    LoaderComponent.prototype.ngOnInit = function () {
    };
    LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loader',
            template: __webpack_require__(/*! ./loader.component.html */ "./src/app/loader/loader.component.html"),
            styles: [__webpack_require__(/*! ./loader.component.css */ "./src/app/loader/loader.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/login/forgotpassword.component.html":
/*!*****************************************************!*\
  !*** ./src/app/login/forgotpassword.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar ></app-navbar>\n<style>\n  .grad{\n  background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\n  background-repeat: no repeat;\n  background-size: 100%;\n  padding-bottom: 10px;\n  } \n  \n</style>\n<div class=\"row \" style=\"padding-top: 10%; padding-bottom:15%;\nbackground: url(assets/files/wall.jpg) no-repeat center center;\nbackground-attachment: fixed;\nbackground-size: cover;width:auto;\n  height: auto;\">\n\n\n  <div class=\"col-sm-4\"></div>\n\n  <div class=\"col-sm-4\">\n    \n    <div class=\"card\">\n      <div class=\"card-body shadow-lg grad\">\n        <form #loginForm=\"ngForm\">\n          \n          <div style=\"text-align: center;\">\n          <h1 class=\"text-primary font-weight-bold\">{{'Forgot Password' | translate}}</h1>\n          </div>\n\n          <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n          <div *ngIf=\"form.error == false && form.message == 'Password has been sent to email id'\"\n            class=\"alert alert-success alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Email Id' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"loginId\" [(ngModel)]=\"form.loginId\" class=\"form-control\"\n                  placeholder=\"{{'Enter Login Id' | translate}}\">\n              </div>\n            </div>\n          </div>\n\n          <span class=\"alertRedColor\">{{inputerror.loginId}}</span>\n\n          <div class=\"row pt-3 pl-3 pb-3\">\n            <div class=\"pt-2\">\n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n              <button (click)=\"submit()\" [disabled]=\"!validate()\" class=\"btn btn-success mr-2\">\n                {{'Reset My Password' | translate}}</button>\n            </div>\n          </div>\n        </form>\n      </div>\n\n    </div>\n\n  \n</div>\n  </div>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/login/forgotpassword.component.ts":
/*!***************************************************!*\
  !*** ./src/app/login/forgotpassword.component.ts ***!
  \***************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_data_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utility/data-validator */ "./src/app/utility/data-validator.ts");





var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(httpService, dataValidator, router) {
        this.httpService = httpService;
        this.dataValidator = dataValidator;
        this.router = router;
        this.endpoint = "http://localhost:8084/Auth";
        this.form = {
            error: false,
            message: "",
            loginId: '',
        };
        this.inputerror = {};
        this.message = '';
    }
    ForgotPasswordComponent.prototype.validate = function () {
        var flag = true;
        flag = flag && this.dataValidator.isNotNull(this.form.loginId);
        return flag;
    };
    /**
     * Initialize component
     */
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent.prototype.submit = function () {
        var _self = this;
        this.httpService.get(_self.endpoint + "/fp/" + this.form.loginId, function (res) {
            console.log('MyResponse', res);
            _self.form.message = '';
            _self.inputerror = {};
            console.log(res.result.message + '------>msg');
            if (res.result.message) {
                _self.form.message = res.result.message;
                console.log(_self.form.message + '-------> msg in sucess');
            }
            _self.form.error = !res.success;
            console.log(_self.form.error + '-----------> msg in self.form.error in res');
            if (_self.form.error && res.result.inputerror) {
                _self.inputerror = res.result.inputerror;
                console.log(_self.inputerror + '-----------> msg in self.form.error');
            }
        });
    };
    ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgotpassword.component.html */ "./src/app/login/forgotpassword.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service_service__WEBPACK_IMPORTED_MODULE_2__["HttpServiceService"], _utility_data_validator__WEBPACK_IMPORTED_MODULE_4__["DataValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alertRedColor {\n    color: red;\n}\n\n\n.required-field::after { \t\t\n  content: \"*\";\t\t\n  color: red;\t\t\n   }\n\n\n.successColor{\n    color: green;\n   }\n\n\n.btn-space {\n    margin-right: 5px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7QUFDZDs7O0FBR0E7RUFDRSxZQUFZO0VBQ1osVUFBVTtHQUNUOzs7QUFFQTtJQUNDLFlBQVk7R0FDYjs7O0FBRUE7SUFDQyxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsZXJ0UmVkQ29sb3Ige1xuICAgIGNvbG9yOiByZWQ7XG59XG5cblxuLnJlcXVpcmVkLWZpZWxkOjphZnRlciB7IFx0XHRcbiAgY29udGVudDogXCIqXCI7XHRcdFxuICBjb2xvcjogcmVkO1x0XHRcbiAgIH1cdFxuXG4gICAuc3VjY2Vzc0NvbG9ye1xuICAgIGNvbG9yOiBncmVlbjtcbiAgIH1cblxuICAgLmJ0bi1zcGFjZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar #one></app-navbar>\n\n<style>\n  #nnn {\n    background: none;\n    border: none;\n  }\n\n  .log1 {\n    padding-top: 13%;\n  }\n\n  .input-group-addon {\n    box-shadow: 9px 8px 7px #001a33;\n  }\n\n  .grad {\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\n    background-repeat: no-repeat;\n    background-size: 100%;\n    padding-bottom: 10px;\n  }\n</style>\n\n<div class=\"row\" style=\"padding-top: 8%; padding-bottom: 8%; background: url(assets/files/4.jpg) no-repeat center center; background-attachment: fixed; background-size: 225vh; width: auto; height: 105vh;\">\n  <div class=\"col-sm-4\"></div>\n  <div class=\"col-sm-4\">\n    <div class=\"card input-group-addon grad\">\n      <div class=\"card-body\">\n        <form>\n          <div style=\"text-align: center;\">\n            <h1 class=\"text-primary font-weight-bold\">{{'Login' | translate}}</h1>\n          </div>\n          <input type=\"hidden\" name=\"loginUrl\" [(ngModel)]=\"form.loginUrl\" class=\"form-control\">\n          \n          <div *ngIf=\"form.error && form.message == 'Invalid ID or Password'\" class=\"alert alert-danger alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{'Invalid ID or Password' | translate}}\n          </div>\n          \n          <div *ngIf=\"form.error == false && form.message == 'Logout Successfully'\" class=\"alert alert-success alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{'Log out successfully' | translate}}\n          </div>\n\n          <div *ngIf=\"form.message == 'OOPS! Your session has been expired'\" class=\"alert alert-danger alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{'OOPS! Your session has been expired' | translate}}\n          </div>\n          \n          <div style=\"padding-top: 3%\">\n            <span class=\"pt-2\"><b>{{'Email Id' | translate}}</b><span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i></div>\n                </div>\n                <input type=\"text\" name=\"loginId\" [(ngModel)]=\"form.loginId\" class=\"form-control\" placeholder=\"{{'Enter Login Id' | translate}}\">\n              </div>\n            </div>\n            <span *ngIf=\"inputerror.loginId != null\" class=\"alertRedColor\" style=\"color: red;\">{{'loginId' | translate}}</span>\n          </div>\n          \n          <div style=\"padding-top: 3%\">\n            <span><b>{{'Password' | translate}}</b><span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-key grey-text\"></i></div>\n                </div>\n                <input type=\"password\" name=\"pwd\" [(ngModel)]=\"form.password\" class=\"form-control\" placeholder=\"{{'Enter Password' | translate}}\">\n              </div>\n            </div>\n            <span *ngIf=\"inputerror.password != null\" class=\"alertRedColor\" style=\"color: red;\">{{'password' | translate}}</span>\n          </div>\n          \n          <div class=\"row pt-3 pl-3 pb-3\">\n            <div class=\"pt-2\">\n              <button (click)=\"signIn()\" class=\"btn btn-md btn-success\">{{'Sign in' | translate}}</button>\n            </div>\n            <div class=\"pl-3 pt-2\">\n              <a class=\"btn btn-warning\" [routerLink]=\"['/forgotpassword']\">{{'Forgot Password' | translate}}</a>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var _utility_data_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utility/data-validator */ "./src/app/utility/data-validator.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(httpService, dataValidator, router, cookieService, route, serviceLocator) {
        this.httpService = httpService;
        this.dataValidator = dataValidator;
        this.router = router;
        this.cookieService = cookieService;
        this.route = route;
        this.serviceLocator = serviceLocator;
        this.endpoint = "http://localhost:8084/Auth";
        this.form = {
            error: false,
            message: '',
            loginId: '',
            password: '',
            loginUrl: ''
        };
        this.inputerror = {};
        this.message = '';
        this.userparams = {
            url: '',
            sessionExpiredMsg: '',
            methodType: ''
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.form.message = params['errorMessage'] || null;
            console.log("Message:", _this.form.message);
        });
        if (this.httpService.form.error) {
            this.form.message = this.httpService.form.message;
            this.form.error = this.httpService.form.error;
        }
        this.serviceLocator.getPathVariable(this.route, function (params) {
            var userparam = params["userparams"];
            console.log('Userparam:', userparam);
            if (userparam === 'true') {
                _this.form.message = 'Logout Successfully';
            }
        });
    };
    LoginComponent.prototype.userSessionCheck = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.userparams = JSON.parse(_this.route.snapshot.queryParamMap.get('userparams'));
            if (_this.userparams) {
                _this.form.message = _this.userparams.sessionExpiredMsg;
                _this.form.loginUrl = _this.userparams.url;
            }
        });
        if (this.form.message) {
            this.form.error = true;
        }
    };
    LoginComponent.prototype.validate = function () {
        var flag = true;
        flag = flag && this.dataValidator.isNotNull(this.form.loginId);
        console.log(this.form.loginId);
        flag = flag && this.dataValidator.isNotNull(this.form.password);
        console.log(this.form.password);
        return flag;
    };
    LoginComponent.prototype.signIn = function () {
        var _this = this;
        this.form.error = false;
        var requestedUrl = this.httpService.userparams.url;
        console.log('SignIn:', this.form);
        this.httpService.post(this.endpoint + "/login", this.form, function (res) {
            console.log('Response:', res);
            _this.form.message = '';
            _this.inputerror = {};
            if (_this.dataValidator.isNotNullObject(res.result.message)) {
                _this.form.message = res.result.message;
            }
            _this.form.error = !res.success;
            if (_this.dataValidator.isNotNullObject(res.result.inputerror)) {
                _this.inputerror = res.result.inputerror;
            }
            if (_this.dataValidator.isTrue(res.success)) {
                localStorage.setItem("loginId", res.result.loginId);
                localStorage.setItem("role", res.result.role);
                localStorage.setItem("fname", res.result.fname);
                localStorage.setItem("lname", res.result.lname);
                localStorage.setItem("userid", res.result.data.id);
                if (requestedUrl) {
                    _this.router.navigateByUrl(requestedUrl);
                }
                else {
                    _this.router.navigateByUrl('/dashboard');
                }
            }
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service_service__WEBPACK_IMPORTED_MODULE_3__["HttpServiceService"],
            _utility_data_validator__WEBPACK_IMPORTED_MODULE_4__["DataValidator"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _service_locator_service__WEBPACK_IMPORTED_MODULE_6__["ServiceLocatorService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/signup.component.html":
/*!*********************************************!*\
  !*** ./src/app/login/signup.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<style>\n   .grad{\n  background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\n  background-repeat: no repeat;\n  background-size: 100%;\n  padding-bottom: 25px\n  ;\n  }\n \n</style>\n<div class=\"row \" style=\" padding-top: 4%;\n padding-bottom:0%;background-image: url(../../assets/files/wall.jpg);\nbackground-attachment: fixed;\nbackground-size: 100%;\n  height: 120vh;\">\n\n  <div class=\"col-sm-4\"></div>\n  <div class=\"col-sm-4\">\n    <div class=\"card\">\n      <div class=\"card-body shadow-lg grad\">\n         <form>\n          <div style=\"text-align: center;\">\n            <h3 class=\"text-primary font-weight-bold\">\n              {{'Sign Up' | translate}}\n            </h3>\n          </div>\n\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n          <div *ngIf=\"!form.error && form.message != null && form.message.length>0\"\n            class=\"alert alert-success alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n\n          <div style=\"padding-top:0.3%\">\n            <span class=\"pt-2\"><b>{{'First Name' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"firstName\" [(ngModel)]=\"form.data.firstName\" class=\"form-control\"\n                  placeholder=\"{{'Enter First Name' | translate}}\">\n              </div>\n            </div><span  *ngIf=\"form.inputerror.firstName != null\"\n            class=\"alertRedColor\" style=\" color: red;\" > {{'firstname'| translate}} </span>\n            <!-- <span class=\"alertRedColor\" style=\" color: red;\"> {{form.inputerror.firstName}} </span> -->\n          </div>\n\n          <div style=\"padding-top:0.1%\">\n            <span class=\"pt-2\"><b>{{'Last Name' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-user-circle grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"lastName\" [(ngModel)]=\"form.data.lastName\" class=\"form-control\"\n                  placeholder=\"{{'Enter Last Name' | translate}}\">\n              </div>\n            </div><span  *ngIf=\"form.inputerror.lastName != null\"\n            class=\"alertRedColor\" style=\" color: red;\" > {{'lastname'| translate}} </span>\n            <!-- <span class=\"alertRedColor\" style=\" color: red;\"> {{form.inputerror.lastName}} </span> -->\n          </div>\n\n          <div style=\"padding-top:0.1%\">\n            <span class=\"pt-2\"><b>{{'Login id' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"login\" [(ngModel)]=\"form.data.login\" class=\"form-control\"\n                  placeholder=\"{{'Enter Email Id' | translate}}\">\n\n              </div>\n            </div><span  *ngIf=\"form.inputerror.login != null\"\n            class=\"alertRedColor\" style=\" color: red;\" > {{'email'| translate}} </span>\n            <!-- <span class=\"alertRedColor\" style=\" color: red;\"> {{form.inputerror.login}} </span> -->\n          </div>\n\n          <div style=\"padding-top:0.1%\">\n            <span class=\"pt-2\"><b>{{'Password' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-key grey-text\"></i> </div>\n                </div>\n                <input type=\"password\" name=\"password\" [(ngModel)]=\"form.data.password\" class=\"form-control\"\n                  placeholder=\"{{'Enter Password' | translate}}\">\n              </div>\n            </div><span  *ngIf=\"form.inputerror.password != null\"\n            class=\"alertRedColor\" style=\" color: red;\" > {{'password'| translate}} </span>\n            <!-- <span class=\"alertRedColor\" style=\" color: red;\"> {{password | translate}} </span> -->\n          </div>\n\n          <div style=\"padding-top:0.1%\">\n            <span class=\"pt-2\"><b>{{'Mobile' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-phone grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"phone\" maxlength=\"10\" [(ngModel)]=\"form.data.phone\" class=\"form-control\"\n                  placeholder=\"{{'Enter Mobile Number' | translate}}\">\n              </div>\n            </div>\n            <span  *ngIf=\"form.inputerror.phone != null\"\n              class=\"alertRedColor\" style=\" color: red;\" > {{'phone'| translate}} </span>\n          </div>\n\n          <!-- <div style=\"padding-top:0.1%\">\n            <span class=\"pt-2\"><b>{{'Alternate Mobile' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-mobile grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"alternateMobile\" [(ngModel)]=\"form.data.alternateMobile\" class=\"form-control\"\n                  placeholder=\"{{'Enter Alternate Number' | translate}}\">\n              </div>\n            </div><span  *ngIf=\"form.inputerror.alternateMobile != null\"\n            class=\"alertRedColor\" style=\" color: red;\" > {{'mobile'| translate}} </span>\n            <!-- <span class=\"alertRedColor\" style=\" color: red;\"> {{form.inputerror.phone}} </span> \n          <!-- </div>  -->\n\n          <div style=\"padding-top:0.1%\">\n            <span class=\"pt-2\"><b>{{'DOB' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-table grey-text\"></i> </div>\n                </div>\n                <input type=\"date\" name=\"dob\" [(ngModel)]=\"form.data.dob\" class=\"form-control\">\n              </div>\n            </div> <span  *ngIf=\"form.inputerror.dob != null\"\n            class=\"alertRedColor\" style=\" color: red;\" > {{'dob'| translate}} </span>\n            <!-- <span class=\"alertRedColor\" style=\" color: red;\"> {{form.inputerror.dob}} </span> -->\n          </div>\n\n          <div style=\"padding-top:0.1%\">\n            <span class=\"pt-2\"><b>{{'Gender' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-venus grey-text\"></i> </div>\n                </div>\n                <select class=\"form-control\" name=\"gender\" id=\"gender\" [(ngModel)]=\"form.data.gender\"\n                  style=\"cursor: pointer;\">\n                  <option [ngValue]=\"\" value=\"undefined\">{{'Please select' | translate}}</option>\n                  <option value=\"Male\">{{'Male' | translate}} </option>\n                  <option value=\"Female\">{{'Female' | translate}} </option>\n                  <option value=\"Other\">{{'Other' | translate}} </option>\n\n                </select>\n              </div>\n            </div> <span  *ngIf=\"form.inputerror.gender != null\"\n            class=\"alertRedColor\" style=\" color: red;\" > {{'gender'| translate}} </span>\n            <!-- <span class=\"alertRedColor\" style=\" color: red;\"> {{form.inputerror.gender}} </span> -->\n          </div>\n          <div class=\"row pt-3 pl-3 pb-3\">\n            <div class=\"col-md-3\"></div>\n            <div class=\"pt-2\">\n\n\n              <button (click)=\"submit()\" class=\"btn btn-success mr-2\">\n                {{'Sign up' | translate}}</button>\n            </div>\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n            <div class=\"pt-2\">\n\n              <a class=\"btn btn-warning mr-1\"[routerLink]=\"['/signup']\" (click)=\"exit()\">{{'Reset' | translate}}</a>\n\n\n            </div>\n          </div>\n\n\n\n\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/login/signup.component.ts":
/*!*******************************************!*\
  !*** ./src/app/login/signup.component.ts ***!
  \*******************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_data_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utility/data-validator */ "./src/app/utility/data-validator.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");






var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(serviceLocator, httpService, dataValidator, router) {
        this.serviceLocator = serviceLocator;
        this.httpService = httpService;
        this.dataValidator = dataValidator;
        this.router = router;
        this.endpoint = "http://localhost:8084/Auth/signUp";
        this.form = {
            error: false,
            message: '',
            data: { id: null },
            inputerror: {},
        };
    }
    SignUpComponent.prototype.validate = function () {
        return this.validateForm(this.form);
    };
    /**
     * Override by childs
     *
     * @param form
     */
    SignUpComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.firstName);
        flag = flag && validator.isNotNullObject(form.lastName);
        flag = flag && validator.isNotNullObject(form.loginId);
        flag = flag && validator.isNotNullObject(form.password);
        flag = flag && validator.isNotNullObject(form.phone);
        flag = flag && validator.isNotNullObject(form.gender);
        flag = flag && validator.isNotNullObject(form.dob);
        return flag;
    };
    /**
     * Initialize component
     */
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent.prototype.exit = function () {
        location.reload();
    };
    SignUpComponent.prototype.reset = function () {
        this.router.navigate(['/signup']);
    };
    SignUpComponent.prototype.submit = function () {
        var _self = this;
        this.httpService.post(this.endpoint, this.form.data, function (res) {
            console.log('MyResponse', res);
            _self.form.message = '';
            _self.form.inputerror = {};
            if (res.result.message) {
                _self.form.message = res.result.message;
            }
            _self.form.error = !res.success;
            if (_self.form.error && res.result.inputerror) {
                _self.form.inputerror = res.result.inputerror;
            }
        });
    };
    SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/login/signup.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_5__["ServiceLocatorService"], _http_service_service__WEBPACK_IMPORTED_MODULE_2__["HttpServiceService"], _utility_data_validator__WEBPACK_IMPORTED_MODULE_4__["DataValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/marksheet/getmarksheet.component.html":
/*!*******************************************************!*\
  !*** ./src/app/marksheet/getmarksheet.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div  style=\"\nbackground: url(assets/files/gettyimages-1132439283-640x640.jpg) no-repeat center center;\nbackground-attachment: fixed;\nbackground-size: cover;\npadding-top: 5%;\npadding-bottom: 24%;\nwidth:100%;\n  height: 100;\">\n  <form name=\"rollForm\" (ngSubmit)=\"go()\">\n    <div align=\"center\">\n      <div style=\"font-size: 80px;\">\n      <p class=\"font-weight-bold text-primary\">{{'Get Marksheet' | translate }}</p>\n    </div>\n    </div>\n    <div class=\"row pt-4 pb-4\">\n      <div class=\"col-sm-4 \"></div>\n      <div class=\"col-md-2 col-sm-2 col-xs-2\">\n        <input type=\"text\" name=\"rollNo\" id=\"rollNo\" class=\"form-control\" [(ngModel)]=\"form.data.rollNo\"\n          placeholder=\"{{'Enter Roll Number' | translate }}\">&emsp;</div>\n      <div class=\"col-md-2 col-sm-2 col-xs-2\">\n        <button type=\"submit\" [disabled]=\"!validate()\" class=\"btn btn-success mr-2\">\n          {{'Search' | translate }}</button>\n        <a class=\"btn btn-primary\" [routerLink]=\"['/getmarksheet']\"> {{'Reset' | translate}} </a>\n        \n        &emsp;\n\n      </div>\n      <div class=\"col-md-3 col-sm-3 col-xs-3\"></div>\n\n    </div>\n  </form>\n  <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n    {{form.message}}\n  </div>\n  <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n    {{form.message}}\n  </div>\n\n  <div class=\"container\" *ngIf=\"form.list.rollNo!= null\" >\n\n    <table width=\"100%\" class=\"table table-bordered table-striped table-hover\" border=\"3px\">\n      <tr>\n        <th id=\"po1\" colspan=\"2\">{{'RollNO' | translate }}</th>\n        <td id=\"po1\" colspan=\"3\">{{form.list.rollNo}}</td>\n      </tr>\n      <tr>\n        <th id=\"po1\" colspan=\"2\">{{'Name' | translate }}</th>\n        <td id=\"po1\" colspan=\"3\">{{form.list.name}}</td>\n      </tr>\n      <tr>\n        <th id=\"po1\">{{'Marks' | translate }}</th>\n        <th align=\"center\" id=\"po1\">{{'Max Marks' | translate }}</th>\n        <th  align=\"center\" id=\"po1\">{{'Min Marks' | translate }}</th>\n        <th  align=\"center\" id=\"po1\">{{'Marks Obtain' | translate }}</th>\n      </tr>\n      <tr>\n        <th id=\"po1\" colspan=\"2\">{{'Subject' | translate }}</th>\n        \n      </tr>\n      <tr>\n        <th id=\"po1\">{{'Physics' | translate }}</th>\n        <td align=\"center\">100</td>\n        <td align=\"center\">35</td>\n        <td id=\"po1\" align=\"center\">\n          <!-- <span style=\"color: red;\">{{form.list.physics}}*</span> -->\n          <span [ngStyle]=\"{'color': (form.list.physics >35) ? 'green': 'red' }\">{{form.list.physics}}</span>\n          \n        </td>\n      </tr>\n      <tr>\n        <th id=\"po1\">{{'Chemistry' | translate }}</th>\n        <td align=\"center\">100</td>\n        <td align=\"center\">35</td>\n        <td id=\"po1\" align=\"center\">\n          <!-- <span style=\"color: red;\">{{form.list.chemistry}}*</span>  -->\n          <span [ngStyle]=\"{'color': (form.list.chemistry >35) ? 'green': 'red' }\">{{form.list.chemistry}}</span>\n        </td>\n      </tr>\n      <tr>\n        <th id=\"po1\">{{'Maths' | translate }}</th>\n        <td align=\"center\">100</td>\n        <td align=\"center\">35</td>\n        <td id=\"po1\" align=\"center\">\n          <!-- <span style=\"color: red;\">{{form.list.maths}}*</span> -->\n          <span [ngStyle]=\"{'color': (form.list.maths >35) ? 'green': 'red' }\">{{form.list.maths}}</span>\n        </td>\n      </tr>\n      <tr>\n        <th id=\"po1\" colspan=\"2\">{{'Total' | translate }}</th>\n\n        <td id=\"po1\" colspan=\"3\" align=\"center\">{{form.list.maths+form.list.physics+form.list.chemistry}}</td>\n      </tr>\n      <tr>\n\n        <th id=\"po1\" colspan=\"2\">{{'Percentage' | translate }}</th>\n\n        <td id=\"po1\" colspan=\"3\" align=\"center\">\n          {{((form.list.physics+form.list.maths+form.list.chemistry)*100)/300 | number:'2.0-2' }}%\n        \n          \n        \n        \n        </td>\n      </tr>\n     <!--  <tr>\n        <th id=\"po1\" align=\"center\" colspan=\"2\">\n          <font color=\"blue\">{{'Grade' | translate }}</font>\n        </th>\n        <td id=\"po1\" align=\"center\" colspan=\"3\">\n          <font color=\"green\"><b>{{'PASS' | translate }}</b></font>\n        </td>\n      </tr> -->\n\n      <!-- <tr>\n        <th id=\"po1\" align=\"center\" colspan=\"2\">\n          <font color=\"blue\">{{'Final Grade' | translate }}</font>\n          <font color=\"red\"><b>F</b></font>\n        </th>\n        <td id=\"po1\" align=\"center\" colspan=\"3\">\n          <font color=\"red\"><b>{{'FAIL' | translate }}</b></font>\n        </td>\n      </tr> -->\n      <tr>\n        <th id=\"po1\" align=\"center\" colspan=\"2\">\n          <font color=\"blue\">{{'Final Grade' | translate }}</font>         \n        </th>\n        <td id=\"po1\" align=\"center\" colspan=\"3\"  *ngIf=\"((form.list.physics+form.list.maths+form.list.chemistry)*100)/300 > 35; else elseBlock\">\n\n          <font color=\"green\"><b>{{'Pass' | translate }}</b></font>\n        </td>\n        <ng-template #elseBlock><td id=\"po1\" align=\"center\" colspan=\"3\" ><font color=\"red\"><b>{{'Fail' | translate }}</b></font></td></ng-template>\n      </tr>\n\n    </table>\n    \n</div><div style=\"position: relative; clear: both;\">\n  <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "./src/app/marksheet/getmarksheet.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/marksheet/getmarksheet.component.ts ***!
  \*****************************************************/
/*! exports provided: GetmarksheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetmarksheetComponent", function() { return GetmarksheetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");






var GetmarksheetComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](GetmarksheetComponent, _super);
    function GetmarksheetComponent(locator, route, httpservice) {
        var _this = _super.call(this, locator.endpoints.Marksheet, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpservice = httpservice;
        _this.form = {
            error: false,
            message: null,
            preload: [],
            data: { id: null, rollNo: null },
            inputerror: {},
            searchParams: {},
            searchMessage: null,
            list: [],
            pageNo: 0
        };
        return _this;
    }
    GetmarksheetComponent.prototype.validate = function () {
        return this.validateForm(this.form.data);
    };
    GetmarksheetComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.rollNo);
        return flag;
    };
    GetmarksheetComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.rollNo = data.rollNo;
    };
    GetmarksheetComponent.prototype.go = function () {
        var _self = this;
        console.log("onClickSubmit");
        console.log(this.form.data);
        console.log(this.form.data.rollNo);
        this.httpservice.get("http://localhost:8084/Marksheet/rollno/" + this.form.data.rollNo, function (res) {
            if (res.success) {
                _self.form.list = res.result.data;
                if (_self.form.list.length == 0) {
                    _self.form.message = "No record found";
                    _self.form.error = true;
                }
                console.log("List Size", _self.form.list.length);
            }
            else {
                _self.form.error = false;
                _self.form.message = res.result.message;
            }
            console.log('FORM', _self.form);
        });
    };
    GetmarksheetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-getmarksheet',
            template: __webpack_require__(/*! ./getmarksheet.component.html */ "./src/app/marksheet/getmarksheet.component.html"),
            styles: [__webpack_require__(/*! ./marksheet.component.css */ "./src/app/marksheet/marksheet.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _http_service_service__WEBPACK_IMPORTED_MODULE_4__["HttpServiceService"]])
    ], GetmarksheetComponent);
    return GetmarksheetComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_5__["BaseCtl"]));



/***/ }),

/***/ "./src/app/marksheet/marksheet-list.component.html":
/*!*********************************************************!*\
  !*** ./src/app/marksheet/marksheet-list.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"content-wrapper\" style=\"padding-top: 3%;padding-bottom: 8%; \nbackground: url(assets/files/teahub.png) no-repeat center center;\nbackground-repeat: no-repeat;\nbackground-attachment: fixed;\nbackground-size: cover;width:auto;\n  height: 90vh;\">\n  <div class=\"container-fluid\">\n\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\" style=\"height: 50px;\">\n        <!-- <div class=\"col-sm-6 p-1 text-center\"> -->\n        <div class=\"text-center\">\n          <h1 class=\"text-white font-weight-bold\">{{'Marksheet List' | translate}}</h1>\n        </div>\n      </div>\n\n      <div class=\"row  pt-4 pb-4 \" style=\"margin-left:15%\">\n        <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.name\"\n            placeholder=\"{{'Search Name'| translate}}\">\n        </div>\n      \n        <div class=\"col-sm-2\">\n\n          <select class=\"form-control\" name=\"id\" [(ngModel)]=\"form.searchParams.id\" aria-label=\"ngSelected\">\n            <option [ngValue]=\"\" value=\"undefined\">{{' Select Roll No' | translate }}</option>\n            <option *ngFor=\"let obj of form.preload.marksheetList\" [value]=\"obj.key\">{{obj.value}}</option>\n          </select>\n\n        </div>\n        <div class=\"col-sm-1 ml-3\">\n          <button (click)=\"submit()\" class=\"btn btn-primary\">\n            {{'Search'| translate}}</button>\n        </div>\n        &nbsp;&nbsp;&nbsp;\n        <div class=\"col-lg-2 ml-4\">\n          <button (click)=\"forward('/marksheet')\" type=\"button\" class=\"btn btn-success\">{{'Add Marksheet'| translate}}\n          </button>\n        </div>\n        <div class=\"col-sm-1\">\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\n            {{'Delete'| translate}}</button>\n        </div>\n      </div>\n\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n\n      <div class=\"p-1\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-bordered table-striped table-hover font-weight-bold text-white\">\n            <thead class=\"thead-light text-uppercase\">\n              <tr>\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\" value=\"h1\"\n                    (change)=\"checkUncheckAll($event)\" /></th>\n                <th>{{'S.No'| translate}}</th>\n                <th>{{'RollNO'| translate}}</th>\n                <th>{{'Name'| translate}}</th>\n                <th>{{'Physics'| translate}}</th>\n                <th>{{'Chemistry'| translate}}</th>\n                <th>{{'Maths'| translate}}</th>\n                <th>{{'Edit' | translate}}</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let m of form.list; let i = index\">\n                <!-- <td> <input type=\"checkbox\" name=\"list_name\" value=\"{{isMasterSel}}\" [(ngModel)]=\"isMasterSel\" (change)=\"isAllSelected()\"/>\n                  </td> -->\n                <td> <input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" id=\"{{m.id}}\"\n                    value=\"{{isMasterSel}}\" />\n                </td>\n                <td> {{(form.pageNo*5)+i+ 1}} </td>\n                \n\n                <td> {{ m.rollNo }} </td>\n                <td> {{ m.name }} </td>\n                <td> {{ m.physics }} </td>\n                <td> {{ m.chemistry }} </td>\n                <td> {{ m.maths }} </td>\n                <td>\n                  <a (click)=\"forward( '/marksheet/' +  m.id)\" style=\"cursor: pointer;\">\n                    <i class=\"fa fa-edit text-info\"></i>\n                  </a>\n\n                  <!-- <a (click)=\"delete(m.id)\" style=\"cursor: pointer;\">\n                    <i class=\"fa fa-trash text-danger\"></i>\n                  </a> -->\n                </td>\n\n              </tr>\n            </tbody>\n          </table>\n        </div>\n        <table style=\"width: 100%;\">\n          <tr>\n            <td style=\"width: 50%;\">\n              <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous' | translate\n                }} </button>\n            </td>\n            <td *ngIf=\"form.list.length!=0\" style=\"width: 50%;\"></td>\n            <td *ngIf=\"form.list.length==0\" style=\"width: 50%;\"><a class=\"btn btn-warning mr-1\"\n              [routerLink]=\"['/marksheetlist']\"  (click)=\"exit()\">{{'Back' | translate}}</a></td>\n\n\n\n\n\n            <td><button (click)=\"next()\" [disabled]=\"nextList==0\" type=\"button\" class=\"btn btn-info\"> {{'Next' |\n                translate }}</button></td>\n          </tr>\n        </table>\n\n      </div>\n\n    </div>\n  </div>\n  <app-footer></app-footer>"

/***/ }),

/***/ "./src/app/marksheet/marksheet-list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/marksheet/marksheet-list.component.ts ***!
  \*******************************************************/
/*! exports provided: MarksheetListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarksheetListComponent", function() { return MarksheetListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var MarksheetListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MarksheetListComponent, _super);
    function MarksheetListComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.MARKSHEET, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.myKey = "";
        _this.form = {
            error: false,
            message: null,
            preload: [],
            data: { id: null },
            inputerror: {},
            searchParams: {},
            searchMessage: null,
            list: [],
            pageNo: 0
        };
        return _this;
    }
    MarksheetListComponent.prototype.createImageFromBlob = function (image) {
        var _this = this;
        var reader = new FileReader();
        reader.addEventListener("load", function () {
            _this.imageToShow = reader.result;
        }, false);
        if (image) {
            reader.readAsDataURL(image);
        }
    };
    MarksheetListComponent.prototype.getImage = function (id) {
        var _this = this;
        //Make a call to Sprinf Boot to get the Image Bytes.
        this.form.data.id = id;
        console.log(this.form.data.id);
        this.httpClient.get('http://localhost:8084/Marksheet/profilePic/' + this.form.data.id, { responseType: 'blob' }).subscribe(function (data) {
            _this.createImageFromBlob(data);
            _this.myKey = _this.form.data.id;
        }, function (error) {
            console.log(error);
        });
    };
    MarksheetListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-marksheet-list',
            template: __webpack_require__(/*! ./marksheet-list.component.html */ "./src/app/marksheet/marksheet-list.component.html"),
            styles: [__webpack_require__(/*! ./marksheet.component.css */ "./src/app/marksheet/marksheet.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], MarksheetListComponent);
    return MarksheetListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/marksheet/marksheet.component.css":
/*!***************************************************!*\
  !*** ./src/app/marksheet/marksheet.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alertRedColor {\n    color: red;\n}\n\n\n.required-field::after { \t\t\n  content: \"*\";\t\t\n  color: red;\t\t\n   }\n\n\n.successColor{\n    color: green;\n   }\n\n\n.btn-space {\n    margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFya3NoZWV0L21hcmtzaGVldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtBQUNkOzs7QUFHQTtFQUNFLFlBQVk7RUFDWixVQUFVO0dBQ1Q7OztBQUVBO0lBQ0MsWUFBWTtHQUNiOzs7QUFFQTtJQUNDLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL21hcmtzaGVldC9tYXJrc2hlZXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGVydFJlZENvbG9yIHtcbiAgICBjb2xvcjogcmVkO1xufVxuXG5cbi5yZXF1aXJlZC1maWVsZDo6YWZ0ZXIgeyBcdFx0XG4gIGNvbnRlbnQ6IFwiKlwiO1x0XHRcbiAgY29sb3I6IHJlZDtcdFx0XG4gICB9XHRcblxuICAgLnN1Y2Nlc3NDb2xvcntcbiAgICBjb2xvcjogZ3JlZW47XG4gICB9XG5cbiAgIC5idG4tc3BhY2Uge1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/marksheet/marksheet.component.html":
/*!****************************************************!*\
  !*** ./src/app/marksheet/marksheet.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<style>\n  .grad{\n background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\n background-repeat: no repeat;\n background-size: 100%;\n padding-bottom: 25px\n ;\n }\n\n</style>\n\n<div class=\"row \" style=\"padding-top: 3%; padding-bottom:3%;\nbackground: url(assets/files/wall.jpg) no-repeat center center;\nbackground-attachment: fixed;\nbackground-size: cover;width:auto;\n  height: auto;\">\n\n  <div class=\"col-sm-4\"></div>\n  <div class=\"col-sm-4\">\n    <div class=\"card\">\n      <div class=\"card-body shadow-lg grad\">\n        <form>\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Add Marksheet' | translate}}</h2>\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Update Marksheet' | translate}}</h2>\n          \n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Roll No' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-id-card grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"rollNo\" [(ngModel)]=\"form.data.rollNo\" class=\"form-control\"\n                  placeholder=\"{{'Enter Roll No' | translate}}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.rollNo}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Student' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\n                </div>\n                \n\n                <select class=\"form-control\" required name=\"studentId\"\n                  [(ngModel)]=\"form.data.studentId\" style=\"cursor: pointer;\">\n                  <option [ngValue]=\"\" value=\"undefined\">{{' Select Student' | translate }}</option>\n                  <option *ngFor=\"let obj of form.preload.studentList\" [value]=\"obj.id\">{{obj.firstName + ' ' +obj.lastName }}</option>\n                </select>\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.studentId}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Physics' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-check grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"phy\" [(ngModel)]=\"form.data.physics\" class=\"form-control\"\n                  placeholder=\"{{'Enter Physics Marks' | translate}}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.physics}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Chemistry' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-check grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"chemistry\" [(ngModel)]=\"form.data.chemistry\" class=\"form-control\"\n                  placeholder=\"{{'Enter Chemistry Marks' | translate}}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.chemistry}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Maths' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-check grey-text\"></i> </div>\n                </div>\n                \n                <input type=\"text\" name=\"math\" [(ngModel)]=\"form.data.maths\" class=\"form-control\"\n                  placeholder=\"{{'Enter Maths Marks'| translate}}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.maths}} </span>\n          </div>\n         \n         \n          <div class=\"row pt-3 pl-3 pb-3\">\n            <div class=\"pt-2\">\n              <button *ngIf=\"!form.data.id>0\" (click)=\"submit()\"  class=\"btn btn-success mr-2\">\n                {{'Save' | translate}}</button>\n            </div>\n            <div class=\"pt-2\">\n              <button *ngIf=\"form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\n                {{'Update'| translate}}</button>\n            </div>\n            <div class=\"pt-2\">\n              <button (click)=\"forward('/marksheetlist')\" type=\"button\" class=\"btn btn-warning mr-1\">{{'Back'| translate}}\n              </button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/marksheet/marksheet.component.ts":
/*!**************************************************!*\
  !*** ./src/app/marksheet/marksheet.component.ts ***!
  \**************************************************/
/*! exports provided: MarksheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarksheetComponent", function() { return MarksheetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");






var MarksheetComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MarksheetComponent, _super);
    function MarksheetComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.MARKSHEET, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.getKey = false;
        _this.selected = null;
        _this.fileToUpload = null;
        _this.marksheetForm = null;
        return _this;
    }
    MarksheetComponent.prototype.submit = function () {
        var _self = this;
        console.log('in submit');
        console.log(this.form);
        console.log(this.form.data);
        this.serviceLocator.httpService.post(this.api.save, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.data.id = res.result.data;
            if (_self.fileToUpload) {
                console.log('Dheeraj');
                _self.myFile();
            }
            if (res.success) {
                _self.form.message = "Data is saved";
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("----------Dheeraj----------.");
            }
            else {
                _self.form.error = true;
                if (res.result.inputerror) {
                    _self.form.inputerror = res.result.inputerror;
                }
                _self.form.message = res.result.message;
            }
            _self.form.data.id = res.result.data;
            console.log('FORM', _self.form);
        });
    };
    MarksheetComponent.prototype.onFileSelect = function (files) {
        this.fileToUpload = files.item(0);
        console.log(this.fileToUpload);
    };
    MarksheetComponent.prototype.onUpload = function (marksheetform) {
        this.submit();
        console.log(this.form.data.id + '---- after submit');
    };
    MarksheetComponent.prototype.myFile = function () {
        var _this = this;
        console.log(this.form.data.id + 'after super.submit-----');
        this.onSubmitProfile(this.fileToUpload, this.marksheetForm).subscribe(function (data) {
            console.log(_this.fileToUpload);
        }, function (error) {
            console.log(error);
        });
    };
    MarksheetComponent.prototype.onSubmitProfile = function (fileToUpload, marksheetform) {
        var formData = new FormData();
        var phone = null;
        formData.append('file', fileToUpload);
        console.log(this.form.data.id + 'this id number ======');
        return this.httpClient.post("http://localhost:8084/User/profilePic/" + this.form.data.id, formData);
    };
    MarksheetComponent.prototype.validate = function () {
        return this.validateForm(this.form.data);
    };
    MarksheetComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        console.log('Student name :: ' + form.name);
        flag = flag && validator.isNotNullObject(form.rollNo);
        flag = flag && validator.isNotNullObject(form.name);
        flag = flag && validator.isNotNullObject(form.physics);
        flag = flag && validator.isNotNullObject(form.chemistry);
        flag = flag && validator.isNotNullObject(form.maths);
        return flag;
    };
    MarksheetComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.studentId = data.studentId;
        form.rollNo = data.rollNo;
        form.physics = data.physics;
        form.chemistry = data.chemistry;
        form.maths = data.maths;
        form.imageId = data.imageId;
        console.log('Populated Form', form);
    };
    MarksheetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-marksheet',
            template: __webpack_require__(/*! ./marksheet.component.html */ "./src/app/marksheet/marksheet.component.html"),
            styles: [__webpack_require__(/*! ./marksheet.component.css */ "./src/app/marksheet/marksheet.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_5__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MarksheetComponent);
    return MarksheetComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseCtl"]));



/***/ }),

/***/ "./src/app/marksheet/marksheetmerit-list.component.html":
/*!**************************************************************!*\
  !*** ./src/app/marksheet/marksheetmerit-list.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<style>\n  .grad{\n  background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\n  background-repeat: no repeat;\n  background-size: 100%;\n  padding-bottom: 10px;\n  }\n  \n</style>\n<div class=\"content-wrapper\" style=\"padding-top: 1%;padding-bottom: 1%; \nbackground: url(assets/files/gettyimages-1132439283-640x640.jpg) no-repeat center center;\nbackground-attachment: fixed;\nbackground-size: cover;width:auto;\n  height: auto;\" >\n  <div class=\"container-fluid\">\n\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\" style=\"height: 50px;\">\n        <div class=\"col-sm-12 pt-3\"> \n          <h3 class=\"text-primary text-center font-weight-bold\">{{'Marksheet Merit List' | translate}}</h3>\n        </div>\n      </div>\n\n       <div style=\"margin-left: 87%;\" class=\"pb-2\">\n\n        <a href=\"http://localhost:8084/Jasper/report\" class=\"btn btn-lg btn-primary \" role=\"button\"  target=\"blank\">\n          <span class=\"fa fa-print mr-1\"></span>{{'Print' | translate}}</a>\n      </div> \n\n      <div class=\"p-1\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-bordered table-striped table-hover font-weight-bold grad\">\n            <thead class=\"thead-light text-uppercase\">\n              <tr>\n              <th >{{'S.No' | translate}}</th>\n\t\t\t\t\t\t\t<th >{{'RollNO' | translate}}  </th>\n\t\t\t\t\t\t\t<th >{{'Name' | translate}}</th>\n\t\t\t\t\t\t\t<th >{{'Physics' | translate}}</th>\n\t\t\t\t\t\t\t<th >{{'Chemistry' | translate}}</th>\n\t\t\t\t\t\t\t<th >{{'Maths' | translate}}</th>\n\t\t\t\t\t\t\t<th >{{'Total' | translate}}</th>\n\t\t\t\t\t\t\t<th >{{'Percentage(%)' | translate}}</th>\n\t\t\t\t\t\t</tr>\n          </thead>\n\n          <tbody>\n\t\t\t\t\t\t<tr *ngFor=\"let m of form.list; let i = index\" >\n\t\t\t\t\t\t\t<td>{{(form.pageNo*5)+i+ 1}} </td>\n\t\t\t\t\t\t\t<td >{{m.rollNo}}</td>\n\t\t\t\t\t\t\t<td >{{m.name}}</td>\n\t\t\t\t\t\t\t<td >{{m.physics}}</td>\n              <td> {{m.chemistry}}</td>\n              <td> {{m.maths}}</td>\n              <td>{{m.physics+m.maths+m.chemistry}}</td>\n              <td>{{((m.physics+m.maths+m.chemistry)*100)/300 | number:'2.0-2' }}%</td>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t\t</tr>\n          </tbody>\n          </table>\n      </div>\n\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n      <div class=\"p-1\">\n        <div class=\"table-responsive\">\n\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n</div><app-footer>\n  \n</app-footer>"

/***/ }),

/***/ "./src/app/marksheet/marksheetmerit-list.component.ts":
/*!************************************************************!*\
  !*** ./src/app/marksheet/marksheetmerit-list.component.ts ***!
  \************************************************************/
/*! exports provided: MarksheetmeritListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarksheetmeritListComponent", function() { return MarksheetmeritListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");






var MarksheetmeritListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MarksheetmeritListComponent, _super);
    function MarksheetmeritListComponent(locator, route, httpservice) {
        var _this = _super.call(this, locator.endpoints.Marksheet, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpservice = httpservice;
        return _this;
    }
    MarksheetmeritListComponent.prototype.ngOnInit = function () {
        this.getMeritList();
    };
    MarksheetmeritListComponent.prototype.getMeritList = function () {
        var _self = this;
        this.httpservice.get("http://localhost:8084/Marksheet/meritlist", function (res) {
            if (res.success) {
                _self.form.list = res.result.list;
                if (_self.form.list.length == 0) {
                    _self.form.message = "No record found";
                    _self.form.error = true;
                }
                console.log("List Size", _self.form.list.length);
            }
            else {
                _self.form.error = false;
                _self.form.message = res.result.message;
            }
            console.log('FORM', _self.form);
        });
    };
    MarksheetmeritListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-marksheetmerit-list',
            template: __webpack_require__(/*! ./marksheetmerit-list.component.html */ "./src/app/marksheet/marksheetmerit-list.component.html"),
            styles: [__webpack_require__(/*! ./marksheet.component.css */ "./src/app/marksheet/marksheet.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _http_service_service__WEBPACK_IMPORTED_MODULE_4__["HttpServiceService"]])
    ], MarksheetmeritListComponent);
    return MarksheetmeritListComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_5__["BaseCtl"]));



/***/ }),

/***/ "./src/app/message/message-list.component.html":
/*!*****************************************************!*\
  !*** ./src/app/message/message-list.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"content-wrapper\" style=\"padding-top: 3%; padding-bottom: 15%; background-image: url(../../assets/files/gettyimages-1132439283-640x640.jpg); background-repeat: no-repeat, repeat;\nbackground-attachment: fixed;\nbackground-size: cover;width:auto;\n  height: auto;\">\n  <div class=\"container-fluid\">\n\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\" style=\"height: 50px;\">\n        <div class=\"col-sm-6 p-1\">\n          <h4 class=\"text-primary font-weight-bold\">{{'Message List' | translate}}</h4>\n        </div>\n      </div>\n\n      <div class=\"row p-1\">\n\n        <div class=\"col-sm-3\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.subject\"\n            placeholder=\"{{'Search Subject' | translate}}\">\n        </div>\n        <div class=\"col-sm-3\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.body\"\n            placeholder=\"{{'Search Body' | translate}}\">\n        </div>\n\n        <div class=\"col-sm-1\">\n          <button (click)=\"submit()\" class=\"btn btn-primary\">\n            {{'Search' | translate}}</button></div>\n        <div class=\"col=sm-1\">\n          <button (click)=\"forward('/message')\" type=\"button\" class=\"btn btn-success\">{{'Add Message'| translate}}\n          </button></div>\n\n      </div>\n\n      <div class=\"row p-1\">\n        <div class=\"col-lg-1\">\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous'| translate}}\n          </button>\n        </div>\n        <div class=\"col-lg-1\">\n          <button (click)=\"next()\" class=\"btn btn-info\">{{'Next'| translate}} </button>\n        </div>\n        <div class=\"col-lg-2\">\n\n        </div>\n      </div>\n\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n\n      <div class=\"p-1\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-bordered table-striped table-hover\">\n            <thead class=\"thead-light text-uppercase\">\n              <tr>\n                <th>{{'S.No'| translate}}</th>\n                <th>{{'Code'| translate}}</th>\n                <th>{{'Subject' | translate}}</th>\n                <th>{{'Body'| translate}}</th>\n                <th>{{'Type'| translate}}</th>\n                <th>{{'Status'| translate}}</th>\n                <th>#</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let m of form.list; let i = index\">\n                <td> {{(form.pageNo*5)+i+ 1}} </td>\n                <td> {{ m.code }} </td>\n                <td> {{ m.subject }} </td>\n                <td> {{ m.body }} </td>\n                <td> {{ m.type }} </td>\n                <td> {{ m.status }} </td>\n                <td>\n                  <a (click)=\"forward( '/message/' +  m.id)\" style=\"cursor: pointer;\">\n                    <i class=\"fa fa-edit text-info\"></i>\n                  </a>\n                  /\n                  <a (click)=\"delete(m.id)\" style=\"cursor: pointer;\">\n                    <i class=\"fa fa-trash text-danger\"></i>\n                  </a>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/message/message-list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/message/message-list.component.ts ***!
  \***************************************************/
/*! exports provided: MessageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageListComponent", function() { return MessageListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");





var MessageListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MessageListComponent, _super);
    function MessageListComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.MESSAGE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    MessageListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-message-list',
            template: __webpack_require__(/*! ./message-list.component.html */ "./src/app/message/message-list.component.html"),
            styles: [__webpack_require__(/*! ./message.component.css */ "./src/app/message/message.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], MessageListComponent);
    return MessageListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_4__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/message/message.component.css":
/*!***********************************************!*\
  !*** ./src/app/message/message.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alertRedColor {\n    color: red;\n}\n\n\n.required-field::after { \t\t\n  content: \"*\";\t\t\n  color: red;\t\t\n   }\n\n\n.successColor{\n    color: green;\n   }\n\n\n.btn-space {\n    margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZS9tZXNzYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2Q7OztBQUdBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7R0FDVDs7O0FBRUE7SUFDQyxZQUFZO0dBQ2I7OztBQUVBO0lBQ0MsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvbWVzc2FnZS9tZXNzYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxlcnRSZWRDb2xvciB7XG4gICAgY29sb3I6IHJlZDtcbn1cblxuXG4ucmVxdWlyZWQtZmllbGQ6OmFmdGVyIHsgXHRcdFxuICBjb250ZW50OiBcIipcIjtcdFx0XG4gIGNvbG9yOiByZWQ7XHRcdFxuICAgfVx0XG5cbiAgIC5zdWNjZXNzQ29sb3J7XG4gICAgY29sb3I6IGdyZWVuO1xuICAgfVxuXG4gICAuYnRuLXNwYWNlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/message/message.component.html":
/*!************************************************!*\
  !*** ./src/app/message/message.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"row \" style=\"padding-top: 3%; padding-bottom:3%; background-image: url(../../assets/files/gettyimages-1132439283-640x640.jpg);\nbackground-attachment: fixed;\nbackground-size: cover;width:auto;height: auto;\">\n\n  <div class=\"col-sm-4\"></div>\n  <div class=\"col-sm-4\">\n    <div class=\"card\">\n      <div class=\"card-body shadow-lg\">\n        <form>\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Add Message' | translate}}</h2>\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Update Message' | translate}} </h2>\n\n\n          <!-- <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div> -->\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Type' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-comment grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"type\" [(ngModel)]=\"form.data.type\" class=\"form-control\"\n                  placeholder=\"{{'Enter Message Type' | translate}}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.type}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Code' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-commenting grey-text\"></i> </div>\n                </div>\n                <select class=\"form-control\" name=\"code\" id=\"code\" [(ngModel)]=\"form.data.code\"\n                  style=\"cursor: pointer;\">\n                  <option selected=\"true\">{{'Please select'  | translate }}</option>\n                  <option value=\"U-FP\">U-FP </option>\n                  <option value=\"U-REG\">U-REG </option>\n                  <option value=\"U-CP\">U-CP</option>\n                </select>\n\n              </div>\n            </div>\n            <span class=\"alertRedColor\">{{form.inputerror.code}}</span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Subject' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-comments grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"subject\" [(ngModel)]=\"form.data.subject\" class=\"form-control\"\n                  placeholder=\"{{'Enter Message Subject'| translate}}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.subject}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Body' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"body\" [(ngModel)]=\"form.data.body\" class=\"form-control\"\n                  placeholder=\"{{'Enter Message Body' | translate}}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.body}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Status' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-flag grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"status\" [(ngModel)]=\"form.data.status\" class=\"form-control\"\n                  placeholder=\"{{'Enter Message Status' | translate}}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.status}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'HTML' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-venus grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"html\" [(ngModel)]=\"form.data.html\" class=\"form-control\"\n                  placeholder=\"{{'Enter Message HTML' | translate}}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.html}} </span>\n          </div>\n\n          <div class=\"row pt-3 pl-3 pb-3\">\n            <div class=\"pt-2\">\n              <button *ngIf=\"!form.data.id>0\" (click)=\"submit()\"  class=\"btn btn-success mr-2\">\n                {{'Save' | translate}}</button>\n            </div>\n\n            <div class=\"pt-2\">\n              <button *ngIf=\"form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\n                {{'Update' | translate}}</button>\n            </div>\n\n            <div class=\"pt-2\">\n              <button (click)=\"forward('/messagelist')\" type=\"button\"\n                class=\"btn btn-warning mr-1\">{{'List' | translate}}\n              </button></div>\n          </div>\n        </form>\n\n      </div>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/message/message.component.ts":
/*!**********************************************!*\
  !*** ./src/app/message/message.component.ts ***!
  \**********************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");





var MessageComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MessageComponent, _super);
    function MessageComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.MESSAGE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    MessageComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.type);
        flag = flag && validator.isNotNullObject(form.code);
        flag = flag && validator.isNotNullObject(form.subject);
        flag = flag && validator.isNotNullObject(form.body);
        return flag;
    };
    MessageComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.code = data.code;
        form.type = data.type;
        form.subject = data.subject;
        form.body = data.body;
        form.status = data.status;
        form.html = data.html;
        console.log('Populated Form', form);
    };
    MessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-message',
            template: __webpack_require__(/*! ./message.component.html */ "./src/app/message/message.component.html"),
            styles: [__webpack_require__(/*! ./message.component.css */ "./src/app/message/message.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], MessageComponent);
    return MessageComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseCtl"]));



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "navbar{\n    position: fixed;\n    top: 0px;\n    height: 40px;\n    width: 100%;\n    z-index: 1000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLFFBQVE7SUFDUixZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXZiYXJ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiAxMDAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style type=\"text/css\">\n  .ram{\n  background-image : linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));}\n\n  .c1{\ncolor: rgb(235, 6, 6);\n  }\n  </style>\n\n<div class=\"header\">\n  <nav *ngIf=\"!isLogin()\" class=\"navbar navbar-expand-lg ram\">\n    <div class=\"logo\">\n      <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">\n        <!-- <strong class=\"text-white\">Rays</strong> -->\n        <img src=\"assets\\files\\custom.png\" height=\"40px\" width=\"120px\">\n      </a>  \n    </div>\n    <select #locale (change)='changeLocale(locale.value)'class=\"c1\" >\n       <option value=\"en\">{{'Select Language' | translate }}</option> \n      <option value=\"en\" style=\"color: red;\">English</option>\n      <option value=\"hi\"style=\"color: red;\">{{'Hindi' | translate }}</option>\n    </select>\n\n\n    <button class=\"navbar-toggler navbar-light\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\"\n      aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\" style=\"font-size: 15px;\">\n      <ul class=\"navbar-nav ml-auto\" style=\"padding-right: 6.5%;\">\n        \n        <li class=\"nav-item dropdown\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['myNav']\" id=\"navbarDropdown\" role=\"button\"\n            data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            <font style=\"color: white;\">{{'Hi,Guest'| translate}}\n            </font>\n          </a>\n\n          <div class=\"dropdown-menu\" id=\"myNav\" aria-labelledby=\"navbarDropdown\">\n            <a class=\"dropdown-item\" [routerLink]=\"['/login']\"><i class=\"fa fa-user\"></i> &nbsp; &nbsp; &nbsp; {{'Log in' | translate}}</a>\n            <a class=\"dropdown-item\" [routerLink]=\"['/signup']\"><i class=\" fa fa-users\"></i> &nbsp; {{'User Registration' |\n              translate}}</a>\n          </div>\n        </li>\n        <li>\n\n        </li>\n      </ul>\n    </div>\n  \n  </nav>\n</div>\n\n\n<nav *ngIf=\"isLogin()\" class=\"navbar navbar-expand-lg ram\">\n\n  <div class=\"logo\">\n    <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">\n      <!-- <strong class=\"text-white\">Rays</strong> -->\n      <img src=\"assets\\files\\custom.png\" height=\"40px\" width=\"120px\">\n    </a>\n  </div>\n  <!-- <strong class=\"text-white\">NCS Pvt Ltd</strong> -->\n\n\n  <select #locale (click)='changeLocale(locale.value)'>\n     <option value=\"en\">{{'Select Language' | translate }}</option>\n    <option value=\"en\">English</option>\n    <option value=\"hi\">{{'Hindi' | translate }}</option>\n  </select>\n\n\n  <button class=\"navbar-toggler navbar-light\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\"\n    aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n\n\n    <div class=\"col-sm-2\"></div>\n\n\n\n    <ul class=\"nav navbar-nav pl-2 \">\n\n\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px;\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <font style=\"color: white;\">{{'User' | translate}}</font>\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" [routerLink]=\"['/user']\"><i class=\"fa fa-user\"></i> &nbsp; &nbsp;{{'Add User' |\n            translate}}</a>\n          <a class=\"dropdown-item\" [routerLink]=\"['/userlist']\"><i class=\"fa fa-list\"></i>&nbsp; {{'User List' | translate}}</a>\n        </div>\n      </li>\n\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px;\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\n        id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n        <font style=\"color: white;\">{{'Position' | translate}}</font>\n      </a>\n      <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n        <a class=\"dropdown-item\" [routerLink]=\"['/position']\"><i class=\"fa fa-user\"></i> &nbsp; &nbsp;{{'Add Position' |\n          translate}}</a>\n        <a class=\"dropdown-item\" [routerLink]=\"['/positionlist']\"><i class=\"fa fa-list\"></i>&nbsp; {{'Position List' | translate}}</a>\n      </div>\n    </li>\n\n\n\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px;\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\n        id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n        <font style=\"color: white;\">{{'Owner' | translate}}</font>\n      </a>\n      <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n        <a class=\"dropdown-item\" [routerLink]=\"['/owner']\"><i class=\"fa fa-user\"></i> &nbsp; &nbsp;{{'Add Owner' |\n          translate}}</a>\n        <a class=\"dropdown-item\" [routerLink]=\"['/ownerlist']\"><i class=\"fa fa-list\"></i>&nbsp; {{'Owner List' | translate}}</a>\n      </div>\n    </li>\n\n    <li class=\"nav-item dropdown\" style=\"padding-left: 5px;\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\n      id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n      <font style=\"color: white;\">{{'Asset' | translate}}</font>\n    </a>\n    <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n      <a class=\"dropdown-item\" [routerLink]=\"['/asset']\"><i class=\"fa fa-user\"></i> &nbsp; &nbsp;{{'Add Asset' |\n        translate}}</a>\n      <a class=\"dropdown-item\" [routerLink]=\"['/assetlist']\"><i class=\"fa fa-list\"></i>&nbsp; {{'Asset List' | translate}}</a>\n    </div>\n  </li>\n\n\n  <li class=\"nav-item dropdown\" style=\"padding-left: 5px;\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\n    id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n    <font style=\"color: white;\">{{'Customer' | translate}}</font>\n  </a>\n  <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n    <a class=\"dropdown-item\" [routerLink]=\"['/customer']\"><i class=\"fa fa-user\"></i> &nbsp; &nbsp;{{'Add Customer' |\n      translate}}</a>\n    <a class=\"dropdown-item\" [routerLink]=\"['/customerlist']\"><i class=\"fa fa-list\"></i>&nbsp; {{'Customer List' | translate}}</a>\n  </div>\n</li>\n\n<li class=\"nav-item dropdown\" style=\"padding-left: 5px;\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\n  id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n  <font style=\"color: white;\">{{'Item' | translate}}</font>\n</a>\n<div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n  <a class=\"dropdown-item\" [routerLink]=\"['/item']\"><i class=\"fa fa-user\"></i> &nbsp; &nbsp;{{'Add Item' |\n    translate}}</a>\n  <a class=\"dropdown-item\" [routerLink]=\"['/itemlist']\"><i class=\"fa fa-list\"></i>&nbsp; {{'Item List' | translate}}</a>\n</div>\n</li>\n\n<li class=\"nav-item dropdown\" style=\"padding-left: 5px;\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\n  id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n  <font style=\"color: white;\">{{'Cart' | translate}}</font>\n</a>\n<div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n  <a class=\"dropdown-item\" [routerLink]=\"['/cart']\"><i class=\"fa fa-user\"></i> &nbsp; &nbsp;{{'Add Cart' |\n    translate}}</a>\n  <a class=\"dropdown-item\" [routerLink]=\"['/cartlist']\"><i class=\"fa fa-list\"></i>&nbsp; {{'Cart List' | translate}}</a>\n</div>\n</li>\n\n\n\n   \n  <!-- <li class=\"nav-item dropdown\" style=\"padding-left: 5px;\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\n    id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n    <font style=\"color: white;\">{{'Proprietor' | translate}}</font>\n  </a>\n  <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n    <a class=\"dropdown-item\" [routerLink]=\"['/proprietor']\"><i class=\"fa fa-user\"></i> &nbsp; &nbsp;{{'Add Proprietor' |\n      translate}}</a>\n    <a class=\"dropdown-item\" [routerLink]=\"['/proprietorlist']\"><i class=\"fa fa-list\"></i>&nbsp; {{'Proprietor List' | translate}}</a>\n  </div>\n</li> -->\n  <li class=\"nav-item dropdown\" style=\"padding-left: 5px;\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\n    id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n    <font style=\"color: white;\">{{'Path' | translate}}</font>\n  </a>\n  <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n    <a class=\"dropdown-item\" [routerLink]=\"['/path']\"><i class=\"fa fa-user\"></i> &nbsp; &nbsp;{{'Add Path' |\n      translate}}</a>\n    <a class=\"dropdown-item\" [routerLink]=\"['/pathlist']\"><i class=\"fa fa-list\"></i>&nbsp; {{'Path List' | translate}}</a>\n  </div>\n</li> \n\n\n<li class=\"nav-item dropdown\" style=\"padding-left: 5px;\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\n  id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n  <font style=\"color: white;\">{{'Employee' | translate}}</font>\n</a>\n<div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n  <a class=\"dropdown-item\" [routerLink]=\"['/employee']\"><i class=\"fa fa-user\"></i> &nbsp; &nbsp;{{'Add Employee' |\n    translate}}</a>\n  <a class=\"dropdown-item\" [routerLink]=\"['/employeelist']\"><i class=\"fa fa-list\"></i>&nbsp; {{'Employee List' | translate}}</a>\n</div>\n</li> \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<li class=\"nav-item dropdown\" style=\"padding-left: 5px\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <font style=\"color: white;\">{{'Marksheet' | translate}}</font>\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" [routerLink]=\"['/marksheet']\"><i class=\"fa fa-file\"></i> &nbsp; {{'Add Marksheet' |\n            translate}}</a> <a class=\"dropdown-item\" [routerLink]=\"['/marksheetlist']\"><i class=\"fa fa-paste\"></i> &nbsp;\n            {{'Marksheet List' | translate}}</a> <a class=\"dropdown-item\" [routerLink]=\"['/marksheetmeritlist']\"><i\n              class=\" fa fa-list\"></i> &nbsp; {{'Marksheet Merit List' | translate}} </a>\n          <a class=\"dropdown-item\" [routerLink]=\"['/getmarksheet']\"><i class=\"fa fa-copy\"></i> &nbsp; {{'Get Marksheet' |\n            translate}}</a>\n        </div>\n      </li>\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <font style=\"color: white;\">{{'Role' | translate}}</font>\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" [routerLink]=\"['/role']\"><i class=\"fa fa-user\"></i> &nbsp; &nbsp; {{'Add Role' |\n            translate}}</a> <a class=\"dropdown-item\" [routerLink]=\"['/rolelist']\"><i class=\"fa fa-users\"></i> &nbsp; {{'Role List' |\n            translate}}</a>\n        </div>\n      </li>\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <font style=\"color: white;\">{{'College' | translate}}</font>\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" [routerLink]=\"['/college']\"><i class=\"fa fa-university\"></i> &nbsp; {{'Add College' |\n            translate}}</a> <a class=\"dropdown-item\" [routerLink]=\"['/collegelist']\"><i class=\"fa fa-building\"></i> &nbsp;\n            {{'College List' | translate}} </a>\n        </div>\n      </li>\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <font style=\"color: white;\">{{'Course' | translate}}\n          </font>\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" [routerLink]=\"['/course']\"><i class=\"fa fa-book\"></i> &nbsp; {{'Add Course' |\n            translate}}</a> <a class=\"dropdown-item\" [routerLink]=\"['/courselist']\"><i class=\"fa fa-list\"></i> &nbsp; {{'Course List'\n            | translate}} </a>\n        </div>\n      </li>\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <font style=\"color: white;\">{{'Student' | translate}}</font>\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" [routerLink]=\"['/student']\"><i class=\"fa fa-user\"></i> &nbsp; {{'Add Student' |\n            translate}}</a> <a class=\"dropdown-item\" [routerLink]=\"['/studentlist']\"><i class=\"fa fa-users\"></i> &nbsp; {{'Student\n            List' | translate}}</a>\n        </div>\n      </li>\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <font style=\"color: white;\">{{'Faculty' | translate}}\n          </font>\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" [routerLink]=\"['/faculty']\"><i class=\"fa fa-users\"></i> &nbsp; {{'Add Faculty' |\n            translate}}</a> <a class=\"dropdown-item\" [routerLink]=\"['/facultylist']\"><i class=\" fa fa-list\"></i> &nbsp; {{'Faculty\n            List' | translate}}</a>\n        </div>\n      </li>\n\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <font style=\"color: white;\">{{'TimeTable' | translate}}</font>\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" [routerLink]=\"['/timetable']\"><i class=\"fa fa-clock-o\"></i> &nbsp; {{'Add TimeTable'\n            | translate}}</a> <a class=\"dropdown-item\" [routerLink]=\"['/timetablelist']\"><i class=\"fa fa-list\"></i> &nbsp;\n            {{'TimeTable List' | translate}}</a>\n        </div>\n      </li>\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <font style=\"color: white;\">{{'Subject' | translate}}</font>\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" [routerLink]=\"['/subject']\"><i class=\"fa fa-calculator\"></i> &nbsp; {{'Add Subject' |\n            translate}}</a> <a class=\"dropdown-item\" [routerLink]=\"['/subjectlist']\"> <i class=\"fa fa-list\"></i> &nbsp; {{'Subject\n            List' | translate}}\n          </a>\n        </div>\n      </li>\n     \n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <font style=\"color: white;\">{{form.data.fname }} ({{form.data.role}})\n          </font>\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n\n          <a class=\"dropdown-item\" (click)=\"forward()\"><i class=\" fa fa-user-md\"></i> &nbsp; {{'My Profile' |\n            translate}}</a>\n          <a class=\"dropdown-item\" [routerLink]=\"['/changepassword']\"><i class=\" fa fa-key\"></i> &nbsp; {{'Change Password' |\n            translate}}</a>\n            <a class=\"dropdown-item\" [routerLink]=\"\" (click)=\"goToLink()\"><i class=\"fa fa-file\"></i> &nbsp;{{'Java Doc' | translate}}</a>\n            \n          <a class=\"dropdown-item\" (click)=\"logout()\"><i class=\" fa fa-lock\"></i> &nbsp;&nbsp;{{'Log Out' | translate}}</a>\n        </div>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<div>\n\n</div>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");







var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(translate, route, httpService, myservice, servicelocator) {
        this.translate = translate;
        this.route = route;
        this.httpService = httpService;
        this.myservice = myservice;
        this.servicelocator = servicelocator;
        this.form = {
            error: false,
            message: null,
            firstName: null,
            data: { id: null, fname: null, lname: null, role: null, loginId: null },
            inputerror: {},
            searchParams: {},
            searchMessage: null,
            list: [],
        };
        console.log('DefaultLang ' + localStorage.getItem("locale"));
        var locale = localStorage.getItem("locale");
        if (locale !== null) {
            translate.setDefaultLang(locale);
        }
        else {
            translate.setDefaultLang("en");
        }
    }
    NavbarComponent.prototype.changeLocale = function (locale) {
        localStorage.setItem("locale", locale);
        this.translate.use(locale);
        console.log('Locale ' + locale);
    };
    NavbarComponent.prototype.ngOnInit = function () { };
    NavbarComponent.prototype.forward = function () {
        this.userid = localStorage.getItem("userid");
        console.log('UID---' + this.userid);
        this.servicelocator.forward("/user/" + this.userid);
    };
    NavbarComponent.prototype.isLogin = function () {
        var check = localStorage.getItem('fname');
        if (check !== "null" && check !== null) {
            this.form.data.fname = localStorage.getItem("fname");
            this.form.data.lname = localStorage.getItem("lname");
            this.form.data.loginId = localStorage.getItem("loginId");
            this.form.data.role = localStorage.getItem("role");
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.prototype.goToLink = function () {
        window.open('assets/doc/index.html', '_blank');
    };
    NavbarComponent.prototype.logout = function () {
        var _self = this;
        console.log('Logout', this.form);
        _self.httpService.get("http://localhost:8084/Auth/logout", function (res) {
            _self.servicelocator.router.navigateByUrl('/login/true');
            if (res.success) {
                localStorage.clear();
                _self.form.message = res.result.message;
            }
        });
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _http_service_service__WEBPACK_IMPORTED_MODULE_3__["HttpServiceService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
            _service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/owner/owner.component.css":
/*!*******************************************!*\
  !*** ./src/app/owner/owner.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL293bmVyL293bmVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/owner/owner.component.html":
/*!********************************************!*\
  !*** ./src/app/owner/owner.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<style>\n  .grad {\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\n    background-repeat: no-repeat;\n    background-size: 100%;\n    padding-bottom: 25px;\n  }\n\n  .background {\n    padding-top: 3%;\n    padding-bottom: 13%;\n    background: url('assets/files/wall.jpg') no-repeat center center;\n    background-attachment: fixed;\n    background-size: cover;\n    width: 100%;\n    height: auto;\n  }\n\n  .required-field {\n    color: red;\n  }\n\n  .alertRedColor {\n    color: red;\n  }\n</style>\n\n<div class=\"container-fluid background\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-sm-8 col-md-6 col-lg-4\">\n      <div class=\"card\">\n        <div class=\"card-body shadow-lg grad\">\n          <form name=\"userForm\">\n            <h2 *ngIf=\"!form.data.id > 0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{ 'Add Owner'\n              | translate }}</h2>\n            <h2 *ngIf=\"form.data.id > 0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{ 'Update\n              Owner' | translate }}</h2>\n\n            <!-- Form error messages -->\n            <div *ngIf=\"form.error && form.message\" class=\"alert alert-danger alert-dismissible fade show\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n              {{ form.message }}\n            </div>\n            <div *ngIf=\"!form.error && form.message\" class=\"alert alert-success alert-dismissible fade show\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n              {{ form.message }}\n            </div>\n\n            <div class=\"form-group pt-2\">\n              <label><b>{{ 'Name' | translate }}</b><span class=\"required-field\">*</span></label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i></div>\n                </div>\n                <input type=\"text\" name=\"name\" [(ngModel)]=\"form.data.name\" class=\"form-control\"\n                  (keydown)=\"filterInput($event, 'errorMessageName', 20, 'char')\"\n                  placeholder=\"{{ 'Enter Name' | translate }}\">\n              </div>\n              <span *ngIf=\"errorMessageName\" class=\"alertRedColor\">{{ errorMessageName }}</span>\n              <span *ngIf=\"form.inputerror?.name\" class=\"alertRedColor\">{{ form.inputerror.name }}</span>\n            </div>\n\n            <div class=\"form-group\">\n              <label><b>{{ 'DateOfBirth' | translate }}</b><span class=\"required-field\">*</span></label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i></div>\n                </div>\n                <select class=\"form-control\" name=\"dateOfBirth\" [(ngModel)]=\"form.dateOfBirth\" aria-label=\"ngSelected\">\n                  <option [ngValue]=\"undefined\">{{ 'Select DateOfBirth' | translate }}</option>\n                  <option *ngFor=\"let dateOfBirth of form.preload.ownerlist2\" [ngValue]=\"dateOfBirth\">{{ dateOfBirth }}</option>\n                </select>\n                \n                \n              </div>\n\n              <span *ngIf=\"form.inputerror.dateOfBirth\" class=\"alertRedColor\">{{ form.inputerror.dateOfBirth }}</span>\n            </div>\n\n            <div class=\"form-group\">\n              <label><b>{{ 'VehicleId' | translate }}</b><span class=\"required-field\">*</span></label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i></div>\n                </div>\n                <select class=\"form-control\" name=\"vehicleId\" [(ngModel)]=\"form.data.vehicleId\" aria-label=\"ngSelected\">\n                  <option [ngValue]=\"undefined\">{{ 'Select VehicleId' | translate }}</option>\n                  <option *ngFor=\"let vehicleId of form.preload.ownerlist\" [value]=\"vehicleId\">{{ vehicleId }}</option>\n                </select>\n              </div>\n              <span *ngIf=\"form.inputerror.vehicleId\" class=\"alertRedColor\">{{ form.inputerror.vehicleId }}</span>\n            </div>\n\n            <div class=\"form-group pt-2\">\n              <label><b>{{ 'InsuranceAmount' | translate }}</b><span class=\"required-field\">*</span></label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-mobile grey-text\"></i></div>\n                </div>\n                <input type=\"text\" name=\"insuranceAmount\" [(ngModel)]=\"form.data.insuranceAmount\" class=\"form-control\"\n                (keydown)=\"filterInput($event, 'errorMessageInsuranceAmount', 10, 'int')\"\n                  placeholder=\"{{ 'Enter InsuranceAmount' | translate }}\" >\n              </div>\n              <span *ngIf=\"errorMessageInsuranceAmount\" class=\"alertRedColor\">{{ errorMessageInsuranceAmount }}</span>\n              <span *ngIf=\"form.inputerror?.insuranceAmount\" class=\"alertRedColor\">{{ form.inputerror.insuranceAmount }}</span>\n            </div>\n\n\n            <!-- Form buttons -->\n            <div class=\"form-group text-center\">\n              <button (click)=\"submit()\" class=\"btn btn-success mr-2\">{{ 'Save' | translate }}</button>\n              <button (click)=\"forward('/ownerlist')\" type=\"button\" class=\"btn btn-warning\">{{ 'List' | translate\n                }}</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/owner/owner.component.ts":
/*!******************************************!*\
  !*** ./src/app/owner/owner.component.ts ***!
  \******************************************/
/*! exports provided: OwnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerComponent", function() { return OwnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");





var OwnerComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](OwnerComponent, _super);
    function OwnerComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.OWNER, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.errorMessageTitle = '';
        return _this;
    }
    OwnerComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.name);
        flag = flag && validator.isNotNullObject(form.dateOfBirth);
        flag = flag && validator.isNotNullObject(form.vehicleId);
        flag = flag && validator.isNotNullObject(form.insuranceAmount);
        return flag;
    };
    OwnerComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.name = data.name;
        // Parse the date string and convert to Date object
        var dateOfBirth = new Date(data.dateOfBirth);
        // Check if the parsed date is valid
        if (!isNaN(dateOfBirth.getTime())) {
            // Convert dateOfBirth to yyyy-MM-dd string format
            form.dateOfBirth = this.formatDate(dateOfBirth);
        }
        else {
            form.dateOfBirth = null; // Handle invalid date gracefully, or set to an appropriate default
        }
        form.vehicleId = data.vehicleId;
        form.insuranceAmount = data.insuranceAmount;
    };
    // Helper function to format Date to yyyy-MM-dd string
    OwnerComponent.prototype.formatDate = function (date) {
        var year = date.getFullYear();
        var month = ('0' + (date.getMonth() + 1)).slice(-2); // Adding 1 because getMonth() returns zero-based
        var day = ('0' + date.getDate()).slice(-2);
        return year + "-" + month + "-" + day;
    };
    OwnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-owner',
            template: __webpack_require__(/*! ./owner.component.html */ "./src/app/owner/owner.component.html"),
            styles: [__webpack_require__(/*! ./owner.component.css */ "./src/app/owner/owner.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], OwnerComponent);
    return OwnerComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseCtl"]));



/***/ }),

/***/ "./src/app/owner/ownerlist.component.css":
/*!***********************************************!*\
  !*** ./src/app/owner/ownerlist.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL293bmVyL293bmVybGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/owner/ownerlist.component.html":
/*!************************************************!*\
  !*** ./src/app/owner/ownerlist.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<style>\n  #nnn {\n    background: none;\n    border: none;\n    cursor: pointer;\n  }\n\n  .panel-heading {\n    height: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .search-inputs {\n    margin-top: 20px;\n  }\n\n  .search-inputs .form-control,\n  .search-inputs .btn {\n    margin-bottom: 10px;\n  }\n\n  .content-wrapper {\n    background: url('assets/files/1024.jpg') no-repeat center center;\n    background-attachment: fixed;\n    background-size: cover;\n    width: auto;\n    height: 105vh;\n    padding: 20px;\n  }\n\n  .table-responsive {\n    margin-top: 20px;\n  }\n\n  .search-inputs .col-sm-2,\n  .search-inputs .col-sm-1 {\n    padding: 0 5px;\n  }\n\n  .alertRedColor {\n    color: red;\n  }\n</style>\n\n<div class=\"content-wrapper\">\n  <div class=\"container-fluid\">\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\">\n        <h1 class=\"text-primary font-weight-bold\">{{ 'Owner List' | translate }}</h1>\n      </div>\n\n      <div class=\"row search-inputs p-1 justify-content-center\">\n        <div class=\"col-sm-2\">\n          <input type=\"text\" name=\"name\" [(ngModel)]=\"form.searchParams.name\" class=\"form-control\"\n            (keydown)=\"filterInput($event, 'errorMessageName', 20, 'char')\"\n            placeholder=\"{{ 'Enter Name' | translate }}\">\n\n          <span *ngIf=\"errorMessageName\" class=\"alertRedColor\">{{ errorMessageName }}</span>\n        </div>\n\n        <div class=\"col-sm-2\">\n          <input type=\"text\" name=\"insuranceAmount\" [(ngModel)]=\"form.searchParams.insuranceAmount\" class=\"form-control\"\n            (keydown)=\"filterInput($event, 'errorMessageInsuranceAmount', 5, 'int')\"\n            placeholder=\"{{ 'Enter InsuranceAmount' | translate }}\">\n          <span *ngIf=\"errorMessageInsuranceAmount\" class=\"alertRedColor\">{{ errorMessageInsuranceAmount }}</span>\n        </div>\n        \n        <div class=\"col-sm-2\">\n          <select class=\"form-control\" name=\"vehicleId\" [(ngModel)]=\"form.searchParams.vehicleId\" aria-label=\"ngSelected\">\n            <option [ngValue]=\"undefined\">{{ 'Select VehicleId' | translate }}</option>\n            <option *ngFor=\"let vehicleId of form.preload.ownerlist\" [value]=\"vehicleId\">{{ vehicleId }}</option>\n          </select>\n          <span *ngIf=\"form.inputerror.vehicleId\" class=\"alertRedColor\">{{ form.inputerror.vehicleId }}</span>\n        </div>\n\n        <div class=\"col-sm-2\">\n          <select class=\"form-control\" name=\"dateOfBirth\" [(ngModel)]=\"form.searchParams.dateOfBirth\" aria-label=\"ngSelected\">\n            <option [ngValue]=\"undefined\">{{ 'Select DateOfBirth' | translate }}</option>\n            <option *ngFor=\"let dateOfBirth of form.preload.ownerlist2\" [value]=\"dateOfBirth\">{{ dateOfBirth }}</option>\n          </select>\n          <span *ngIf=\"form.inputerror.dateOfBirth\" class=\"alertRedColor\">{{ form.inputerror.dateOfBirth }}</span>\n        </div>\n\n      \n\n        <div class=\"col-sm-1\">\n          <button (click)=\"submit()\" class=\"btn btn-primary\">{{ 'Search' | translate }}</button>\n        </div>\n\n        <div class=\"col-sm-2\">\n          <button (click)=\"forward('/owner')\" type=\"button\" class=\"btn btn-success\">\n            {{ 'Add Owner' | translate }}\n          </button>\n        </div>\n\n        <div class=\"col-sm-1\">\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">{{ 'Delete' | translate }}</button>\n        </div>\n      </div>\n\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{ form.message }}\n      </div>\n\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{ form.message }}\n      </div>\n\n      <div class=\"table-responsive\">\n        <table class=\"table table-bordered table-hover font-weight-bold text-dark\">\n          <thead class=\"thead-dark text-uppercase\">\n            <tr align=\"center\">\n              <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\"\n                  (change)=\"checkUncheckAll($event)\" /></th>\n              <th>{{ 'S.No' | translate }}</th>\n              <th>{{ 'NAME' | translate }}</th>\n              <th>{{ 'DATEOFBIRTH' | translate }}</th>\n              <th>{{ 'VEHICLEID' | translate }}</th>\n              <th>{{ 'INSURANCEAMOUNT' | translate }}</th>\n              <th>{{ 'Edit' | translate }}</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\n              <td><input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" [id]=\"m.id\" />\n              </td>\n              <td>{{ (form.pageNo * 5) + i + 1 }}</td>\n              <td>{{ m.name }}</td>\n              <td>{{ m.dateOfBirth | date : 'dd-MM-yyyy'}}</td>\n              <td>{{ m.vehicleId }}</td>\n              <td>{{ m.insuranceAmount }}</td>\n\n              <td>\n                <button class=\"fa fa-edit text-primary\" id=\"nnn\" (click)=\"forward('/owner/' + m.id)\">\n                </button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n\n        <div class=\"d-flex justify-content-between mt-3\">\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\">{{ 'Previous' | translate\n            }}\n          </button>\n          <div *ngIf=\"form.list.length == 0\">\n            <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/ownerlist']\" (click)=\"exit()\">\n              {{ 'Back' | translate }}\n            </a>\n          </div>\n          <button (click)=\"next()\" [disabled]=\"nextList == 0\" class=\"btn btn-info\">{{ 'Next' | translate }}</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/owner/ownerlist.component.ts":
/*!**********************************************!*\
  !*** ./src/app/owner/ownerlist.component.ts ***!
  \**********************************************/
/*! exports provided: OwnerlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerlistComponent", function() { return OwnerlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var OwnerlistComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](OwnerlistComponent, _super);
    function OwnerlistComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.OWNER, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.myKey = "";
        _this.form = {
            error: false,
            message: null,
            preload: [],
            data: { id: null },
            inputerror: {},
            searchParams: {},
            searchMessage: null,
            list: [],
            pageNo: 0
        };
        _this.isValidexperienceInput = true; // Property to track validity of cost input
        _this.isValidtitleInput = true; // Property to track validity of description input
        return _this;
    }
    OwnerlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ownerlist',
            template: __webpack_require__(/*! ./ownerlist.component.html */ "./src/app/owner/ownerlist.component.html"),
            styles: [__webpack_require__(/*! ./ownerlist.component.css */ "./src/app/owner/ownerlist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], OwnerlistComponent);
    return OwnerlistComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/path/path.component.css":
/*!*****************************************!*\
  !*** ./src/app/path/path.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhdGgvcGF0aC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/path/path.component.html":
/*!******************************************!*\
  !*** ./src/app/path/path.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-navbar></app-navbar>\n\n<style>\n  .grad {\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\n    background-repeat: no-repeat;\n    background-size: 100%;\n    padding-bottom: 25px;\n  }\n\n  .background {\n    padding-top: 3%;\n    padding-bottom: 13%;\n    background: url('assets/files/wall.jpg') no-repeat center center;\n    background-attachment: fixed;\n    background-size: cover;\n    width: 100%;\n    height: auto;\n  }\n\n  .required-field {\n    color: red;\n  }\n\n  .alertRedColor {\n    color: red;\n  }\n</style>\n\n<div class=\"container-fluid background\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-sm-8 col-md-6 col-lg-4\">\n      <div class=\"card\">\n        <div class=\"card-body shadow-lg grad\">\n          <form name=\"pathForm\">\n            <h2 *ngIf=\"!form.data.id\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">\n              {{ 'Add Path' | translate }}\n            </h2>\n            <h2 *ngIf=\"form.data.id\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">\n              {{ 'Update Path' | translate }}\n            </h2>\n\n            <!-- Form error messages -->\n            <div *ngIf=\"form.error && form.message\" class=\"alert alert-danger alert-dismissible fade show\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n              {{ form.message }}\n            </div>\n            <div *ngIf=\"!form.error && form.message\" class=\"alert alert-success alert-dismissible fade show\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n              {{ form.message }}\n            </div>\n\n            <div class=\"form-group pt-2\">\n              <label><b>{{ 'Route Name' | translate }}</b><span class=\"required-field\">*</span></label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-id-badge grey-text\"></i></div>\n                </div>\n                <input type=\"text\" name=\"routeName\" [(ngModel)]=\"form.data.routeName\" class=\"form-control\"\n                  (keydown)=\"filterInput($event, 'errorMessageRouteName', 20, '')\"\n                  placeholder=\"{{ 'Enter Route Name' | translate }}\" required>\n              </div>\n              <span *ngIf=\"errorMessageRouteName\" class=\"alertRedColor\">{{ errorMessageRouteName}}</span>\n              <span *ngIf=\"form.inputerror?.routeName\" class=\"alertRedColor\">{{ form.inputerror.routeName }}</span>\n            </div>\n            \n            <div class=\"form-group pt-2\">\n              <label><b>{{ 'Initialization Date' | translate }}</b><span class=\"required-field\">*</span></label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-calendar grey-text\"></i></div>\n                </div>\n                <input type=\"date\" name=\"initializationDate\" [value]=\"form.data.initializationDate | date:'yyyy-MM-dd'\" class=\"form-control\"\n                (input)=\"form.data.initializationDate=parseDate($event.target.value)\"\n                  placeholder=\"{{ 'Enter Initialization Date' | translate }}\" required>\n              </div>\n              \n              <span *ngIf=\"form.inputerror?.initializationDate\" class=\"alertRedColor\">{{ form.inputerror.initializationDate }}</span>\n            </div>\n\n            <div class=\"form-group pt-2\">\n              <label><b>{{ 'Permitted Speed' | translate }}</b><span class=\"required-field\">*</span></label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-dollar-sign grey-text\"></i></div>\n                </div>\n                <input type=\"text\" name=\"permittedSpeed\" [(ngModel)]=\"form.data.permittedSpeed\" class=\"form-control\"\n                  (keydown)=\"filterInput($event, 'errorMessagePermittedSpeed', 10, 'int')\"\n                  placeholder=\"{{ 'Enter Coverage Amount' | translate }}\" required>\n              </div>\n              <span *ngIf=\"errorMessagePermittedSpeed\" class=\"alertRedColor\">{{ errorMessagePermittedSpeed }}</span>\n              <span *ngIf=\"form.inputerror?.permittedSpeed\" class=\"alertRedColor\">{{ form.inputerror.permittedSpeed }}</span>\n            </div>\n\n            <div class=\"form-group pt-2\">\n              <label><b>{{ 'Asset Id' | translate }}</b><span class=\"required-field\">*</span></label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-paint-brush grey-text\"></i></div>\n                </div>\n                <select class=\"form-control\" name=\"assetId\" [(ngModel)]=\"form.data.assetId\" aria-label=\"ngSelected\" required>\n                  <option [ngValue]=\"undefined\">{{ 'Select Asset Id' | translate }}</option>\n                  <option *ngFor=\"let path of form.preload.pathList\" [value]=\"path.key\">{{ path.value }}</option>\n                </select>\n              </div>\n              <span *ngIf=\"form.inputerror?.assetId\" class=\"alertRedColor\">{{ form.inputerror.assetId }}</span>\n            </div>\n\n            <div class=\"row pt-2 pl-2 pb-3\">\n  \n              <div class=\"col-md-3\"></div>\n              \n              <div class=\"pt-2\">\n                <button *ngIf=\"!form.data.id > 0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\n                  {{ 'Save' | translate }}\n                </button>\n              </div>\n            \n              <div class=\"col-md-1\"></div>\n            \n              <div class=\"pt-2\">\n                <button *ngIf=\"form.data.id > 0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\n                  {{ 'Update' | translate }}\n                </button>\n              </div>\n              \n              <div class=\"pt-2\">\n                <a class=\"btn btn-warning mr-1\" type=\"button\" [routerLink]=\"['/pathlist']\"\n                   style=\"text-decoration: none; color: white;\">\n                  {{ 'List' | translate }}\n                </a>\n              </div>\n              \n            </div>\n            \n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/path/path.component.ts":
/*!****************************************!*\
  !*** ./src/app/path/path.component.ts ***!
  \****************************************/
/*! exports provided: PathComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PathComponent", function() { return PathComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");





var PathComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PathComponent, _super);
    function PathComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.PATH, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.errorMessageTitle = '';
        return _this;
    }
    PathComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.registrationNumber);
        flag = flag && validator.isNotNullObject(form.acquisitionDate);
        flag = flag && validator.isNotNullObject(form.coverageAmount);
        flag = flag && validator.isNotNullObject(form.paintColor);
        return flag;
    };
    PathComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.routeName = data.routeName;
        form.initializationDate = data.initializationDate;
        form.permittedSpeed = data.permittedSpeed;
        form.assetId = data.assetId;
    };
    PathComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-asset',
            template: __webpack_require__(/*! ./path.component.html */ "./src/app/path/path.component.html"),
            styles: [__webpack_require__(/*! ./path.component.css */ "./src/app/path/path.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], PathComponent);
    return PathComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/path/pathlist.component.css":
/*!*********************************************!*\
  !*** ./src/app/path/pathlist.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhdGgvcGF0aGxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/path/pathlist.component.html":
/*!**********************************************!*\
  !*** ./src/app/path/pathlist.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  pathlist works!\n</p>\n"

/***/ }),

/***/ "./src/app/path/pathlist.component.ts":
/*!********************************************!*\
  !*** ./src/app/path/pathlist.component.ts ***!
  \********************************************/
/*! exports provided: PathlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PathlistComponent", function() { return PathlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PathlistComponent = /** @class */ (function () {
    function PathlistComponent() {
    }
    PathlistComponent.prototype.ngOnInit = function () {
    };
    PathlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pathlist',
            template: __webpack_require__(/*! ./pathlist.component.html */ "./src/app/path/pathlist.component.html"),
            styles: [__webpack_require__(/*! ./pathlist.component.css */ "./src/app/path/pathlist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PathlistComponent);
    return PathlistComponent;
}());



/***/ }),

/***/ "./src/app/position/position.component.css":
/*!*************************************************!*\
  !*** ./src/app/position/position.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc2l0aW9uL3Bvc2l0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/position/position.component.html":
/*!**************************************************!*\
  !*** ./src/app/position/position.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<style>\n  .grad {\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\n    background-repeat: no-repeat;\n    background-size: 100%;\n    padding-bottom: 25px;\n  }\n\n  .background {\n    padding-top: 3%;\n    padding-bottom: 13%;\n    background: url('assets/files/wall.jpg') no-repeat center center;\n    background-attachment: fixed;\n    background-size: cover;\n    width: 100%;\n    height: auto;\n  }\n\n  .required-field {\n    color: red;\n  }\n\n  .alertRedColor {\n    color: red;\n  }\n</style>\n\n<div class=\"container-fluid background\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-sm-8 col-md-6 col-lg-4\">\n      <div class=\"card\">\n        <div class=\"card-body shadow-lg grad\">\n          <form name=\"positionForm\">\n            <h2 *ngIf=\"!form.data.id > 0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{ 'Add Position'\n              | translate }}</h2>\n            <h2 *ngIf=\"form.data.id > 0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{ 'Update\n              Position' | translate }}</h2>\n\n            <!-- Form error messages -->\n            <div *ngIf=\"form.error && form.message\" class=\"alert alert-danger alert-dismissible fade show\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n              {{ form.message }}\n            </div>\n            <div *ngIf=\"!form.error && form.message\" class=\"alert alert-success alert-dismissible fade show\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n              {{ form.message }}\n            </div>\n\n            <div class=\"form-group pt-2\">\n              <label><b>{{ 'designation' | translate }}</b><span class=\"required-field\">*</span></label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i></div>\n                </div>\n                <input type=\"text\" name=\"designation\" [(ngModel)]=\"form.data.designation\" class=\"form-control\"\n                  (keydown)=\"filterInput($event, 'errorMessageDesignation', 20, 'char')\"\n                  placeholder=\"{{ 'Enter Designation' | translate }}\">\n              </div>\n              <span *ngIf=\"errorMessageDesignation\" class=\"alertRedColor\">{{ errorMessageDesignation }}</span>\n              <span *ngIf=\"form.inputerror?.designation\" class=\"alertRedColor\">{{ form.inputerror.designation }}</span>\n            </div>\n\n            <div class=\"form-group\">\n              <label><b>{{ 'openingdate' | translate }}</b><span class=\"required-field\">*</span></label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i></div>\n                </div>\n                <input type=\"date\" name=\"openingdate\" [value]=\"form.data.openingdate| date:'yyyy-MM-dd'\"\n                (input)=\"form.data.openingdate=parseDate($event.target.value)\" \n                   class=\"form-control form-control-sm\"\n                  required />\n                \n              </div>\n\n              <!-- <div class=\"form-group pt-2\">\n                <label><b>{{ 'date' | translate }}</b><span class=\"required-field\">*</span></label>\n                <div class=\"input-group\">\n                  <div class=\"input-group-prepend\">\n                    <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i></div>\n                  </div>\n                  <input type=\"date\" name=\"designation\" [(ngModel)]=\"form.data.openingdate\" class=\"form-control\"\n                    (keydown)=\"filterInput($event, 'errorMessageDesignation', 20, 'char')\"\n                    placeholder=\"{{ 'Enter Date' | translate }}\">\n                </div>\n                <span *ngIf=\"errorMessagedate\" class=\"alertRedColor\">{{ errorMessageDesignation }}</span>\n                <span *ngIf=\"form.inputerror?.designation\" class=\"alertRedColor\">{{ form.inputerror.openingdate }}</span>\n              </div> -->\n  \n\n              <span *ngIf=\"form.inputerror.openingdate\" class=\"alertRedColor\">{{ form.inputerror.openingdate }}</span>\n            </div>\n\n            <div class=\"form-group\">\n              <label><b>{{ 'condition' | translate }}</b><span class=\"required-field\">*</span></label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i></div>\n                </div>\n                <select class=\"form-control\" name=\"condition\" [(ngModel)]=\"form.data.condition\" aria-label=\"ngSelected\">\n                  <option [ngValue]=\"undefined\">{{ 'Select condition' | translate }}</option>\n                  <option *ngFor=\"let position of form.preload.Positionlist\" [value]=\"position\">{{ position }}</option>\n                </select>\n              </div>\n              <span *ngIf=\"form.inputerror.condition\" class=\"alertRedColor\">{{ form.inputerror.condition }}</span>\n            </div>\n\n            <div class=\"form-group pt-2\">\n              <label><b>{{ 'requiredexperience' | translate }}</b><span class=\"required-field\">*</span></label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-mobile grey-text\"></i></div>\n                </div>\n                <input type=\"text\" name=\"requiredexperience\" [(ngModel)]=\"form.data.requiredexperience\" class=\"form-control\"\n                (keydown)=\"filterInput($event, 'errorMessagerequiredexperience', 10, 'int')\"\n                  placeholder=\"{{ 'Enter requiredexperience' | translate }}\" >\n              </div>\n              <span *ngIf=\"errorMessagerequiredexperience\" class=\"alertRedColor\">{{ errorMessagerequiredexperience }}</span>\n              <span *ngIf=\"form.inputerror?.requiredexperience\" class=\"alertRedColor\">{{ form.inputerror.requiredexperience }}</span>\n            </div>\n\n\n            <!-- Form buttons -->\n            <div class=\"form-group text-center\">\n              <button (click)=\"submit()\" class=\"btn btn-success mr-2\">{{ 'Save' | translate }}</button>\n              <button (click)=\"forward('/positionlist')\" type=\"button\" class=\"btn btn-warning\">{{ 'List' | translate\n                }}</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/position/position.component.ts":
/*!************************************************!*\
  !*** ./src/app/position/position.component.ts ***!
  \************************************************/
/*! exports provided: PositionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionComponent", function() { return PositionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");





var PositionComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PositionComponent, _super);
    function PositionComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.POSITION, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.errorMessageTitle = '';
        return _this;
    }
    PositionComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.designation);
        flag = flag && validator.isNotNullObject(form.openingdate);
        flag = flag && validator.isNotNullObject(form.condition);
        flag = flag && validator.isNotNullObject(form.requiredexperience);
        return flag;
    };
    PositionComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.designation = data.designation;
        // Parse the date string and convert to Date object
        var openingdate = new Date(data.openingdate);
        // Check if the parsed date is valid
        // if (!isNaN(openingdate.getTime())) {
        //   // Convert dateOfBirth to yyyy-MM-dd string format
        //   form.openingdate = this.formatDate(openingdate);
        // } else {
        //   form.openingdate = null; // Handle invalid date gracefully, or set to an appropriate default
        // }
        form.openingdate = data.openingdate;
        form.condition = data.condition;
        form.requiredexperience = data.requiredexperience;
    };
    PositionComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    // Helper function to format Date to yyyy-MM-dd string
    PositionComponent.prototype.formatDate = function (date) {
        var year = date.getFullYear();
        var month = ('0' + (date.getMonth() + 1)).slice(-2); // Adding 1 because getMonth() returns zero-based
        var day = ('0' + date.getDate()).slice(-2);
        return year + "-" + month + "-" + day;
    };
    PositionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-position',
            template: __webpack_require__(/*! ./position.component.html */ "./src/app/position/position.component.html"),
            styles: [__webpack_require__(/*! ./position.component.css */ "./src/app/position/position.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], PositionComponent);
    return PositionComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseCtl"]));



/***/ }),

/***/ "./src/app/position/positionlist.component.css":
/*!*****************************************************!*\
  !*** ./src/app/position/positionlist.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc2l0aW9uL3Bvc2l0aW9ubGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/position/positionlist.component.html":
/*!******************************************************!*\
  !*** ./src/app/position/positionlist.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<style>\n  #nnn {\n    background: none;\n    border: none;\n    cursor: pointer;\n  }\n\n  .panel-heading {\n    height: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .search-inputs {\n    margin-top: 20px;\n  }\n\n  .search-inputs .form-control,\n  .search-inputs .btn {\n    margin-bottom: 10px;\n  }\n\n  .content-wrapper {\n    background: url('assets/files/1024.jpg') no-repeat center center;\n    background-attachment: fixed;\n    background-size: cover;\n    width: auto;\n    height: 105vh;\n    padding: 20px;\n  }\n\n  .table-responsive {\n    margin-top: 20px;\n  }\n\n  .search-inputs .col-sm-2,\n  .search-inputs .col-sm-1 {\n    padding: 0 5px;\n  }\n\n  .alertRedColor {\n    color: red;\n  }\n</style>\n\n<div class=\"content-wrapper\">\n  <div class=\"container-fluid\">\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\">\n        <h1 class=\"text-primary font-weight-bold\">{{ 'Position List' | translate }}</h1>\n      </div>\n\n      <div class=\"row search-inputs p-1 justify-content-center\">\n        <div class=\"col-sm-2\">\n          <input type=\"text\" name=\"designation\" [(ngModel)]=\"form.searchParams.designation\" class=\"form-control\"\n            (keydown)=\"filterInput($event, 'errorMessagedesignation', 20, 'char')\"\n            placeholder=\"{{ 'Enter designation' | translate }}\">\n\n          <span *ngIf=\"errorMessagedesignation\" class=\"alertRedColor\">{{ errorMessagedesignation }}</span>\n        </div>\n\n        <div class=\"col-sm-2\">\n          <input type=\"text\" name=\"requiredexperience\" [(ngModel)]=\"form.searchParams.requiredexperience\" class=\"form-control\"\n            (keydown)=\"filterInput($event, 'errorMessagerequiredexperience', 5, 'int')\"\n            placeholder=\"{{ 'Enter requiredexperience' | translate }}\">\n          <span *ngIf=\"errorMessagerequiredexperience\" class=\"alertRedColor\">{{ errorMessagerequiredexperience }}</span>\n        </div>\n        \n        <div class=\"col-sm-2\">\n          <select class=\"form-control\" name=\"condition\" [(ngModel)]=\"form.searchParams.condition\" aria-label=\"ngSelected\">\n            <option [ngValue]=\"undefined\">{{ 'Select condition' | translate }}</option>\n            <option *ngFor=\"let condition of form.preload.Positionlist\" [value]=\"condition\">{{ condition }}</option>\n          </select>\n          <span *ngIf=\"form.inputerror.condition\" class=\"alertRedColor\">{{ form.inputerror.condition }}</span>\n        </div>\n\n        <div class=\"col-sm-2\">\n          <input type=\"date\" name=\"openingdate\" [value]=\"form.data.openingdate | date:'yyyy-MM-dd'\"\n                 (input)=\"form.data.openingdate = parseDate($event.target.value)\" class=\"form-control form-control-sm\"\n                 required />\n        </div>\n        \n        <div class=\"col-sm-1\">\n          <button (click)=\"submit()\" class=\"btn btn-primary\">{{ 'Search' | translate }}</button>\n        </div>\n\n        <div class=\"col-sm-2\">\n          <button (click)=\"forward('/owner')\" type=\"button\" class=\"btn btn-success\">\n            {{ 'Add Position' | translate }}\n          </button>\n        </div>\n\n        <div class=\"col-sm-1\">\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">{{ 'Delete' | translate }}</button>\n        </div>\n      </div>\n\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{ form.message }}\n      </div>\n\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{ form.message }}\n      </div>\n\n      <div class=\"table-responsive\">\n        <table class=\"table table-bordered table-hover font-weight-bold text-dark\">\n          <thead class=\"thead-dark text-uppercase\">\n            <tr align=\"center\">\n              <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\"\n                  (change)=\"checkUncheckAll($event)\" /></th>\n              <th>{{ 'S.No' | translate }}</th>\n              <th>{{ 'DESIGNATION' | translate }}</th>\n              <th>{{ 'REQUIREDEXPERIENCE' | translate }}</th>\n              <th>{{ 'CONDITION' | translate }}</th>\n              <th>{{ 'OPENINGDATE' | translate }}</th>\n              <th>{{ 'Edit' | translate }}</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\n              <td><input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" [id]=\"m.id\" />\n              </td>\n              <td>{{ (form.pageNo * 5) + i + 1 }}</td>\n              <td>{{ m.designation }}</td>\n              <td>{{ m.requiredexperience }}</td>\n              <td>{{ m.condition}}</td>\n              <td>{{ m.openingdate | date : 'dd-MM-yyyy'}}</td>\n              \n\n              <td>\n                <button class=\"fa fa-edit text-primary\" id=\"nnn\" (click)=\"forward('/position/' + m.id)\">\n                </button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n\n        <div class=\"d-flex justify-content-between mt-3\">\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\">{{ 'Previous' | translate\n            }}\n          </button>\n          <div *ngIf=\"form.list.length == 0\">\n            <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/Positionlist']\" (click)=\"exit()\">\n              {{ 'Back' | translate }}\n            </a>\n          </div>\n          <button (click)=\"next()\" [disabled]=\"nextList == 0\" class=\"btn btn-info\">{{ 'Next' | translate }}</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/position/positionlist.component.ts":
/*!****************************************************!*\
  !*** ./src/app/position/positionlist.component.ts ***!
  \****************************************************/
/*! exports provided: PositionlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionlistComponent", function() { return PositionlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var PositionlistComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PositionlistComponent, _super);
    function PositionlistComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.POSITION, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.myKey = "";
        _this.form = {
            error: false,
            message: null,
            preload: [],
            data: { id: null },
            inputerror: {},
            searchParams: {},
            searchMessage: null,
            list: [],
            pageNo: 0
        };
        _this.isValidexperienceInput = true; // Property to track validity of cost input
        _this.isValidtitleInput = true; // Property to track validity of description input
        return _this;
    }
    PositionlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ownerlist',
            template: __webpack_require__(/*! ./positionlist.component.html */ "./src/app/position/positionlist.component.html"),
            styles: [__webpack_require__(/*! ./positionlist.component.css */ "./src/app/position/positionlist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], PositionlistComponent);
    return PositionlistComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/proprietor/proprietor.component.css":
/*!*****************************************************!*\
  !*** ./src/app/proprietor/proprietor.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb3ByaWV0b3IvcHJvcHJpZXRvci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/proprietor/proprietor.component.html":
/*!******************************************************!*\
  !*** ./src/app/proprietor/proprietor.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  proprietor works!\n</p>\n<p>\n  asset works!\n</p>\n<app-navbar></app-navbar>\n\n<style>\n  .grad {\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\n    background-repeat: no-repeat;\n    background-size: 100%;\n    padding-bottom: 25px;\n  }\n\n  .background {\n    padding-top: 3%;\n    padding-bottom: 13%;\n    background: url('assets/files/wall.jpg') no-repeat center center;\n    background-attachment: fixed;\n    background-size: cover;\n    width: 100%;\n    height: auto;\n  }\n\n  .required-field {\n    color: red;\n  }\n\n  .alertRedColor {\n    color: red;\n  }\n</style>\n\n<div class=\"container-fluid background\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-sm-8 col-md-6 col-lg-4\">\n      <div class=\"card\">\n        <div class=\"card-body shadow-lg grad\">\n          <form name=\"assetForm\">\n            <h2 *ngIf=\"!form.data.id\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">\n              {{ 'Add Proprietor' | translate }}\n            </h2>\n            <h2 *ngIf=\"form.data.id\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">\n              {{ 'Update Proprietor' | translate }}\n            </h2>\n\n            <!-- Form error messages -->\n            <div *ngIf=\"form.error && form.message\" class=\"alert alert-danger alert-dismissible fade show\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n              {{ form.message }}\n            </div>\n            <div *ngIf=\"!form.error && form.message\" class=\"alert alert-success alert-dismissible fade show\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n              {{ form.message }}\n            </div>\n\n            <div class=\"form-group pt-2\">\n              <label><b>{{ 'Full Name' | translate }}</b><span class=\"required-field\">*</span></label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-id-badge grey-text\"></i></div>\n                </div>\n                <input type=\"text\" name=\"fullName\" [(ngModel)]=\"form.data.fullName\" class=\"form-control\"\n                  (keydown)=\"filterInput($event, 'errorMessageFullName', 20, '')\"\n                  placeholder=\"{{ 'Enter Full Name' | translate }}\" required>\n              </div>\n              <span *ngIf=\"errorMessageFullName\" class=\"alertRedColor\">{{ errorMessageFullName }}</span>\n              <span *ngIf=\"form.inputerror?.fullName\" class=\"alertRedColor\">{{ form.inputerror.fullName }}</span>\n            </div>\n            \n            <div class=\"form-group pt-2\">\n              <label><b>{{ 'Birth Date' | translate }}</b><span class=\"required-field\">*</span></label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-calendar grey-text\"></i></div>\n                </div>\n                <input type=\"date\" name=\"birthDate\" [value]=\"form.data.birthDate | date:'yyyy-MM-dd'\" class=\"form-control\"\n                (input)=\"form.data.birthDate=parseDate($event.target.value)\"\n                  placeholder=\"{{ 'Enter Birth Date' | translate }}\" required>\n              </div>\n              \n              <span *ngIf=\"form.inputerror?.birthDate\" class=\"alertRedColor\">{{ form.inputerror.birthDate }}</span>\n            </div>\n\n            <div class=\"form-group pt-2\">\n              <label><b>{{ 'Coverage Amount' | translate }}</b><span class=\"required-field\">*</span></label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-dollar-sign grey-text\"></i></div>\n                </div>\n                <input type=\"text\" name=\"coverageAmount\" [(ngModel)]=\"form.data.coverageAmount\" class=\"form-control\"\n                  (keydown)=\"filterInput($event, 'errorMessageCoverageAmount', 10, 'int')\"\n                  placeholder=\"{{ 'Enter Coverage Amount' | translate }}\" required>\n              </div>\n              <span *ngIf=\"errorMessageCoverageAmount\" class=\"alertRedColor\">{{ errorMessageCoverageAmount }}</span>\n              <span *ngIf=\"form.inputerror?.coverageAmount\" class=\"alertRedColor\">{{ form.inputerror.coverageAmount }}</span>\n            </div>\n\n            <div class=\"form-group pt-2\">\n              <label><b>{{ 'Asset Id' | translate }}</b><span class=\"required-field\">*</span></label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-paint-brush grey-text\"></i></div>\n                </div>\n                <select class=\"form-control\" name=\"assetId\" [(ngModel)]=\"form.data.assetId\" aria-label=\"ngSelected\" required>\n                  <option [ngValue]=\"undefined\">{{ 'Select Asset Id' | translate }}</option>\n                  <option *ngFor=\"let asset of form.preload.assetList\" [value]=\"asset.key\">{{ asset.value }}</option>\n                </select>\n              </div>\n              <span *ngIf=\"form.inputerror?.assetId\" class=\"alertRedColor\">{{ form.inputerror.assetId }}</span>\n            </div>\n\n            <div class=\"row pt-2 pl-2 pb-3\">\n  \n              <div class=\"col-md-3\"></div>\n              \n              <div class=\"pt-2\">\n                <button *ngIf=\"!form.data.id > 0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\n                  {{ 'Save' | translate }}\n                </button>\n              </div>\n            \n              <div class=\"col-md-1\"></div>\n            \n              <div class=\"pt-2\">\n                <button *ngIf=\"form.data.id > 0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\n                  {{ 'Update' | translate }}\n                </button>\n              </div>\n              \n              <div class=\"pt-2\">\n                <a class=\"btn btn-warning mr-1\" type=\"button\" [routerLink]=\"['/proprietorlist']\"\n                   style=\"text-decoration: none; color: white;\">\n                  {{ 'List' | translate }}\n                </a>\n              </div>\n              \n            </div>\n            \n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/proprietor/proprietor.component.ts":
/*!****************************************************!*\
  !*** ./src/app/proprietor/proprietor.component.ts ***!
  \****************************************************/
/*! exports provided: ProprietorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProprietorComponent", function() { return ProprietorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");





var ProprietorComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ProprietorComponent, _super);
    function ProprietorComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.PROPRIETOR, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.errorMessageTitle = '';
        return _this;
    }
    ProprietorComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.registrationNumber);
        flag = flag && validator.isNotNullObject(form.acquisitionDate);
        flag = flag && validator.isNotNullObject(form.coverageAmount);
        flag = flag && validator.isNotNullObject(form.paintColor);
        return flag;
    };
    ProprietorComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.fullName = data.fullName;
        form.birthDate = data.birthDate;
        form.coverageAmount = data.coverageAmount;
        form.assetId = data.assetId;
    };
    ProprietorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-asset',
            template: __webpack_require__(/*! ./proprietor.component.html */ "./src/app/proprietor/proprietor.component.html"),
            styles: [__webpack_require__(/*! ./proprietor.component.css */ "./src/app/proprietor/proprietor.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ProprietorComponent);
    return ProprietorComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/proprietor/proprietorlist.component.css":
/*!*********************************************************!*\
  !*** ./src/app/proprietor/proprietorlist.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb3ByaWV0b3IvcHJvcHJpZXRvcmxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/proprietor/proprietorlist.component.html":
/*!**********************************************************!*\
  !*** ./src/app/proprietor/proprietorlist.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  assetlist works!\n</p>\n<app-navbar></app-navbar>\n\n<style>\n  #nnn {\n    background: none;\n    border: none;\n    cursor: pointer;\n  }\n\n  .panel-heading {\n    height: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .search-inputs {\n    margin-top: 20px;\n  }\n\n  .search-inputs .form-control,\n  .search-inputs .btn {\n    margin-bottom: 10px;\n  }\n\n  .content-wrapper {\n    background: url('assets/files/teahu.png') no-repeat center center;\n    background-attachment: fixed;\n    background-size: cover;\n    width: auto;\n    height: 105vh;\n    padding: 20px;\n  }\n\n  .table-responsive {\n    margin-top: 20px;\n  }\n\n  .search-inputs .col-sm-2,\n  .search-inputs .col-sm-1 {\n    padding: 0 5px;\n  }\n\n  .alertRedColor {\n    color: red;\n  }\n</style>\n<div class=\"content-wrapper\">\n  <div class=\"container-fluid\">\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\">\n        <h1 class=\"text-primary font-weight-bold\">{{ 'Proprietor List' | translate }}</h1>\n      </div>\n\n      <div class=\"row search-inputs p-1 justify-content-center\">\n        <div class=\"col-sm-2\">\n          <input type=\"text\" name=\"fullName\" [(ngModel)]=\"form.searchParams.fullName\" class=\"form-control\"\n          (keydown)=\"filterInput($event, 'errorMessageFullName', 20, '')\"\n            placeholder=\"{{ 'Enter Registration Number' | translate }}\">\n            <span *ngIf=\"errorMessageFullName\" class=\"alertRedColor\">{{ errorMessageFullName }}</span>\n        </div>\n        <div class=\"col-sm-2\">\n          <input type=\"date\" name=\"birthDate\" [(ngModel)]=\"form.searchParams.birthDate\" class=\"form-control\"\n            placeholder=\"{{ 'Enter Birth Date' | translate }}\">\n        </div>\n\n        <div class=\"col-sm-2\">\n          <input type=\"text\" name=\"coverageAmount\" [(ngModel)]=\"form.searchParams.coverageAmount\" class=\"form-control\"\n            (keydown)=\"filterInput($event, 'errorMessagecoverageAmount', 10, 'int')\"\n            placeholder=\"{{ 'Enter Coverage Amount' | translate }}\">\n          <span *ngIf=\"errorMessagecoverageAmount\" class=\"alertRedColor\">{{ errorMessagecoverageAmount }}</span>\n        </div>\n\n        <div class=\"col-sm-2\">\n          <select class=\"form-control\" name=\"assetId\" [(ngModel)]=\"form.searchParams.assetId\" aria-label=\"ngSelected\" required>\n            <option [ngValue]=\"undefined\">{{ 'Select Asset Id' | translate }}</option>\n            <option *ngFor=\"let asset of form.preload.assetList\" [value]=\"asset.key\">{{ asset.value }}</option>\n          </select>\n          \n        </div>\n\n        <div class=\"col-sm-1\">\n          <button (click)=\"submit()\" class=\"btn btn-primary\">{{ 'Search' | translate }}</button>\n        </div>\n\n        <div class=\"col-sm-2\">\n          <button (click)=\"forward('/proprietor')\" type=\"button\" class=\"btn btn-success\">\n            {{ 'Add Proprietor' | translate }}\n          </button>\n        </div>\n\n        <div class=\"col-sm-1\">\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">{{ 'Delete' | translate }}</button>\n        </div>\n      </div>\n\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{ form.message }}\n      </div>\n\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{ form.message }}\n      </div>\n\n      <div class=\"table-responsive\">\n        <table class=\"table table-bordered table-hover font-weight-bold text-dark\">\n          <thead class=\"thead-dark text-uppercase\">\n            <tr align=\"center\">\n              <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\"\n                  (change)=\"checkUncheckAll($event)\" /></th>\n              <th>{{ 'S.No' | translate }}</th>\n              <th>{{ 'FullName' | translate }}</th>\n              <th>{{ 'BirthDate' | translate }}</th>\n              <th>{{ 'CoverageAmount' | translate }}</th>\n              <th>{{ 'AssetId' | translate }}</th>\n              <th>{{ 'Edit' | translate }}</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\n              <td><input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" [id]=\"m.id\" /></td>\n              <td>{{ (form.pageNo * 5) + i + 1 }}</td>\n              <td>{{ m.fullName }}</td>\n              <td>{{ m.birthDate | date:'yyyy-MM-dd' }}</td>\n              <td>{{ m.coverageAmount }}</td>\n              <td>{{ findSelValueByKey(m.assetId,form.preload.assetList) }}</td>\n\n              <td>\n                <button class=\"fa fa-edit text-primary\" id=\"nnn\" (click)=\"forward('/proprietor/' + m.id)\">\n                </button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n\n        <div class=\"d-flex justify-content-between mt-3\">\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\">{{ 'Previous' | translate }}</button>\n\n          <div>\n            <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/proprietorlist']\" (click)=\"exit()\">\n              {{ 'Reset' | translate }}\n            </a>\n          </div>\n\n          <div *ngIf=\"form.list.length == 0\">\n            <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/proprietorlist']\" (click)=\"exit()\">\n              {{ 'Back' | translate }}\n            </a>\n          </div>\n          <button (click)=\"next()\" [disabled]=\"nextList == 0\" class=\"btn btn-info\">{{ 'Next' | translate }}</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/proprietor/proprietorlist.component.ts":
/*!********************************************************!*\
  !*** ./src/app/proprietor/proprietorlist.component.ts ***!
  \********************************************************/
/*! exports provided: ProprietorlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProprietorlistComponent", function() { return ProprietorlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var ProprietorlistComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ProprietorlistComponent, _super);
    function ProprietorlistComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.PROPRIETOR, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.myKey = "";
        _this.form = {
            error: false,
            message: null,
            preload: [],
            data: { id: null },
            inputerror: {},
            searchParams: {},
            searchMessage: null,
            list: [],
            pageNo: 0
        };
        return _this;
    }
    ProprietorlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-assetlist',
            template: __webpack_require__(/*! ./proprietorlist.component.html */ "./src/app/proprietor/proprietorlist.component.html"),
            styles: [__webpack_require__(/*! ./proprietorlist.component.css */ "./src/app/proprietor/proprietorlist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], ProprietorlistComponent);
    return ProprietorlistComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/role/role-list.component.html":
/*!***********************************************!*\
  !*** ./src/app/role/role-list.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"content-wrapper\" style=\"padding-top: 3%;padding-bottom: 15;\n background: url(assets/files/back1.jpg) no-repeat center center;\nbackground-attachment: fixed;\nbackground-size: cover;width:auto;\n  height: 90vh;\" >\n    <div class=\"container-fluid\">\n\n        <div class=\"panel panel-primary\">\n            <div class=\"panel-heading\" style=\"height: 50px;\">\n                \n                <div class=\"text-center\">\n                    <h1 class=\"text-primary font-weight-bold\">{{'Role List' | translate}}</h1>\n                  </div>\n                </div>\n          \n                <div class=\"row p-1\">\n                  <div class=\"col-sm-1\"></div>\n                  <div class=\"col-sm-2\">\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.name\"\n                      placeholder=\"{{'Search Name' | translate}}\">\n          \n                  </div>\n                  <!-- <div class=\"col-sm-2\">\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.loginId\" placeholder=\"{{'Search Email' | translate}}\">\n                  </div> -->\n                  <div class=\"col-sm-2\">\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.description\"\n                      placeholder=\"{{'Search Description' | translate}}\">\n          \n                  </div>\n\n                  <div class=\"col-sm-2\">\n\n                    <select class=\"form-control\" name=\"id\" [(ngModel)]=\"form.searchParams.id\" aria-label=\"ngSelected\">\n                      <option [ngValue]=\"\" value=\"undefined\">{{' Select Role' | translate }}</option>\n                      <option *ngFor=\"let obj of form.preload.roleList\" [value]=\"obj.key\">{{obj.value}}</option>\n                    </select>\n                  </div>\n          \n                  \n                 \n                  <div class=\"col-sm-1 ml-3\">\n                    <button (click)=\"submit()\" class=\"btn btn-primary\">\n                      {{'Search' | translate }}</button>\n                  </div>\n                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                  <div class=\"col-lg-2 ml-4\">\n                    <button (click)=\"forward('/role')\" type=\"button\" class=\"btn btn-success\">{{'Add Role' | translate}}\n                    </button>\n                  </div>\n          \n                  <div class=\"col-sm-1\">\n                    <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\n                      {{'Delete'| translate}}</button>\n                  </div>\n                </div>\n            <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n                {{form.message}}\n              </div>\n              <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n                {{form.message}}\n              </div>\n\n          \n\n            <div class=\"p-1\">\n                <div class=\"table-responsive\">\n                    <table class=\"table table-bordered table-striped table-hover font-weight-bold text-primary\">\n                        <thead class=\"thead-light text-uppercase\">\n                            <tr>\n                                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\" value=\"h1\" (change)=\"checkUncheckAll($event)\"/></th>\n                                <th>{{'S.No' | translate }}</th>\n                                <th>{{'Name' | translate }}</th>\n                                <th>{{'Description' | translate }}</th>\n                                <th>{{'Edit' | translate}}</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let m of form.list; let i = index\">\n                                <td> <input type=\"checkbox\"  #checkboxes (change)=\"checklistUpdate()\"  name=\"list_name\"  id=\"{{m.id}}\" value=\"{{isMasterSel}}\"/>\n                                </td>\n                                <td> {{(form.pageNo*5)+i+ 1}} </td>\n                                <td> {{ m.name }} </td>\n                                <td> {{ m.description }} </td>\n                                <td>\n                                    <a (click)=\"forward( '/role/' +  m.id)\" style=\"cursor: pointer;\">\n                                        <i class=\"fa fa-edit text-info\"></i>\n                                    </a>\n                                    <!-- /\n                                    <a (click)=\"delete(m.id)\" style=\"cursor: pointer;\">\n                                        <i class=\"fa fa-trash text-danger\"></i>\n                                    </a> -->\n                                </td>\n                                \n                            </tr>\n                        </tbody>\n                    </table>\n                </div><table style=\"width: 100%;\">\n                    <tr>\n                      <td style=\"width: 50%;\">\n                  <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous' | translate\n                    }} </button></td>\n                    <td *ngIf=\"form.list.length!=0\" style=\"width: 50%;\"></td>\n                    <td *ngIf=\"form.list.length==0\" style=\"width: 50%;\">\n                      <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/rolelist']\" (click)=\"exit()\">{{'Back' | translate}}</a></td>\n        \n          \n          \n                \n                    <td><button (click)=\"next()\" [disabled]=\"nextList==0\" type=\"button\" class=\"btn btn-info\"> {{'Next' |\n                      translate }}</button></td>\n                    </tr>\n                    </table>\n              \n                    \n               \n            </div>\n\n        </div>\n\n    </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/role/role-list.component.ts":
/*!*********************************************!*\
  !*** ./src/app/role/role-list.component.ts ***!
  \*********************************************/
/*! exports provided: RoleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleListComponent", function() { return RoleListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var RoleListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RoleListComponent, _super);
    function RoleListComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.ROLE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    RoleListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-role-list',
            template: __webpack_require__(/*! ./role-list.component.html */ "./src/app/role/role-list.component.html"),
            styles: [__webpack_require__(/*! ./role.component.css */ "./src/app/role/role.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], RoleListComponent);
    return RoleListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/role/role.component.css":
/*!*****************************************!*\
  !*** ./src/app/role/role.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alertRedColor {\n    color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZS9yb2xlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9yb2xlL3JvbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGVydFJlZENvbG9yIHtcbiAgICBjb2xvcjogcmVkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/role/role.component.html":
/*!******************************************!*\
  !*** ./src/app/role/role.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<style>\n  .grad {\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168),\n        rgb(219, 231, 237));\n    background-repeat: no repeat;\n    background-size: 100%;\n    padding-bottom: 25px;\n  }\n</style>\n<div class=\"row \" style=\"padding-top: 7%; padding-bottom:15%;\nbackground: url(assets/files/wall.jpg) no-repeat center center;\nbackground-attachment: fixed;\nbackground-size: cover;width:auto;\n  height: auto;\">\n\n  <div class=\"col-sm-4\"></div>\n  <div class=\"col-sm-4\">\n    <div class=\"card\">\n      <div class=\"card-body shadow-lg grad\">\n        <form>\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Add Role' |\n            translate }}</h2>\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Update Role' |\n            translate }}</h2>\n\n\n          <!-- <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div> -->\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Name' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"name\" [(ngModel)]=\"form.data.name\" class=\"form-control\"\n                  placeholder=\"{{'Enter Role Name' | translate }}\">\n              </div>\n            </div>\n          </div>\n          <span class=\"alertRedColor\">{{form.inputerror.name}}</span>\n\n          <div style=\"padding-top:3%\">\n            <span><b>{{'Description' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-bars grey-text \"></i> </div>\n                </div>\n                <textarea name=\"description\" [(ngModel)]=\"form.data.description\" class=\"form-control\"\n                  placeholder=\"{{'Enter Description' | translate }}\"></textarea>\n              </div>\n            </div>\n            <span class=\"alertRedColor\">{{form.inputerror.description}}</span>\n          </div>\n          <div class=\"row pt-3 pl-3 pb-3\">\n            <div class=\"pt-2\">\n              <button *ngIf=\"!form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\n                {{'Save' | translate }}</button>\n            </div>\n            <div class=\"pt-2\">\n              <button *ngIf=\"form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\n                {{'Update' | translate }}</button>\n            </div>\n\n            <div class=\"pl-3 pt-2\">\n              <button (click)=\"forward('/rolelist')\" class=\"btn btn-md btn-warning\">\n                {{'List' | translate }}</button>\n            </div>\n          </div>\n        </form>\n      </div>\n\n    </div>\n\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/role/role.component.ts":
/*!****************************************!*\
  !*** ./src/app/role/role.component.ts ***!
  \****************************************/
/*! exports provided: RoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleComponent", function() { return RoleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");





var RoleComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RoleComponent, _super);
    function RoleComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.ROLE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    RoleComponent.prototype.validate = function () {
        return this.validateForm(this.form.data);
    };
    RoleComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.name);
        flag = flag && validator.isNotNullObject(form.description);
        return flag;
    };
    RoleComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.name = data.name;
        form.description = data.description;
        form.status = data.status;
    };
    RoleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-role',
            template: __webpack_require__(/*! ./role.component.html */ "./src/app/role/role.component.html"),
            styles: [__webpack_require__(/*! ./role.component.css */ "./src/app/role/role.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], RoleComponent);
    return RoleComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseCtl"]));



/***/ }),

/***/ "./src/app/service-locator.service.ts":
/*!********************************************!*\
  !*** ./src/app/service-locator.service.ts ***!
  \********************************************/
/*! exports provided: ServiceLocatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceLocatorService", function() { return ServiceLocatorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var _utility_data_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utility/data-validator */ "./src/app/utility/data-validator.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _endpoint_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./endpoint-service.service */ "./src/app/endpoint-service.service.ts");






//Is example se yeh saaf hota hai ki ServiceLocatorService ka use application ke different services ko 
//easily access aur manage karne ke liye kiya gaya hai, aur UserComponent ko specific functionalities provide karne ke liye bhi.
var ServiceLocatorService = /** @class */ (function () {
    function ServiceLocatorService(hs, dv, r, ep) {
        this.hs = hs;
        this.dv = dv;
        this.r = r;
        this.ep = ep;
        this.httpService = null;
        this.dataValidator = null;
        this.router = null;
        this.endpoints = null;
        this.httpService = hs;
        this.dataValidator = dv;
        this.router = r;
        this.endpoints = ep;
    }
    /**
     * get path variable from url
     *
     * @param route
     * @param callback
     */
    ServiceLocatorService.prototype.getPathVariable = function (route, callback) {
        route.params.subscribe(function (params) {
            callback(params);
        });
    };
    /**
     * Forward to page
     *
     * @param page
     */
    ServiceLocatorService.prototype.forward = function (page) {
        this.router.navigateByUrl(page);
    };
    ServiceLocatorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service_service__WEBPACK_IMPORTED_MODULE_2__["HttpServiceService"], _utility_data_validator__WEBPACK_IMPORTED_MODULE_3__["DataValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _endpoint_service_service__WEBPACK_IMPORTED_MODULE_5__["EndpointServiceService"]])
    ], ServiceLocatorService);
    return ServiceLocatorService;
}());



/***/ }),

/***/ "./src/app/spinner/spinner.component.css":
/*!***********************************************!*\
  !*** ./src/app/spinner/spinner.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/spinner/spinner.component.html":
/*!************************************************!*\
  !*** ./src/app/spinner/spinner.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  spinner works!\n</p>\n"

/***/ }),

/***/ "./src/app/spinner/spinner.component.ts":
/*!**********************************************!*\
  !*** ./src/app/spinner/spinner.component.ts ***!
  \**********************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent() {
    }
    SpinnerComponent.prototype.ngOnInit = function () {
    };
    SpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-spinner',
            template: __webpack_require__(/*! ./spinner.component.html */ "./src/app/spinner/spinner.component.html"),
            styles: [__webpack_require__(/*! ./spinner.component.css */ "./src/app/spinner/spinner.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "./src/app/student/student-list.component.html":
/*!*****************************************************!*\
  !*** ./src/app/student/student-list.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"content-wrapper\" style=\"padding-top: 3%; padding-bottom: 15%; \nbackground: url(assets/files/gettyimages-1132439283-640x640.jpg) no-repeat center center;\nbackground-attachment: fixed;\nbackground-size: cover;width:auto;\n  height: 90vh;\">\n  <div class=\"container-fluid\">\n\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\" style=\"height: 70px;\">\n\n        <div class=\"text-center\">\n          <h2 class=\"text-primary font-weight-bold\">{{'Student List' | translate }}</h2>\n\n        </div>\n      </div>\n\n      <div class=\"row p-1\">\n        <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.enrolNo\"\n            placeholder=\"{{'Search Enrollment' | translate }}\">\n        </div>\n        <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.collegeName\"\n            placeholder=\"{{'Search College' | translate }}\">\n        </div>\n\n        <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.email\"\n            placeholder=\"{{'Search Email' | translate }}\">\n        </div>\n        <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.phoneNo\"\n            placeholder=\"{{'Search Mobile Number' | translate }}\">\n        </div>\n        <div class=\"col-sm-1\">\n          <button (click)=\"submit()\" class=\"btn btn-primary\">\n            {{'Search' | translate }}</button>\n        </div>\n\n\n\n        <div class=\"col-lg-2\">\n          <button (click)=\"forward('/student')\" type=\"button\" class=\"btn btn-success\">{{'Add Student' | translate }}\n          </button>\n        </div>\n\n\n        <div class=\"col-sm-1\">\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\n            {{'Delete'| translate}}</button>\n        </div>\n      </div>\n\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n      <div class=\"p-1\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-bordered table-striped table-hover\">\n            <thead class=\"thead-light text-uppercase\">\n              <tr align=\"center\">\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\" value=\"h1\"\n                    (change)=\"checkUncheckAll($event)\" /></th>\n                <th>{{'S.No' | translate }}</th>\n                <th>{{'Enrollment No' | translate }}</th>\n                <th>{{'First Name' | translate }}</th>\n                <th>{{'Last Name' | translate }}</th>\n                <th>{{'College' | translate }}</th>\n                <th>{{'DOB' | translate }}</th>\n                <th>{{'Mobile' | translate }}</th>\n                <th>{{'Email' | translate }}</th>\n                <th>{{'Edit' | translate}}</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\n                <td> <input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" id=\"{{m.id}}\" value=\"{{isMasterSel}}\" />\n                </td>\n                <td> {{(form.pageNo*5)+i+ 1}} </td>\n                <td>{{m.enrolNo}}</td>\n                <td> {{ m.firstName }} </td>\n                <td> {{ m.lastName }} </td>\n                <td> {{ m.collegeName }} </td>\n                <td>{{m.dob | date : 'dd-MM-yyyy'}}</td>\n                <td> {{ m.phoneNo }} </td>\n                <td> {{ m.email }} </td>\n                <td>\n                  <a (click)=\"forward( '/student/' +  m.id)\" style=\"cursor: pointer;\">\n                    <i class=\"fa fa-edit text-info\"></i>\n                  </a>\n                  <!-- /\n                  <a (click)=\"delete(m.id)\" style=\"cursor: pointer;\">\n                    <i class=\"fa fa-trash text-danger\"></i>\n                  </a> -->\n                </td>\n              </tr>\n            </tbody>\n          </table>\n          <table style=\"width: 100%;\">\n              <tr> <td style=\"width: 50%;\"><button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\">{{'Previous' |\n                    translate }} </button>\n                </td>  \n                <td *ngIf=\"form.list.length!=0\" style=\"width: 50%;\"></td>\n                <td *ngIf=\"form.list.length==0\" style=\"width: 50%;\"><a class=\"btn btn-warning mr-1\" [routerLink]=\"['/studentlist']\" (click)=\"exit()\">{{'Back' | translate}}</a></td>\n                <td>\n                  <button (click)=\"next()\" [disabled]=\"nextList==0\" type=\"button\" class=\"btn btn-info\">{{'Next' | translate }} </button>\n                 </td>\n                </tr>\n              </table>\n          \n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/student/student-list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/student/student-list.component.ts ***!
  \***************************************************/
/*! exports provided: StudentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentListComponent", function() { return StudentListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");





var StudentListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](StudentListComponent, _super);
    function StudentListComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.STUDENT, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    StudentListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-list',
            template: __webpack_require__(/*! ./student-list.component.html */ "./src/app/student/student-list.component.html"),
            styles: [__webpack_require__(/*! ./student.component.css */ "./src/app/student/student.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], StudentListComponent);
    return StudentListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_4__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/student/student.component.css":
/*!***********************************************!*\
  !*** ./src/app/student/student.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alertRedColor {\n    color: red;\n}\n\n\n.required-field::after { \t\t\n  content: \"*\";\t\t\n  color: red;\t\t\n   }\n\n\n.successColor{\n    color: green;\n   }\n\n\n.btn-space {\n    margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudC9zdHVkZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2Q7OztBQUdBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7R0FDVDs7O0FBRUE7SUFDQyxZQUFZO0dBQ2I7OztBQUVBO0lBQ0MsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvc3R1ZGVudC9zdHVkZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxlcnRSZWRDb2xvciB7XG4gICAgY29sb3I6IHJlZDtcbn1cblxuXG4ucmVxdWlyZWQtZmllbGQ6OmFmdGVyIHsgXHRcdFxuICBjb250ZW50OiBcIipcIjtcdFx0XG4gIGNvbG9yOiByZWQ7XHRcdFxuICAgfVx0XG5cbiAgIC5zdWNjZXNzQ29sb3J7XG4gICAgY29sb3I6IGdyZWVuO1xuICAgfVxuXG4gICAuYnRuLXNwYWNlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/student/student.component.html":
/*!************************************************!*\
  !*** ./src/app/student/student.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<style>\n  .grad{\n background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\n background-repeat: no repeat;\n background-size: 100%;\n padding-bottom: 25px\n ;\n }\n</style>\n<div class=\"row \" style=\"padding-top: 3%; \npadding-bottom:3%;\nbackground: url(assets/files/wall.jpg) no-repeat center center;\nbackground-attachment: fixed;\nbackground-size: cover;width:auto;\n  height: auto;\">\n\n  <div class=\"col-sm-4\"></div>\n  <div class=\"col-sm-4\">\n    <div class=\"card\">\n      <div class=\"card-body shadow-lg grad\">\n        <form>\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Add Student' | translate }}</h2>\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Update Student' | translate }}</h2>\n\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Enrollment No' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-id-card grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"enrolNo\" [(ngModel)]=\"form.data.enrolNo\" class=\"form-control\"\n                  placeholder=\"{{'Enter Enrollment Number' | translate }}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.enrolNo}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'First Name' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"firstN\" [(ngModel)]=\"form.data.firstName\" class=\"form-control\"\n                  placeholder=\"{{'Enter First Name' | translate }}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.firstName}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Last Name' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-user-circle grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"lastN\" [(ngModel)]=\"form.data.lastName\" class=\"form-control\"\n                  placeholder=\"{{'Enter Last Name' | translate }}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.firstName}} </span>\n          </div>\n\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'College' | translate }} </b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-university grey-text\"></i> </div>\n                </div>\n\n                <select class=\"form-control\" name=\"collegeId\" [(ngModel)]=\"form.data.collegeId\"\n                  style=\"cursor: pointer;\">\n                  <option [ngValue]=\"\" value=\"undefined\">{{' Select College' | translate }}</option>\n                  <option *ngFor=\"let obj of form.preload.collegeList\" [value]=\"obj.key\">{{obj.value}}</option>\n                </select>\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.collegeId}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Email' | translate }} </b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"email\" [(ngModel)]=\"form.data.email\" class=\"form-control\"\n                  placeholder=\"{{'Enter Email Id' | translate }}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.email}} </span>\n          </div>\n          \n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'DOB' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-table grey-text\"></i> </div>\n                </div>\n                <input type=\"date\" name=\"dob\" [value]=\"form.data.dob| date:'yyyy-MM-dd'\"\n                (input)=\"form.data.dob=parseDate($event.target.value)\"\n                class=\"form-control form-control-sm\" required />\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.dob}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"  ><b>{{'Mobile No' | translate }} </b>\n              <span class=\"required-field\" ></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-phone grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" maxlength=\"10\" name=\"phoneNo\" [(ngModel)]=\"form.data.phoneNo\" class=\"form-control\"\n                  placeholder=\"{{'Enter Mobile Number' | translate }}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.phoneNo}} </span>\n          </div>\n\n          <div class=\"row pt-3 pl-3 pb-3\">\n            <div class=\"pt-2\">\n              <button *ngIf=\"!form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\n                {{'Save' | translate }}</button>\n            </div>\n            <div class=\"pt-2\">\n              <button *ngIf=\"form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\n                {{'Update' | translate }}</button>\n            </div>\n            <div class=\"pt-2\">\n              <button (click)=\"forward('/studentlist')\" type=\"button\"\n                class=\"btn btn-warning mr-1\">{{'List' | translate }}\n              </button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/student/student.component.ts":
/*!**********************************************!*\
  !*** ./src/app/student/student.component.ts ***!
  \**********************************************/
/*! exports provided: StudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentComponent", function() { return StudentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");





var StudentComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](StudentComponent, _super);
    function StudentComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.STUDENT, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.selected = null;
        return _this;
    }
    StudentComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.firstName);
        flag = flag && validator.isNotNullObject(form.lastName);
        flag = flag && validator.isNotNullObject(form.enrolNo);
        flag = flag && validator.isNotNullObject(form.phoneNo);
        flag = flag && validator.isNotNullObject(form.email);
        flag = flag && validator.isNotNullObject(form.dob);
        return flag;
    };
    StudentComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.collegeId = data.collegeId;
        console.log(form.collegeId + " inside populateForm method");
        form.email = data.email;
        form.enrolNo = data.enrolNo;
        form.dob = data.dob;
        //let ndate = new Date(data.dob);
        //console.log(form.dob + 'date ------',ndate)
        form.firstName = data.firstName;
        form.lastName = data.lastName;
        form.phoneNo = data.phoneNo;
    };
    StudentComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    StudentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student',
            template: __webpack_require__(/*! ./student.component.html */ "./src/app/student/student.component.html"),
            styles: [__webpack_require__(/*! ./student.component.css */ "./src/app/student/student.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], StudentComponent);
    return StudentComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseCtl"]));



/***/ }),

/***/ "./src/app/subject/subject-list.component.html":
/*!*****************************************************!*\
  !*** ./src/app/subject/subject-list.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"content-wrapper\" style=\"padding-top: 3%;padding-bottom: 15%; \nbackground: url(assets/files/gettyimages-1132439283-640x640.jpg) no-repeat center center;\nbackground-attachment: fixed;\nbackground-size: cover;width:auto;\n  height: 90vh;\" >\n  <div class=\"container-fluid\">\n\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\" style=\"height: 50px;\">\n        <div class=\"text-center\">\n          <h1 class=\"text-primary font-weight-bold\">{{'Subject List' | translate }}</h1>\n        </div>\n      </div>\n\n      <div class=\"row p-1\">\n        <div class=\"col-sm-1\"></div>\n        <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.subjectName\"\n            placeholder=\"{{'Search Subject' | translate}}\">\n\n        </div>\n        <!-- <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.loginId\" placeholder=\"{{'Search Email' | translate}}\">\n        </div> -->\n        <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.courseName\"\n            placeholder=\"{{'Search Course' | translate}}\">\n\n        </div>\n\n        \n        <div class=\"col-sm-2\">\n          <!-- <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.status\" placeholder=\"{{'Search Status' | translate}}\"> -->\n        </div>\n        <div class=\"col-sm-1 ml-3\">\n          <button (click)=\"submit()\" class=\"btn btn-primary\">\n            {{'Search' | translate }}</button>\n        </div>\n        <div class=\"col-lg-2 ml-4\">\n          <button (click)=\"forward('/subject')\" type=\"button\" class=\"btn btn-success\">{{'Add Subject' | translate}}\n          </button>\n        </div>\n\n        <div class=\"col-sm-1\">\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\n            {{'Delete'| translate}}</button>\n        </div>\n      </div>\n      \n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n\n\n      <div class=\"p-1\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-bordered table-striped table-hover\">\n            <thead class=\"thead-light text-uppercase\">\n              <tr>\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\" value=\"h1\" (change)=\"checkUncheckAll($event)\"/></th>\n                <th>{{'S.No.' | translate}}</th>\n                <th>{{'Name' | translate}}</th>\n                <th>{{'Course' | translate}}</th>\n               \n                <th>{{'Description' | translate}}</th>\n                <th>{{'Edit' | translate }}</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let m of form.list; let i = index\">\n                <td> <input type=\"checkbox\"  #checkboxes (change)=\"checklistUpdate()\"  name=\"list_name\"  id=\"{{m.id}}\" value=\"{{isMasterSel}}\"/>\n                </td>\n                <td> {{(form.pageNo*5)+i+ 1}} </td>\n                <td> {{ m.subjectName}} </td>\n                <td> {{ m.courseName}} </td>\n               \n                <td> {{ m.description }} </td>\n                <td>\n                  <a (click)=\"forward( '/subject/' +  m.id)\" style=\"cursor: pointer;\">\n                    <i class=\"fa fa-edit text-info\"></i>\n                  </a>\n                  <!-- /\n                  <a (click)=\"delete(m.id)\" style=\"cursor: pointer;\">\n                    <i class=\"fa fa-trash text-danger\"></i>\n                  </a> -->\n                </td>\n                \n              </tr>\n            </tbody>\n          </table>\n          <table style=\"width: 100%;\">\n            <tr>\n              <td style=\"width: 50%;\">\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous' | translate\n            }} </button></td>\n            <td *ngIf=\"form.list.length!=0\" style=\"width: 50%;\"></td>\n            <td *ngIf=\"form.list.length==0\" style=\"width: 50%;\"><a class=\"btn btn-warning mr-1\" [routerLink]=\"['/subjectlist']\"  (click)=\"exit()\">{{'Back' | translate}}</a></td>\n\n\n        \n            <td><button (click)=\"next()\" [disabled]=\"nextList==0\" type=\"button\" class=\"btn btn-info\"> {{'Next' |\n              translate }}</button></td>\n            </tr>\n            </table>\n\n                \n            \n        </div>\n      </div>\n\n    </div>\n\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/subject/subject-list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/subject/subject-list.component.ts ***!
  \***************************************************/
/*! exports provided: SubjectListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectListComponent", function() { return SubjectListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");





var SubjectListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SubjectListComponent, _super);
    function SubjectListComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.SUBJECT, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    SubjectListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subject-list',
            template: __webpack_require__(/*! ./subject-list.component.html */ "./src/app/subject/subject-list.component.html"),
            styles: [__webpack_require__(/*! ./subject.component.css */ "./src/app/subject/subject.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], SubjectListComponent);
    return SubjectListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_4__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/subject/subject.component.css":
/*!***********************************************!*\
  !*** ./src/app/subject/subject.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1YmplY3Qvc3ViamVjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/subject/subject.component.html":
/*!************************************************!*\
  !*** ./src/app/subject/subject.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<style>\n  .grad{\n background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\n background-repeat: no repeat;\n background-size: 100%;\n padding-bottom: 25px\n ;\n }\n</style>\n\n<div class=\"row \" style=\"padding-top: 3%; padding-bottom:13%;\nbackground: url(assets/files/wall.jpg) no-repeat center center;\nbackground-attachment: fixed;\nbackground-size: cover;width:auto;\n  height: auto;\">\n\n  <div class=\"col-sm-4\"></div>\n  <div class=\"col-sm-4\">\n    <div class=\"card\">\n      <div class=\"card-body shadow-lg grad\">\n        <form>\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Add Subject' | translate}}</h2>\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Update Subject' | translate}}</h2>\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Subject Name' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-file grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"subjectName\" [(ngModel)]=\"form.data.subjectName\" class=\"form-control\"\n                  placeholder=\"{{'Enter Subject Name' | translate}}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.subjectName}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Description' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-bars grey-text\"></i> </div>\n                </div>\n                <textarea class=\"form-control\" name=\"description\" [(ngModel)]=\"form.data.description\"\n                  placeholder=\"{{'Enter Description' | translate}}\"></textarea>\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.description}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Subject Name' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-bars grey-text\"></i> </div>\n                </div>\n                <select class=\"form-control\" name=\"courseId\" [(ngModel)]=\"form.data.courseId\" style=\"cursor: pointer;\">\n                  <option *ngFor=\"let obj of form.preload.courseList\" [value]=\"obj.key\">{{obj.value}}</option>\n                </select>\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.subjectName}} </span>\n          </div>\n\n          <div class=\"row pt-3 pl-3 pb-3\">\n            <div class=\"pt-2\">\n              <button *ngIf=\"!form.data.id>0\" (click)=\"submit()\" [disabled]=\"!validate()\" class=\"btn btn-success mr-2\">\n                {{'Save' | translate}}</button>\n            </div>\n            <div class=\"pt-2\">\n              <button *ngIf=\"form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\n                {{'Update' | translate}}</button>\n            </div>\n            <div class=\"pt-2\">\n              <button (click)=\"forward('/subjectlist')\" type=\"button\"\n                class=\"btn btn-warning mr-1\">{{'List' | translate}}\n              </button></div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/subject/subject.component.ts":
/*!**********************************************!*\
  !*** ./src/app/subject/subject.component.ts ***!
  \**********************************************/
/*! exports provided: SubjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectComponent", function() { return SubjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");





var SubjectComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SubjectComponent, _super);
    function SubjectComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.SUBJECT, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    SubjectComponent.prototype.validate = function () {
        return this.validateForm(this.form.data);
    };
    SubjectComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.subjectName);
        flag = flag && validator.isNotNullObject(form.description);
        flag = flag && validator.isNotNullObject(form.courseId);
        return flag;
    };
    SubjectComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.subjectName = data.subjectName;
        form.description = data.description;
        form.courseId = data.courseId;
        console.log('Populated Form', form);
    };
    SubjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subject',
            template: __webpack_require__(/*! ./subject.component.html */ "./src/app/subject/subject.component.html"),
            styles: [__webpack_require__(/*! ./subject.component.css */ "./src/app/subject/subject.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], SubjectComponent);
    return SubjectComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/timetable/timetable-list.component.html":
/*!*********************************************************!*\
  !*** ./src/app/timetable/timetable-list.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"content-wrapper\" style=\"padding-top: 3%; padding-bottom: 15%; \nbackground: url(assets/files/gettyimages-1132439283-640x640.jpg) no-repeat center center;\nbackground-attachment: fixed;\nbackground-size: cover;width:auto;\n  height: 90vh;\">\n  <div class=\"container-fluid\">\n\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\" style=\"height: 50px;\">\n        <div class=\"text-center\">\n          <h1 class=\"text-primary font-weight-bold\">{{'TimeTable List' | translate }}</h1>\n        </div>\n      </div>\n\n      <div class=\"row p-1\">\n        <div class=\"col-sm-1\"></div>\n        <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.subjectName\"\n            placeholder=\"{{'Search Subject' | translate}}\">\n\n        </div>\n        <!-- <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.loginId\" placeholder=\"{{'Search Email' | translate}}\">\n        </div> -->\n        <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.courseName\"\n            placeholder=\"{{'Search Course' | translate}}\">\n\n        </div>\n\n        \n        <div class=\"col-sm-2\">\n          <!-- <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.status\" placeholder=\"{{'Search Status' | translate}}\"> -->\n        </div>\n        <div class=\"col-sm-1 ml-3\">\n          <button (click)=\"submit()\" class=\"btn btn-primary\">\n            {{'Search' | translate }}</button>\n        </div>\n        <div class=\"col-lg-2 ml-4\">\n          <button (click)=\"forward('/timetable')\" type=\"button\" class=\"btn btn-success\">{{'Add TimeTable' | translate}}\n          </button>\n        </div>\n\n        <div class=\"col-sm-1\">\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\n            {{'Delete'| translate}}</button>\n        </div>\n      </div>\n\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n\n      <div class=\"p-1\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-bordered table-striped table-hover\">\n            <thead class=\"thead-light text-uppercase\">\n              <tr>\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\" value=\"h1\"\n                    (change)=\"checkUncheckAll($event)\" /></th>\n\n                <th>{{'S.No.' | translate }}</th>\n                <th>{{'Semester' | translate }}</th>\n                <th>{{'ExamDate' | translate }}</th>\n                <th>{{'ExamTime' | translate }}</th>\n                <th>{{'Course' | translate }}</th>\n                <th>{{'Subject' | translate }}</th>\n                <th>{{'Description' | translate }}</th>\n                <th>{{'Edit' | translate}}</th>\n              </tr>\n            </thead>\n            <tbody>\n              \n              <tr *ngFor=\"let m of form.list; let i = index;\">\n                <td> <input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" id=\"{{m.id}}\" value=\"{{isMasterSel}}\" />\n                </td>\n                <td> {{(form.pageNo*5)+i+ 1}} </td>\n                <td> {{ m.semester }} </td>\n                <td> {{ m.examDate | date : 'dd-MM-yyyy' }} </td>\n                <td> {{ m.examTime }} </td>\n                <td> {{ m.courseName }} </td>\n                <td> {{ m.subjectName }} </td>\n                <td> {{ m.description }} </td>\n                <td>\n                  <a (click)=\"forward( '/timetable/' +  m.id)\" style=\"cursor: pointer;\">\n                    <i class=\"fa fa-edit text-info\"></i>\n                  </a>\n                  <!-- /\n                    <a (click)=\"delete(m.id)\" style=\"cursor: pointer;\">\n                      <i class=\"fa fa-trash text-danger\"></i>\n                    </a>\n                  </td> -->\n\n              </tr>\n            </tbody>\n          </table>\n          <table style=\"width: 100%;\">\n            <tr>\n              <td style=\"width: 50%;\">\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous' | translate\n            }} </button></td>\n            <td *ngIf=\"form.list.length!=0\" style=\"width: 50%;\"></td>\n            <td *ngIf=\"form.list.length==0\" style=\"width: 50%;\"><a class=\"btn btn-warning mr-1\" [routerLink]=\"['/timetablelist']\"  (click)=\"exit()\">{{'Back' | translate}}</a></td>\n\n\n        \n            <td><button (click)=\"next()\" [disabled]=\"nextList==0\" type=\"button\" class=\"btn btn-info\"> {{'Next' |\n              translate }}</button></td>\n            </tr>\n            </table>\n\n              \n            \n        </div>\n      </div>\n\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/timetable/timetable-list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/timetable/timetable-list.component.ts ***!
  \*******************************************************/
/*! exports provided: TimetableListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimetableListComponent", function() { return TimetableListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");





var TimetableListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TimetableListComponent, _super);
    function TimetableListComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.TIMETABLE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        var ppSize = 0;
        return _this;
    }
    TimetableListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-timetable-list',
            template: __webpack_require__(/*! ./timetable-list.component.html */ "./src/app/timetable/timetable-list.component.html"),
            styles: [__webpack_require__(/*! ./timetable.component.css */ "./src/app/timetable/timetable.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], TimetableListComponent);
    return TimetableListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_4__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/timetable/timetable.component.css":
/*!***************************************************!*\
  !*** ./src/app/timetable/timetable.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RpbWV0YWJsZS90aW1ldGFibGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/timetable/timetable.component.html":
/*!****************************************************!*\
  !*** ./src/app/timetable/timetable.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<style>\n  .grad{\n background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\n background-repeat: no repeat;\n background-size: 100%;\n padding-bottom: 25px\n ;\n }\n</style>\n\n<div class=\"row \" style=\"padding-top: 3%; padding-bottom:3%;\nbackground: url(assets/files/wall.jpg) no-repeat center center;\nbackground-attachment: fixed;\nbackground-size: cover;width:auto;\n  height: auto;\">\n\n  <div class=\"col-sm-4\"></div>\n  <div class=\"col-sm-4\">\n    <div class=\"card\">\n      <div class=\"card-body shadow-lg grad\">\n        <form>\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Add TimeTable' | translate }}</h2>\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Update TimeTable' | translate }}</h2>\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Course' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-file grey-text\"></i> </div>\n                </div>\n                <select class=\"form-control\" name=\"courseId\" [(ngModel)]=\"form.data.courseId\"\n                  style=\"cursor: pointer;\">\n                  <option [ngValue]=\"\" value=\"undefined\">{{' Select Course' | translate }}</option>\n                  <option *ngFor=\"let obj of form.preload.courseList\" [value]=\"obj.key\">{{obj.value}}</option>\n                </select>\n              </div>\n            </div>\n          \n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Subject' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-globe grey-text\"></i> </div>\n                </div>\n                <select class=\"form-control\" name=\"subjectId\" [(ngModel)]=\"form.data.subjectId\" style=\"cursor: pointer;\">\n                  <option [ngValue]=\"\" value=\"undefined\">{{' Select Subject' | translate }}</option>\n            \n                  <option *ngFor=\"let obj of form.preload.subjectList\" [value]=\"obj.key\">{{obj.value}}</option>\n                </select>\n              </div>\n              <span class=\"alertRedColor\"> {{form.inputerror.subject}} </span>\n            </div>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Semester' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-list-ol grey-text\"></i> </div>\n                </div>\n                <select class=\"form-control\" name=\"semester\" [(ngModel)]=\"form.data.semester\" style=\"cursor: pointer;\">\n                  <option [ngValue]=\"\" value=\"undefined\"> {{'Please select' | translate}} </option>\n                  <option value=\"1 Semester\">1 Semester</option>\n                  <option value=\"2 Semester\">2 Semester</option>\n                  <option value=\"3 Semester\">3 Semester</option>\n                  <option value=\"4 Semester\">4 Semester</option>\n                  <option value=\"5 Semester\">5 Semester</option>\n                  <option value=\"6 Semester\">6 Semester</option>\n                  <option value=\"7 Semester\">7 Semester</option>\n                  <option value=\"8 Semester\">8 Semester</option>\n                </select>\n              </div>\n              <span class=\"alertRedColor\"> {{form.inputerror.semester}} </span>\n            </div>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Exam Date' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-table grey-text\"></i> </div>\n                </div>\n                <input type=\"date\" name=\"examDate\" [value]=\"form.data.examDate | date:'yyyy-MM-dd'\"\n                (input)=\"form.data.examDate=parseDate($event.target.value)\"\n                class=\"form-control form-control-sm\" required />\n              </div>\n              <span class=\"alertRedColor\"> {{form.inputerror.examDate}} </span>\n            </div>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Exam Time' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-clock-o grey-text\"></i> </div>\n                </div>\n                <select class=\"form-control\" name=\"examTime\" [(ngModel)]=\"form.data.examTime\">\n                  <option [ngValue]=\"\" value=\"undefined\">{{' Select examTime' | translate }}</option>\n            \n                  <option selected disabled>{{'Please select' | translate }}</option>\n                  <option value=\"08:00 AM to 11:00 AM\">08:00 AM to 11:00 AM</option>\n                  <option value=\"12:00PM to 3:00PM\">12:00PM to 3:00PM</option>\n                  <option value=\"3:00PM to 6:00PM\">3:00PM to 6:00PM</option>\n                </select>\n              </div>\n              <span class=\"alertRedColor\"> {{form.inputerror.examTime}} </span>\n            </div>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span><b>{{'Description' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-bars grey-text \"></i> </div>\n                </div>\n                <textarea  name=\"description\" [(ngModel)]=\"form.data.description\" class=\"form-control\"\n                  placeholder=\"{{'Enter Description' | translate }}\"></textarea>\n              </div>\n            </div>\n            <span class=\"alertRedColor\">{{form.inputerror.description}}</span>\n          </div>\n\n          <div class=\"row pt-3 pl-3 pb-3\">\n            <div class=\"pt-2\">\n              <button *ngIf=\"!form.data.id>0\"  (click)=\"submit()\" [disabled]=\"!validate()\" class=\"btn btn-success mr-2\">\n                {{'Save' | translate }}</button>\n            </div>\n            <div class=\"pt-2\">\n              <button  *ngIf=\"form.data.id>0\"  (click)=\"submit()\" class=\"btn btn-success mr-2\">\n              {{'Update' | translate }}</button>\n            </div>\n           \n           \n            <div class=\"pl-3 pt-2\">\n              <button (click)=\"forward('/timetablelist')\" type=\"button\" class=\"btn btn-warning mr-1\">{{'List' | translate }}\n              </button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div><app-footer></app-footer>"

/***/ }),

/***/ "./src/app/timetable/timetable.component.ts":
/*!**************************************************!*\
  !*** ./src/app/timetable/timetable.component.ts ***!
  \**************************************************/
/*! exports provided: TimetableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimetableComponent", function() { return TimetableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var TimetableComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TimetableComponent, _super);
    function TimetableComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.TIMETABLE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    TimetableComponent.prototype.validate = function () {
        return this.validateForm(this.form.data);
    };
    TimetableComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.semester);
        flag = flag && validator.isNotNullObject(form.examDate);
        console.log(form.examDate);
        flag = flag && validator.isNotNullObject(form.examTime);
        flag = flag && validator.isNotNullObject(form.courseId);
        flag = flag && validator.isNotNullObject(form.subjectId);
        flag = flag && validator.isNotNullObject(form.description);
        return flag;
    };
    TimetableComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.courseId = data.courseId;
        form.subjectId = data.subjectId;
        form.semester = data.semester;
        form.examDate = data.examDate;
        form.examTime = data.examTime;
        form.description = data.description;
        console.log('Populated Form', form);
    };
    TimetableComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    TimetableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-timetable',
            template: __webpack_require__(/*! ./timetable.component.html */ "./src/app/timetable/timetable.component.html"),
            styles: [__webpack_require__(/*! ./timetable.component.css */ "./src/app/timetable/timetable.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], TimetableComponent);
    return TimetableComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/user/changepassword.component.html":
/*!****************************************************!*\
  !*** ./src/app/user/changepassword.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<style>\n.grad{\n  background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\n  background-repeat: no repeat;\n  background-size: 100%;\n  padding-bottom: 10px;\n  }\n  </style>\n<div class=\"row \" style=\"padding-top: 10%; padding-bottom: 5%;\n background: url(assets/files/wall.jpg);\n  background-attachment: fixed;\n  background-size: cover; width:auto;\n    height: auto;\">\n  <div class=\"col-sm-4\"></div>\n  <div class=\"col-sm-4\">\n    <div class=\"card\">\n      <div class=\"card-body shadow-lg grad\">\n        <form>\n          <h2  class=\"text-primary font-weight-bold\">{{'Change Password' | translate }}</h2>\n    \n\n          <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Old Password' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-key grey-text\"></i> </div>\n                </div>\n                <input type=\"password\" name=\"oldPassword\" [(ngModel)]=\"form.data.oldPassword\" class=\"form-control\"\n                  placeholder=\"{{'Enter Old Password' | translate}}\">\n              </div>\n            </div>\n          </div>\n        <span class=\"alertRedColor\">{{form.inputerror.name}}</span>\n        \n        <div style=\"padding-top:3%\">\n            <span><b>{{'New Password' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-unlock-alt grey-text \"></i> </div>\n                </div>\n                <input type=\"password\" name=\"newPassword\" [(ngModel)]=\"form.data.newPassword\" class=\"form-control\"\n                placeholder=\"{{'Enter New Password' | translate}}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\">{{form.inputerror.description}}</span>\n          </div>\n          <div style=\"padding-top:3%\">\n            <span><b>Confirm Password</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-unlock grey-text \"></i> </div>\n                </div>\n                <input type=\"password\" name=\"confirmPassword\" [(ngModel)]=\"form.data.confirmPassword\" class=\"form-control\"\n                placeholder=\"{{'Confirm Password' | translate}}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\">{{form.inputerror.confirmPassword}}</span>\n          </div>\n          <div class=\"row pt-3 pl-3 pb-3\">\n            <div class=\"pt-2\">\n              <button   (click)=\"changePassword()\" class=\"btn btn-success mr-2\">\n               {{'Update' | translate}} </button>\n            </div>\n            <input type=\"hidden\" name=\"loginId\" [(ngModel)]=\"form.data.confirmPassword\">\n            \n          </div>\n        </form>\n      </div>\n\n    </div>\n\n  </div>\n</div><app-footer></app-footer>"

/***/ }),

/***/ "./src/app/user/changepassword.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user/changepassword.component.ts ***!
  \**************************************************/
/*! exports provided: ChangepasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepasswordComponent", function() { return ChangepasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");






var ChangepasswordComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ChangepasswordComponent, _super);
    function ChangepasswordComponent(locator, route, httpService) {
        var _this = _super.call(this, locator.endpoints.USER, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpService = httpService;
        _this.form = {
            error: false,
            message: null,
            preload: [],
            data: { id: null, loginId: null },
            inputerror: {},
            searchParams: {},
            searchMessage: null,
            list: [],
            pageNo: 0
        };
        return _this;
    }
    ChangepasswordComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.oldPassword);
        flag = flag && validator.isNotNullObject(form.newPassword);
        flag = flag && validator.isNotNullObject(form.confirmPassword);
        return flag;
    };
    ChangepasswordComponent.prototype.changePassword = function () {
        var _self = this;
        this.form.data.loginId = localStorage.getItem("loginId");
        this.httpService.post("http://localhost:8084/User/changepassword", this.form.data, function (res) {
            if (res.success) {
                _self.form.list = res.result.data;
                _self.form.message = res.result.message;
            }
        });
    };
    ChangepasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-changepassword',
            template: __webpack_require__(/*! ./changepassword.component.html */ "./src/app/user/changepassword.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _http_service_service__WEBPACK_IMPORTED_MODULE_5__["HttpServiceService"]])
    ], ChangepasswordComponent);
    return ChangepasswordComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseCtl"]));



/***/ }),

/***/ "./src/app/user/myprofile.component.html":
/*!***********************************************!*\
  !*** ./src/app/user/myprofile.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"row \" style=\"padding-top: 3%; padding-bottom:3%; \nbackground: url(assets/files/edc.jpg) no-repeat center center;\nbackground-attachment: fixed;\nbackground-size: cover;width:auto;\n  height: auto;\">\n\n  <div class=\"col-sm-4\"></div>\n  <div class=\"col-sm-4\">\n    <div class=\"card\">\n      <div class=\"card-body shadow-lg\">\n        <form name=\"myProfile\">\n          <h2 class=\"text-primary font-weight-bold\">{{'My Profile'  | translate }}</h2>\n         \n\n          <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n\n          \n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'First Name'  | translate }}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"fn\" [(ngModel)]=\"form.data.firstName\" class=\"form-control\"\n                  placeholder=\"{{'Enter First Name'  | translate }}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.firstName}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Last Name'  | translate }}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"ln\" [(ngModel)]=\"form.data.lastName\" class=\"form-control\"\n                  placeholder=\"{{'Enter Last Name'  | translate }}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.lastName}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'login Id'  | translate }}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"loginId\" [(ngModel)]=\"form.data.loginId\" class=\"form-control\"\n                  placeholder=\"{{'Enter Login Id'  | translate }}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.state}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Password'  | translate }}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\n                </div>\n                <input type=\"password\" name=\"pwd\" [(ngModel)]=\"form.data.password\" class=\"form-control\"\n                  placeholder=\"{{'Enter Password'  | translate }}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.password}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Mobile'  | translate }}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"phone\" [(ngModel)]=\"form.data.phone\" class=\"form-control\"\n                  placeholder=\"{{'Enter Mobile Number' | translate}}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.phone}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Alternate Mobile'  | translate }}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"alternateMobile\" [(ngModel)]=\"form.data.alternateMobile\" class=\"form-control\"\n                  placeholder=\"{{'Enter Alternate Number' | translate}}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.phone}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'DOB'  | translate }}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\n                </div>\n                <input type=\"date\" name=\"dob\" [value]=\"form.data.dob | date:'yyyy-MM-dd'\"\n                (input)=\"form.data.dob=parseDate($event.target.value)\"\n                class=\"form-control form-control-sm\" required />\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.dob}} </span>\n          </div>\n          \n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Gender'  | translate }}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\n                </div>\n                <select class=\"form-control\" name=\"gender\" id=\"gender\" [(ngModel)]=\"form.data.gender\"\n                  style=\"cursor: pointer;\">\n                  <option [ngValue]=\"\" value=\"undefined\">{{'Please select'  | translate }}</option>\n                  <option value=\"Male\">{{'Male'  | translate }} </option>\n                  <option value=\"Female\">{{'Female'  | translate }} </option>\n                </select>\n              </div>\n            </div>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Image'  | translate }}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\n                </div>\n                <input type=\"file\" id=\"customFile\" name=\"imageId\"\n                  (change)=\"onFileSelect($event.target.files)\" accept=\"image/*\">\n\n                <span class=\"alertRedColor\"> {{form.inputerror.image}} </span>\n              </div>\n            </div>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Status' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\n                </div>\n                <select class=\"form-control\" id=\"status\" name=\"status\" [(ngModel)]=\"form.data.status\" readonly>\n\n                  <option value=\"Active\">{{'Active'  | translate }} </option>\n                  <option value=\"Inactive\">{{'Inactive'  | translate }} </option>\n                </select>\n              </div>\n            </div>\n          </div>\n          <div class=\"row pt-3 pl-3 pb-3\">\n            \n\n            <div class=\"pt-2\">\n              <button (click)=\"onUpload()\" class=\"btn btn-success mr-2\">\n                {{'Update' | translate }}</button>\n            </div>\n            \n          </div>\n\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/user/myprofile.component.ts":
/*!*********************************************!*\
  !*** ./src/app/user/myprofile.component.ts ***!
  \*********************************************/
/*! exports provided: MyprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyprofileComponent", function() { return MyprofileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var MyprofileComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MyprofileComponent, _super);
    function MyprofileComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.USER, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        return _this;
    }
    MyprofileComponent.prototype.ngOnInit = function () {
    };
    MyprofileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-myprofile',
            template: __webpack_require__(/*! ./myprofile.component.html */ "./src/app/user/myprofile.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], MyprofileComponent);
    return MyprofileComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/user/user-list.component.html":
/*!***********************************************!*\
  !*** ./src/app/user/user-list.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<style>\n  #nnn {\n    background: none;\n    border: none;\n  }\n</style>\n\n<div class=\"content-wrapper\" style=\"\n  background: url(assets/files/world-1302934__480.jpg) no-repeat center center;\n  background-attachment: fixed;\n  background-size: cover;\n  width:auto;\n  height: 105vh;\">\n  <div class=\"container-fluid\">\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\" style=\"height: 50px;\">\n        <div class=\"text-center\">\n          <h1 class=\"text-primary font-weight-bold\">{{'User List' | translate}}</h1>\n        </div>\n      </div>\n      <!-- <button class=\"filebtn third\">Button 3</button> -->\n      <div class=\"row p-1\">\n        <div class=\"col-sm-1\"></div>\n        <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.firstName\"\n            placeholder=\"{{'Search First Name' | translate}}\">\n        </div>\n        <!-- <div class=\"col-sm-2\">\n          <input type=\"date\" class=\"form-control\" [(ngModel)]=\"form.searchParams.dob\"\n            placeholder=\"{{'Search dob' | translate}}\">\n        </div> -->\n        <!-- <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.loginId\"\n            placeholder=\"{{'Search Email' | translate}}\">\n        </div> -->\n        <div class=\"col-sm-2\">\n          <select class=\"form-control\" name=\"roleId\" [(ngModel)]=\"form.searchParams.roleId\" aria-label=\"ngSelected\">\n            <option [ngValue]=\"\" value=\"undefined\">{{' Select Role' | translate}}</option>\n            <option *ngFor=\"let obj of form.preload.roleList\" [value]=\"obj.key\">{{obj.value}}</option>\n          </select>\n        </div>\n        <div class=\"col-sm-2\">\n          <!-- <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.status\"\n            placeholder=\"{{'Search Status' | translate}}\"> -->\n        </div>\n        <div class=\"col-sm-1 ml-3\">\n          <button (click)=\"submit()\" class=\"btn btn-primary\">{{'Search' | translate}}</button>\n        </div>\n        &nbsp;&nbsp;&nbsp;\n        <div class=\"col-lg-2 ml-4\">\n          <button (click)=\"forward('/user')\" type=\"button\" class=\"btn btn-success\">{{'Add User' | translate}}</button>\n        </div>\n        <div class=\"col-sm-1\">\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">{{'Delete'| translate}}</button>\n        </div>\n      </div>\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n      <div class=\"p-1\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-bordered table-hover font-weight-bold text-black\" style=\"font-size: large;\">\n            <thead class=\"thead-dark text-uppercase\">\n              <tr align=\"center\">\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\" value=\"h1\"\n                    (change)=\"checkUncheckAll($event)\" /></th>\n                <th>{{'S.No' | translate}}</th>\n                <th>{{'Image' | translate}}</th>\n                <th>{{'First Name' | translate}}</th>\n                <th>{{'Last Name' | translate}}</th>\n                <th>{{'Login' | translate}}</th>\n                <th>{{'Status' | translate}}</th>\n                <th>{{'Role' | translate}}</th>\n                <th>{{'Phone' | translate}}</th>\n                <th>{{'DOB' | translate}}</th>\n                <th>{{'Edit' | translate}}</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\n                <td><input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" [disabled]=\"m.roleName=='Admin'\"\n                    name=\"list_name\" id=\"{{m.id}}\" value=\"{{isMasterSel}}\" /></td>\n                <td>{{(form.pageNo*5)+i+ 1}}</td>\n                <td>\n                  <div *ngIf=\"m.imageId\">\n                    <img src=\"http://localhost:8084/User/profilePic/{{m.id}}\" height=\"55px\" width=\"80px\">\n                  </div>\n                  <div *ngIf=\"!m.imageId\">\n                    <img src=\"../../assets/files/default.jpg\" height=\"55px\" width=\"80px\">\n                  </div>\n                </td>\n                <td>{{ m.firstName }}</td>\n                <td>{{ m.lastName }}</td>\n                <td>{{ m.loginId }}</td>\n                <td>{{ m.status }}</td>\n                <td>{{ m.roleName }}</td>\n                <td>{{ m.phone }}</td>\n                <td>{{ m.dob | date : 'dd-MM-yyyy'}}</td>\n                <td>\n                  <button class=\"fa fa-edit text-primary\" id=\"nnn\" [disabled]=\"m.roleName=='Admin'\"\n                    (click)=\"forward('/user/' +  m.id)\" style=\"cursor: pointer;\"></button>\n                  <!-- <a (click)=\"forward( '/user/' +  m.id)\" style=\"cursor: pointer;\">\n                    <i class=\"fa fa-edit text-primary\"></i>\n                  </a> -->\n                  <!-- <a (click)=\"delete(m.id)\" style=\"cursor: pointer;\">\n                    <i class=\"fa fa-trash text-danger\"></i>\n                  </a> -->\n                </td>\n              </tr>\n            </tbody>\n          </table>\n          <table style=\"width: 100%;\">\n            <tr>\n              <td style=\"width: 50%;\">\n                <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\">\n                  {{'Previous' | translate}}\n                </button>\n              </td>\n              <td *ngIf=\"form.list.length!=0\" style=\"width: 50%;\"></td>\n              <td *ngIf=\"form.list.length==0\" style=\"width: 50%;\">\n                <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/userlist']\" (click)=\"exit()\">{{'Back' | translate}}</a>\n              </td>\n              <td>\n                <button (click)=\"next()\" [disabled]=\"nextList==0\" type=\"button\" class=\"btn btn-info\">\n                  {{'Next' | translate}}\n                </button>\n              </td>\n            </tr>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/user/user-list.component.ts":
/*!*********************************************!*\
  !*** ./src/app/user/user-list.component.ts ***!
  \*********************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var UserListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserListComponent, _super);
    function UserListComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.USER, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.myKey = "";
        _this.form = {
            error: false,
            message: null,
            preload: [],
            data: { id: null },
            inputerror: {},
            searchParams: {},
            searchMessage: null,
            list: [],
            pageNo: 0
        };
        return _this;
    }
    UserListComponent.prototype.createImageFromBlob = function (image) {
        var _this = this;
        var reader = new FileReader();
        reader.addEventListener("load", function () {
            _this.imageToShow = reader.result;
        }, false);
        if (image) {
            reader.readAsDataURL(image);
        }
    };
    UserListComponent.prototype.getImage = function (id) {
        var _this = this;
        //Make a call to Sprinf Boot to get the Image Bytes.
        this.form.data.id = id;
        console.log(this.form.data.id);
        this.httpClient.get('http://localhost:8084/User/profilePic/' + this.form.data.id, { responseType: 'blob' }).subscribe(function (data) {
            _this.createImageFromBlob(data);
            _this.myKey = _this.form.data.id;
        }, function (error) {
            console.log(error);
        });
    };
    UserListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-list',
            template: __webpack_require__(/*! ./user-list.component.html */ "./src/app/user/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], UserListComponent);
    return UserListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alertRedColor {\n    color: red;\n}\n\n\n.required-field::after { \t\t\n  content: \"*\";\t\t\n  color: red;\t\t\n   }\n\n\n.successColor{\n    color: green;\n   }\n\n\n.btn-space {\n    margin-right: 5px;\n}\n\n\n.file-btn{\n    border: black;\n}\n\n\n.third {\n    border-color: #b300b3;\n    color: #695d29;\n    box-shadow: 0 0 40px 40px #3498db inset, 0 0 0 0 #3498db;\n    transition: all 150ms ease-in-out;\n  }\n\n\n.third:hover {\n    box-shadow: 0 0 10px 0 #3498db inset, 0 0 10px 4px #3498db;\n  }\n\n\n.filebtn {\n    box-sizing: border-box;\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n    background-color: transparent;\n    border: 2px solid #e74c3c;\n    border-radius: 0.6em;\n    color: #e74c3c;\n    cursor: pointer;\n    display: flex;\n    align-self: center;\n    font-size: 1rem;\n    font-weight: 400;\n    line-height: 1;\n    margin: 20px;\n    padding: 1.2em 2.8em;\n    text-decoration: none;\n    text-align: center;\n    text-transform: uppercase;\n    font-family: 'Montserrat', sans-serif;\n    font-weight: 700;\n  }\n\n\n.filebtn:hover, .filebtn:focus {\n    color: #ffffff;\n    outline: 0;\n  }\n  \n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2Q7OztBQUdBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7R0FDVDs7O0FBRUE7SUFDQyxZQUFZO0dBQ2I7OztBQUVBO0lBQ0MsaUJBQWlCO0FBQ3JCOzs7QUFDQTtJQUNJLGFBQWE7QUFDakI7OztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCx3REFBd0Q7SUFFeEQsaUNBQWlDO0VBQ25DOzs7QUFDQTtJQUNFLDBEQUEwRDtFQUM1RDs7O0FBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsd0JBQXdCO09BQ3JCLHFCQUFxQjtZQUNoQixnQkFBZ0I7SUFDeEIsNkJBQTZCO0lBQzdCLHlCQUF5QjtJQUN6QixvQkFBb0I7SUFDcEIsY0FBYztJQUNkLGVBQWU7SUFJZixhQUFhO0lBR0wsa0JBQWtCO0lBQzFCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIscUNBQXFDO0lBQ3JDLGdCQUFnQjtFQUNsQjs7O0FBQ0E7SUFDRSxjQUFjO0lBQ2QsVUFBVTtFQUNaIiwiZmlsZSI6InNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxlcnRSZWRDb2xvciB7XG4gICAgY29sb3I6IHJlZDtcbn1cblxuXG4ucmVxdWlyZWQtZmllbGQ6OmFmdGVyIHsgXHRcdFxuICBjb250ZW50OiBcIipcIjtcdFx0XG4gIGNvbG9yOiByZWQ7XHRcdFxuICAgfVx0XG5cbiAgIC5zdWNjZXNzQ29sb3J7XG4gICAgY29sb3I6IGdyZWVuO1xuICAgfVxuXG4gICAuYnRuLXNwYWNlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5maWxlLWJ0bntcbiAgICBib3JkZXI6IGJsYWNrO1xufVxuXG4udGhpcmQge1xuICAgIGJvcmRlci1jb2xvcjogI2IzMDBiMztcbiAgICBjb2xvcjogIzY5NWQyOTtcbiAgICBib3gtc2hhZG93OiAwIDAgNDBweCA0MHB4ICMzNDk4ZGIgaW5zZXQsIDAgMCAwIDAgIzM0OThkYjtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZS1pbi1vdXQ7XG4gIH1cbiAgLnRoaXJkOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAwICMzNDk4ZGIgaW5zZXQsIDAgMCAxMHB4IDRweCAjMzQ5OGRiO1xuICB9XG4gIC5maWxlYnRuIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlNzRjM2M7XG4gICAgYm9yZGVyLXJhZGl1czogMC42ZW07XG4gICAgY29sb3I6ICNlNzRjM2M7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC13ZWJraXQtYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAtbXMtZmxleC1pdGVtLWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIHBhZGRpbmc6IDEuMmVtIDIuOGVtO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbiAgLmZpbGVidG46aG92ZXIsIC5maWxlYnRuOmZvY3VzIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBvdXRsaW5lOiAwO1xuICB9XG4gIFxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<style>\n  .grad {\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\n    background-repeat: no repeat;\n    background-size: 100%;\n    padding-bottom: 25px;\n  }\n</style>\n\n<style type=\"text/css\">\n  .log1 {\n    padding-top: 13%;\n  }\n\n  .input-group-addon {\n    box-shadow: 9px 8px 7px #001a33;\n\n  }\n</style>\n\n<div class=\"row \" style=\"padding-top: 2%; padding-bottom:2%;\n\nbackground: url(assets/files/wall.jpg) no-repeat center center;\nbackground-attachment: fixed;\nbackground-size: cover;width:100%;\n  height: auto;\">\n\n  <div class=\"col-sm-4\"></div>\n  <div class=\"col-sm-4\">\n    <div class=\"card\">\n      <div class=\"card-body input-group-addon grad \">\n        <form name=\"userForm\">\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Add User' |\n            translate }}</h2>\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Update User' |\n            translate }}</h2>\n\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n\n            \n          </div>\n\n          <div>\n            <span class=\"pt-2\"><b>{{'Role Name' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\n                </div>\n\n\n                <select class=\"form-control\" name=\"roleId\" [(ngModel)]=\"form.data.roleId\" aria-label=\"ngSelected\">\n                  <option [ngValue]=\"\" value=\"undefined\">{{' Select Role' | translate }}</option>\n                  <option *ngFor=\"let obj of form.preload.roleList\" [value]=\"obj.key\">{{obj.value}}</option>\n                </select>\n              </div>\n            </div>\n            <span *ngIf=\"form.inputerror.roleId != null\" class=\"alertRedColor\" style=\" color: red;\"> {{'role'|\n              translate}} </span>\n            <!-- <span class=\"alertRedColor\"> {{form.inputerror.roleId}} </span> -->\n          </div>\n\n          <div>\n            <span class=\"pt-2\"><b>{{'First Name' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-user-circle grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"fn\" [(ngModel)]=\"form.data.firstName\" class=\"form-control\"\n                  placeholder=\"{{'Enter First Name'  | translate }}\">\n              </div>\n            </div><span *ngIf=\"form.inputerror.firstName != null\" class=\"alertRedColor\" style=\" color: red;\">\n              {{'firstname'| translate}} </span>\n            <!-- <span class=\"alertRedColor\"> {{form.inputerror.firstName}} </span> -->\n          </div>\n\n          <div>\n            <span class=\"pt-2\"><b>{{'Last Name' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"ln\" [(ngModel)]=\"form.data.lastName\" class=\"form-control\"\n                  placeholder=\"{{'Enter Last Name'  | translate }}\">\n              </div>\n            </div><span *ngIf=\"form.inputerror.lastName != null\" class=\"alertRedColor\" style=\" color: red;\">\n              {{'lastname'| translate}} </span>\n            <!-- <span class=\"alertRedColor\"> {{form.inputerror.lastName}} </span> -->\n          </div>\n\n          <div>\n            <span class=\"pt-2\"><b>{{'login Id' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"loginId\" [(ngModel)]=\"form.data.loginId\" class=\"form-control\"\n                  placeholder=\"{{'Enter Login Id'  | translate }}\">\n              </div>\n            </div><span *ngIf=\"form.inputerror.loginId != null\" class=\"alertRedColor\" style=\" color: red;\"> {{'email'|\n              translate}} </span>\n            <!-- <span class=\"alertRedColor\"> {{form.inputerror.loginId}} </span> -->\n          </div>\n\n          <div>\n            <span class=\"pt-2\"><b>{{'Password' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-key grey-text\"></i> </div>\n                </div>\n                <input type=\"password\" name=\"pwd\" [(ngModel)]=\"form.data.password\" class=\"form-control\"\n                  placeholder=\"{{'Enter Password'  | translate }}\">\n              </div>\n            </div><span *ngIf=\"form.inputerror.password != null\" class=\"alertRedColor\" style=\" color: red;\">\n              {{'password'| translate}} </span>\n            <!-- <span class=\"alertRedColor\"> {{form.inputerror.password}} </span> -->\n          </div>\n\n          <div>\n            <span class=\"pt-2\"><b>{{'Mobile' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-phone grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"phone\" maxlength=\"10\" [(ngModel)]=\"form.data.phone\" class=\"form-control\"\n                  placeholder=\"{{'Enter Mobile Number' | translate}}\">\n              </div>\n            </div><span *ngIf=\"form.inputerror.phone != null\" class=\"alertRedColor\" style=\" color: red;\"> {{'phone'|\n              translate}} </span>\n            <!-- <span class=\"alertRedColor\"> {{form.inputerror.phone}} </span> -->\n          </div>\n\n          <div>\n            <span class=\"pt-2\"><b>{{'Alternate Mobile' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-mobile grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"alternateMobile\" maxlength=\"10\" [(ngModel)]=\"form.data.alternateMobile\" class=\"form-control\"\n                  placeholder=\"{{'Enter Alternate Number' | translate}}\">\n              </div>\n            </div><span *ngIf=\"form.inputerror.alternateMobile != null\" class=\"alertRedColor\" style=\" color: red;\">\n              {{'mobile'| translate}} </span></div>\n            <!-- <span class=\"alertRedColor\"> {{form.inputerror.alternateMobile}} </span> -->\n\n\n            <div>\n         \n             <span class=\"pt-2\"><b>{{'DOB' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-table grey-text\"></i> </div>\n                </div>\n                <input type=\"date\" name=\"dob\" [value]=\"form.data.dob | date:'yyyy-MM-dd'\"\n                  (input)=\"form.data.dob=parseDate($event.target.value)\" class=\"form-control form-control-sm\"\n                  required />\n              </div>\n            </div>\n<span *ngIf=\"form.inputerror.dob != null\" class=\"alertRedColor\" style=\" color: red;\"> {{'dob'|\n              translate}} </span>\n            <!-- <span class=\"alertRedColor\"> {{form.inputerror.dob}} </span> -->\n          </div>\n          <div>\n            <span class=\"pt-2\"><b>{{'Gender' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-venus grey-text\"></i> </div>\n                </div>\n                <select class=\"form-control\" name=\"gender\" id=\"gender\" [(ngModel)]=\"form.data.gender\"\n                  style=\"cursor: pointer;\">\n                  <option [ngValue]=\"\" value=\"undefined\">{{'Please select' | translate }}</option>\n                  <option value=\"Male\">{{'Male' | translate }} </option>\n                  <option value=\"Female\">{{'Female' | translate }} </option>\n                </select>\n              </div>\n            </div><span *ngIf=\"form.inputerror.gender != null\" class=\"alertRedColor\" style=\" color: red;\"> {{'gender'|\n              translate}} </span>\n            <!-- <span class=\"alertRedColor\"> {{form.inputerror.gender}} </span> -->\n          </div>\n\n          <div>\n            <span class=\"pt-2\"><b>{{'Image' | translate }}</b>\n              <!-- <option [ngValue]=\"\" value=\"undefined\"></option> -->\n              <span *ngIf=\"!form.data.imageId\" class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div *ngIf=\"form.data.imageId\">\n                <img src=\"http://localhost:8084/User/profilePic/{{form.data.id}}\" height=\"55px\" width=\"80px\">\n                \n              </div>\n              <div *ngIf=\"!form.data.imageId\">\n                <img src=\"../../assets/files/default.jpg\" height=\"55px\" width=\"80px\">\n              </div>\n            </div>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-picture-o grey-text\"></i> </div>\n                </div>\n                <input type=\"file\" id=\"customFile\" name=\"imageId\" (change)=\"onFileSelect($event.target.files)\"\n                  accept=\"image/*\">\n\n                <span class=\"alertRedColor\"> {{form.inputerror.image}} </span>\n              </div>\n            </div>\n          </div>\n\n          <div>\n            <span class=\"pt-2\"><b>{{'Status' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n\n              \n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-bell grey-text\"></i> </div>\n                </div>\n                <select class=\"form-control\" id=\"status\" name=\"status\" [(ngModel)]=\"form.data.status\">\n                  <option [ngValue]=\"\" value=\"undefined\">{{' Select Status' | translate }}</option>\n                  <option value=\"Active\">{{'Active' | translate }} </option>\n                  <option value=\"Inactive\">{{'Inactive' | translate }} </option>\n                </select>\n              </div>\n            </div><span *ngIf=\"form.inputerror.status != null\" class=\"alertRedColor\" style=\" color: red;\"> {{'status'|\n              translate}} </span>\n            <!-- <span class=\"alertRedColor\"> {{form.inputerror.status}} </span> -->\n          </div>\n          <div class=\"row pt-2 pl-2 pb-3\">\n\n            <div class=\"col-md-3\"></div>\n\n\n            <div class=\"pt-2\">\n              <button *ngIf=\"!form.data.id>0\" (click)=\"onUpload()\" class=\"btn btn-success mr-2\">\n                {{'Save' | translate }}</button>\n            </div>\n\n            <div class=\"col-md-1\"></div>\n\n            <div class=\"pt-2\">\n              <button *ngIf=\"form.data.id>0\" (click)=\"onUpload()\" class=\"btn btn-success mr-2\">\n                {{'Update' | translate }}</button>\n            </div>\n            <div class=\"pt-2\">\n              <a class=\"btn btn-warning mr-1\" type=\"button\" [routerLink]=\"['/userlist']\"\n                  style=\"text-decoration: none; color: white;\">{{'List' | translate }}</a>\n            </div>\n          </div>\n\n\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var UserComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserComponent, _super);
    function UserComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.USER, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.getKey = false;
        _this.selected = null;
        _this.fileToUpload = null;
        _this.userForm = null;
        return _this;
    }
    UserComponent.prototype.submit = function () {
        var _self = this;
        console.log('in submit');
        console.log(this.form);
        console.log(this.form.data);
        this.serviceLocator.httpService.post(this.api.save, this.form.data, function (res) {
            _self.form.message = '';
            //_self.form.data.id=0;
            console.log("form data going to be submit", res.result.data);
            _self.form.data.id = res.result.data;
            if (_self.fileToUpload) {
                console.log('Ram');
                _self.myFile();
            }
            if (res.success) {
                _self.form.message = "Data is saved";
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("----------Ram----------.");
            }
            else {
                _self.form.error = true;
                if (res.result.inputerror) {
                    _self.form.inputerror = res.result.inputerror;
                }
                _self.form.message = res.result.message;
                _self.form.data.id = res.result.data.id;
            }
            console.log('FORM', _self.form);
        });
    };
    UserComponent.prototype.submit1 = function () {
        var _self = this;
        console.log(this.form + "submit running start");
        console.log(this.form.data + "form data going to be submit");
        this.serviceLocator.httpService.post(this.api.search, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.inputerror = {};
            _self.form.data.id = res.result.data;
            _self.myFile();
            if (res.success) {
                _self.form.message = "Data is saved";
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("--------------------.");
            }
            else {
                _self.form.error = true;
                _self.form.inputerror = res.result.inputerror;
                _self.form.message = res.result.message;
            }
            _self.form.data.id = res.result.data;
            console.log('FORM', _self.form);
        });
    };
    UserComponent.prototype.onFileSelect = function (files) {
        this.fileToUpload = files.item(0);
        console.log(this.fileToUpload);
    };
    UserComponent.prototype.onUpload = function (userform) {
        this.submit();
        console.log(this.form.data.id + '---- after submit');
    };
    UserComponent.prototype.myFile = function () {
        var _this = this;
        console.log(this.form.data.id + 'after super.submit-----');
        this.onSubmitProfile(this.fileToUpload, this.userForm).subscribe(function (data) {
            console.log(_this.fileToUpload);
        }, function (error) {
            console.log(error);
        });
    };
    UserComponent.prototype.onSubmitProfile = function (fileToUpload, userform) {
        var formData = new FormData();
        var phone = null;
        formData.append('file', fileToUpload);
        console.log(this.form.data.id + 'this id number ======');
        return this.httpClient.post("http://localhost:8084/User/profilePic/" + this.form.data.id, formData);
    };
    UserComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.roleId);
        console.log(form.roleId);
        flag = flag && validator.isNotNullObject(form.firstName);
        console.log(form.firstName);
        flag = flag && validator.isNotNullObject(form.lastName);
        console.log(form.lastName);
        flag = flag && validator.isNotNullObject(form.loginId);
        console.log(form.loginId);
        flag = flag && validator.isNotNullObject(form.password);
        console.log(form.password);
        flag = flag && validator.isNotNullObject(form.phone);
        console.log(form.phone);
        flag = flag && validator.isNotNullObject(form.alternateMobile);
        console.log(form.alternateMobile);
        flag = flag && validator.isNotNullObject(form.dob);
        console.log(form.dob);
        flag = flag && validator.isNotNullObject(form.gender);
        console.log(form.gender + 'gender--');
        flag = flag && validator.isNotNullObject(form.status);
        console.log(form.status + 'status---');
        return flag;
    };
    UserComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        console.log(form.id + 'populate form in usercomponent');
        form.firstName = data.firstName;
        form.lastName = data.lastName;
        form.loginId = data.loginId;
        form.password = data.password;
        form.gender = data.gender;
        console.log(form.gender + 'gender--');
        form.alternateMobile = data.alternateMobile;
        form.phone = data.phone;
        console.log(form.phone);
        form.dob = data.dob;
        form.roleId = data.roleId;
        form.status = data.status;
        form.imageId = data.imageId;
        console.log(form.status + 'status---');
    };
    UserComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    UserComponent.prototype.test = function () {
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], UserComponent);
    return UserComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/utility/data-validator.ts":
/*!*******************************************!*\
  !*** ./src/app/utility/data-validator.ts ***!
  \*******************************************/
/*! exports provided: DataValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataValidator", function() { return DataValidator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DataValidator = /** @class */ (function () {
    function DataValidator() {
    }
    DataValidator.prototype.trim = function (valueToWhite) {
        return valueToWhite.replace(/\s/g, "");
    };
    /**
     * Check is string is not empty
     * @param val
     */
    DataValidator.prototype.isNotNull = function (val) {
        var flag = true;
        try {
            if (val) {
                val = this.trim(val);
                flag = val.length > 0;
            }
            else {
                flag = false;
            }
        }
        catch (error) {
            flag = false;
        }
        return flag;
    };
    /**
   * Is string is empty
   * @param val
   */
    DataValidator.prototype.isNull = function (val) {
        return !this.isNotNullObject(val);
    };
    /**
     * Is not null object
     */
    DataValidator.prototype.isNotNullObject = function (val) {
        var flag = true;
        try {
            if (val) {
                flag = true;
            }
            else {
                flag = false;
            }
        }
        catch (error) {
            flag = false;
        }
        return flag;
    };
    /**
     * Is null object
     */
    DataValidator.prototype.isNullObject = function (val) {
        return !this.isNotNullObject(val);
    };
    DataValidator.prototype.isTrue = function (val) {
        var flag = true;
        if (val) {
            flag = true;
        }
        else {
            flag = false;
        }
        return flag;
    };
    /**
     *
     * @param val Convets string into number
     */
    DataValidator.prototype.toInt = function (val) {
        var returnVal = 0;
        if (val) {
            try {
                returnVal = parseInt(val);
                if (isNaN(returnVal)) {
                    returnVal = 0;
                }
            }
            catch (error) {
                returnVal = 0;
            }
        }
        return returnVal;
    };
    DataValidator.prototype.toFloat = function (val) {
        var returnVal = 0;
        if (val) {
            try {
                returnVal = parseFloat(val);
                if (isNaN(returnVal)) {
                    returnVal = 0;
                }
            }
            catch (error) {
                returnVal = 0;
            }
        }
        return returnVal;
    };
    /**
     * Create clone pobject
     *
     * @param obj
     */
    DataValidator.prototype.getClone = function (obj) {
        return JSON.parse(JSON.stringify(obj));
    };
    DataValidator = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DataValidator);
    return DataValidator;
}());



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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Rays software\Workspace\p10\Project10-main\ORSProject10-UI Fctl\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map