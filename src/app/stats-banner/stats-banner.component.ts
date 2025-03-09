import { Component } from '@angular/core';



@Component({
  selector: 'app-stats-banner',
  standalone: true,
  templateUrl: './stats-banner.component.html',
  styleUrls: ['./stats-banner.component.css']
})
export class StatsBannerComponent {
  stats = [
    { icon: 'fa-chart-line', value: 20, label: 'Fonctionnalités', animatedValue: 0 },
    { icon: 'fa-users', value: 4, label: 'Partenaires', animatedValue: 0 },
    { icon: 'fa-briefcase', value: 10, label: 'Projets réalisés', animatedValue: 0 },
    { icon: 'fa-star', value: 200, label: 'Feedback', animatedValue: 0 }
  ];

  ngOnInit() {
    this.animateNumbers();
  }
//fonction qui gere l animation des chiffres
  animateNumbers() {
    this.stats.forEach(stat => {
      let start = 0;
      const end = stat.value;
      const duration = 1000; // Animation en 2 secondes
      const interval = 20;
      const step = (end - start) / (duration / interval);

      const counter = setInterval(() => {
        start += step;
        stat.animatedValue = Math.floor(start);
        if (start >= end) {
          stat.animatedValue = end;
          clearInterval(counter);
        }
      }, interval);
    });
  }
}
