import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ReadProvider } from '../../../providers/read/read';
import { User } from '../../../models/user';
import { DeleteProvider } from '../../../providers/delete/delete';
import { UserPage } from '../../user/user';
import { PARAMETERS } from '@angular/core/src/util/decorators';

/**
 * Generated class for the DisplayItemsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-display-items',
  templateUrl: 'display-items.html',
})
export class DisplayItemsPage {

  private chosedItem: String;
  private items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private readProvider: ReadProvider, private deleteProvider: DeleteProvider, private alertCtrl: AlertController) {
  }

  ngOnInit(): void {
    this.readProvider.getUsers().subscribe(
      response => {
        this.items = response;
        this.items = this.items.slice(0, 10);
      },
      error => {

      }
    );
  }

  itemSelected(item) {
    this.navCtrl.push(UserPage, {
      item: item,
      update: "0"
    });
  }

  itemUpdated(item) {
    this.navCtrl.push(UserPage, {
      item: item,
      update: "1"
    });
  }

  itemDeleted(item) {
    let alert = this.alertCtrl.create({
      title: 'Delete User',
      subTitle: 'Are you sure you want to delete ' + item.name + '?',
      cssClass: 'alert',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.items.splice(this.items.indexOf(item), 1);
            this.deleteProvider.deleteUser(item._id).subscribe(
              response => { 

              });
            this.navCtrl.push(DisplayItemsPage);
          }
        },
        {
          role: 'cancel',
          text: 'No',
          handler: () => {

          }
        }
      ]
    })
    alert.present();
  }
}
