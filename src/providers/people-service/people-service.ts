import { LoadingController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { map, catchError } from 'rxjs/operators';

/*
  Generated class for the PeopleServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class PeopleServiceProvider {
  private apiUrl = "https://restcountries.eu/rest/v2/all";
  films: Observable<any>;

  constructor(public http: HttpClient, public loadCtrl: LoadingController) {
    console.log('Hello PeopleServiceProvider Provider');

  }

  // Fetch Random people data
  getRemoteDataThroughPromise() {
    return new Promise(resolve => {
      this.http.get('https://randomuser.me/api/?results=10').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  // Fetch Film data
  getRemoteDataThroughObservables(): Observable<any> {
    this.films = this.http.get('https://swapi.co/api/films');
    return this.films;
  }

  // Fetch country data
  getCountryList(): Observable<string[]> {
    return this.http.get(this.apiUrl).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );

  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const err = error || '';
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }


  getRemoteData() {
    this.http.get('https://www.reddit.com/r/gifs/top/.json?limit=105sort=hot').subscribe(data => {
      console.log(data);
    });
  }
}