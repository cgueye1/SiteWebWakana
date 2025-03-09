// components/partners/partners.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-partners',
  standalone: true,
  template: `
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          @for (partner of partners; track partner.name) {
            <img
              [src]="partner.logo"
              [alt]="partner.name"
              class="h-12 md:h-16 object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            >
          }
        </div>
      </div>
    </section>
  `
})
export class PartnersComponent {
  partners = [
    //{ name: 'TER', logo: 'assets/images/ter.png' },
    { name: 'SENTER', logo: 'assets/images/pl.png' },
    { name: 'SETER', logo: 'assets/images/seter.png' },
    // { name: 'SOLIMUS', logo: 'assets/images/solimus.png' },
    { name: 'AMCHAM', logo: 'assets/images/amcham_hd.jpeg' }
  ];
}
