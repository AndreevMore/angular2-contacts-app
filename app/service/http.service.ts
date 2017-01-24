import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams  } from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {
	
  private usersGetUrl = 'http://dev-brainworks.rhcloud.com/api/users'; 
  private userDeleteUrl = 'http://dev-brainworks.rhcloud.com/api/users/delete'; 
  private userAddUrl = 'http://dev-brainworks.rhcloud.com/api/users/create'; 
  private headers = new Headers({'Content-Type': 'application/json'});
  public usersCount:number;
	constructor(private http:Http) {}

  usersGet() {
    return this.http.get(this.usersGetUrl)
          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  userAdd(obj) {
    return this.http.post(this.userAddUrl, obj, {headers: this.headers})
  }

  userDelete(_id) {
      return this.http.delete('http://dev-brainworks.rhcloud.com/api/users/delete', new RequestOptions({
         body: {"_id":_id}
      }))

  }

  private handleError(error: any): Promise<any> {
    console.error('Something wrong happend', error); 
    return Promise.reject(error.message || error);
  }

}
