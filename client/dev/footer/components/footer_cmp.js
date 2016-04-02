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
var FooterCmp = (function () {
    function FooterCmp() {
    }
    FooterCmp.prototype.ngOnInit = function () {
        var _data = new Date();
        this.data = _data.getDate() + "/" + _data.getMonth() + "/" + _data.getFullYear();
    };
    FooterCmp = __decorate([
        core_1.Component({
            selector: 'ffooter',
            templateUrl: 'client/dev/footer/templates/footer.html',
            styleUrls: ['client/dev/footer/styles/footer.css']
        }), 
        __metadata('design:paramtypes', [])
    ], FooterCmp);
    return FooterCmp;
}());
exports.FooterCmp = FooterCmp;
//# sourceMappingURL=footer_cmp.js.map