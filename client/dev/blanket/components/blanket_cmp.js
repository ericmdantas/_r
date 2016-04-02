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
var BlanketCmp = (function () {
    function BlanketCmp() {
        this.hide = true;
    }
    BlanketCmp.prototype.hideHandler = function () {
        this.hide = true;
    };
    BlanketCmp.prototype.showHandler = function () {
        this.hide = false;
    };
    BlanketCmp = __decorate([
        core_1.Component({
            selector: 'blanket',
            templateUrl: 'client/dev/blanket/templates/blanket.html',
            styleUrls: ['client/dev/blanket/styles/blanket.css']
        }), 
        __metadata('design:paramtypes', [])
    ], BlanketCmp);
    return BlanketCmp;
}());
exports.BlanketCmp = BlanketCmp;
//# sourceMappingURL=blanket_cmp.js.map