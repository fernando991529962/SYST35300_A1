import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LtcPagePageRoutingModule } from './ltc-page-routing.module';

import { LtcPagePage } from './ltc-page.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LtcPagePageRoutingModule,
    ComponentsModule
  ],
  declarations: [LtcPagePage]
})
export class LtcPagePageModule {}
