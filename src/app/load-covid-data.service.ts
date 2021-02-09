import { Injectable } from '@angular/core';
import { update } from './data-files/updates.json';
import { ontario } from './data-files/ontario.json';
import { ltcData } from './data-files/ltc.json';

@Injectable({
  providedIn: 'root'
})

/* 
  Canada Covid-19 Updates:
    - taken from https://health-infobase.canada.ca/covid-19/epidemiological-summary-covid-19-cases.html#a1
    - taken on Feb 8 (data updated Feb 7 @ 7:00PM)

  Ontario Covid-19 Status:
    - taken from https://covid-19.ontario.ca/#covidNumbersSection
    - taken on Feb 8 (data updated Feb 8 @ 10:30AM)
  
  Long-Term-Care Home Ontario Covid-19 Data:
    - taken from https://data.ontario.ca/dataset/long-term-care-home-covid-19-data/resource/0f8b343e-fc28-4ca5-9aab-c3a1d2c919f1
    - taken on Feb 8 (data updated Feb 8)
 */
export class LoadCovidDataService {

  constructor() { }

  canadaStatusObj : object = update;
  ontarioStatusObj : object = ontario;
  ltcDataObj : object = ltcData;

  loadCanadaStatusUpdate() : object {
    return this.canadaStatusObj;
  }

  loadOntarioCaseStatus() : object {
    return this.ontarioStatusObj;
  }

  loadLTCHomeData() : object {
    return this.ltcDataObj;
  }
}
