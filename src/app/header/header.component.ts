import { Component, OnInit, signal, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styles: [`
    :host {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 50;
    }
  `]
})
export class HeaderComponent implements OnInit, OnDestroy {
  isMobileMenuOpen = signal(false);
  scrolled = signal(false);

  private destroy$ = new Subject<void>();

  constructor(private router: Router) {}

  toggleMobileMenu() {
    this.isMobileMenuOpen.set(!this.isMobileMenuOpen());
  }

  closeMobileMenu() {
    this.isMobileMenuOpen.set(false);
  }

  ngOnInit() {
    // Gestion du scroll pour l'état de la navbar
    fromEvent(window, 'scroll')
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.scrolled.set(window.scrollY > 50);
      });

    // Fermer le menu lorsqu'un lien est cliqué
    this.router.events
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.closeMobileMenu());
  }

  navigateToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.closeMobileMenu(); // Assure la fermeture après navigation
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
