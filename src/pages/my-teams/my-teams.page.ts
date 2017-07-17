import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { TournamentsPage, TeamHomePage } from "../pages";
import { EliteApi } from "../../shared/shared";
/**
 * Generated class for the MyTeamsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-my-teams',
  templateUrl: 'my-teams.html',
})
export class MyTeamsPage {

  favorites = [

  ];
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public eliteApi: EliteApi,
              public loadingController: LoadingController) {
  }

  favoriteTapped($event, favorite){
    let loader = this.loadingController.create({
      content: 'Getting data...',
      dismissOnPageChange: true
    });
    loader.present();
    this.eliteApi.getTournamentData(favorite.tournamentId)
        .subscribe(t => this.navCtrl.push(TeamHomePage, favorite.team));
  }
  
  goToTournaments(){
    this.navCtrl.push(TournamentsPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MyTeamsPage');
  }

}
