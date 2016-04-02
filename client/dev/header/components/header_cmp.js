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
var scroll_watcher_directive_1 = require('../../watcher/directives/scroll_watcher_directive');
var HeaderCmp = (function () {
    function HeaderCmp() {
        this.top = true;
        this.name = 'R';
        this.colors = [
            'pink',
            'fuchsia',
            'gold',
            'goldenrod',
            'black',
            'salmon',
            'tomato',
            'steelblue',
            'brown',
            'orange',
            '#FFA030',
            '#FF6773',
            '#87B29E',
            '#6ABBB5',
            '#F55A56',
            '#E5737D',
            '#369493',
            '#FFD292',
            '#F8A69A',
            '#D9CAAD',
            '#FFCA94',
            '#CFEFEC',
            '#81B2AC'
        ];
    }
    HeaderCmp.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () {
            _this.color = _this.colors[~~(Math.random() * _this.colors.length)];
        }, HeaderCmp.DELAY_CHANGE_COLOR);
    };
    HeaderCmp.prototype.topEvHandler = function (ev) {
        this.top = ev;
    };
    HeaderCmp.DELAY_CHANGE_COLOR = 3000;
    HeaderCmp = __decorate([
        core_1.Component({
            selector: 'hheader',
            templateUrl: 'client/dev/header/templates/header.html',
            styleUrls: ['client/dev/header/styles/header.css'],
            directives: [scroll_watcher_directive_1.ScrollWatcherDirective]
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderCmp);
    return HeaderCmp;
}());
exports.HeaderCmp = HeaderCmp;
//# sourceMappingURL=header_cmp.js.map