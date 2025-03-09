import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-video-banner',
  standalone: true,
  templateUrl: './video-banner.component.html',
  styleUrls: ['./video-banner.component.css'],
  /*animations: [
    trigger('fadeInSlide', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-50px)' }),
        animate('1.2s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]*/
})
export class VideoBannerComponent  {
}
