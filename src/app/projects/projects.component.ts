import { Component } from '@angular/core';
import { trigger, transition, style, animate, state, query, stagger } from '@angular/animations';

interface ProjetsCard {
  id: string;
  title: string;
  items: string[];
  iconClass: string;
  bgColor: string;
  numberColor: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],

  // animations: [
  //   // Animation de fade-in avec stagger effect
  //   trigger('staggerFadeIn', [
  //     transition(':enter', [
  //       query('.card', [
  //         style({ opacity: 0, transform: 'translateY(50px)' }),
  //         stagger(150, [
  //           animate('700ms cubic-bezier(0.68, -0.55, 0.27, 1.55)',
  //             style({ opacity: 1, transform: 'translateY(0)' })
  //           )
  //         ])
  //       ])
  //     ])
  //   ]),
  //
  //   // Animation de flip 3D
  //   trigger('flipCard', [
  //     state('default', style({ transform: 'rotateY(0)' })),
  //     state('flipped', style({ transform: 'rotateY(180deg)' })),
  //     transition('default <=> flipped', [
  //       animate('600ms ease-in-out')
  //     ])
  //   ])
  // ],
})

export class ProjectsComponent {
  serviceCards: ProjetsCard[] = [
    {
      id: '01',
      title: 'SÉCURITÉ',
      items: [
        'Gestion du Fichier Electoral du Sénégal (DGE)',
        'Gestion des cartes d\'Identité Nationale (CNI)',
        'Gestion des cartes professionnelles (HCR)'
      ],
      iconClass: 'fas fa-shield-alt',
      bgColor: 'bg-purple-600',
      numberColor: 'bg-purple-600',
    },
    {
      id: '02',
      title: 'APPLICATIONS',
      items: [
        'Système de Lecture et d\'Authentification Biométrique (SYLAB)',
      ],
      iconClass: 'fas fa-network-wired',
      bgColor: 'text-purple-700',
      numberColor: 'bg-purple-700'
    },
    {
      id: '03',
      title: 'SANTÉ',
      items: [
        'Agence de la Couverture de Maladie Universelle (CMU)'
      ],
      iconClass: 'fas fa-heartbeat',
      bgColor: 'text-purple-600',
      numberColor: 'bg-purple-600'
    },
    {
      id: '04',
      title: 'FINANCE',
      items: [
        'Exploitation et Maintenance du logiciel de gestion de la Solde - Ministère de l\'Economie et des Finances',
        'Refonte du Système de Gestion des Salaires des Etablissements Publics (DTAI)'
      ],
      iconClass: 'fas fa-coins',
      bgColor: 'text-purple-700',
      numberColor: 'bg-purple-700'
    }
  ];

  // flippedStates: Record<string, string> = {};
  //
  // constructor() {
  //   this.serviceCards.forEach(card => this.flippedStates[card.id] = 'default');
  // }
  //
  // toggleFlip(cardId: string): void {
  //   this.flippedStates[cardId] = this.flippedStates[cardId] === 'default' ? 'flipped' : 'default';
  // }
}
