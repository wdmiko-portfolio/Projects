import { NgClass, NgFor, NgIf } from '@angular/common';
import {
  Component,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [NgIf, NgFor, NgClass],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.css',
})
export class PokedexComponent implements OnInit, OnChanges {
  title = 'pokedex-angular';
  showScreenInit: boolean = true;
  projectIndex = 0;
  toolIndex = 0;
  girarIndice: number | null = null;

  @Input() devTools: any = [];

  ngOnInit(): void {
    this.loadState();
  }

  // 🔁 Detecta cambios en @Input()
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['devTools'] && changes['devTools'].currentValue) {
      this.toolIndex = 0;
    }
  }

  @HostListener('document:keydown.enter', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    this.toogleStart();
  }

  toogleStart(): void {
    this.showScreenInit = false;
    localStorage.setItem('showScreenInit', this.showScreenInit.toString());
    console.log('enter');
  }

  reset(event: MouseEvent): void {
    console.log('on');
    (event.target as HTMLElement).blur();
    this.showScreenInit = true;
    localStorage.setItem('showScreenInit', this.showScreenInit.toString());
  }

  private loadState(): void {
    const savedState = localStorage.getItem('showScreenInit');
    if (savedState !== null) {
      this.showScreenInit = savedState === 'true';
    }
  }

  handleNextP(): void {
    this.toolIndex = (this.toolIndex + 1) % this.devTools.length;
  }

  handlePrevP(): void {
    this.toolIndex =
      (this.toolIndex - 1 + this.devTools.length) % this.devTools.length;
  }
  handleGira() {
    this.girarIndice = this.toolIndex;

    setTimeout(() => {
      this.girarIndice = null;
    }, 1000); // mismo tiempo que la duración de la animación
  }
}
