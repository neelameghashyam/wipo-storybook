import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'upov-chip-atom',
  standalone: true,
  imports: [MatChipsModule, MatIconModule],
  templateUrl: './chip-atom.component.html',
  styleUrl: './chip-atom.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChipAtom {
  /**
   * Chip label text
   */
  label = input.required<string>();

  /**
   * Whether chip is removable
   */
  removable = input<boolean>(false);

  /**
   * Whether chip is highlighted/selected
   */
  selected = input<boolean>(false);

  /**
   * Chip color
   */
  color = input<'primary' | 'accent' | 'warn' | undefined>(undefined);

  /**
   * Optional icon to display
   */
  icon = input<string>('');

  /**
   * Emits when chip is removed
   */
  removed = output<void>();

  /**
   * Emits when chip is clicked
   */
  clicked = output<void>();

  onRemove(event: Event): void {
    event.stopPropagation();
    this.removed.emit();
  }

  onClick(): void {
    this.clicked.emit();
  }
}