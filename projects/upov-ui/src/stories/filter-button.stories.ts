import type { Meta, StoryObj } from '@storybook/angular';
import { applicationConfig, moduleMetadata } from '@storybook/angular';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FilterButtonComponent } from '../lib/Molecules/filter-button.component/filter-button.component';

/**
 * Storybook configuration for FilterButton component
 */
const meta: Meta<FilterButtonComponent> = {
  title: 'Molecules/FilterButton',
  component: FilterButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [MatButtonModule, MatIconModule, FilterButtonComponent],
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
A toggle button used to show or hide filter panels.
The label changes automatically when the filter state is active.

## Usage in Consumer App

\`\`\`typescript
import { FilterButtonComponent } from 'upov-ui';

@Component({
  imports: [FilterButtonComponent],
  template: \`
    <upov-filter-button
      [active]="filtersOpen"
      label="Show filters"
      (toggle)="filtersOpen = $event"
    ></upov-filter-button>
  \`
})
export class MyComponent {
  filtersOpen = false;
}
\`\`\`

### Required Imports
- \`FilterButtonComponent\` from 'upov-ui'
        `,
      },
    },
  },
  argTypes: {
    active: {
      control: 'boolean',
      description: 'Whether the filter button is active',
    },
    label: {
      control: 'text',
      description: 'Label shown when filters are inactive',
    },
    toggle: {
      action: 'toggle',
      description: 'Emits when filter state changes',
      table: {
        category: 'Events',
      },
    },
  },
};
export default meta;
type Story = StoryObj<FilterButtonComponent>;

export const Default: Story = {
  args: {
    active: false,
    label: 'Show filters',
  },
};

export const Active: Story = {
  args: {
    active: true,
    label: 'Show filters',
  },
};

export const CustomLabel: Story = {
  args: {
    active: false,
    label: 'Advanced filters',
  },

};

export const Interactive: Story = {
  render: (args) => ({
    props: {
      ...args,
      toggle: (state: boolean) => {
        console.log('Filter toggled:', state);
      },
    },
  }),

  args: {
    active: false,
    label: 'Show filters',
  },
};

