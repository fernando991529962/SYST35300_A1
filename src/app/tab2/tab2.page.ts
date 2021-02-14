import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { LoadCovidDataService } from '../load-covid-data.service';
import { MessageShareService } from '../message-share.service'; 

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private messageShare : MessageShareService, private loadData : LoadCovidDataService, private router : Router) {}
  
  sendData : NavigationExtras;
  message : any;
  ltcData : object = {};


  ngOnInit() {
    this.ltcData = this.loadData.loadLTCHomeData();

    this.messageShare.sharedMessage.subscribe(
      message => this.message = message
    );
  }

  goLTCPage(dailyLtcData) {
    this.sendData = { state: { myLtcData : dailyLtcData } };

    this.router.navigate(['ltc-page'], this.sendData).then(nav => {
      console.log(nav);
    }, err => {
      console.log(err);
    });
  }

}
