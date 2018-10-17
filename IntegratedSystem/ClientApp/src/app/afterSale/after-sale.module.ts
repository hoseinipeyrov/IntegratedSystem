import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/_shared/shared.module';
import { AfterSaleRoutingModule } from './after-sale-routing.module';

import { AfterSaleComponent } from './after-sale.component';
import { VehicleAcceptanceComponent } from './components/vehicle-acceptance/vehicle-acceptance.component';
import { DailyCapacityComponent } from './components/daily-capacity/daily-capacity.component';
import { InsertEditDialogComponent } from './components/daily-capacity/insert-edit-dialog/insert-edit-dialog.component';

@NgModule({
  declarations: [
    AfterSaleComponent,
    VehicleAcceptanceComponent,
    DailyCapacityComponent,
    InsertEditDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    AfterSaleRoutingModule
  ],
  entryComponents: [
    DailyCapacityComponent, 
    InsertEditDialogComponent
  ],
  providers: [],
})
export class AfterSaleModule { }
