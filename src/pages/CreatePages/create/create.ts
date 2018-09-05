import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { User } from '../../../models/user';
import { CreateProvider } from '../../../providers/create/create';
import { HomePage } from '../../home/home';

/**
 * Generated class for the CreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-create',
  templateUrl: 'create.html',
})
export class CreatePage {

  private user: User = new User();

  constructor(public navCtrl: NavController, public navParams: NavParams, private createProvider: CreateProvider, private alertCtrl: AlertController) {
  }

  createUser() {
    this.createProvider.createUser(this.user).subscribe(
      response => {
        let alert = this.alertCtrl.create({
          title: 'Create User',
          subTitle: 'User ' + this.user.name + ' was created',
          cssClass: 'alert',
          buttons: [
            {
              text: 'OK',
              handler: () => {
                this.navCtrl.push(HomePage);
              }
            }
          ]
        })
        alert.present();
      }
    );
    
  }

}
