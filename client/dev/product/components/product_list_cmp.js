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
var product_1 = require('../models/product');
var ProductListCmp = (function () {
    function ProductListCmp() {
        this.productList = [];
        this.productSelected = new core_1.EventEmitter();
    }
    ProductListCmp.prototype.ngOnInit = function () {
        for (var i = 0; i < 100; i++) {
            this.productList.push(new product_1.Product('assets/purse.jpg'));
        }
    };
    ProductListCmp.prototype.productClickedHandler = function (p) {
        this.productSelected.emit(p);
    };
    __decorate([
        core_1.Output('productSelected'), 
        __metadata('design:type', core_1.EventEmitter)
    ], ProductListCmp.prototype, "productSelected", void 0);
    ProductListCmp = __decorate([
        core_1.Component({
            selector: 'product-list',
            templateUrl: 'client/dev/product/templates/product_list.html',
            styleUrls: ['client/dev/product/styles/product.css']
        }), 
        __metadata('design:paramtypes', [])
    ], ProductListCmp);
    return ProductListCmp;
}());
exports.ProductListCmp = ProductListCmp;
//# sourceMappingURL=product_list_cmp.js.map