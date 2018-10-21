import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthGuard } from './_shared/_services/guard.service';

const appRouts: Routes =[
  //component:AppComponent 
  { path: '', redirectTo:'automation', pathMatch:'full', canActivate: [AuthGuard] },
  { path: 'after-sale', loadChildren: './afterSale/after-sale.module#AfterSaleModule', canActivate: [AuthGuard]  },
  { path: 'automation', loadChildren: './automation/automation.module#AutomationModule', canActivate: [AuthGuard] },
  { path: 'part-sale', loadChildren: './partSale/part-sale.module#PartSaleModule', canActivate: [AuthGuard] },
  { path: 'home', loadChildren: './home/home.module#HomeModule', canActivate: [AuthGuard]},
  { path: 'users', loadChildren: './account/account.module#AccountModule' },
  { path: '**', redirectTo:'home',pathMatch:'full', }
];

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRouts),
  ],
  providers: [ AuthGuard ],
})
export class AppModule { }
