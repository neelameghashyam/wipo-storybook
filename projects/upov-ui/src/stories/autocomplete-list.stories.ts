import type { Meta, StoryObj } from '@storybook/angular';
import { applicationConfig, moduleMetadata } from '@storybook/angular';
import { AutocompleteList } from '../lib/Molecules/autocomplete-list/autocomplete-list';

/**
 * Storybook configuration for AutocompleteList component
 */
const meta: Meta<AutocompleteList> = {
  title: 'Molecules/AutocompleteList',
  component: AutocompleteList,
  decorators: [
    moduleMetadata({
      imports: [AutocompleteList],
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
A dropdown list component used to display autocomplete search results.
It supports loading state, empty state messaging, and item selection.

## Usage in Consumer App

\`\`\`typescript
import { AutocompleteList } from 'upov-ui';

@Component({
  imports: [AutocompleteList],
  template: \`
    <upov-autocomplete-list
      [items]="results"
      [loading]="isLoading"
      emptyText="No results"
      emptyHint="Try another keyword"
      (select)="onSelect($event)"
    ></upov-autocomplete-list>
  \`
})
export class MyComponent {
  results = [
    { main: 'Triticum aestivum', sub: 'Wheat' },
    { main: 'Oryza sativa', sub: 'Rice' }
  ];

  isLoading = false;

  onSelect(item: any) {
    console.log(item);
  }
}
\`\`\`

### Required Imports
- \`AutocompleteList\` from 'upov-ui'
        `,
      },
    },
  },
  argTypes: {
    items: {
      control: 'object',
      description: 'List of autocomplete result items',
    },
    loading: {
      control: 'boolean',
      description: 'Displays loading indicator',
    },
    emptyText: {
      control: 'text',
      description: 'Primary text shown when no results are found',
    },
    emptyHint: {
      control: 'text',
      description: 'Secondary hint text shown in empty state',
    },
    select: {
      action: 'select',
      description: 'Emits when a result item is selected',
      table: {
        category: 'Events',
      },
    },
  },
};

export default meta;
type Story = StoryObj<AutocompleteList>;

export const DefaultWithResults: Story = {
  args: {
    items: [
      { main: 'Triticum aestivum', sub: 'Wheat' },
      { main: 'Oryza sativa', sub: 'Rice' },
      { main: 'Zea mays', sub: 'Maize' },
    ],
  },
};

export const AuthorityResults: Story = {
  args: {
    items: [
      { main: 'European Union', sub: 'EU' },
      { main: 'United States', sub: 'US' },
      { main: 'Japan', sub: 'JP' },
    ],
  },
};

export const EmptyState: Story = {
  args: {
    items: [],
    emptyText: 'No matches found',
    emptyHint: 'Try a different search term',
  },
};

export const LoadingState: Story = {
  args: {
    loading: true,
    items: [],
  },
};

export const LongTextStressTest: Story = {
  args: {
    items: [
      {
        main: 'Extremely long species name that should be truncated properly',
        sub: 'Very long botanical description that must not break layout',
      },
    ],
  },
};

export const SpeciesOnlyMainText: Story = {
  args: {
    items: [
      { main: 'ABCD123' },
      { main: 'EFGH456' },
      { main: 'IJKL789' },
    ],
  },
};

export const AuthorityNoIso: Story = {
  args: {
    items: [
      { main: 'Unknown Authority' },
    ],
    emptyHint: 'ISO code not available',
  },
};
