import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController } from 'ionic-angular';
import { PeopleServiceProvider } from '../../providers/people-service/people-service';

/**
 * Generated class for the CountryListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-country-list',
  templateUrl: 'country-list.html',
})
export class CountryListPage {
  countries: string[];
  errorMessage: string;
  descending: boolean = false;
  order: number;
  column: string = 'name';

  constructor(public navCtrl: NavController, public navParams: NavParams, public peopleService: PeopleServiceProvider, public loadCtrl: LoadingController) {

  }

  ionViewDidLoad() {
    this.getCountryList();
  }

  getCountryList() {
    let loading = this.loadCtrl.create({
      content: 'Loading Please Wait...'
    });

    loading.present();

    // setTimeout(() => {
    //   loading.dismiss();
    // }, 2000);

    this.peopleService.getCountryList().subscribe(
      countries => this.countries = countries,
      error => this.errorMessage = <any>error
    );

    loading.dismiss();
  }
  
  sort() {
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }


}
