import type { Meta, StoryObj } from '@storybook/angular';
import { applicationConfig, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { FilterSelect } from '../lib/Molecules/filter-select.component/filter-select.component';

/**
 * Storybook configuration for FilterSelect component
 */
const meta: Meta<FilterSelect> = {
  title: 'Molecules/FilterSelect',
  component: FilterSelect,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, MatSelectModule, FilterSelect],
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
A select dropdown component designed for filtering datasets.
Supports single and multiple selection with configurable options.

## Usage in Consumer App

\`\`\`typescript
import { FilterSelect } from 'upov-ui';

@Component({
  imports: [FilterSelect],
  template: \`
    <upov-filter-select
      placeholder="Authority"
      [options]="authorities"
      [value]="selected"
      (valueChange)="selected = $event"
    ></upov-filter-select>
  \`
})
export class MyComponent {
  selected: string[] = [];
  authorities = [
    { value: 'EU', label: 'European Union' },
    { value: 'US', label: 'United States' }
  ];
}
\`\`\`

### Required Imports
- \`FilterSelect\` from 'upov-ui'
        `,
      },
    },
  },
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text shown in the select',
    },
    options: {
      control: 'object',
      description: 'List of selectable options',
    },
    multiple: {
      control: 'boolean',
      description: 'Enable multiple selection',
    },
    value: {
      control: 'object',
      description: 'Selected values',
    },
    valueChange: {
      action: 'valueChange',
      description: 'Emits selected values',
      table: {
        category: 'Events',
      },
    },
  },
};
export default meta;
type Story = StoryObj<FilterSelect>;

export const Simple: Story = {
  args: {
    placeholder: 'Family',
    options: [
      { value: 'rosaceae', label: 'Rosaceae' },
      { value: 'poaceae', label: 'Poaceae' },
      { value: 'fabaceae', label: 'Fabaceae' },
    ],
  },
};

export const WithPreselectedValues: Story = {
  args: {
    placeholder: 'Authority',
    value: ['EU', 'US'],
    options: [
      { value: 'EU', label: 'European Union' },
      { value: 'US', label: 'United States' },
      { value: 'JP', label: 'Japan' },
    ],
  },
};

export const SingleSelect: Story = {
  args: {
    placeholder: 'Crop type',
    multiple: false,
    options: [
      { value: 'fruit', label: 'Fruit' },
      { value: 'vegetable', label: 'Vegetable' },
      { value: 'ornamental', label: 'Ornamental' },
    ],
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Family',
    // disabled: true,
    options: [
      { value: 'rosaceae', label: 'Rosaceae' },
      { value: 'poaceae', label: 'Poaceae' },
    ],
  },
};

export const WithManySelected: Story = {
  args: {
    placeholder: 'Authority',
    value: ['EU', 'US', 'JP', 'CN'],
    options: [
      { value: 'EU', label: 'European Union' },
      { value: 'US', label: 'United States' },
      { value: 'JP', label: 'Japan' },
      { value: 'CN', label: 'China' },
      { value: 'BR', label: 'Brazil' },
      { value: 'AU', label: 'Australia' },
    ],
  },
};


export const EmptyOptions: Story = {
  args: {
    placeholder: 'Family',
    options: [],
  },
};




export const LargeDataset: Story = {
  args: {
    placeholder: 'Countries',
    options: Array.from({ length: 30 }, (_, i) => ({
      value: `c${i}`,
      label: `Country ${i + 1}`,
    })),
  },
};
