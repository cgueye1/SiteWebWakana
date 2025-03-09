//components/news/news.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  standalone: true,
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  newsItems = [
    {
      title: 'Titre de l\'actualité 1',
      date: '2024',
      image: 'assets/images/news1.jpg'
    },
    // ... autres actualités
  ];
}
