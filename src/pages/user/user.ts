import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ReadProvider } from '../../providers/read/read';
import { User } from '../../models/user';
import { UpdateProvider } from '../../providers/update/update';
import { DisplayItemsPage } from '../ReadPages/display-items/display-items';

/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  private items: Object;
  private update: boolean;
  private keys;
  private item;

  constructor(public navCtrl: NavController, public navParams: NavParams, public readProvider: ReadProvider, public updateProvider: UpdateProvider, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }

  ngOnInit(): void {
    this.item = this.navParams.get("item");
    this.update = this.navParams.get("update");
    this.readProvider.getUser(this.item._id).subscribe(
      response => {
        let items: any = response;
        this.items =
          {
            name: items.name,
            username: items.username,
            email: items.email,
            phone: items.phone,
            city: items.city,
            street: items.street,
            suite: items.suite
          }
          this.keys = Object.keys(this.items);
      }
    );
  }

  updateUser() {
    this.items["id"] = this.item._id;
    
    this.updateProvider.updateUser(this.items).subscribe(response => {
      let alert = this.alertCtrl.create({
        title: 'Update User',
        subTitle: 'User ' + this.items["name"] + ' was updated',
        cssClass: 'alert',
        buttons: [
          {
            text: 'OK',
            handler: () => {
              this.navCtrl.push(DisplayItemsPage);
            }
          }
        ]
      })
      alert.present();
    })
  }


}
