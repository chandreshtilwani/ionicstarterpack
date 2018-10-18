import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatwizardPage } from './chatwizard';

@NgModule({
  declarations: [
    ChatwizardPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatwizardPage),
  ],
})
export class ChatwizardPageModule {}
