import { Component } from '@angular/core';
import { TopbarComponent } from '../shared/topbar/topbar.component';

@Component({
  selector: 'app-home',
  imports: [TopbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
