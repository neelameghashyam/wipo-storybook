import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'upov-flag-atom',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flag-atom.component.html',
  styleUrl: './flag-atom.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlagAtom {
  /**
   * ISO country code (2 letters)
   */
  isoCode = input.required<string>();

  /**
   * Alt text for the flag
   */
  alt = input<string>('');

  /**
   * Flag size
   */
  size = input<'small' | 'medium' | 'large'>('medium');

  /**
   * Flag shape
   */
  shape = input<'rectangle' | 'circle'>('rectangle');

  /**
   * Whether to show fallback when flag fails to load
   */
  showFallback = input<boolean>(true);

  flagError = false;

  getFlagUrl(): string {
    const code = this.isoCode().toLowerCase();
    if (!code || code.length !== 2 || code === 'qz') {
      return '';
    }
    return `https://flagcdn.com/w80/${code}.png`;
  }

  onImageError(): void {
    this.flagError = true;
  }

  getAltText(): string {
    return this.alt() || `${this.isoCode()} flag`;
  }
}