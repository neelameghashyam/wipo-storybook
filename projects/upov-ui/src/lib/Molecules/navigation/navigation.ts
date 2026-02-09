import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

export interface NavigationItem {
  label: string;
  hasDropdown?: boolean;
  isActive?: boolean;
  link?: string;
}

@Component({
  selector: 'upov-navigation',
  standalone: true,
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss',
  imports: [CommonModule, MatIconModule],
})
export class NavigationComponent {
  @Input() device: 'desktop' | 'mobile' = 'desktop';
  @Input() menuItems: NavigationItem[] = [
    { label: 'HOME', isActive: false },
    { label: 'FIND & EXPLORE', hasDropdown: true },
    { label: 'PLANT VARIETY PROTECTION', hasDropdown: true },
    { label: 'FILE & MANAGE', hasDropdown: true },
    { label: 'ABOUT UPOV', hasDropdown: true }
  ];
  
  @Output() menuClick = new EventEmitter<NavigationItem>();
  @Output() searchClick = new EventEmitter<void>();
  @Output() mobileMenuToggle = new EventEmitter<void>();

  isMobileMenuOpen = false;

  // Icon paths
  desktopLogoPath = 'assets/icons/upov.svg';
  mobileLogoPath = 'assets/icons/upov.svg';

  onMenuItemClick(item: NavigationItem): void {
    this.menuClick.emit(item);
  }

  onSearchClick(): void {
    this.searchClick.emit();
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    this.mobileMenuToggle.emit();
  }
}