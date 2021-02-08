import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaseStatusComponent } from './case-status/case-status.component';
import { CovidUpdatesComponent } from './covid-updates/covid-updates.component';



@NgModule({
  declarations: [
    CaseStatusComponent, 
    CovidUpdatesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CaseStatusComponent, 
    CovidUpdatesComponent
  ]
})
export class ComponentsModule { }
