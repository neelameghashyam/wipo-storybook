import { ChangeDetectionStrategy, Component, input, output, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'upov-input-atom',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatIconModule],
  templateUrl: './input-atom.component.html',
  styleUrl: './input-atom.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputAtom),
      multi: true,
    },
  ],
})
export class InputAtom implements ControlValueAccessor {
  /**
   * Input placeholder text
   */
  placeholder = input<string>('');

  /**
   * Input type
   */
  type = input<'text' | 'email' | 'password' | 'search'>('text');

  /**
   * Optional icon to display
   */
  icon = input<string>('');

  /**
   * Whether to show clear button when value exists
   */
  clearable = input<boolean>(false);

  /**
   * Input label
   */
  label = input<string>('');

  /**
   * Whether input is disabled
   */
  disabled = input<boolean>(false);

  /**
   * Whether input is required
   */
  required = input<boolean>(false);

  /**
   * Emits when value changes
   */
  valueChange = output<string>();

  /**
   * Emits when clear button is clicked
   */
  cleared = output<void>();

  value = '';
  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: string): void {
    this.value = value || '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    // Handled by disabled input
  }

  onInputChange(value: string): void {
    this.value = value;
    this.onChange(value);
    this.valueChange.emit(value);
  }

  onClear(): void {
    this.value = '';
    this.onChange('');
    this.valueChange.emit('');
    this.cleared.emit();
  }
}