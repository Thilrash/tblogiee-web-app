import { Component } from '@angular/core';
import { TopbarComponent } from '../shared/topbar/topbar.component';
import { ProfilePanelComponent } from '../shared/profile-panel/profile-panel.component';

@Component({
  selector: 'app-home',
  imports: [TopbarComponent, ProfilePanelComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
