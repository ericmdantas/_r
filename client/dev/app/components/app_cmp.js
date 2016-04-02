"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var header_cmp_1 = require('../../header/components/header_cmp');
var footer_cmp_1 = require('../../footer/components/footer_cmp');
var product_list_cmp_1 = require('../../product/components/product_list_cmp');
var modal_cmp_1 = require('../../modal/components/modal_cmp');
var blanket_cmp_1 = require('../../blanket/components/blanket_cmp');
var AppCmp = (function () {
    function AppCmp() {
    }
    AppCmp = __decorate([
        core_1.Component({
            selector: 'app',
            templateUrl: 'client/dev/app/templates/app.html',
            styleUrls: ['client/dev/app/styles/app.css'],
            directives: [header_cmp_1.HeaderCmp, footer_cmp_1.FooterCmp, product_list_cmp_1.ProductListCmp, modal_cmp_1.ModalCmp, blanket_cmp_1.BlanketCmp]
        }), 
        __metadata('design:paramtypes', [])
    ], AppCmp);
    return AppCmp;
}());
exports.AppCmp = AppCmp;
//# sourceMappingURL=app_cmp.js.map