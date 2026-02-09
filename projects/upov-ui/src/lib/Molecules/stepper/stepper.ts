import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

export type StepState = 'active' | 'saved' | 'inactive' | 'disabled' | 'visited' | 'completed';

export interface Step {
  number: string;
  title: string;
  state: StepState;
  subtitle?: string; // For "Completed" badge
}

@Component({
  selector: 'upov-stepper',
  standalone: true,
  templateUrl: './stepper.html',
  styleUrl: './stepper.scss',
  imports: [CommonModule, MatIconModule],
})
export class StepperComponent {
  @Input() steps: Step[] = [];
  @Input() layout: 'numbers-only' | 'with-titles' | 'full' = 'full';
  @Input() collapsed: boolean = false;
  @Input() showChapterTitle: boolean = true;
  
  @Output() stepClick = new EventEmitter<Step>();
  @Output() collapseToggle = new EventEmitter<boolean>();

  onStepClick(step: Step): void {
    if (step.state !== 'disabled') {
      this.stepClick.emit(step);
    }
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.collapseToggle.emit(this.collapsed);
  }
  
}