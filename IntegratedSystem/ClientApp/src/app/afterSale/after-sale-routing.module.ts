import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehicleAcceptanceComponent } from './components/vehicle-acceptance/vehicle-acceptance.component';
import { DailyCapacityComponent } from './components/daily-capacity/daily-capacity.component';
import { AfterSaleComponent } from './after-sale.component';

const routes: Routes = [
  {
    path: '',
    component: AfterSaleComponent,
    children: [
      { path: 'vehicle-acceptance', component: VehicleAcceptanceComponent },
      { path: 'daily-capacity', component: DailyCapacityComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class AfterSaleRoutingModule { }
