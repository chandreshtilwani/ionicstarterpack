import { ChatwizardPage } from './../chatwizard/chatwizard';
import { FirstPage } from './../first/first';
import { HomePage } from './../home/home';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('username') username;
  @ViewChild('password') password;

  constructor(private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, public alertCtrl :AlertController) {
  }


  signInUser() {
    this.fire.auth.signInWithEmailAndPassword(this.username.value, this.password.value)
      .then(data => {
        console.log('response:', data);
        this.alert('Success you\'re logged in!');
        this.navCtrl.setRoot(ChatwizardPage);
      })
      .catch(error => {
        console.log('response error :', error);
        this.alert('Error: ' + error.message);
      });
  }

  alert(message: string) {
    const alert = this.alertCtrl.create({
      title: 'Login alert!',
      subTitle: message,
      buttons: ['OK']
    });

    alert.present();
    //console.log(this.uname.value + ' ' + this.password.value);
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
