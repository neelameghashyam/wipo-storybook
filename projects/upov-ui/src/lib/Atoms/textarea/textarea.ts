import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

export type TextareaVariant = 'default' | 'filled';

@Component({
  selector: 'upov-textarea',
  standalone: true,
  templateUrl: './textarea.html',
  styleUrl: './textarea.scss',
  imports: [CommonModule, MatIconModule],
})
export class TextareaComponent {
  @Input() variant: TextareaVariant = 'default';
  @Input() placeholder: string = 'Add explanation here';
  @Input() disabled: boolean = false;
  @Input() value: string = '';
  @Input() minHeight: number = 122; // Default min height from Figma
  @Input() maxHeight: number = 216; // Default max height from Figma

  @Output() valueChange = new EventEmitter<string>();
  @Output() focus = new EventEmitter<void>();
  @Output() blur = new EventEmitter<void>();

  // Toolbar button configurations
  toolbarButtons = [
    { icon: 'help_outline', tooltip: 'Help', action: 'help' },
    { icon: 'text_fields', tooltip: 'Text formatting', action: 'text' },
    { icon: 'format_list_bulleted', tooltip: 'Bullet list', action: 'list' },
    { icon: 'code', tooltip: 'Code block', action: 'code' },
    { icon: 'description', tooltip: 'Export', action: 'export', hasDropdown: true },
    { icon: 'format_paint', tooltip: 'Format painter', action: 'paint' },
    { icon: 'link', tooltip: 'Insert link', action: 'link' },
    { icon: 'brush', tooltip: 'Highlighter', action: 'highlight' },
    { icon: 'table_chart', tooltip: 'Insert table', action: 'table', hasDropdown: true },
    { icon: 'image', tooltip: 'Insert image', action: 'image' },
  ];

  onInput(event: Event): void {
    const textarea = event.target as HTMLTextAreaElement;
    this.value = textarea.value;
    this.variant = this.value ? 'filled' : 'default';
    this.valueChange.emit(this.value);
  }

  onFocus(): void {
    this.focus.emit();
  }

  onBlur(): void {
    this.blur.emit();
  }

  onToolbarAction(action: string): void {
    console.log('Toolbar action:', action);
    // Implement toolbar actions as needed
  }
}