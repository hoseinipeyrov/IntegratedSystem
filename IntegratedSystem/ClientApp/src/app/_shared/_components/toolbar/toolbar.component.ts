import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AuthenticationService } from 'src/app/_shared/_services/authentication.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  providers: [AuthenticationService]
})
export class ToolbarComponent implements OnInit {

  @Output() sidenaveToggle = new EventEmitter<void>()
  @Input() title: string;
  @Input() showMenuButton: any[];

  constructor(private auth: AuthenticationService) { }
  currentUser;

  ngOnInit() {
    this.currentUser = this.auth.User
  }

  onLogout() {
    this.auth.logout();
  }
}
