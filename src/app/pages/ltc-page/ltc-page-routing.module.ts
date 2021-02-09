import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LtcPagePage } from './ltc-page.page';

const routes: Routes = [
  {
    path: '',
    component: LtcPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LtcPagePageRoutingModule {}
