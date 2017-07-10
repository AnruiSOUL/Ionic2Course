import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeamsPage } from './teams.page';

@NgModule({
  declarations: [
    TeamsPage,
  ],
  imports: [
    IonicPageModule.forChild(TeamsPage),
  ],
  exports: [
    TeamsPage
  ]
})
export class TeamsPageModule {}
