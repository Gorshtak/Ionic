import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { CreatePage } from '../CreatePages/create/create';
import { ReadPage } from '../ReadPages/read/read';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private items: Object[] = [ { 'title': 'Create', 'icon': 'fas fa-plus', 'page': CreatePage },
                              { 'title': 'Read',   'icon': 'fas fa-eye',  'page': ReadPage   }]
                          

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {

  }

  itemSelected(item) {
    this.navCtrl.push(item.page);
  }
}
