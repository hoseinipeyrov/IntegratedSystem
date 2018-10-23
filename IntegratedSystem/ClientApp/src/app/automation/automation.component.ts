import { Component, OnInit } from '@angular/core';
import { AutomationService } from './services/automation.service';
import { Option } from '../_shared/_components/sidenav/sidenav.component';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-automation',
  template: '<app-sidenav [sideNavOptions]="options"></app-sidenav>'
})
export class AutomationComponent implements OnInit {

  constructor(
    public snackBar: MatSnackBar,
    private automationServices: AutomationService) { }

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
        let message:string = "";

        if (!error.error)
          message = error.error.message;

        else
          message = `ظاهراً خطایی رخ داده است. (کد خطا: ${error.status})`;


        this.snackBar.open(message,null,{ duration:3000, direction: 'rtl' });
      }
    );
  }

}
