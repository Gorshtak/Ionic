import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DisplayItemsPage } from '../display-items/display-items';

/**
 * Generated class for the ReadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-read',
  templateUrl: 'read.html',
})
export class ReadPage {

  private items: Object[] = [
    { 'title': 'Users' }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  itemSelected(item) {
    this.navCtrl.push(DisplayItemsPage);
  }

}
