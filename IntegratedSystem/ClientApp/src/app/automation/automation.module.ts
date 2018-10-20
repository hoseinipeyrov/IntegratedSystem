import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../_shared/shared.module';
import { AutomationRoutingModule } from './automation-routing.module';

import { AutomationComponent } from './automation.component';
import { DepartmentComponent } from './components/department/department.component';
import { AutomationService } from './services/automation.service';
import { AuthenticationService } from '../_shared/_services/authentication.service';

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
  providers:[
    AutomationService
  ],
  exports:[]
})
export class AutomationModule { }
