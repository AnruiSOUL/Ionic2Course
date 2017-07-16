import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';

import { TeamsPage } from "../pages";
import { EliteApi } from '../../shared/shared';

/**
 * Generated class for the TournamentsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html',
})
export class TournamentsPage {

  tournaments: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public eliteApi: EliteApi,
              public loadingController: LoadingController) {}

  itemTapped($event, tourney){
    this.navCtrl.push(TeamsPage, tourney);
  }
  ionViewDidLoad() {
    let loader = this.loadingController.create({
      content: 'Gettting tournaments...',
      spinner:'dots'
    });

    loader.present().then(() => {
      this.eliteApi.getTournments().then(data => 
        this.tournaments = data);
        loader.dismiss();
    })
    
  }

}
