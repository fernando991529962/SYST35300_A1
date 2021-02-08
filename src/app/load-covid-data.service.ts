import { Injectable } from '@angular/core';
import { update } from './data-files/updates.json';

@Injectable({
  providedIn: 'root'
})
export class LoadCovidDataService {

  constructor() { }

  updateObj = update;

  loadUpdate(): object {
    return this.updateObj;
  }
}
