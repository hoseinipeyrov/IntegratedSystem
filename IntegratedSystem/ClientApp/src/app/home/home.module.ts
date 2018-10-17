import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../_shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { HomeService } from './services/home.service';
import { AuthenticationService } from '../_shared/_services/authentication.service';
import { TilesComponent } from './components/tiles/tiles.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    TilesComponent
  ],
  providers: [
    AuthenticationService,
    HomeService
  ]
})
export class HomeModule { }
