// components/footer/footer.component.ts
import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl:'./footer.component.html',
  styleUrls:['./footer.component.css']

})
export class FooterComponent implements OnInit {
  email: string = '';
  currentYear: number = new Date() .getFullYear();
  ngOnInit() {
  }

  onSubscribe() {
    // Implémentez ici la logique d'inscription à la newsletter
    console.log('Email souscrit:', this.email);
    this.email = '';
  }
}
