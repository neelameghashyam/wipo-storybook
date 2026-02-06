import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

export type ButtonType = 'primary' | 'secondary' | 'tertiary';
export type ButtonSize = 'small' | 'medium';

@Component({
  selector: 'upov-button',
  standalone: true,
  templateUrl: './button.html',
  styleUrl: './button.scss',
  imports: [CommonModule, MatIconModule]
})
export class Button1 {
  @Input() type: ButtonType = 'primary';
  @Input() size: ButtonSize = 'small';
  @Input() iconLeft?: string;
  @Input() iconRight?: string;
  @Input() disabled = false;
}
