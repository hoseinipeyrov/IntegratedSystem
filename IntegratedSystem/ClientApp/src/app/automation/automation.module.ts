import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../_shared/shared.module';
import { AutomationRoutingModule } from './automation-routing.module';

import { AutomationComponent } from './automation.component';
import { DepartmentComponent } from './components/department/department.component';
import { AutomationService } from './services/automation.service';
import { AuthenticationService } from '../_shared/_services/authentication.service';
import { ComposeComponent } from './components/compose/compose.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { SentComponent } from './components/sent/sent.component';
import { DraftsComponent } from './components/drafts/drafts.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AutomationComponent,
    DepartmentComponent,
    ComposeComponent,
    InboxComponent,
    SentComponent,
    DraftsComponent,
    SearchComponent
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
