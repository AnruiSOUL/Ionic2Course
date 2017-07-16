import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { MyTeamsPage, TournamentsPage, TeamDetailPage, TeamsPage, TeamHomePage, StandingsPage, GamePage} from "../pages/pages";
import { EliteApi } from '../shared/shared';

@NgModule({
  declarations: [
    MyApp, 
    MyTeamsPage,
    TournamentsPage, 
    TeamDetailPage,
    TeamsPage,
    TeamHomePage,
    StandingsPage,
    GamePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyTeamsPage,
    TournamentsPage,
    TeamDetailPage,
    TeamsPage,
    TeamHomePage,
    StandingsPage,
    GamePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    EliteApi,
    HttpModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
