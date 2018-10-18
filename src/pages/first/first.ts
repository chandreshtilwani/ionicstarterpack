import { AngularFireAuth } from '@angular/fire/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { PeopleServiceProvider } from '../../providers/people-service/people-service';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the FirstPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-first',
  templateUrl: 'first.html',
})
export class FirstPage {
  people: any;
  email: string;
 
  constructor(private fire: AngularFireAuth, public navCtrl: NavController, public peopleService: PeopleServiceProvider, public httpClient: HttpClient, public loadCtrl: LoadingController) {
    debugger;
    this.email = this.fire.auth.currentUser ? this.fire.auth.currentUser.email : '';
    let loading = this.loadCtrl.create({
      content: 'Loading Please Wait...'
    });

    loading.present();

    this.people = this.peopleService.getRemoteDataThroughPromise();
    
    loading.dismiss();
    console.log("People data: " + this.people);

    //this.peopleService.getRemoteData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirstPage');
  }

 
  
  popThis() {
    this.navCtrl.pop(); // Pop the activity top of the stack
  }

}
