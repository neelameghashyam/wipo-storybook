import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

export interface SocialLink {
  type: 'twitter' | 'linkedin' | 'youtube' | 'email';
  url: string;
  svgIcon: string; // Path to SVG file
}

export interface FooterLink {
  label: string;
  url: string;
}

@Component({
  selector: 'upov-footer',
  standalone: true,
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  imports: [CommonModule, MatIconModule],
})
export class FooterComponent {
  @Input() device: 'desktop' | 'mobile' = 'desktop';
  @Input() description: string = 'UPOV promotes plant breeding worldwide by protecting new plant varieties, contributing to sustainable development and global food security.';
  @Input() socialLinks: SocialLink[] = [
    { type: 'twitter', url: '#', svgIcon: 'assets/icons/x-twitter.svg' },
    { type: 'linkedin', url: '#', svgIcon: 'assets/icons/linkedin.svg' },
    { type: 'youtube', url: '#', svgIcon: 'assets/icons/youtube.svg' },
    { type: 'email', url: '#', svgIcon: 'assets/icons/envelope.svg' }
  ];
  @Input() footerLinks: FooterLink[] = [
    { label: 'Terms of Use', url: '#' },
    { label: 'Privacy', url: '#' },
    { label: 'Sitemap', url: '#' },
    { label: 'Accesibility', url: '#' }
  ];
  
  @Output() socialLinkClick = new EventEmitter<SocialLink>();
  @Output() footerLinkClick = new EventEmitter<FooterLink>();

  // SVG logo path - same as navigation
  logoPath = 'assets/icons/upov.svg';

  onSocialLinkClick(link: SocialLink): void {
    this.socialLinkClick.emit(link);
  }

  onFooterLinkClick(link: FooterLink): void {
    this.footerLinkClick.emit(link);
  }
}