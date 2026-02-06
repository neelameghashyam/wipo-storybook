import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

export type InputVariant = 'default' | 'filled' | 'focused' | 'disabled';
export type InputType = 'text' | 'phone';

@Component({
  selector: 'upov-input',
  standalone: true,
  templateUrl: './inputs.html',
  styleUrl: './inputs.scss',
  imports: [CommonModule, MatIconModule],
})
export class InputsComponent {
  @Input() variant: InputVariant = 'default';
  @Input() type: InputType = 'text';
  @Input() placeholder: string = 'Label';
  @Input() disabled: boolean = false;
  @Input() value: string = '';
  @Input() countryCode: string = '+61';
  @Input() countryFlag: string = 'au'; // ISO 3166-1 alpha-2 country code
  @Input() showChevron: boolean = true;

  // Get flag URL from flagcdn.com
  get flagUrl(): string {
    return `https://flagcdn.com/w80/${this.countryFlag.toLowerCase()}.png`;
  }

  onFocus(): void {
    if (!this.disabled) {
      this.variant = 'focused';
    }
  }

  onBlur(): void {
    if (!this.disabled && this.value) {
      this.variant = 'filled';
    } else if (!this.disabled && !this.value) {
      this.variant = 'default';
    }
  }

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    if (this.value) {
      this.variant = 'filled';
    }
  }
}