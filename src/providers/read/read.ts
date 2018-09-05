import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from '../const';

/*
  Generated class for the ReadProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ReadProvider {

  constructor(public http: HttpClient) {

  }

  getUsers() {
    return this.http.get(BASE_URL);
  }

  getUser(id) {
    return this.http.get(BASE_URL + "/" + id);
  }
}
