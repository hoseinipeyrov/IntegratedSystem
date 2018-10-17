import { LoginComponent } from './components/login/login.component';
import { AccountComponent } from './account.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', 
    component: AccountComponent, 
    children:[
      { path: 'login', component: LoginComponent },
      { path: 'register', redirectTo:'', pathMatch:'full'}
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
