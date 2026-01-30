import type { Meta, StoryObj } from '@storybook/angular';
import { applicationConfig, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { PaginationComponent } from '../lib/Molecules/pagination/pagination';

/**
 * Storybook configuration for Pagination component
 */
const meta: Meta<PaginationComponent> = {
  title: 'Molecules/Pagination',
  component: PaginationComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        MatIconModule,
        MatButtonModule,
        PaginationComponent,
      ],
    }),
    applicationConfig({
      providers: [],
    }),
  ],
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A pagination component used to navigate through large datasets.
Supports page buttons, ellipsis handling, and page selection dropdown.

## Usage in Consumer App

\`\`\`typescript
import { PaginationComponent } from 'upov-ui';

@Component({
  imports: [PaginationComponent],
  template: \`
    <upov-pagination
      [currentPage]="page"
      [totalItems]="120"
      [itemsPerPage]="15"
      (pageChange)="page = $event"
    ></upov-pagination>
  \`
})
export class MyComponent {
  page = 1;
}
\`\`\`

### Required Imports
- \`PaginationComponent\` from 'upov-ui'
        `,
      },
    },
  },
  argTypes: {
    currentPage: {
      control: 'number',
      description: 'Current active page',
    },
    totalItems: {
      control: 'number',
      description: 'Total number of items',
    },
    itemsPerPage: {
      control: 'number',
      description: 'Number of items per page',
    },
    maxPagesToShow: {
      control: 'number',
      description: 'Maximum page buttons visible',
    },
    pageChange: {
      action: 'pageChange',
      description: 'Emits when page changes',
      table: {
        category: 'Events',
      },
    },
  },
};

export default meta;
type Story = StoryObj<PaginationComponent>;

export const Basic: Story = {
  args: {
    currentPage: 1,
    totalItems: 120,
    itemsPerPage: 15,
  },
};

export const MiddlePage: Story = {
  args: {
    currentPage: 4,
    totalItems: 120,
    itemsPerPage: 15,
  },
};

export const LastPage: Story = {
  args: {
    currentPage: 8,
    totalItems: 120,
    itemsPerPage: 15,
  },
};

export const FewPages: Story = {
  args: {
    currentPage: 1,
    totalItems: 30,
    itemsPerPage: 15,
  },
};
