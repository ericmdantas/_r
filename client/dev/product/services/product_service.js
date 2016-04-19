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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var Observable_1 = require('rxjs/Observable');
var core_1 = require('angular2/core');
var product_1 = require('../models/product');
var ProductService = (function () {
    function ProductService(_product) {
        this._product = _product;
    }
    ProductService.prototype.getAll = function () {
        return new Observable_1.Observable(function (o) {
            o.next([
                new product_1.Product('Necessaire box', 'assets/b0.jpg'),
                new product_1.Product('Necessaire box', 'assets/b1.jpg'),
                new product_1.Product('Infinity scarf', 'assets/b2.jpg'),
                new product_1.Product('Necessaire box', 'assets/b3.jpg'),
                new product_1.Product('Necessaire box', 'assets/b4.jpg'),
                new product_1.Product('Necessaire box com forro em plástico', 'assets/b5.jpg'),
                new product_1.Product('Necessaire box', 'assets/b6.jpg'),
                new product_1.Product('Porta treco', 'assets/b7.jpg')
            ]);
        });
    };
    ProductService = __decorate([
        __param(0, core_1.Inject(product_1.Product)), 
        __metadata('design:paramtypes', [Object])
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
//# sourceMappingURL=product_service.js.map