import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MY-MEDIA-MONITOR-FRONT';

  constructor(
    public userSvc : UserService
  ){}

  logoutAction() {
    this.userSvc.logout();
  }
}
