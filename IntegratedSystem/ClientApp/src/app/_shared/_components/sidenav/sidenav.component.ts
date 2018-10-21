import { Component, OnInit, NgZone, ViewChild, Input } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatDrawer } from '@angular/material';
import { Router } from '@angular/router';


const SMALL_SCREEN_SIZE = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${SMALL_SCREEN_SIZE}px)`);
  
  @Input() sideNavOptions: Option;

  constructor(zone: NgZone, private routers: Router) { 

    this.mediaMatcher.addListener(mql => 
      zone.run(() => this.mediaMatcher = mql));
  }

  @ViewChild(MatDrawer) drawer: MatDrawer;

  ngOnInit() {

    this.routers.events.subscribe(()=>{
      if (this.isScreenSmall()){
        this.drawer.close();
      }
    });

  }

  isScreenSmall():boolean{
    return this.mediaMatcher.matches;
  }

}

export interface Option{
  appTitle: string;
  toolbarTitle: string;
  menus: Menus[];
}

export interface Menus{
  title: string;
  menuItems: MenuItems[];
}

export interface MenuItems {
  title : string;
  link : string;
  status: boolean;
  icon: string;
}
