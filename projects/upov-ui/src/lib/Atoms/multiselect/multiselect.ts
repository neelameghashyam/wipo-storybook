import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

export type MultiselectVariant = 'default' | 'open' | 'filled' | 'disabled';

export interface SelectOption {
  label: string;
  value: string;
}

@Component({
  selector: 'upov-multiselect',
  standalone: true,
  templateUrl: './multiselect.html',
  styleUrl: './multiselect.scss',
  imports: [CommonModule, MatIconModule],
})
export class MultiselectComponent {
  @Input() variant: MultiselectVariant = 'default';
  @Input() placeholder: string = 'Search by family';
  @Input() disabled: boolean = false;
  @Input() options: SelectOption[] = [];
  @Input() selectedValues: string[] = [];
  
  @Output() selectionChange = new EventEmitter<string[]>();
  @Output() clear = new EventEmitter<void>();

  isOpen: boolean = false;
  searchTerm: string = '';

  get filteredOptions(): SelectOption[] {
    if (!this.searchTerm) {
      return this.options;
    }
    return this.options.filter(option =>
      option.label.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  get selectedLabels(): string[] {
    return this.selectedValues
      .map(value => this.options.find(opt => opt.value === value)?.label)
      .filter(label => label !== undefined) as string[];
  }

  get displayText(): string {
    if (this.selectedValues.length === 0) {
      return this.placeholder;
    }
    if (this.selectedValues.length === 1) {
      return this.selectedLabels[0];
    }
    return `${this.selectedValues.length} selected`;
  }

  toggleDropdown(): void {
    if (!this.disabled) {
      this.isOpen = !this.isOpen;
      this.variant = this.isOpen ? 'open' : (this.selectedValues.length > 0 ? 'filled' : 'default');
    }
  }

  toggleOption(value: string): void {
    const index = this.selectedValues.indexOf(value);
    if (index > -1) {
      this.selectedValues.splice(index, 1);
    } else {
      this.selectedValues.push(value);
    }
    this.variant = this.selectedValues.length > 0 ? 'filled' : 'default';
    this.selectionChange.emit([...this.selectedValues]);
  }

  isSelected(value: string): boolean {
    return this.selectedValues.includes(value);
  }

  removeSelection(value: string, event?: Event): void {
    event?.stopPropagation();
    const index = this.selectedValues.indexOf(value);
    if (index > -1) {
      this.selectedValues.splice(index, 1);
      this.selectionChange.emit([...this.selectedValues]);
      this.variant = this.selectedValues.length > 0 ? 'filled' : 'default';
    }
  }

  clearAll(event?: Event): void {
    event?.stopPropagation();
    this.selectedValues = [];
    this.variant = 'default';
    this.selectionChange.emit([]);
    this.clear.emit();
  }

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchTerm = input.value;
  }
}