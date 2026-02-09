import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

export interface SearchSuggestion {
  code: string;
  name: string;
  fullText?: string;
}

export type SearchDevice = 'desktop' | 'mobile';
export type SearchVariant = 'default' | 'filled' | 'focus' | 'focus-selected';
export type ToggleOption = 'species' | 'authorities';

@Component({
  selector: 'upov-searchbar',
  standalone: true,
  templateUrl: './searchbar.html',
  styleUrl: './searchbar.scss',
  imports: [CommonModule, MatIconModule, FormsModule],
})
export class SearchbarComponent {
  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;

  @Input() device: SearchDevice = 'desktop';
  @Input() placeholder: string = 'Search by UPOV code, botanical name or common name...';
  @Input() value: string = '';
  @Input() suggestions: SearchSuggestion[] = [];
  @Input() selectedToggle: ToggleOption = 'species';
  @Input() showSuggestions: boolean = false;
  @Input() selectedSuggestionIndex: number = -1;
  
  @Output() valueChange = new EventEmitter<string>();
  @Output() search = new EventEmitter<string>();
  @Output() clear = new EventEmitter<void>();
  @Output() toggleChange = new EventEmitter<ToggleOption>();
  @Output() suggestionSelect = new EventEmitter<SearchSuggestion>();
  @Output() focus = new EventEmitter<void>();
  @Output() blur = new EventEmitter<void>();

  isFocused: boolean = false;

  get variant(): SearchVariant {
    if (this.showSuggestions) {
      return this.selectedSuggestionIndex >= 0 ? 'focus-selected' : 'focus';
    }
    return this.value ? 'filled' : 'default';
  }

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.valueChange.emit(this.value);
  }

  onFocus(): void {
    this.isFocused = true;
    this.focus.emit();
  }

  onBlur(): void {
    // Delay to allow click on suggestions
    setTimeout(() => {
      this.isFocused = false;
      this.blur.emit();
    }, 200);
  }

  onClear(): void {
    this.value = '';
    this.valueChange.emit(this.value);
    this.clear.emit();
    this.searchInput?.nativeElement.focus();
  }

  onSearch(): void {
    this.search.emit(this.value);
  }

  onToggleClick(option: ToggleOption): void {
    this.selectedToggle = option;
    this.toggleChange.emit(option);
  }

  onSuggestionClick(suggestion: SearchSuggestion): void {
    this.suggestionSelect.emit(suggestion);
    this.value = suggestion.code;
    this.valueChange.emit(this.value);
  }

  onSuggestionHover(index: number): void {
    this.selectedSuggestionIndex = index;
  }
}