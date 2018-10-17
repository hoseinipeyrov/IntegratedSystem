import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../_shared/shared.module';
import { PartSaleRoutingModule } from './part-sale-routing.module';

import { PartSaleComponent } from './part-sale.component';
import { InvoiceIssuanceComponent } from './components/invoice-issuance/invoice-issuance.component';
 
@NgModule({
  declarations: [
    PartSaleComponent,
    InvoiceIssuanceComponent,
  ],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    PartSaleRoutingModule,
  ],
})
export class PartSaleModule { }
