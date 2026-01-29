import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'upov-spinner-atom',
  standalone: true,
  imports: [MatProgressSpinnerModule],
  templateUrl: './spinner-atom.component.html',
  styleUrl: './spinner-atom.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpinnerAtom {
  /**
   * Spinner diameter in pixels
   */
  diameter = input<number>(50);

  /**
   * Spinner mode
   */
  mode = input<'determinate' | 'indeterminate'>('indeterminate');

  /**
   * Progress value (0-100) for determinate mode
   */
  value = input<number>(0);

  /**
   * Spinner color
   */
  color = input<'primary' | 'accent' | 'warn'>('primary');

  /**
   * Optional loading message
   */
  message = input<string>('');
}