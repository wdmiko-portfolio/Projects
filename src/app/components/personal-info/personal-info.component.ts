import { Component } from '@angular/core';
import { CardsInfoComponent } from '../cards-info/cards-info.component';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [CardsInfoComponent],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.css',
})
export class PersonalInfoComponent {}
