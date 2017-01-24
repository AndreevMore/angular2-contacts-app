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
var core_1 = require('@angular/core');
var SortPipe = (function () {
    function SortPipe() {
    }
    SortPipe.prototype.transform = function (array, orderBy, asc) {
        var _this = this;
        if (asc === void 0) { asc = true; }
        if (!orderBy || orderBy.trim() == "") {
            return array;
        }
        var temp = [];
        //ascending
        if (asc) {
            temp = array.sort(function (item1, item2) {
                var a = item1[orderBy];
                var b = item2[orderBy];
                return _this.orderByComparator(a, b);
            });
        }
        else {
            //not asc
            temp = array.sort(function (item1, item2) {
                var a = item1[orderBy];
                var b = item2[orderBy];
                return _this.orderByComparator(b, a);
            });
        }
        return temp;
    };
    SortPipe.prototype.orderByComparator = function (a, b) {
        if ((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))) {
            //Isn't a number so lowercase the string to properly compare
            if (a.toLowerCase() < b.toLowerCase())
                return -1;
            if (a.toLowerCase() > b.toLowerCase())
                return 1;
        }
        else {
            //Parse strings as numbers to compare properly
            if (parseFloat(a) < parseFloat(b))
                return -1;
            if (parseFloat(a) > parseFloat(b))
                return 1;
        }
        return 0; //equal each other
    };
    SortPipe = __decorate([
        core_1.Pipe({
            name: "sort",
        }), 
        __metadata('design:paramtypes', [])
    ], SortPipe);
    return SortPipe;
}());
exports.SortPipe = SortPipe;
//# sourceMappingURL=sortPipe.js.map