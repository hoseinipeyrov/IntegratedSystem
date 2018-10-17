import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartSaleComponent } from './part-sale.component';
import { InvoiceIssuanceComponent } from './components/invoice-issuance/invoice-issuance.component';

const routes: Routes = [
  {
    path: '',
    component: PartSaleComponent,
    children: [
      { path: 'invoice-issuance', component: InvoiceIssuanceComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class PartSaleRoutingModule { }
