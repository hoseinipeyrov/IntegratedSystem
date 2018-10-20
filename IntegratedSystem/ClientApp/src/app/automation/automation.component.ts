import { Component, OnInit } from '@angular/core';
import { AutomationService } from './services/automation.service';
import { Option } from '../_shared/_components/sidenav/sidenav.component';

@Component({
  selector: 'app-automation',
  template: '<app-sidenav [sideNavOptions]="options"></app-sidenav>'
})
export class AutomationComponent implements OnInit {

  constructor(private automationServices: AutomationService) { }

  options:Option = {
    appTitle: '',
    toolbarTitle: '',
    menus:null
  }

  ngOnInit() {
    this.automationServices.getMenus()
    .subscribe(
      result => {
        this.options = result;
      },
      error =>{
        console.log(error);
      }
    );
  }

}
