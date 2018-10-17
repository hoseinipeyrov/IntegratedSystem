import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutomationComponent } from './automation.component';
import { DepartmentComponent } from './components/department/department.component';

const routes: Routes = [
  {
    path: '', 
    component: AutomationComponent,
    children: [
      { path:'department', component: DepartmentComponent}
    ]
  },
  { path: '**', redirectTo:'', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutomationRoutingModule { }
