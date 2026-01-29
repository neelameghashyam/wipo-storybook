import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { ChipAtom } from '../lib/Atoms/ChipAtom/chip-atom.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

const meta: Meta<ChipAtom> = {
  title: 'Atoms/ChipAtom',
  component: ChipAtom,
  decorators: [
    moduleMetadata({
      imports: [MatChipsModule, MatIconModule, ChipAtom],
    }),
  ],
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A chip component wrapper for Material chips with additional features.

## Usage

\`\`\`typescript
import { ChipAtom } from 'upov-ui';

@Component({
  imports: [ChipAtom],
  template: \`
    <upov-chip-atom 
      label="Netherlands" 
      [removable]="true"
      (removed)="onChipRemoved()">
    </upov-chip-atom>
  \`
})
export class MyComponent {
  onChipRemoved() {
    console.log('Chip removed');
  }
}
\`\`\`

### Features
- Removable chips with close icon
- Highlighted/selected state using Material's highlighted property
- Optional icon
- Click and remove events
- Color variants
        `,
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Chip label text',
    },
    removable: {
      control: 'boolean',
      description: 'Whether chip can be removed',
    },
    selected: {
      control: 'boolean',
      description: 'Whether chip is selected',
    },
    color: {
      control: 'select',
      options: [undefined, 'primary', 'accent', 'warn'],
      description: 'Chip color',
    },
    icon: {
      control: 'text',
      description: 'Optional Material icon name',
    },
  },
};

export default meta;
type Story = StoryObj<ChipAtom>;

export const Default: Story = {
  args: {
    label: 'Filter Tag',
    removable: false,
    selected: false,
  },
};

export const Removable: Story = {
  args: {
    label: 'Netherlands',
    removable: true,
    selected: false,
  },
};

export const Selected: Story = {
  args: {
    label: 'Protection',
    removable: false,
    selected: true,
    color: 'primary',
  },
};

export const WithIcon: Story = {
  args: {
    label: 'Vegetable',
    icon: 'eco',
    removable: false,
  },
};

export const RemovableWithIcon: Story = {
  args: {
    label: 'Family: Rosaceae',
    icon: 'filter_list',
    removable: true,
    selected: false,
  },
};

export const ColorVariants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 8px; flex-wrap: wrap;">
        <upov-chip-atom label="Default"></upov-chip-atom>
        <upov-chip-atom label="Primary" color="primary" [selected]="true"></upov-chip-atom>
        <upov-chip-atom label="Accent" color="accent" [selected]="true"></upov-chip-atom>
        <upov-chip-atom label="Warn" color="warn" [selected]="true"></upov-chip-atom>
      </div>
    `,
  }),
};

export const FilterChips: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 8px; flex-wrap: wrap;">
        <upov-chip-atom label="Netherlands (NL)" [removable]="true"></upov-chip-atom>
        <upov-chip-atom label="Rosaceae" [removable]="true"></upov-chip-atom>
        <upov-chip-atom label="Vegetable" [removable]="true"></upov-chip-atom>
      </div>
    `,
  }),
};

export const CategoryChips: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 8px; flex-wrap: wrap;">
        <upov-chip-atom label="All genera and species" [selected]="true" color="primary"></upov-chip-atom>
        <upov-chip-atom label="Protection" icon="shield"></upov-chip-atom>
        <upov-chip-atom label="DUS Experience" icon="menu_book"></upov-chip-atom>
      </div>
    `,
  }),
};

export const InteractiveFilters: Story = {
  render: () => ({
    template: `
      <div style="background: white; padding: 24px; border-radius: 8px;">
        <h4 style="margin: 0 0 16px 0; font-size: 14px; color: #666;">Active Filters:</h4>
        <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 16px;">
          <upov-chip-atom label="Netherlands (NL)" [removable]="true" icon="public"></upov-chip-atom>
          <upov-chip-atom label="Family: Rosaceae" [removable]="true" icon="spa"></upov-chip-atom>
          <upov-chip-atom label="Crop Type: Ornamental" [removable]="true" icon="eco"></upov-chip-atom>
          <upov-chip-atom label="Updated: 2024" [removable]="true" icon="schedule"></upov-chip-atom>
        </div>
        <button style="padding: 6px 12px; background: transparent; color: #1f4e45; border: 1px solid #1f4e45; border-radius: 4px; cursor: pointer; font-size: 12px;">
          Clear all filters
        </button>
      </div>
    `,
  }),
};

export const StatusChips: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 12px; flex-wrap: wrap; padding: 16px; background: #f5f5f5; border-radius: 8px;">
        <upov-chip-atom label="Active" color="primary" [selected]="true"></upov-chip-atom>
        <upov-chip-atom label="Pending" color="accent"></upov-chip-atom>
        <upov-chip-atom label="Inactive"></upov-chip-atom>
        <upov-chip-atom label="Archived"></upov-chip-atom>
      </div>
    `,
  }),
};

export const CountryChips: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 8px; flex-wrap: wrap; padding: 16px; background: white; border-radius: 8px;">
        <upov-chip-atom label="Netherlands" [removable]="true"></upov-chip-atom>
        <upov-chip-atom label="France" [removable]="true"></upov-chip-atom>
        <upov-chip-atom label="Germany" [removable]="true"></upov-chip-atom>
        <upov-chip-atom label="Belgium" [removable]="true"></upov-chip-atom>
        <upov-chip-atom label="Spain" [removable]="true"></upov-chip-atom>
        <upov-chip-atom label="Italy" [removable]="true"></upov-chip-atom>
      </div>
    `,
  }),
};

export const TaxonomyChips: Story = {
  render: () => ({
    template: `
      <div style="background: white; padding: 24px; border-radius: 8px;">
        <div style="margin-bottom: 16px;">
          <p style="margin: 0 0 8px 0; font-size: 12px; color: #666; font-weight: 600;">FAMILIES</p>
          <div style="display: flex; gap: 8px; flex-wrap: wrap;">
            <upov-chip-atom label="Rosaceae" icon="eco" [selected]="true" color="primary"></upov-chip-atom>
            <upov-chip-atom label="Solanaceae" icon="eco"></upov-chip-atom>
            <upov-chip-atom label="Poaceae" icon="eco"></upov-chip-atom>
            <upov-chip-atom label="Fabaceae" icon="eco"></upov-chip-atom>
          </div>
        </div>
        <div>
          <p style="margin: 0 0 8px 0; font-size: 12px; color: #666; font-weight: 600;">CROP TYPES</p>
          <div style="display: flex; gap: 8px; flex-wrap: wrap;">
            <upov-chip-atom label="Ornamental" icon="spa"></upov-chip-atom>
            <upov-chip-atom label="Vegetable" icon="restaurant"></upov-chip-atom>
            <upov-chip-atom label="Fruit" icon="apple"></upov-chip-atom>
            <upov-chip-atom label="Cereal" icon="grain"></upov-chip-atom>
          </div>
        </div>
      </div>
    `,
  }),
};

export const SelectedState: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; padding: 16px; background: #f5f5f5; border-radius: 8px;">
        <div>
          <p style="margin: 0 0 8px 0; font-size: 12px; color: #666;">Not Selected</p>
          <upov-chip-atom label="Click to select"></upov-chip-atom>
        </div>
        <div>
          <p style="margin: 0 0 8px 0; font-size: 12px; color: #666;">Selected</p>
          <upov-chip-atom label="Currently selected" [selected]="true" color="primary"></upov-chip-atom>
        </div>
      </div>
    `,
  }),
};

export const WithActions: Story = {
  render: () => ({
    template: `
      <div style="background: white; padding: 24px; border-radius: 8px;">
        <h4 style="margin: 0 0 12px 0;">Tagged Species</h4>
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          <upov-chip-atom label="Rosa hybrida" [removable]="true" icon="spa"></upov-chip-atom>
          <upov-chip-atom label="Tulipa gesneriana" [removable]="true" icon="spa"></upov-chip-atom>
          <upov-chip-atom label="Malus domestica" [removable]="true" icon="spa"></upov-chip-atom>
          <button style="display: flex; align-items: center; gap: 4px; padding: 6px 12px; background: transparent; color: #1f4e45; border: 1px dashed #1f4e45; border-radius: 16px; cursor: pointer; font-size: 13px;">
            + Add species
          </button>
        </div>
      </div>
    `,
  }),
};

export const InAuthorityCard: Story = {
  render: () => ({
    template: `
      <div style="width: 350px; background: white; padding: 16px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
          <h3 style="margin: 0; font-size: 16px;">Netherlands</h3>
          <upov-chip-atom label="All genera and species" color="primary" [selected]="true"></upov-chip-atom>
        </div>
        <div style="display: flex; gap: 8px; margin-top: 12px;">
          <upov-chip-atom label="Protection" icon="shield"></upov-chip-atom>
          <upov-chip-atom label="DUS" icon="menu_book"></upov-chip-atom>
        </div>
      </div>
    `,
  }),
};