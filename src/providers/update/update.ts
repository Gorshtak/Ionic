import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from '../const';

/*
  Generated class for the UpdateProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UpdateProvider {

  constructor(public http: HttpClient) {
    console.log('Hello UpdateProvider Provider');
  }

  updateUser(user) {
    return this.http.put(BASE_URL, user);
  }

}
