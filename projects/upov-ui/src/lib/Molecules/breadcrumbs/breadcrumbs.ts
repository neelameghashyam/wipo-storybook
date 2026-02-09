import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

export interface BreadcrumbItem {
  label: string;
  link?: string;
  isLast?: boolean;
}

@Component({
  selector: 'upov-breadcrumbs',
  standalone: true,
  templateUrl: './breadcrumbs.html',
  styleUrl: './breadcrumbs.scss',
  imports: [CommonModule, MatIconModule],
})
export class BreadcrumbsComponent {
  @Input() device: 'desktop' | 'mobile' = 'desktop';
  @Input() breadcrumbs: BreadcrumbItem[] = [];
  @Input() previousPageName: string = 'Previous Page';
  
  @Output() breadcrumbClick = new EventEmitter<BreadcrumbItem>();
  @Output() backClick = new EventEmitter<void>();

  onBreadcrumbClick(item: BreadcrumbItem): void {
    if (!item.isLast) {
      this.breadcrumbClick.emit(item);
    }
  }

  onBackButtonClick(): void {
    this.backClick.emit();
  }

  get displayBreadcrumbs(): BreadcrumbItem[] {
    return this.breadcrumbs.map((item, index) => ({
      ...item,
      isLast: index === this.breadcrumbs.length - 1
    }));
  }
}