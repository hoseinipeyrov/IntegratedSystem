import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/_shared/_modules/material.module';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarHttpModule } from '@ngx-loading-bar/http';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarModule } from '@ngx-loading-bar/core';


import { SidenavComponent } from 'src/app/_shared/_components/sidenav/sidenav.component';
import { ToolbarComponent } from 'src/app/_shared/_components/toolbar/toolbar.component';

@NgModule({
  imports: [
    CommonModule, 
    MaterialModule,
    RouterModule,
    LoadingBarHttpModule,
    LoadingBarRouterModule,
    LoadingBarHttpClientModule,
    LoadingBarModule.forRoot()
  ],
  exports: [
    SidenavComponent, 
    ToolbarComponent, 
    MaterialModule,
  ],
  declarations: [
    SidenavComponent, 
    ToolbarComponent],
})
export class MenuModule { }
