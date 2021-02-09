import { Component, OnInit } from '@angular/core';
import { MessageShareService } from 'src/app/message-share.service';

@Component({
  selector: 'app-ltc-page',
  templateUrl: './ltc-page.page.html',
  styleUrls: ['./ltc-page.page.scss'],
})
export class LtcPagePage implements OnInit {

  constructor(private messageShare : MessageShareService) { }

  message : any;

  ngOnInit() {
    this.messageShare.sharedMessage.subscribe(
      message => this.message = message
    );
  }

  sendMessage() {
    this.messageShare.setMessage(this.message);
  }

}
