import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'upov-checkbox',
  standalone: true,
  templateUrl: './checkbox.html',
  styleUrl: './checkbox.scss',
  imports: [CommonModule],
})
export class CheckboxComponent {
  @Input() checked: boolean = false;
  @Input() disabled: boolean = false;
  @Output() checkedChange = new EventEmitter<boolean>();

  onChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.checkedChange.emit(target.checked);
  }
}