import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { ServicesComponent } from '../services/services.component';
import { SolutionsComponent } from '../solutions/solutions.component';
import { ProjectsComponent } from '../projects/projects.component';
import { MethodsComponent } from '../methods/methods.component';
// import { NewsComponent } from '../news/news.component';
import { PartnersComponent } from '../partners/partners.component';
import { VideoBannerComponent } from '../video-banner/video-banner.component';
import { StatsBannerComponent } from '../stats-banner/stats-banner.component';
import {RealisationsComponent} from "../realisations/realisations.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    VideoBannerComponent,
    HeroComponent,
    ServicesComponent,
    SolutionsComponent,
    ProjectsComponent,
    MethodsComponent,
    RealisationsComponent,
    // NewsComponent,
    PartnersComponent,
    StatsBannerComponent,

  ],
  templateUrl: 'home.component.html',
  styleUrls:['home.component.css']


})
export class HomeComponent {}
