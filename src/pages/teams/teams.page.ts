import { Component } from '@angular/core';
import { LoadingController, IonicPage, NavController, NavParams } from 'ionic-angular';

import * as _ from'Lodash';
import { TeamHomePage } from '../pages';
import { EliteApi } from '../../shared/shared';

/**
 * Generated class for the TeamsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {
  
  private allTeams: any;
  private allTeamDivisions: any;
  teams = [];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public eliteApi: EliteApi,
              public loadingController: LoadingController) {
  }

  ionViewDidLoad() {
    let selectedTourney = this.navParams.data;

    let loader = this.loadingController.create({
      content: 'Getting data...'
    });

    loader.present().then(() => {
      this.eliteApi.getTournamentData(selectedTourney.id).subscribe(data =>{
        this.allTeams = data.teams;
        this.allTeamDivisions = 
          _.chain(data.teams)
            .groupBy('division')
            .toPairs()
            .map(item => _.zipObject(['divisionName', 'divisionTeams'], item))
            .value();
        this.teams = this.allTeamDivisions;
        console.log('division teams', this.teams);
        loader.dismiss();
      });
    });

  }

  itemTapped($event, team) {
    this.navCtrl.push(TeamHomePage, team)
  }
}
