import { ChatwizardPage } from './../pages/chatwizard/chatwizard';
import { RegisterPage } from './../pages/register/register';
import { LoginPage } from './../pages/login/login';
import { CountryListPage } from './../pages/country-list/country-list';
import { FilmDetailPage } from './../pages/film-detail/film-detail';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FirstPage } from '../pages/first/first';
import { PeopleServiceProvider } from '../providers/people-service/people-service';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from '../pipes/search/search';
import { SortPipe } from '../pipes/sort/sort';
import { SecondPage } from '../pages/second/second';
import { IntroPage } from '../pages/intro/intro';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

const firebaseAuth = {
  apiKey: "AIzaSyAa-5RDSBWJULlXQXTxZ-SSAbBZg8wyhSs",
  authDomain: "test-project-63b65.firebaseapp.com",
  databaseURL: "https://test-project-63b65.firebaseio.com",
  projectId: "test-project-63b65",
  storageBucket: "test-project-63b65.appspot.com",
  messagingSenderId: "381543949578"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FirstPage,
    FilmDetailPage,
    CountryListPage,
    SecondPage,
    SearchPipe,
    SortPipe,
    IntroPage,
    LoginPage,
    RegisterPage,ChatwizardPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FirstPage,
    FilmDetailPage,
    CountryListPage,
    SecondPage,
    IntroPage, LoginPage,RegisterPage,ChatwizardPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    PeopleServiceProvider
  ]
})
export class AppModule { }
