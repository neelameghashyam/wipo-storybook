import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'upov-pagination',
  standalone: true,
  templateUrl: './pagination.html',
  styleUrl: './pagination.scss',
  imports: [CommonModule, MatIconModule],
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 8;
  @Input() device: 'desktop' | 'mobile' = 'desktop';
  
  @Output() pageChange = new EventEmitter<number>();
  
  visiblePages: (number | string)[] = [];

  ngOnInit(): void {
    this.updateVisiblePages();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['currentPage'] || changes['totalPages']) {
      this.updateVisiblePages();
    }
  }

  updateVisiblePages(): void {
  if (this.device === 'mobile') {
    this.visiblePages = [1, 2, '...', this.totalPages];
    return;
  }

  const pages: number[] = [];

  // Show first 5 pages or totalPages if less
  const maxVisible = Math.min(5, this.totalPages);

  for (let i = 1; i <= maxVisible; i++) {
    pages.push(i);
  }

  this.visiblePages = pages;
}


  onPageClick(page: number | string): void {
    if (typeof page === 'number' && page !== this.currentPage) {
      this.currentPage = page;
      this.updateVisiblePages();
      this.pageChange.emit(page);
    }
  }

  goToFirstPage(): void {
    if (this.currentPage !== 1) {
      this.onPageClick(1);
    }
  }

  goToPreviousPage(): void {
    if (this.currentPage > 1) {
      this.onPageClick(this.currentPage - 1);
    }
  }

  goToNextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.onPageClick(this.currentPage + 1);
    }
  }

  goToLastPage(): void {
    if (this.currentPage !== this.totalPages) {
      this.onPageClick(this.totalPages);
    }
  }

  isFirstPage(): boolean {
    return this.currentPage === 1;
  }

  isLastPage(): boolean {
    return this.currentPage === this.totalPages;
  }
}