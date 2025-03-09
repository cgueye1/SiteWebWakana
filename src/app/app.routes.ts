import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // La landing page

  { path: '**', redirectTo: '' } // Redirection vers la page principale si la route est inconnue
];
