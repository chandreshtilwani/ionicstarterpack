import { PeopleServiceProvider } from './../../providers/people-service/people-service';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

/**
 * Generated class for the ChatwizardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chatwizard',
  templateUrl: 'chatwizard.html',
})


export class ChatwizardPage {
  message: string;
  isShow: boolean = false;
  questions: any;

  @ViewChild('chatText') chatText;
  @ViewChild(Slides) slides: Slides;

  messages = [
    {
      message: 'We have made an automatic chat function, so we can talk with',
      userInput: false
    },
    {
      message: 'We need to ask you some questions to make a suggestion to you',
      userInput: false
    },
    {
      message: 'You need not worry about the details, we only need a simplified version of your day to be able to help.',
      userInput: false
    },
    {
      message: 'What year are you born?',
      userInput: false
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: PeopleServiceProvider, public peopleService: PeopleServiceProvider) {
  }

  saveUserResponse() {
    this.messages.push({ message: this.message, userInput: true });
    this.message = '';
    
    this.goToNextSlide();

    setTimeout(() => {
      this.messages.push({ message: 'Are you a man or a woman?', userInput: false });
    }, 1500);

    this.peopleService.getDietGroupList();

    //When you go to work or school?
  }

  goToNextSlide() {
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
  }

  ionViewDidLoad() {
    this.slides.lockSwipes(true);
    //console.log('ionViewDidLoad ChatwizardPage');

    //   this.service.getQuestionsList().then((data) => {
    //     data.map((question) => {
    //         return question;
    //     });    

    //     this.questions = data;

    // });

    // this.service.getQuestionList().then((data) => {
    //   debugger;
    //   data.map((question) => {
    //     let originalOrder = question.answers;
    //     return question;
    //   });

    //   this.questions = data;
    // });

    
  }

}
