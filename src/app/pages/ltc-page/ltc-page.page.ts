import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageShareService } from 'src/app/message-share.service';

@Component({
  selector: 'app-ltc-page',
  templateUrl: './ltc-page.page.html',
  styleUrls: ['./ltc-page.page.scss'],
})
export class LtcPagePage implements OnInit {

  ltcData : object;
  message : any;

  constructor(private messageShare : MessageShareService, private router : Router) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.ltcData = this.router.getCurrentNavigation().extras.state.myLtcData;
    }
   }

  ngOnInit() {
    this.messageShare.sharedMessage.subscribe(
      message => this.message = message
    );
  }

  sendMessage() {
    this.messageShare.setMessage(this.message);
  }
}
