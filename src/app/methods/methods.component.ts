import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
  AnimationMetadata
} from '@angular/animations';
import { StatsBannerComponent } from '../stats-banner/stats-banner.component';

interface Service {
  name: string;
  iconClass: string;
}

@Component({
  selector: 'app-methods',
  standalone: true,
  imports: [CommonModule,    StatsBannerComponent,],
 
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(50px)' }),  // Départ plus bas
        animate('0.8s cubic-bezier(0.3, 1.2, 0.3, 1)', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),

    trigger('staggerFade', [
      transition(':enter', [
        query('div', [
          style({ opacity: 0, transform: 'scale(0.8)' }),  // Ajout d'un léger zoom-out
          stagger(200, animate('0.5s ease-out', style({ opacity: 1, transform: 'scale(1)' })))
        ], { optional: true })
      ])
    ])
  ],
  templateUrl:'./methods.component.html',

})
export class MethodsComponent {
  //notre tableau d objets Services
  services: Service[] = [
    { name: 'Sécurité', iconClass: 'fas fa-shield' },
    { name: 'Développement', iconClass: 'fas fa-code' },
    { name: 'CRM', iconClass: 'fas fa-cube' },
    { name: 'Méthodologie', iconClass: 'fas fa-sitemap' },
    { name: 'Qualité', iconClass: 'fas fa-gem' },
    { name: 'Technologie Web', iconClass: 'fas fa-laptop-code' },
    { name: 'Bases de données', iconClass: 'fas fa-database' },
    { name: 'Data Warehouse', iconClass: 'fas fa-warehouse' },

  ];

}
