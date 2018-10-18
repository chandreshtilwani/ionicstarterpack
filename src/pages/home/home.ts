import { FirstPage } from './../first/first';
import { FilmDetailPage } from './../film-detail/film-detail';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { PeopleServiceProvider } from './../../providers/people-service/people-service';
import { CountryListPage } from '../country-list/country-list';
import { SecondPage } from '../second/second';
import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';
import { ChatwizardPage } from '../chatwizard/chatwizard';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, public peopleService: PeopleServiceProvider, public httpClient: HttpClient) {
    
  }

  registerUser() {
    this.navCtrl.push(RegisterPage);
  }

  logIn() {
    this.navCtrl.push(LoginPage);
  }

  showCountryData() {
    this.navCtrl.push(CountryListPage);
  }

  showFilmData() {
    this.navCtrl.push(SecondPage);
  }

  showPeopleData() {
    this.navCtrl.push(FirstPage);
  }

  showChatModule() {
    this.navCtrl.push(ChatwizardPage);
  }
}
