import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'upov-footer',
  standalone: true,
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  imports: [CommonModule],
})
export class FooterComponent {
  @Input() hasPreviousChapter: boolean = true;
  @Input() hasNextChapter: boolean = true;
  
  @Output() export = new EventEmitter<void>();
  @Output() previousChapter = new EventEmitter<void>();
  @Output() nextChapter = new EventEmitter<void>();

  onExport(): void {
    this.export.emit();
  }

  onPreviousChapter(): void {
    if (this.hasPreviousChapter) {
      this.previousChapter.emit();
    }
  }

  onNextChapter(): void {
    if (this.hasNextChapter) {
      this.nextChapter.emit();
    }
  }
}