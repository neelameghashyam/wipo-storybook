import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'upov-icon-atom',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './icon-atom.component.html',
  styleUrl: './icon-atom.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconAtom {
  icon = input.required<string>();
  size = input<'small' | 'medium' | 'large'>('medium');
  color = input<'primary' | 'accent' | 'warn' | 'inherit'>('inherit');
  class = input<string>('');
}