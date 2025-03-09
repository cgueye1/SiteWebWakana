// app/realisations/realisations.component.ts
import { Component, signal, ViewChild, ElementRef, AfterViewInit, HostListener, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';
import { interval, Subscription } from 'rxjs';

interface Realisation {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  date: string;
}

@Component({
  selector: 'app-realisations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './realisations.component.html',
  styleUrls: ['./realisations.component.css'],
 /*animations: [
    trigger('slideAnimation', [
      transition('* => *', [
        style({ opacity: 0.5, transform: 'translateX(10px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ])
  ]*/
})
export class RealisationsComponent implements AfterViewInit, OnInit, OnDestroy {
  @ViewChild('carouselContainer') carouselContainer!: ElementRef;

  realisations: Realisation[] = [
    {
      id: 1,
      title: "Portfolio E-commerce",
      description: "Site e-commerce complet avec gestion de panier et paiement sécurisé",
      imageUrl: "/api/placeholder/600/400",
      technologies: ["Angular", "Node.js", "MongoDB", "Stripe"],
      date: "Juin 2024"
    },
    {
      id: 2,
      title: "Application de Gestion de Tâches",
      description: "Application permettant de gérer des projets et suivre l'avancement des tâches",
      imageUrl: "/api/placeholder/600/400",
      technologies: ["React", "Firebase", "TailwindCSS"],
      date: "Avril 2024"
    },
    {
      id: 3,
      title: "Dashboard Analytics",
      description: "Tableau de bord pour visualiser les données d'une entreprise en temps réel",
      imageUrl: "/api/placeholder/600/400",
      technologies: ["Angular", "D3.js", "Express", "PostgreSQL"],
      date: "Février 2024"
    },
    {
      id: 4,
      title: "Site Vitrine Restaurant",
      description: "Site responsive pour un restaurant avec réservation en ligne",
      imageUrl: "/api/placeholder/600/400",
      technologies: ["HTML", "SCSS", "JavaScript", "PHP"],
      date: "Décembre 2023"
    },
    {
      id: 5,
      title: "Application Mobile Fitness",
      description: "Application de suivi d'exercices et de nutrition",
      imageUrl: "/api/placeholder/600/400",
      technologies: ["Flutter", "Firebase", "Google Fit API"],
      date: "Octobre 2023"
    }
  ];

  currentIndex = signal(0);
  itemsPerView = signal(1);
  translateX = signal(0);

  // Défilement automatique
  autoSlide = signal(true);
  slideInterval = 5000; // 5 secondes entre chaque slide
  slideSubscription?: Subscription;
  pauseOnHover = signal(true);

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  ngAfterViewInit() {
    this.updateItemsPerView();
  }

  @HostListener('window:resize')
  onResize() {
    this.updateItemsPerView();
    this.updateTranslateX();
  }

  startAutoSlide() {
    if (this.autoSlide()) {
      this.slideSubscription = interval(this.slideInterval).subscribe(() => {
        if (this.currentIndex() >= this.maxIndex()) {
          this.goToSlide(0); // Retour au début si on est à la fin
        } else {
          this.next();
        }
      });
    }
  }

  stopAutoSlide() {
    if (this.slideSubscription) {
      this.slideSubscription.unsubscribe();
      this.slideSubscription = undefined;
    }
  }

  pauseSlider() {
    if (this.pauseOnHover()) {
      this.stopAutoSlide();
    }
  }

  resumeSlider() {
    if (this.pauseOnHover() && this.autoSlide()) {
      this.startAutoSlide();
    }
  }

  toggleAutoSlide() {
    this.autoSlide.update(val => !val);
    if (this.autoSlide()) {
      this.startAutoSlide();
    } else {
      this.stopAutoSlide();
    }
  }

  updateItemsPerView() {
    const width = window.innerWidth;
    if (width >= 1024) {
      this.itemsPerView.set(3);
    } else if (width >= 640) {
      this.itemsPerView.set(2);
    } else {
      this.itemsPerView.set(1);
    }

    // Ajuster l'index courant si nécessaire
    if (this.currentIndex() > this.maxIndex()) {
      this.currentIndex.set(this.maxIndex());
    }

    this.updateTranslateX();
  }

  maxIndex() {
    return Math.max(0, this.realisations.length - this.itemsPerView());
  }

  next() {
    if (this.currentIndex() < this.maxIndex()) {
      this.currentIndex.update(val => val + 1);
    } else {
      this.currentIndex.set(0); // Boucle au début
    }
    this.updateTranslateX();
  }

  prev() {
    if (this.currentIndex() > 0) {
      this.currentIndex.update(val => val - 1);
    } else {
      this.currentIndex.set(this.maxIndex()); // Boucle à la fin
    }
    this.updateTranslateX();
  }

  goToSlide(index: number) {
    if (index >= 0 && index <= this.maxIndex()) {
      this.currentIndex.set(index);
      this.updateTranslateX();
    }
  }

  updateTranslateX() {
    const containerWidth = this.carouselContainer?.nativeElement?.clientWidth || 0;
    const itemWidth = containerWidth / this.itemsPerView();
    const gap = 24; // 6rem (équivalent à gap-6 en TailwindCSS)
    this.translateX.set(-(this.currentIndex() * (itemWidth + gap)));
  }

  getIndicatorsArray(): number[] {
    return Array.from({ length: this.maxIndex() + 1 }, (_, i) => i);
  }
}
