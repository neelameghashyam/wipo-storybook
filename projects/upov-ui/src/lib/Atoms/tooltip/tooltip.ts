import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type TooltipPosition = 'left' | 'right' | 'up' | 'down';

@Component({
  selector: 'upov-tooltip',
  standalone: true,
  templateUrl: './tooltip.html',
  styleUrl: './tooltip.scss',
  imports: [CommonModule],
})
export class TooltipComponent {
  @Input() text: string = 'This is a tooltip';
  @Input() position: TooltipPosition = 'up';
  @Input() visible: boolean = false;
}