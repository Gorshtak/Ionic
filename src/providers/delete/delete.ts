import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from '../const';

/*
  Generated class for the DeleteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DeleteProvider {

  constructor(public http: HttpClient) {
  }

  deleteUser(id) {
    return this.http.delete(BASE_URL + "/" + id);
  }
}
