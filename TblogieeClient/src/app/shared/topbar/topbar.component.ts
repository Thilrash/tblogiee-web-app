import { Component } from '@angular/core';
import { NotificationCardComponent } from '../notification-card/notification-card.component';

@Component({
  selector: 'app-topbar',
  imports: [NotificationCardComponent],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss',
})
export class TopbarComponent {
  userFullName = 'John Doe';
  showNotification = false;

  toggleNotification() {
    this.showNotification = !this.showNotification;
  }
}
