import { PeopleServiceProvider } from './../../providers/people-service/people-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { FilmDetailPage } from '../film-detail/film-detail';

/**
 * Generated class for the SecondPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-second',
  templateUrl: 'second.html',
})
export class SecondPage {
  films: Observable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public peopleService: PeopleServiceProvider, public loadCtrl : LoadingController) {

    let loading = this.loadCtrl.create({
      content: 'Loading Please Wait...'
    });

    loading.present();

    this.peopleService.getRemoteDataThroughObservables().subscribe((products: any) => {
      this.films = products.results;
      console.log("film data: " + this.films);
    });

    loading.dismiss();

    //this.films = this.httpClient.get('https://swapi.co/api/films');  
  }

  filmDetail(film) {
    this.navCtrl.push(FilmDetailPage, { films: film });
  }

  popThis() {
    this.navCtrl.pop(); // Pop the activity top of the stack
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecondPage');
  }

}
