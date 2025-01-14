import { Component } from '@angular/core';
import { TopbarComponent } from '../shared/topbar/topbar.component';
import { ProfilePanelComponent } from '../shared/profile-panel/profile-panel.component';
import { PostComponent } from '../shared/post/post.component';
import { TrendPanelComponent } from '../shared/trend-panel/trend-panel.component';

@Component({
  selector: 'app-home',
  imports: [
    TopbarComponent,
    ProfilePanelComponent,
    PostComponent,
    TrendPanelComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  posts = [
    {
      title: 'What is Lorem Ipsum?',
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsumhas been the industry's standard dummy text ever since the 1500s, when an unknown printer. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsumhas been the industry's standard dummy text ever since the 1500s, when an unknown printer. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsumhas been the industry's standard dummy text ever since the 1500s, when an unknown printer.\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsumhas been the industry's standard dummy text ever since the 1500s, when an unknown printer. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsumhas been the industry's standard dummy text ever since the 1500s, when an unknown printer. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      author: 'Jack Reacher',
      authorId: 'jackreacher@hotmail.com',
      date: new Date(),
      likes: 125,
      views: 6286,
    },
    {
      title: 'What is Lorem Ipsum?',
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsumhas been the industry's standard dummy text ever since the 1500s, when an unknown printer.\n Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsumhas been the industry's standard dummy text ever since the 1500s, when an unknown printer.",
      author: 'Tom Rick',
      authorId: 'tomrick@hotmail.com',
      date: new Date(),
      likes: 1355,
      views: 13686,
    },
    {
      title: 'What is Lorem Ipsum?',
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsumhas been the industry's standard dummy text ever since the 1500s, when an unknown printer. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsumhas been the industry's standard dummy text ever since the 1500s, when an unknown printer. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsumhas been the industry's standard dummy text ever since the 1500s, when an unknown printer.\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsumhas been the industry's standard dummy text ever since the 1500s, when an unknown printer. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsumhas been the industry's standard dummy text ever since the 1500s, when an unknown printer. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      author: 'Jack Reacher',
      authorId: 'jackreacher@hotmail.com',
      date: new Date(),
      likes: 125,
      views: 6286,
    },
  ];
}
