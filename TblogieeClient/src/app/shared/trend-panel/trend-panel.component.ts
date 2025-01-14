import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-trend-panel',
  imports: [CommonModule],
  templateUrl: './trend-panel.component.html',
  styleUrl: './trend-panel.component.scss',
})
export class TrendPanelComponent {
  hotTopics = [
    'Software Development',
    'Web Development',
    'Information Technology',
    'Science Now',
    'Artificial Intelligence',
    'Sysytem Design',
  ];
}
