import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

export type ChipVariant = 'default' | 'outlined' | 'tonal';
export type ChipSize = 'small' | 'medium' | 'large';

@Component({
  selector: 'upov-chip-atom',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './chip-atom.component.html',
  styleUrl: './chip-atom.component.scss'
})
export class ChipAtomComponent {
  /**
   * The label text displayed on the chip
   */
  @Input() label: string = '';

  /**
   * Visual variant of the chip
   * - 'default': Yellow-lime background (Genie style)
   * - 'outlined': Transparent with border
   * - 'tonal': Subtle background
   */
  @Input() variant: ChipVariant = 'default';

  /**
   * Size of the chip
   * - 'small': 24px height
   * - 'medium': 32px height (Genie default)
   * - 'large': 40px height
   */
  @Input() size: ChipSize = 'medium';

  /**
   * Whether the chip can be removed
   */
  @Input() removable: boolean = true;

  /**
   * Whether the chip is disabled
   */
  @Input() disabled: boolean = false;

  /**
   * Custom icon to display (Material icon name)
   */
  @Input() icon?: string;

  /**
   * Whether to show the icon on the left side
   */
  @Input() iconPosition: 'left' | 'right' = 'left';

  /**
   * Emitted when the remove button is clicked
   */
  @Output() removed = new EventEmitter<void>();

  /**
   * Emitted when the chip is clicked
   */
  @Output() chipClick = new EventEmitter<void>();

  /**
   * Handle remove button click
   */
  onRemove(event: Event): void {
    event.stopPropagation();
    if (!this.disabled) {
      this.removed.emit();
    }
  }

  /**
   * Handle chip click
   */
  onClick(): void {
    if (!this.disabled) {
      this.chipClick.emit();
    }
  }
}