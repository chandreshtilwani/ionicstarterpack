import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  @ViewChild('username') username;
  @ViewChild('password') password;


  constructor(private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }



  registerUser() {
    this.fire.auth.createUserWithEmailAndPassword(this.username.value, this.password.value)
      .then(data => {
        console.log('Response from firebase', data);
      })
      .catch(error => {
        console.log('Error from firebase', error);
      });
    console.log('User register with: ', this.username.value, this.password.value);

    // const alert = this.alertCtrl.create({
    //   title: 'Login alert!',
    //   subTitle: 'Login Successfully...' + this.uname.value,
    //   buttons: ['OK']
    // });

    // alert.present();
    // console.log(this.uname.value + ' ' + this.password.value);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
