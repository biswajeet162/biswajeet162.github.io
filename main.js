(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Bishu\Desktop\Demo\Front Perfect\src\main.ts */"zUnb");


/***/ }),

/***/ "3Jzv":
/*!****************************************************************************!*\
  !*** ./src/app/loan/loan-Item-detail/loan-update/loan-update.component.ts ***!
  \****************************************************************************/
/*! exports provided: LoanUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanUpdateComponent", function() { return LoanUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _loan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../loan */ "Za5T");
/* harmony import */ var src_app_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/global.service */ "dVwY");
/* harmony import */ var _loan_detail_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loan-detail.service */ "zuU8");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");









class LoanUpdateComponent {
    constructor(globalService, loanDetailService, router, activeRoute) {
        this.globalService = globalService;
        this.loanDetailService = loanDetailService;
        this.router = router;
        this.activeRoute = activeRoute;
    }
    ngOnInit() {
        if (localStorage.getItem('token') === null) {
            this.router.navigate(['../']);
        }
        this.needToUpdateLoanItem = this.loanDetailService.getModify();
        if (this.needToUpdateLoanItem === undefined) {
            this.onBack();
        }
        //******************************************************** */
        try {
            throw new Error('Something bad happened');
        }
        catch (e) {
            console.log(e);
        }
        this.updatedForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'loanNumber': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            'memberName': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'loanType': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'loanTerm': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'amount': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'originDate': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'endDate': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        this.updatedForm.patchValue({
            loanNumber: this.needToUpdateLoanItem.loanNumber,
            memberName: this.needToUpdateLoanItem.memberName,
            loanType: this.needToUpdateLoanItem.loanType,
            loanTerm: this.needToUpdateLoanItem.loanTerm,
            amount: this.needToUpdateLoanItem.amount,
        });
        this.originDate = this.needToUpdateLoanItem.endDate;
        this.endDate = this.needToUpdateLoanItem.endDate;
    }
    onBack() {
        this.router.navigate(['../'], { relativeTo: this.activeRoute });
    }
    onSubmit() {
        // TURN THE HEADER AS GOING TO LOAN-LIST
        this.globalService.headerSearchEvent.next(false);
        //console.log(updatedForm.value.memberName);    ******** CALL GLOBAL SERVICE AND MAKE CALL WITH BACKENED APISSS
        // update the Form In data base
        // Using a model of Loan type.
        let updatedloan = new _loan__WEBPACK_IMPORTED_MODULE_2__["Loan"](this.updatedForm.value.loanNumber, this.updatedForm.value.memberName, this.updatedForm.value.loanType, this.updatedForm.value.loanTerm, this.updatedForm.value.amount, this.updatedForm.value.originDate, this.updatedForm.value.endDate);
        this.globalService.modifyLoanItem(updatedloan).subscribe();
        //console.log("Updated form backend Api calls...........USing Global Service");
        this.router.navigate(['../'], { relativeTo: this.activeRoute });
    }
}
LoanUpdateComponent.ɵfac = function LoanUpdateComponent_Factory(t) { return new (t || LoanUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_loan_detail_service__WEBPACK_IMPORTED_MODULE_4__["LoanDetailService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"])); };
LoanUpdateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoanUpdateComponent, selectors: [["app-loan-update"]], decls: 45, vars: 10, consts: [[1, "container", 2, "background-color", "rgb(212, 191, 122)"], [3, "formGroup", "ngSubmit"], [1, "form-group", "col-sm-12"], ["for", "loannumber"], ["type", "number", "id", "loanNumber", "placeholder", "Enter Loan Number", "formControlName", "loanNumber", "disabled", "", 1, "form-control"], ["for", "name"], ["type", "text", "id", "name", "placeholder", "Enter Name", "formControlName", "memberName", 1, "form-control"], ["for", "loanType"], ["type", "text", "id", "loanType", "placeholder", "Eneter Loan Type- Car, Home, Bussiness.....", "formControlName", "loanType", 1, "form-control"], [1, "form-group", "col-sm-6"], ["for", "loanTerm"], ["name", "term", "id", "term", "formControlName", "loanTerm", 1, "form-control"], ["value", "short"], ["value", "mid"], ["value", "long"], ["for", "amount"], ["type", "number", "id", "amount", "placeholder", "Enter Loan Amount", "formControlName", "amount", 1, "form-control"], ["for", "startDate"], ["type", "date", "id", "startDate", "placeholder", "Choose Start Date", "formControlName", "originDate", 1, "form-control", 3, "ngModel"], ["for", "endDate"], ["type", "date", "id", "endDate", "placeholder", "Choose End Date", "formControlName", "endDate", 1, "form-control", 3, "ngModel"], ["type", "reset", 1, "btn", "btn-primary", "pull-left", 3, "click"], ["type", "submit", 1, "btn", "btn-success", "pull-right", 3, "disabled"]], template: function LoanUpdateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoanUpdateComponent_Template_form_ngSubmit_1_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Loan Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Member Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Loan Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Loan Term");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Short");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Mid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Long");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Loan Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Loan Origin Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Loan End Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoanUpdateComponent_Template_button_click_40_listener() { return ctx.onBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.updatedForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](33, 4, ctx.originDate, "yyyy-MM-dd"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](38, 7, ctx.endDate, "yyyy-MM-dd"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.updatedForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2FuLXVwZGF0ZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoanUpdateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loan-update',
                templateUrl: './loan-update.component.html',
                styleUrls: ['./loan-update.component.css']
            }]
    }], function () { return [{ type: src_app_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"] }, { type: _loan_detail_service__WEBPACK_IMPORTED_MODULE_4__["LoanDetailService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "49ly":
/*!*****************************************************************!*\
  !*** ./src/app/loan/loan-list/loan-item/loan-item.component.ts ***!
  \*****************************************************************/
/*! exports provided: LoanItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanItemComponent", function() { return LoanItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/global.service */ "dVwY");
/* harmony import */ var _loan_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loan-item.service */ "4YwO");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






class LoanItemComponent {
    constructor(globalService, loanItemService, router, activeRoute) {
        this.globalService = globalService;
        this.loanItemService = loanItemService;
        this.router = router;
        this.activeRoute = activeRoute;
    }
    ngOnInit() {
        if (localStorage.getItem('token') === null) {
            this.router.navigate(['../']);
        }
    }
    onSelect() {
        // MAKE HEADER SERCH OFF
        this.globalService.headerSearchEvent.next(true);
        this.loanItemService.showItem(this.loanItem);
        this.router.navigate(['loan-detail'], { relativeTo: this.activeRoute });
    }
}
LoanItemComponent.ɵfac = function LoanItemComponent_Factory(t) { return new (t || LoanItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_loan_item_service__WEBPACK_IMPORTED_MODULE_2__["LoanItemService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
LoanItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoanItemComponent, selectors: [["app-loan-item"]], inputs: { loanItem: "loanItem" }, decls: 14, vars: 7, consts: [[1, "list-group-item", "clearfix", 2, "cursor", "pointer", 3, "click"], [1, "pull-left"], [1, "list-group-item-heading"], [2, "padding-left", "25%"], [2, "padding-left", "60%"], [2, "padding-left", "80%"]], template: function LoanItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoanItemComponent_Template_a_click_0_listener() { return ctx.onSelect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.loanItem.loanNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.loanItem.memberName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.loanItem.amount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 4, ctx.loanItem.endDate, "short"));
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: ["a[_ngcontent-%COMP%]:hover {\n    background-color:rgb(247, 220, 171)\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYW4taXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7RUFDRiIsImZpbGUiOiJsb2FuLWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImE6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDI0NywgMjIwLCAxNzEpXG4gIH0gIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoanItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loan-item',
                templateUrl: './loan-item.component.html',
                styleUrls: ['./loan-item.component.css']
            }]
    }], function () { return [{ type: src_app_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"] }, { type: _loan_item_service__WEBPACK_IMPORTED_MODULE_2__["LoanItemService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, { loanItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "4Lwz":
/*!**************************************!*\
  !*** ./src/app/loan/loan.service.ts ***!
  \**************************************/
/*! exports provided: LoanService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanService", function() { return LoanService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LoanService {
    setLoanItemDetail(loan) {
        this.showLoan = loan;
    }
    getLoanItemDetail() {
        return this.showLoan;
    }
    setUpdateLoan(data) {
        this.updateLoan = data;
    }
    getUpdateLoan() {
        return this.updateLoan;
    }
}
LoanService.ɵfac = function LoanService_Factory(t) { return new (t || LoanService)(); };
LoanService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoanService, factory: LoanService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoanService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "4YwO":
/*!***************************************************************!*\
  !*** ./src/app/loan/loan-list/loan-item/loan-item.service.ts ***!
  \***************************************************************/
/*! exports provided: LoanItemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanItemService", function() { return LoanItemService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class LoanItemService {
    constructor() {
        // It is subscribed in  LOAN Component...
        // then Set in Loan Service and then...
        // get in loan-detail from loan-servive 
        this.showItemDetail = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    showItem(loanItem) {
        this.showItemDetail.next(loanItem);
    }
}
LoanItemService.ɵfac = function LoanItemService_Factory(t) { return new (t || LoanItemService)(); };
LoanItemService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoanItemService, factory: LoanItemService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoanItemService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "5nbR":
/*!***************************************!*\
  !*** ./src/app/auth-guard.service.ts ***!
  \***************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthGuardService {
    constructor(router) {
        this.router = router;
    }
    canActivate(route, state) {
        if (localStorage.getItem('role') === 'admin') {
            return true;
        }
        localStorage.clear();
        this.router.navigate(['login']);
        return false;
    }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "60XU":
/*!*********************************************!*\
  !*** ./src/app/login/model/loginRequest.ts ***!
  \*********************************************/
/*! exports provided: LoginRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRequest", function() { return LoginRequest; });
class LoginRequest {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}


/***/ }),

/***/ "6Qlo":
/*!******************************************!*\
  !*** ./src/app/header/header.service.ts ***!
  \******************************************/
/*! exports provided: HeaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderService", function() { return HeaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class HeaderService {
    constructor() {
        this.searchBy = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    searchByFirstName(value) {
        this.searchBy.next("firstName " + value);
    }
    searchByLastName(value) {
        this.searchBy.next("lastName " + value);
    }
    searchByLoanNumber(value) {
        var str_value = value.toString();
        this.searchBy.next("loanNumber " + str_value);
    }
}
HeaderService.ɵfac = function HeaderService_Factory(t) { return new (t || HeaderService)(); };
HeaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HeaderService, factory: HeaderService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "9PtO":
/*!****************************************************************!*\
  !*** ./src/app/loan/loan-Item-detail/loan-detail.component.ts ***!
  \****************************************************************/
/*! exports provided: LoanDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanDetailComponent", function() { return LoanDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/global.service */ "dVwY");
/* harmony import */ var _loan_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loan.service */ "4Lwz");
/* harmony import */ var _loan_detail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loan-detail.service */ "zuU8");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function LoanDetailComponent_div_51_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoanDetailComponent_div_51_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onDelete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoanDetailComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoanDetailComponent_div_52_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onModify(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Modify");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LoanDetailComponent {
    constructor(globalService, loanService, loanDetailService, router, actveRouter) {
        this.globalService = globalService;
        this.loanService = loanService;
        this.loanDetailService = loanDetailService;
        this.router = router;
        this.actveRouter = actveRouter;
        // Turn off MODIFY and DELETE btn is it is User
        this.isAdminOrNot = false;
        this.showLoanDetail = null;
        this.updateMode = false;
    }
    ngOnInit() {
        // At the Starting Itself.... got to know either it is Admin or user
        // so that hide delete/ modify btn for admin and user accordingly
        this.showLoanDetail = this.loanService.getLoanItemDetail();
        this.isAdminOrNot = this.loanDetailService.isAdmin;
        if (this.showLoanDetail === undefined) {
            this.onBack();
        }
        try {
            throw new Error('Something bad happened');
        }
        catch (e) {
            console.log(e);
        }
    }
    onBack() {
        this.globalService.headerSearchEvent.next(false);
        this.loanDetailService.createBackEvent();
    }
    onDelete() {
        //let deleteConfirm : Boolean;
        if (confirm("Delete!!..... Are you Sure? ")) {
            //deleteConfirm= true;
            this.globalService.headerSearchEvent.next(false);
            this.loanDetailService.deleteUserLoan(this.showLoanDetail.loanNumber.toString());
        }
        else {
            this.onBack();
        }
        //alert("Deleted Successfully");
    }
    onModify() {
        this.currentUpadteLoanItem = this.showLoanDetail;
        this.updateMode = true;
        console.log("Routingggggggggg");
        this.loanDetailService.setModify(this.showLoanDetail);
        this.router.navigate(['../loan-detail-update'], { relativeTo: this.actveRouter });
    }
}
LoanDetailComponent.ɵfac = function LoanDetailComponent_Factory(t) { return new (t || LoanDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_loan_service__WEBPACK_IMPORTED_MODULE_2__["LoanService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_loan_detail_service__WEBPACK_IMPORTED_MODULE_3__["LoanDetailService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
LoanDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoanDetailComponent, selectors: [["app-loan-detail"]], decls: 53, vars: 15, consts: [[1, "container"], [1, "row"], [1, "col-sm-4", "myhead", 2, "background-color", "lavender"], [1, "col-sm-8", "mydata", 2, "background-color", "lavender"], [1, "container", "col-sm-8", 2, "margin-left", "20%"], [1, "collapse", "navbar-collapse"], [1, "col-sm-4"], [1, "btn", "btn-success", 3, "click"], ["class", "col-sm-4 ", 4, "ngIf"], [1, "btn", "btn-danger", 3, "click"], [1, "btn", "btn-primary", 3, "click"]], template: function LoanDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loan Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Member Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Loan Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Loan Term");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Loan Amount ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Loan Date Start");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Loan Date End");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoanDetailComponent_Template_button_click_49_listener() { return ctx.onBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, LoanDetailComponent_div_51_Template, 3, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, LoanDetailComponent_div_52_Template, 3, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.showLoanDetail.loanNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.showLoanDetail.memberName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.showLoanDetail.loanType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.showLoanDetail.loanTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.showLoanDetail.amount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](36, 9, ctx.showLoanDetail.originDate, "short"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](43, 12, ctx.showLoanDetail.endDate, "short"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAdminOrNot);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAdminOrNot);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: [".myhead[_ngcontent-%COMP%] {\n    text-align: left;\n    font-size: 200%;\n    width: 30%;\n    height: 36px;\n  }\n\n  .mydata[_ngcontent-%COMP%] {\n    text-align: left; \n    font-size: 200%;\n    width: 70%;\n    height: 36px; \n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYW4tZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFVBQVU7SUFDVixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFVBQVU7SUFDVixZQUFZO0VBQ2QiLCJmaWxlIjoibG9hbi1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teWhlYWQge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1zaXplOiAyMDAlO1xuICAgIHdpZHRoOiAzMCU7XG4gICAgaGVpZ2h0OiAzNnB4O1xuICB9XG5cbiAgLm15ZGF0YSB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDsgXG4gICAgZm9udC1zaXplOiAyMDAlO1xuICAgIHdpZHRoOiA3MCU7XG4gICAgaGVpZ2h0OiAzNnB4OyBcbiAgfSAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoanDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loan-detail',
                templateUrl: './loan-detail.component.html',
                styleUrls: ['./loan-detail.component.css']
            }]
    }], function () { return [{ type: src_app_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"] }, { type: _loan_service__WEBPACK_IMPORTED_MODULE_2__["LoanService"] }, { type: _loan_detail_service__WEBPACK_IMPORTED_MODULE_3__["LoanDetailService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "AytR":
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
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "HIDr":
/*!*******************************************************!*\
  !*** ./src/app/loan/loan-list/loan-list.component.ts ***!
  \*******************************************************/
/*! exports provided: LoanListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanListComponent", function() { return LoanListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/global.service */ "dVwY");
/* harmony import */ var src_app_header_header_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/header/header.service */ "6Qlo");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _loan_item_loan_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loan-item/loan-item.component */ "49ly");







function LoanListComponent_app_loan_item_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loan-item", 8);
} if (rf & 2) {
    const loan_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loanItem", loan_r1);
} }
class LoanListComponent {
    //detailMode=true;  
    constructor(router, globalService, headerService) {
        this.router = router;
        this.globalService = globalService;
        this.headerService = headerService;
        this.loans = [];
    }
    ngOnInit() {
        if (localStorage.getItem('token') === null) {
            this.router.navigate(['../']);
        }
        //   Turn on Header is admin
        this.globalService.headerSearchEvent.next(false);
        console.log("**********Loan-List Init Called**********");
        this.subscribeToLoans();
        // subscribing the data String for first name, last name or loan Number.....then 
        //within this subscription only wee will call global service and call the API.....means 
        //subscription within Scbscription
        // searchBy is Subjected and Triggered in Header Service. 
        this.newKeyWordSubscribed = this.headerService.searchBy.subscribe((seachValue) => {
            this.searchByHeader(seachValue);
            //...
        });
    } //... Init end
    searchByHeader(seachValue) {
        console.log("1--------> " + seachValue);
        let searchKey = seachValue.split(" ");
        if (searchKey[0] === "firstName") {
            // subs to first name
            this.globalService.getLoanListByFirstName(searchKey[1]).subscribe(data => {
                console.log(data);
                this.loans = data;
                if (this.loans.length === 0) {
                    alert("This search does not exist");
                    this.subscribeToLoans();
                }
            }, error => {
                alert("Session Out");
                localStorage.clear();
                this.router.navigate(['../']);
            });
        }
        if (searchKey[0] === "lastName") {
            // subs to last name
            this.globalService.getLoanListByLastName(searchKey[1]).subscribe(data => {
                this.loans = data;
                if (this.loans.length === 0) {
                    alert("This search does not exist");
                    this.subscribeToLoans();
                }
            }, error => {
                alert("Session Out");
                localStorage.clear();
                this.router.navigate(['../']);
            });
        }
        if (searchKey[0] === "loanNumber") {
            console.log("2--------> " + searchKey[1]);
            // subs to first name
            this.globalService.getLoanListByLoanNumber(searchKey[1]).subscribe(data => {
                console.log("3--------> " + data);
                this.loans = data;
                if (this.loans.length === 0) {
                    alert("This search does not exist");
                    this.subscribeToLoans();
                }
            }, error => {
                alert("Session Out");
                localStorage.clear();
                this.router.navigate(['../']);
            });
        }
    }
    subscribeToLoans() {
        this.loanListSubscription = this.globalService.getLoanList().subscribe((loanList) => {
            return this.loans = loanList.sort(function (a, b) {
                return a.loanNumber - b.loanNumber;
            });
        }, error => {
            alert('Session Out');
            this.router.navigate(['/']);
        });
    }
    ngOnDestroy() {
        this.newKeyWordSubscribed.unsubscribe();
        this.loanListSubscription.unsubscribe();
    }
}
LoanListComponent.ɵfac = function LoanListComponent_Factory(t) { return new (t || LoanListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_header_header_service__WEBPACK_IMPORTED_MODULE_3__["HeaderService"])); };
LoanListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoanListComponent, selectors: [["app-loan-list"]], decls: 16, vars: 1, consts: [[1, "row"], [1, "col-md-12", 2, "background-color", "rgba(224, 223, 230, 0.863)"], [1, "pull-left"], [1, "list-group-item-heading"], [2, "padding-left", "25%"], [2, "padding-left", "60%"], [2, "padding-left", "80%"], [3, "loanItem", 4, "ngFor", "ngForOf"], [3, "loanItem"]], template: function LoanListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Loan Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Member Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Loan End Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LoanListComponent_app_loan_item_15_Template, 1, 1, "app-loan-item", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.loans);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _loan_item_loan_item_component__WEBPACK_IMPORTED_MODULE_5__["LoanItemComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2FuLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoanListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loan-list',
                templateUrl: './loan-list.component.html',
                styleUrls: ['./loan-list.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"] }, { type: src_app_header_header_service__WEBPACK_IMPORTED_MODULE_3__["HeaderService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "XNvx":
/*!****************************************!*\
  !*** ./src/app/login/login.service.ts ***!
  \****************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class LoginService {
    constructor(http) {
        this.http = http;
        //MY_URL: string =  'https://ip-authorization-1612785696210.azurewebsites.net';
        this.MY_URL = 'https://myauth-service.herokuapp.com'; //'http://localhost:9192';
    }
    login(userData) {
        return this.http.post(this.MY_URL + '/auth/login', userData);
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _loan_loan_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loan/loan.component */ "mG0P");
/* harmony import */ var _loan_loan_list_loan_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loan/loan-list/loan-list.component */ "HIDr");
/* harmony import */ var _loan_loan_Item_detail_loan_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loan/loan-Item-detail/loan-detail.component */ "9PtO");
/* harmony import */ var _loan_loan_Item_detail_loan_update_loan_update_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./loan/loan-Item-detail/loan-update/loan-update.component */ "3Jzv");
/* harmony import */ var _loan_loan_list_loan_item_loan_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./loan/loan-list/loan-item/loan-item.component */ "49ly");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _loan_new_loan_new_loan_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./loan/new-loan/new-loan.component */ "xZ9U");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./global.service */ "dVwY");
















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_global_service__WEBPACK_IMPORTED_MODULE_14__["GlobalService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _loan_loan_component__WEBPACK_IMPORTED_MODULE_6__["LoanComponent"],
        _loan_loan_list_loan_list_component__WEBPACK_IMPORTED_MODULE_7__["LoanListComponent"],
        _loan_loan_Item_detail_loan_detail_component__WEBPACK_IMPORTED_MODULE_8__["LoanDetailComponent"],
        _loan_loan_Item_detail_loan_update_loan_update_component__WEBPACK_IMPORTED_MODULE_9__["LoanUpdateComponent"],
        _loan_loan_list_loan_item_loan_item_component__WEBPACK_IMPORTED_MODULE_10__["LoanItemComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
        _loan_new_loan_new_loan_component__WEBPACK_IMPORTED_MODULE_13__["NewLoanComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _loan_loan_component__WEBPACK_IMPORTED_MODULE_6__["LoanComponent"],
                    _loan_loan_list_loan_list_component__WEBPACK_IMPORTED_MODULE_7__["LoanListComponent"],
                    _loan_loan_Item_detail_loan_detail_component__WEBPACK_IMPORTED_MODULE_8__["LoanDetailComponent"],
                    _loan_loan_Item_detail_loan_update_loan_update_component__WEBPACK_IMPORTED_MODULE_9__["LoanUpdateComponent"],
                    _loan_loan_list_loan_item_loan_item_component__WEBPACK_IMPORTED_MODULE_10__["LoanItemComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                    _loan_new_loan_new_loan_component__WEBPACK_IMPORTED_MODULE_13__["NewLoanComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
                ],
                providers: [_global_service__WEBPACK_IMPORTED_MODULE_14__["GlobalService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Za5T":
/*!******************************!*\
  !*** ./src/app/loan/loan.ts ***!
  \******************************/
/*! exports provided: Loan */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loan", function() { return Loan; });
class Loan {
    constructor(loanNumber, memberName, loanType, loanTerm, amount, originDate, endDate) {
        this.loanNumber = loanNumber;
        this.memberName = memberName;
        this.loanType = loanType;
        this.loanTerm = loanTerm;
        this.amount = amount;
        this.originDate = originDate;
        this.endDate = endDate;
    }
}


/***/ }),

/***/ "dVwY":
/*!***********************************!*\
  !*** ./src/app/global.service.ts ***!
  \***********************************/
/*! exports provided: GlobalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalService", function() { return GlobalService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");





class GlobalService {
    //'http://localhost:8100';// 'https://loan-service-1612789102004.azurewebsites.net'
    constructor(http) {
        this.http = http;
        this.MY_URL = 'https://loan-service.herokuapp.com';
        this.headerSearchEvent = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.loggedUser = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.url = "https://gist.github.com/jaames/1b14264e322855fb5a67d4d934e95e5f#question_list";
    }
    getLoanList() {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('clientType', localStorage.getItem('clientType'));
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            Authorization: localStorage.getItem('token'),
        });
        let options = { params: httpParams, headers: httpHeaders };
        return this.http.get(this.MY_URL + '/loans/getloan', options);
    }
    createNewLoan(newloan) {
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            Authorization: localStorage.getItem('token'),
        });
        let options = { headers: httpHeaders };
        return this.http.post(this.MY_URL + '/loans/addnewloan', newloan, options);
    }
    deleteLoanItem(loanDeleteId) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('id', loanDeleteId);
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            Authorization: localStorage.getItem('token'),
        });
        let options = { params: httpParams, headers: httpHeaders };
        return this.http.delete(this.MY_URL + '/loans/delete', options);
    }
    modifyLoanItem(updatedLoan) {
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            Authorization: localStorage.getItem('token'),
        });
        let options = { headers: httpHeaders };
        return this.http.put(this.MY_URL + '/loans/update', updatedLoan, options);
    }
    ////////////////////////////////////
    getLoanListByFirstName(firstname) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('firstname', firstname);
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            Authorization: localStorage.getItem('token'),
        });
        let options = { params: httpParams, headers: httpHeaders };
        return this.http.get(this.MY_URL + '/loans/getloan/firstname', options);
    }
    getLoanListByLastName(lastname) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('lastname', lastname);
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            Authorization: localStorage.getItem('token'),
        });
        let options = { params: httpParams, headers: httpHeaders };
        return this.http.get(this.MY_URL + '/loans/getloan/lastname', options);
    }
    // getLoanListByLoanNumbers(loannumber: string): Observable<Loan[]> {
    //   let httpParams = new HttpParams().set('loannumber', loannumber);
    //   let option = { params: httpParams };
    //   return this.http.get<Loan[]>(
    //     'http://localhost:8100/loans/getloan/loannumber', option
    //   );
    // }
    getLoanListByLoanNumber(loannumber) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"](); //.set('clientType', localStorage.getItem('clientType'));
        httpParams = httpParams.append('clientType', localStorage.getItem('clientType'));
        //httpParams = httpParams.append('loannumber', loannumber);
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            Authorization: localStorage.getItem('token'),
        });
        let options = { params: httpParams, headers: httpHeaders };
        return this.http.get(this.MY_URL + '/loans/getloan/' + loannumber, options
        //"http://localhost:8100/loans/getloan/5?clientType=admin_biswajeet", options
        );
    }
    questions() {
        let data = this.http.get(this.url);
        console.log("Question DAta=================");
        console.log(data);
        return data;
    }
}
GlobalService.ɵfac = function GlobalService_Factory(t) { return new (t || GlobalService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
GlobalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GlobalService, factory: GlobalService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GlobalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../global.service */ "dVwY");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login/login.service */ "XNvx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _header_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header.service */ "6Qlo");
/* harmony import */ var _loan_loan_Item_detail_loan_detail_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../loan/loan-Item-detail/loan-detail.service */ "zuU8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");











function HeaderComponent_div_9_li_7_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function HeaderComponent_div_9_li_7_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.onSubmitByFirstName(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.searchDataByFirstNameForm);
} }
function HeaderComponent_div_9_li_8_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function HeaderComponent_div_9_li_8_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.onSubmitByLastName(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.searchDataByLastNameForm);
} }
function HeaderComponent_div_9_ul_9_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_9_ul_9_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.onCreateNewLoan(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Originate New Loan");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function HeaderComponent_div_9_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.onSubmitByLoanNumber(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HeaderComponent_div_9_li_7_Template, 5, 1, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HeaderComponent_div_9_li_8_Template, 5, 1, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HeaderComponent_div_9_ul_9_Template, 3, 0, "ul", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.searchDataByLoanNumberForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isAdmin);
} }
class HeaderComponent {
    constructor(globalService, loginService, activeroute, router, headerService, loanDetailService) {
        this.globalService = globalService;
        this.loginService = loginService;
        this.activeroute = activeroute;
        this.router = router;
        this.headerService = headerService;
        this.loanDetailService = loanDetailService;
        this.loggedUserName = "Hello";
        this.headerSearchHide = false; // false****************  
        this.searchBy = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ngOnInit() {
        if (localStorage.getItem('token') === null) {
            this.router.navigate(['../']);
        }
        //*******************************************************************************************************//
        this.loggedUserName = localStorage.getItem('username');
        this.isAdmin = localStorage.getItem('role') === 'admin' ? true : false;
        if (this.isAdmin === true) {
            //set isAdmin or Not for Item-Detail shoe The Modify/Delete/ and BAck Button Working according to user/admin
            this.loanDetailService.setAdminOrNot(true);
        }
        else {
            //set isAdmin or Not for Item-Detail shoe The Modify/Delete/ and BAck Button Working according to user/admin
            this.loanDetailService.setAdminOrNot(false);
        }
        //********************************************************************************************************** */
        /// Update Logged User and also the token can be obtained **********
        this.headerSubscription = this.globalService.headerSearchEvent.subscribe(headerValue => {
            this.headerSearchHide = headerValue;
        });
        //Forms
        this.searchDataByFirstNameForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'firstName': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        this.searchDataByLastNameForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'lastName': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        this.searchDataByLoanNumberForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'loanNumber': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    }
    ngOnDestroy() {
        this.headerSubscription.unsubscribe();
    }
    onCreateNewLoan() {
        //console.log(this.route);
        this.globalService.headerSearchEvent.next(true);
        this.router.navigate(['originate-new-loan'], { relativeTo: this.activeroute });
    }
    onLogout() {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        localStorage.removeItem('role');
        localStorage.removeItem('clientType');
        localStorage.clear();
        this.router.navigate(['../login'], { relativeTo: this.activeroute });
    }
    onSubmitByFirstName() {
        //this.headerService.searchByFirstName(formData.value.firstName);
        // 1-- Make api calls from global service for Loan List a/c to first anme
        // 2- here itself it is returning a subscription value ,,,, whic need to be subscribe in the loan-list....for 
        //    this we need to inject this service and get the data there
        this.headerService.searchByFirstName(this.searchDataByFirstNameForm.value.firstName);
        this.searchDataByFirstNameForm.reset();
    }
    onSubmitByLastName() {
        //console.log(formData.value);
        this.headerService.searchByLastName(this.searchDataByLastNameForm.value.lastName);
        this.searchDataByLastNameForm.reset();
    }
    onSubmitByLoanNumber() {
        //console.log(formData.value.loanNumber);
        this.headerService.searchByLoanNumber(this.searchDataByLoanNumberForm.value.loanNumber);
        this.searchDataByLoanNumberForm.reset();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_header_service__WEBPACK_IMPORTED_MODULE_6__["HeaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_loan_loan_Item_detail_loan_detail_service__WEBPACK_IMPORTED_MODULE_7__["LoanDetailService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 13, vars: 4, consts: [[1, "navbar", "navbar-default"], [1, "container-fluid", 2, "background-color", "rgba(224, 223, 230, 0.863)"], [1, "navbar-header"], [2, "font-weight", "700", "color", "rgba(3, 0, 156, 0.986)", "font-family", "cursive", "font-style", "bold"], [2, "font-weight", "700"], ["data-toggle", "collapse", 1, "collapse", "navbar-collapse"], [4, "ngIf"], [1, "nav", "navbar-nav", "navbar-right", 2, "margin-top", "1%"], [1, "btn", "btn-danger", 3, "click"], [1, "nav", "navbar-nav", 2, "padding-top", "1%", "padding-left", "3%"], [1, "form-inline", "my-2", "my-lg-0", 3, "formGroup", "ngSubmit"], ["type", "number", "placeholder", "By Loan Number", "aria-label", "Search", "formControlName", "loanNumber", 1, "form-control", "mr-sm-2"], ["type", "submit", 1, "btn", "btn-success", 2, "background-color", "rgb(238, 117, 18)"], ["style", "padding-left: 10px;", 4, "ngIf"], ["class", "nav navbar-nav  ", "style", "padding-top: 1%; padding-left: 2%;", 4, "ngIf"], [2, "padding-left", "10px"], ["type", "text", "placeholder", "By First Name", "aria-label", "Search", "formControlName", "firstName", 1, "form-control", "mr-sm-2"], ["type", "text", "placeholder", "By Last Name", "aria-label", "Search", "formControlName", "lastName", 1, "form-control", "mr-sm-2"], [1, "nav", "navbar-nav", 2, "padding-top", "1%", "padding-left", "2%"], [1, "btn", "btn-success", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "RaboBank ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HeaderComponent_div_9_Template, 10, 4, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_11_listener() { return ctx.onLogout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Welcome ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 2, ctx.loggedUserName), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.headerSearchHide);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["UpperCasePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return [{ type: _global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"] }, { type: _login_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _header_service__WEBPACK_IMPORTED_MODULE_6__["HeaderService"] }, { type: _loan_loan_Item_detail_loan_detail_service__WEBPACK_IMPORTED_MODULE_7__["LoanDetailService"] }]; }, null); })();


/***/ }),

/***/ "mG0P":
/*!****************************************!*\
  !*** ./src/app/loan/loan.component.ts ***!
  \****************************************/
/*! exports provided: LoanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanComponent", function() { return LoanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _loan_Item_detail_loan_detail_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loan-Item-detail/loan-detail.service */ "zuU8");
/* harmony import */ var _loan_list_loan_item_loan_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loan-list/loan-item/loan-item.service */ "4YwO");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _loan_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loan.service */ "4Lwz");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../header/header.component */ "fECr");









class LoanComponent {
    constructor(router, loanItemService, loanService, loanDetailService) {
        this.router = router;
        this.loanItemService = loanItemService;
        this.loanService = loanService;
        this.loanDetailService = loanDetailService;
    }
    ngOnInit() {
        if (localStorage.getItem('token') === null) {
            this.router.navigate(['../']);
        }
        this.loanItemService.showItemDetail.subscribe((data) => {
            this.loanService.setLoanItemDetail(data);
        });
        // On Back Call form loan-detail 
        this.backValueSubscription = this.loanDetailService.back.subscribe();
        this.loanDetailSubscription = this.loanDetailService.currentLoanDetail.subscribe(data => {
            this.loanService.setUpdateLoan(data);
        });
    }
    ngOnDestroy() {
        this.loanDetailSubscription.unsubscribe();
        this.backValueSubscription.unsubscribe();
    }
}
LoanComponent.ɵfac = function LoanComponent_Factory(t) { return new (t || LoanComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_loan_list_loan_item_loan_item_service__WEBPACK_IMPORTED_MODULE_2__["LoanItemService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_loan_service__WEBPACK_IMPORTED_MODULE_4__["LoanService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_loan_Item_detail_loan_detail_service__WEBPACK_IMPORTED_MODULE_1__["LoanDetailService"])); };
LoanComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoanComponent, selectors: [["app-loan"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_loan_Item_detail_loan_detail_service__WEBPACK_IMPORTED_MODULE_1__["LoanDetailService"], _loan_list_loan_item_loan_item_service__WEBPACK_IMPORTED_MODULE_2__["LoanItemService"]])], decls: 5, vars: 0, consts: [[2, "margin-left", "5%", "margin-right", "5%", "margin-top", "3%"], [1, "row"], [1, "col-md-15"]], template: function LoanComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2FuLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoanComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loan',
                templateUrl: './loan.component.html',
                styleUrls: ['./loan.component.css'],
                providers: [_loan_Item_detail_loan_detail_service__WEBPACK_IMPORTED_MODULE_1__["LoanDetailService"], _loan_list_loan_item_loan_item_service__WEBPACK_IMPORTED_MODULE_2__["LoanItemService"]]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _loan_list_loan_item_loan_item_service__WEBPACK_IMPORTED_MODULE_2__["LoanItemService"] }, { type: _loan_service__WEBPACK_IMPORTED_MODULE_4__["LoanService"] }, { type: _loan_Item_detail_loan_detail_service__WEBPACK_IMPORTED_MODULE_1__["LoanDetailService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _loan_loan_Item_detail_loan_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loan/loan-Item-detail/loan-detail.component */ "9PtO");
/* harmony import */ var _loan_loan_list_loan_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loan/loan-list/loan-list.component */ "HIDr");
/* harmony import */ var _loan_loan_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loan/loan.component */ "mG0P");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _loan_loan_Item_detail_loan_update_loan_update_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loan/loan-Item-detail/loan-update/loan-update.component */ "3Jzv");
/* harmony import */ var _loan_new_loan_new_loan_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loan/new-loan/new-loan.component */ "xZ9U");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth-guard.service */ "5nbR");











const routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'admin-loans', component: _loan_loan_component__WEBPACK_IMPORTED_MODULE_4__["LoanComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]], children: [
            { path: '', component: _loan_loan_list_loan_list_component__WEBPACK_IMPORTED_MODULE_3__["LoanListComponent"] },
            { path: 'loan-detail', component: _loan_loan_Item_detail_loan_detail_component__WEBPACK_IMPORTED_MODULE_2__["LoanDetailComponent"] },
            { path: 'loan-detail-update', component: _loan_loan_Item_detail_loan_update_loan_update_component__WEBPACK_IMPORTED_MODULE_6__["LoanUpdateComponent"] },
            { path: 'originate-new-loan', component: _loan_new_loan_new_loan_component__WEBPACK_IMPORTED_MODULE_7__["NewLoanComponent"] }
        ]
    },
    { path: 'user-loans', component: _loan_loan_component__WEBPACK_IMPORTED_MODULE_4__["LoanComponent"], children: [
            { path: '', component: _loan_loan_list_loan_list_component__WEBPACK_IMPORTED_MODULE_3__["LoanListComponent"] },
            { path: 'loan-detail', component: _loan_loan_Item_detail_loan_detail_component__WEBPACK_IMPORTED_MODULE_2__["LoanDetailComponent"] }
        ]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _model_loginRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/loginRequest */ "60XU");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.service */ "XNvx");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../global.service */ "dVwY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");









function LoginComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Your Credentials is Wrong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(router, loginService, globalService) {
        this.router = router;
        this.loginService = loginService;
        this.globalService = globalService;
        this.loginError = false;
    }
    ngOnInit() {
        console.log("Questions+++++++++++++++++++++++++");
        this.globalService.questions().subscribe(data => {
            console.log(data);
        });
        console.log("Questions+++++++++++++++++++++++++");
        this.formData = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
    }
    onSubmit() {
        console.log("Hello Lord");
        const email = this.formData.value.email;
        const password = this.formData.value.password;
        let userData = new _model_loginRequest__WEBPACK_IMPORTED_MODULE_2__["LoginRequest"](email, password);
        //*********************************************** */ 
        this.loginService.login(userData).subscribe((data) => {
            // As Logged In successful so Updating the Logged User ***************
            localStorage.clear();
            localStorage.setItem('token', data.token.toString());
            localStorage.setItem('username', data.username.toString());
            localStorage.setItem('role', data.role.toString());
            localStorage.setItem('clientType', (data.role + "_" + data.username).toString());
            const move = data.role.toString();
            console.log("one----------------");
            console.log(data);
            this.router.navigate([`${move}-loans`]);
        }, error => {
            this.loginError = true;
            //alert("Your Credential is wrong")
            //console.log("My Custom Error : You are not Authorized to Login");
            //console.log("------->>>>> " + error.message);
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 21, vars: 3, consts: [[1, "container", 2, "margin-top", "7%"], [1, "row", 2, "height", "10", "padding-top", "0%", "background-color", "rgb(219, 111, 10)"], [1, "jumbotron", 2, "text-align", "center", "background-color", "rgb(219, 111, 10)", "margin", "0%"], [2, "font-style", "italic", "font-weight", "bold", "color", "rgb(24, 5, 190)"], ["class", "alert alert-warning myAlert", 4, "ngIf"], [1, "col-xs-12", "col-md-6", "col-md-offset-3", 2, "background-color", "rgb(119, 138, 172)"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "Email1"], ["type", "email", "id", "email", "placeholder", "Enter UserName", "formControlName", "email", 1, "form-control"], ["for", "password"], ["type", "password", "id", "password", "placeholder", "Password", "formControlName", "password", 1, "form-control"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], [1, "row", 2, "height", "12", "padding-top", "9%", "background-color", "rgb(24, 5, 190)"], [1, "alert", "alert-warning", "myAlert"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "RaboBank");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LoginComponent_div_5_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_9_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "UserName");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.formData.valid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: [".myAlert[_ngcontent-%COMP%]{\n    color: red;\n}\n\n\n.mycustom-jumbotron[_ngcontent-%COMP%] {\n   \n   \n    margin: 0 auto\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2Q7OztBQUdBOzs7SUFHSTtFQUNGIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXlBbGVydHtcbiAgICBjb2xvcjogcmVkO1xufVxuXG5cbi5teWN1c3RvbS1qdW1ib3Ryb24ge1xuICAgXG4gICBcbiAgICBtYXJnaW46IDAgYXV0b1xuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] }, { type: _global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"] }]; }, null); })();


/***/ }),

/***/ "xZ9U":
/*!*****************************************************!*\
  !*** ./src/app/loan/new-loan/new-loan.component.ts ***!
  \*****************************************************/
/*! exports provided: NewLoanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewLoanComponent", function() { return NewLoanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _loan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loan */ "Za5T");
/* harmony import */ var src_app_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/global.service */ "dVwY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");







class NewLoanComponent {
    constructor(globalService, router, activeRoute) {
        this.globalService = globalService;
        this.router = router;
        this.activeRoute = activeRoute;
    }
    ngOnInit() {
        this.newLoanForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'loanNumber': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            'memberName': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'loanType': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'loanTerm': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'amount': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'originDate': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'endDate': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    }
    onBack() {
        this.router.navigate(['../'], { relativeTo: this.activeRoute });
    }
    onSubmit() {
        if (localStorage.getItem('token') === null) {
            this.router.navigate(['../']);
        }
        this.globalService.headerSearchEvent.next(false);
        //  ******** CALL GLOBAL SERVICE AND MAKE CALL WITH BACKENED APISSS to insert new loan details
        let loan = new _loan__WEBPACK_IMPORTED_MODULE_2__["Loan"](0, this.newLoanForm.value.memberName, this.newLoanForm.value.loanType, this.newLoanForm.value.loanTerm, this.newLoanForm.value.amount, this.newLoanForm.value.originDate, this.newLoanForm.value.endDate);
        this.globalService.createNewLoan(loan).subscribe();
        this.router.navigate(['../'], { relativeTo: this.activeRoute });
    }
} // 
NewLoanComponent.ɵfac = function NewLoanComponent_Factory(t) { return new (t || NewLoanComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
NewLoanComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewLoanComponent, selectors: [["app-new-loan"]], decls: 39, vars: 2, consts: [[1, "container", 2, "background-color", "rgb(212, 191, 122)"], [3, "formGroup", "ngSubmit"], [1, "form-group", "col-sm-12"], ["for", "name"], ["type", "text", "id", "name", "placeholder", "Enter Name", "formControlName", "memberName", 1, "form-control"], ["for", "loanType"], ["type", "text", "id", "loanType", "placeholder", "Eneter Loan Type- Car, Home, Bussiness.....", "formControlName", "loanType", 1, "form-control"], [1, "form-group", "col-sm-6"], ["for", "loanTerm"], ["name", "term", "id", "term", "formControlName", "loanTerm", 1, "form-control"], ["value", "short"], ["value", "mid"], ["value", "long"], ["for", "amount"], ["type", "number", "id", "amount", "placeholder", "Enter Loan Amount", "formControlName", "amount", 1, "form-control"], ["for", "startDate"], ["type", "date", "id", "startDate", "placeholder", "Choose Start Date", "formControlName", "originDate", 1, "form-control"], ["for", "endDate"], ["type", "date", "id", "endDate", "placeholder", "Choose End Date", "formControlName", "endDate", 1, "form-control"], ["type", "reset", 1, "btn", "btn-primary", "pull-left", 3, "click"], ["type", "submit", 1, "btn", "btn-success", "pull-right", 3, "disabled"]], template: function NewLoanComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NewLoanComponent_Template_form_ngSubmit_1_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Member Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Loan Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Loan Term");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Short");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Mid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Long");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Loan Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Loan Origin Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Loan End Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewLoanComponent_Template_button_click_34_listener() { return ctx.onBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.newLoanForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.newLoanForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXctbG9hbi5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewLoanComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-new-loan',
                templateUrl: './new-loan.component.html',
                styleUrls: ['./new-loan.component.css']
            }]
    }], function () { return [{ type: src_app_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "zuU8":
/*!**************************************************************!*\
  !*** ./src/app/loan/loan-Item-detail/loan-detail.service.ts ***!
  \**************************************************************/
/*! exports provided: LoanDetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanDetailService", function() { return LoanDetailService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/global.service */ "dVwY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class LoanDetailService {
    constructor(globalService, router, actveRouter) {
        this.globalService = globalService;
        this.router = router;
        this.actveRouter = actveRouter;
        this.isAdmin = false;
        this.back = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.makeHeaderOff = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.currentLoanDetail = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    setAdminOrNot(isddmin) {
        this.isAdmin = isddmin;
    }
    createBackEvent() {
        let adminOruserMove = this.isAdmin == true ? 'admin-loans' : 'user-loans';
        //  check for it it, its a issue for user and admin  -- "admin or user should be according to logiged user"
        this.router.navigate(['../' + adminOruserMove], { relativeTo: this.actveRouter });
    }
    deleteUserLoan(showLoanId) {
        //console.log("Api call using gLOBAL sERVIEC********************************************** 1");
        this.globalService.deleteLoanItem(showLoanId).subscribe(response => {
            console.log(response);
            this.createBackEvent();
            this.makeHeaderOff.next(false);
        }, error => {
            // localStorage.removeItem('token');
            // localStorage.removeItem('username');
            // localStorage.removeItem('role'); 
            // localStorage.removeItem('clientType');
            // localStorage.clear();
            alert('Deleting Error');
            this.createBackEvent();
            this.makeHeaderOff.next(false);
        });
    }
    setModify(showLoanDetail) {
        this.updateLoanItem = showLoanDetail;
    }
    getModify() {
        return this.updateLoanItem;
    }
    turnOffHeader(value) {
        this.makeHeaderOff.next(value);
    }
}
LoanDetailService.ɵfac = function LoanDetailService_Factory(t) { return new (t || LoanDetailService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
LoanDetailService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoanDetailService, factory: LoanDetailService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoanDetailService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: src_app_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map