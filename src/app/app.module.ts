import { CountryListPage } from './../pages/country-list/country-list';
import { FilmDetailPage } from './../pages/film-detail/film-detail';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FirstPage } from '../pages/first/first';
import { PeopleServiceProvider } from '../providers/people-service/people-service';
import { HttpClientModule } from '@angular/common/http'; 
import { SearchPipe } from '../pipes/search/search';
import { SortPipe } from '../pipes/sort/sort';
import { SecondPage } from '../pages/second/second';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FirstPage,
    FilmDetailPage,
    CountryListPage,
    SearchPipe,
    SortPipe,
    SecondPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FirstPage,
    FilmDetailPage,
    CountryListPage,
    SecondPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PeopleServiceProvider
  ]
})
export class AppModule {}
