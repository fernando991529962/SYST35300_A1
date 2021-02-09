import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageShareService } from '../message-share.service'; 

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private messageShare : MessageShareService, private router : Router) {}
  
  message : any;

  ngOnInit() {
    this.messageShare.sharedMessage.subscribe(
      message => this.message = message
    );
  }

  goLTCPage() {
    this.router.navigate(['ltc-page']).then(nav => {
      console.log(nav);
    }, err => {
      console.log(err);
    });
  }

}
