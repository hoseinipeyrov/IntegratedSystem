import { AccountComponent } from './account.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../_shared/shared.module';
import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './components/login/login.component';

import { AuthenticationService } from '../_shared/_services/authentication.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    AccountRoutingModule
  ],
  declarations: [
    AccountComponent,
    LoginComponent
  ],
  providers: [
    AuthenticationService,
  ]
})
export class AccountModule { }
