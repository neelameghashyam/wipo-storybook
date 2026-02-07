import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'upov-links',
  standalone: true,
  templateUrl: './links.html',
  styleUrl: './links.scss',
  imports: [NgFor,MatIconModule],
})
export class LinksComponent {
  @Input() label = 'Related links:';
  @Input() links: { text: string; url?: string }[] = [];
}
