import { Component } from '@angular/core';

@Component({
  selector: 'app-notification-card',
  imports: [],
  templateUrl: './notification-card.component.html',
  styleUrl: './notification-card.component.scss',
})
export class NotificationCardComponent {
  notifications = [
    {
      id: 1,
      icon: 'bi-star',
      title: 'John Smith has gave you a prority',
      date: '16:35 2021-01-01',
    },
    {
      id: 2,
      icon: 'bi-star',
      title: 'Jade Smith has gave you a prority',
      date: '16:35 2021-01-01',
    },
    {
      id: 3,
      icon: 'bi-star',
      title: 'John Doe has gave you a prority',
      date: '16:35 2021-01-01',
    },
    {
      id: 4,
      icon: 'bi-star',
      title: 'Adam Smith has gave you a prority',
      date: '16:35 2021-01-01',
    },
    {
      id: 5,
      icon: 'bi-star',
      title: 'John Smith has gave you a prority',
      date: '16:35 2021-01-01',
    },
  ];
}
