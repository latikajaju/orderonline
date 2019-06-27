import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'orderonline';
  cards: any[] = [
    {
      img: '../../assets/img/f1.png',
      title:  'card 1',
      desc: 'sample text for card 1',
      btn: 'About'
    },
    {
      img: '../../assets/img/f2.png',
      title: 'card 2',
      desc: 'sample text for card 2',
      btn: 'Services'
    },
    {
      img: '../../assets/img/f1.png',
      title: 'card 3',
      desc: 'sample text for card 3',
      btn: 'Contact'
    },
  ];
}
