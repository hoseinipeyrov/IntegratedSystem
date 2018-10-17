import { Component, OnInit } from '@angular/core';
import { HomeService } from './services/home.service';
import { Option } from '../_shared/_components/sidenav/sidenav.component';

@Component({
  selector: 'app-home',
  template: `<app-sidenav [sideNavOptions]="options"></app-sidenav>`,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService) { }

  options: Option = {
    appTitle: "",
    toolbarTitle: "",
    menus: null
  };

  ngOnInit() {
    this.homeService.GetAgentInfo()
      .subscribe(
        result => {
          this.options = result;
        },
        error => {
          console.log(error);
        }
      );
  }
}
