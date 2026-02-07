import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'upov-radiobutton',
  standalone: true,
  templateUrl: './radiobuttons.html',
  styleUrl: './radiobuttons.scss',
  imports: [CommonModule],
})
export class RadiobuttonComponent {
  @Input() checked: boolean = false;
  @Input() disabled: boolean = false;
  @Output() checkedChange = new EventEmitter<boolean>();

  onChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.checkedChange.emit(target.checked);
  }
}