import { Component, OnInit } from '@angular/core';
import { LoadCovidDataService } from 'src/app/load-covid-data.service';

@Component({
  selector: 'app-case-status',
  templateUrl: './case-status.component.html',
  styleUrls: ['./case-status.component.scss'],
})
export class CaseStatusComponent implements OnInit {

  constructor(private loadData : LoadCovidDataService) { }

  myUpdate: object = {};

  ngOnInit() {
    this.myUpdate = this.loadData.loadUpdate();
  }

}
