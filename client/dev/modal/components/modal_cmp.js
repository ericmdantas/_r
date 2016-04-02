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
var ModalCmp = (function () {
    function ModalCmp() {
        this.product = {};
        this.hide = true;
        this.hideModal = new core_1.EventEmitter();
        this.showModal = new core_1.EventEmitter();
    }
    ModalCmp.prototype.setProduct = function (p) {
        this.product = p;
        this.hide = false;
        this.showModal.emit(true);
    };
    ModalCmp.prototype.hideHandler = function () {
        this.hide = true;
        this.hideModal.emit(true);
    };
    ModalCmp.prototype.keyUpHandler = function (ev) {
        if (ev.which === 27) {
            this.hideHandler();
        }
    };
    __decorate([
        core_1.Output('hideModal'), 
        __metadata('design:type', core_1.EventEmitter)
    ], ModalCmp.prototype, "hideModal", void 0);
    __decorate([
        core_1.Output('showModal'), 
        __metadata('design:type', core_1.EventEmitter)
    ], ModalCmp.prototype, "showModal", void 0);
    ModalCmp = __decorate([
        core_1.Component({
            selector: 'modal',
            templateUrl: 'client/dev/modal/templates/modal.html',
            styleUrls: ['client/dev/modal/styles/modal.css'],
            host: {
                '(window:keyup)': 'keyUpHandler($event)'
            }
        }), 
        __metadata('design:paramtypes', [])
    ], ModalCmp);
    return ModalCmp;
}());
exports.ModalCmp = ModalCmp;
//# sourceMappingURL=modal_cmp.js.map