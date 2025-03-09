import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterOutlet } from '@angular/router';



import {SolutionsComponent} from "./solutions/solutions.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,FooterComponent, RouterOutlet],
  template: `
    <app-header />
    <router-outlet></router-outlet>
    <app-footer />

  `
})
export class AppComponent {}
