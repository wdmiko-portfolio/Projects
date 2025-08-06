import { NgClass, NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-portfoil-preview',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './portfoil-preview.component.html',
  styleUrl: './portfoil-preview.component.css',
})
export class PortfoilPreviewComponent {
  @Output() nextClicked = new EventEmitter<void>();
  @Output() prevClicked = new EventEmitter<void>();
  @Output() projectRotate = new EventEmitter<void>();

  @Input() resImgProject: any = [];
  @Input() resTitleProject: string = '';
  @Input() resImagesProject: any = [];
  rotation: any = 0;
  isHovering = false;
  imageIndex = true;

  handleNextP(): void {
    this.nextClicked.emit();
  }
  handlePrevP(): void {
    this.prevClicked.emit();
  }

  handleClickRotate() {
    this.rotation += 360;
    this.imageIndex = !this.imageIndex;
  }
  onMouseEnter() {
    this.isHovering = true;
  }

  onMouseLeave() {
    this.isHovering = false;
  }
}
