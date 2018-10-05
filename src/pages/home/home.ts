import { FirstPage } from './../first/first';
import { FilmDetailPage } from './../film-detail/film-detail';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { PeopleServiceProvider } from './../../providers/people-service/people-service';
import { CountryListPage } from '../country-list/country-list';
import { SecondPage } from '../second/second';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('username') uname;
  @ViewChild("pwd") password;

  
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public peopleService: PeopleServiceProvider, public httpClient: HttpClient) {
  
  }

  signIn() {
    // const alert = this.alertCtrl.create({
    //   title: 'Login alert!',
    //   subTitle: 'Login Successfully...' + this.uname.value,
    //   buttons: ['OK']
    // });

    // alert.present();
    // console.log(this.uname.value + ' ' + this.password.value);
    this.navCtrl.push(FirstPage);
  }

  showCountryData(){
    this.navCtrl.push(CountryListPage);
  }

  showFilmData(){
    this.navCtrl.push(SecondPage);
  }

  showPeopleData(){
    this.navCtrl.push(FirstPage);
  }
  
}
