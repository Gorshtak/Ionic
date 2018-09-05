import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from '../const';

/*
  Generated class for the CreateProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CreateProvider {

  constructor(public http: HttpClient) {
  }

  createUser(user) {
    return this.http.post(BASE_URL, user);
  }
}
