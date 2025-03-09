import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Solution {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './solutions.component.html'
})
export class SolutionsComponent implements OnInit, OnDestroy {
  solutionsData: Solution[] = [];
  visibleCards: number = 3; // Nombre de cartes visibles par défaut
  currentIndex: number = 0; // Pour la pagination
  private autoSlideInterval: any;
  isPaused: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.adjustVisibleCards();
  }

  ngOnInit() {
    // Initialisation des données avec des images
    this.solutionsData = [
      {
        id: 1,
        title: 'Application Mobile ',
        description: 'Notre première solution propose une approche unique qui répond aux défis actuels avec des technologies de pointe et une méthodologie éprouvée.',
        imageUrl: 'assets/images/imgs2.jpg',
      },
      {
        id: 2,
        title: 'Solution Intelligente 2',
        description: 'La deuxième solution combine intelligence artificielle et expertise humaine pour créer un équilibre parfait entre technologie et compréhension des besoins.',
        imageUrl: 'assets/images/imgsol1.jpg',
      },
      {
        id: 3,
        title: 'Solution Durable 3',
        description: 'Notre approche durable intègre les meilleures pratiques environnementales tout en maintenant une efficacité opérationnelle exceptionnelle.',
        imageUrl: 'assets/images/imgs3.jpg',
      },
      {
        id: 4,
        title: 'Solution Efficace 4',
        description: 'Optimisez vos processus avec notre quatrième solution qui augmente la productivité tout en réduisant les coûts opérationnels de manière significative.',
        imageUrl: 'assets/images/imgf.jpg',
      },
      {
        id: 5,
        title: 'Solution Révolutionnaire 5',
        description: 'Notre solution la plus avancée bouleverse les standards du marché avec une approche révolutionnaire qui redéfinit les attentes des utilisateurs.',
        imageUrl: 'assets/images/imgs1.jpg',
      }
    ];

    // Ajuster le nombre de cartes visibles en fonction de la taille de l'écran
    this.adjustVisibleCards();

    // Démarrer le slider automatique
    this.startAutoSlide();
  }

  ngOnDestroy() {
    // Nettoyer l'intervalle lors de la destruction du composant
    this.stopAutoSlide();
  }

  // Ajuster le nombre de cartes visibles en fonction de la largeur de l'écran
  adjustVisibleCards(): void {
    const width = window.innerWidth;
    if (width < 640) {
      this.visibleCards = 1;
    } else if (width < 1024) {
      this.visibleCards = 2;
    } else {
      this.visibleCards = 3;
    }

    // S'assurer que l'index courant est valide après changement
    if (this.currentIndex > this.solutionsData.length - this.visibleCards) {
      this.currentIndex = this.solutionsData.length - this.visibleCards;
    }
    if (this.currentIndex < 0) {
      this.currentIndex = 0;
    }
  }

  // Démarrer le slider automatique
  startAutoSlide(): void {
    this.autoSlideInterval = setInterval(() => {
      if (!this.isPaused) {
        this.nextSlide();
      }
    }, 2000); // Intervalle de 1000ms (1 seconde)
  }

  // Arrêter le slider automatique
  stopAutoSlide(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  // Mettre en pause le slider automatique
  pauseAutoSlide(): void {
    this.isPaused = true;
  }

  // Reprendre le slider automatique
  resumeAutoSlide(): void {
    this.isPaused = false;
  }

  // Passer à la slide suivante
  nextSlide(): void {
    if (this.currentIndex < this.solutionsData.length - this.visibleCards) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // Retour au début
    }
  }

  // Passer à la slide précédente
  prevSlide(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.solutionsData.length - this.visibleCards; // Aller à la fin
    }
  }

  // Méthode pour naviguer vers une solution spécifique
  navigateToSolution(index: number): void {
    this.currentIndex = index;
    // Réinitialiser l'intervalle pour éviter des transitions immédiates après un clic manuel
    this.stopAutoSlide();
    this.startAutoSlide();
  }

  // Méthode pour vérifier si une solution est actuellement visible
  isSolutionVisible(index: number): boolean {
    return index >= this.currentIndex && index < this.currentIndex + this.visibleCards;
  }
}
