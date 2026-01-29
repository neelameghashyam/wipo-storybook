import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'upov-badge-atom',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './badge-atom.component.html',
  styleUrl: './badge-atom.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgeAtom {
  /**
   * Badge label text
   */
  label = input<string>('Updated');

  /**
   * Badge variant/type
   */
  variant = input<'success' | 'info' | 'warning' | 'default'>('success');

  /**
   * Badge size
   */
  size = input<'small' | 'medium'>('small');

  /**
   * Additional CSS classes
   */
  class = input<string>('');
}