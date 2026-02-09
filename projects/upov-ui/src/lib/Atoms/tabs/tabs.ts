import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface TabItem {
  label: string;
  id: string;
  isActive?: boolean;
}

@Component({
  selector: 'upov-tabs',
  standalone: true,
  templateUrl: './tabs.html',
  styleUrl: './tabs.scss',
  imports: [CommonModule],
})
export class TabsComponent {
  @Input() tabs: TabItem[] = [];
  @Input() activeTabId: string = '';
  
  @Output() tabChange = new EventEmitter<TabItem>();

  onTabClick(tab: TabItem): void {
    if (!tab.isActive) {
      this.tabChange.emit(tab);
    }
  }

  isTabActive(tab: TabItem): boolean {
    return tab.id === this.activeTabId || tab.isActive === true;
  }
}