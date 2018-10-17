import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../_shared/shared.module';
import { AutomationRoutingModule } from './automation-routing.module';

import { AutomationComponent } from './automation.component';
import { DepartmentComponent } from './components/department/department.component';

@NgModule({
  declarations: [
    AutomationComponent,
    DepartmentComponent
  ],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    AutomationRoutingModule
  ],
  exports:[]
})
export class AutomationModule { }
