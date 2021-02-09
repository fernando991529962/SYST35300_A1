import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LtcPagePageRoutingModule } from './ltc-page-routing.module';

import { LtcPagePage } from './ltc-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LtcPagePageRoutingModule
  ],
  declarations: [LtcPagePage]
})
export class LtcPagePageModule {}
