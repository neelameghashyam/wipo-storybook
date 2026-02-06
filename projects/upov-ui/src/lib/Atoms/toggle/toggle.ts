import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'upov-toggle',
  standalone: true,
  templateUrl: './toggle.html',
  styleUrl: './toggle.scss',
  imports: [NgClass],
})
export class ToggleComponent {
  @Input() leftLabel = 'Species';
  @Input() rightLabel = 'Authorities';

  @Input() value: 'left' | 'right' = 'left';

  @Output() valueChange = new EventEmitter<'left' | 'right'>();

  select(val: 'left' | 'right') {
    this.value = val;
    this.valueChange.emit(val);
  }
}
