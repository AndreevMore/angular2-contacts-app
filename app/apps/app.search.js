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
// <div class="col-lg-12 col-md-12 input-group"> 
// 	  <input type="text" placeholder="Search place" (ngModel)="inputValue" (ngModelChange)="inputValueChange($event)" >
// </div>
var SearchComponent = (function () {
    function SearchComponent() {
        this.inputValueChange = new core_1.EventEmitter();
    }
    SearchComponent.prototype.oninputChange = function (model) {
        this.inputValue = model;
        this.inputValueChange.emit(model);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SearchComponent.prototype, "inputValue", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], SearchComponent.prototype, "inputValueChange", void 0);
    SearchComponent = __decorate([
        core_1.Component({
            selector: 'search-component',
            template: "\n\t\t\t\t  <input type=\"text\" placeholder=\"Search place\" [ngModel]=\"inputValue\" (ngModelChange)=\"oninputChange($event)\" />\n\t\t\t\t",
            styles: ["\n\t    \t\tinput {\n\t\t\t\t\tdisplay: block;\n\t\t\t\t    width: 100%;\n\t\t\t\t    padding: .5rem .75rem;\n\t\t\t\t\tmargin-bottom: 1rem;\n\t\t\t\t    \t\t\t\t    font-size: 1rem;\n\t\t\t\t    line-height: 1.25;\n\t\t\t\t    color: #464a4c;\n\t\t\t\t    background-color: #fff;\n\t\t\t\t    background-image: none;\n\t\t\t\t    -webkit-background-clip: padding-box;\n\t\t\t\t    background-clip: padding-box;\n\t\t\t\t    border: 1px solid rgba(0,0,0,.15);\n\t\t\t\t    border-radius: .25rem;\n\t\t\t\t    -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;\n\t\t\t\t    transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;\n\t\t\t\t    -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;\n\t\t\t\t    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;\n\t\t\t\t    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;\n\t\t\t\t}\n     \t\t"]
        }), 
        __metadata('design:paramtypes', [])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=app.search.js.map