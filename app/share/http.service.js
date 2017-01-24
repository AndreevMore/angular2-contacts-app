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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/toPromise');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/map');
var HttpService = (function () {
    function HttpService(http) {
        this.http = http;
        this.usersGetUrl = 'http://dev-brainworks.rhcloud.com/api/users';
        this.userDeleteUrl = 'http://dev-brainworks.rhcloud.com/api/users/delete';
        this.userAddUrl = 'http://dev-brainworks.rhcloud.com/api/users/create';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    HttpService.prototype.usersGet = function () {
        return this.http.get(this.usersGetUrl)
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
        // .toPromise()
        // .then(response => response.json().data as Hero[])
        // .catch(this.handleError);
    };
    HttpService.prototype.userAdd = function (obj) {
        return this.http.post(this.userAddUrl, obj, { headers: this.headers });
    };
    HttpService.prototype.userDelete = function (_id) {
        return this.http.delete('http://dev-brainworks.rhcloud.com/api/users/delete', new http_1.RequestOptions({
            body: { "_id": _id }
        }));
    };
    HttpService.prototype.handleError = function (error) {
        console.error('Something wrong happend', error);
        return Promise.reject(error.message || error);
    };
    HttpService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;
//# sourceMappingURL=http.service.js.map