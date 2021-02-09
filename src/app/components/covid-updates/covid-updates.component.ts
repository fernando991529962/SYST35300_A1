import { Component, OnInit } from '@angular/core';
import { LoadCovidDataService } from 'src/app/load-covid-data.service';

@Component({
  selector: 'app-covid-updates',
  templateUrl: './covid-updates.component.html',
  styleUrls: ['./covid-updates.component.scss'],
})
export class CovidUpdatesComponent implements OnInit {
  
  constructor(private loadData : LoadCovidDataService) { }

  canadaStatusUpdate: object = {};

  ngOnInit() {
    this.canadaStatusUpdate = this.loadData.loadCanadaStatusUpdate();
  }

}
