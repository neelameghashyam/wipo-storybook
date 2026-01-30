import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { ChipAtomComponent } from '../../lib/Atoms/ChipAtom/chip-atom.component';
import { MatIconModule } from '@angular/material/icon';

const meta: Meta<ChipAtomComponent> = {
  title: 'Atoms/Chip',
  component: ChipAtomComponent,
  decorators: [
    moduleMetadata({
      imports: [
        MatIconModule,
        ChipAtomComponent
      ]
    }),
  ],
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A versatile filter chip component based on the Genie design system.

## Usage in Consumer App

\`\`\`typescript
import { ChipAtomComponent } from 'upov-ui';
import { MatIconModule } from '@angular/material/icon';

@Component({
  imports: [ChipAtomComponent, MatIconModule],
  template: \`
    <app-chip-atom 
      label="United States"
      variant="default"
      size="medium"
      [removable]="true"
      (removed)="onChipRemoved()"
    ></app-chip-atom>

    <app-chip-atom 
      label="Rosaceae"
      variant="outlined"
      icon="eco"
      [removable]="false"
    ></app-chip-atom>
  \`
})
export class MyComponent {
  onChipRemoved() {
    console.log('Chip removed');
  }
}
\`\`\`

### Features
- 3 visual variants: default (yellow-lime), outlined, and tonal
- 3 sizes: small, medium, large
- Optional remove functionality
- Optional icons (left or right)
- Fully accessible with keyboard support
- Based on Figtree typography from Genie design system

### Required Imports
- \`ChipAtomComponent\` from 'upov-ui'
- \`MatIconModule\` from '@angular/material/icon' (for icon support)
        `,
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'The text displayed on the chip',
    },
    variant: {
      control: 'select',
      options: ['default', 'outlined', 'tonal'],
      description: 'Visual style variant',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size of the chip',
    },
    removable: {
      control: 'boolean',
      description: 'Whether the chip can be removed',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the chip is disabled',
    },
    icon: {
      control: 'text',
      description: 'Material icon name to display',
    },
    iconPosition: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Position of the icon',
    },
    removed: {
      action: 'removed',
      description: 'Emitted when remove button is clicked',
    },
    chipClick: {
      action: 'chipClick',
      description: 'Emitted when chip is clicked',
    },
  },
};

export default meta;
type Story = StoryObj<ChipAtomComponent>;

/**
 * Default chip variant with the signature Genie yellow-lime background.
 * This is the standard filter chip used throughout the Genie application.
 */
export const Default: Story = {
  args: {
    label: 'United States',
    variant: 'default',
    size: 'medium',
    removable: true,
    disabled: false,
  },
};

/**
 * Outlined variant with transparent background and dark border.
 * Useful for secondary or less prominent filters.
 */
export const Outlined: Story = {
  args: {
    label: 'Rosaceae',
    variant: 'outlined',
    size: 'medium',
    removable: true,
    disabled: false,
  },
};

/**
 * Tonal variant with subtle background color.
 * Provides a middle ground between default and outlined.
 */
export const Tonal: Story = {
  args: {
    label: 'Annual',
    variant: 'tonal',
    size: 'medium',
    removable: true,
    disabled: false,
  },
};

/**
 * Small size variant - 24px height.
 * Ideal for compact layouts or mobile views.
 */
export const Small: Story = {
  args: {
    label: 'Small Chip',
    variant: 'default',
    size: 'small',
    removable: true,
  },
};

/**
 * Medium size variant - 32px height (default).
 */
export const Medium: Story = {
  args: {
    label: 'Medium Chip',
    variant: 'default',
    size: 'medium',
    removable: true,
  },
};

/**
 * Large size variant - 40px height.
 * Good for prominent filters or touch interfaces.
 */
export const Large: Story = {
  args: {
    label: 'Large Chip',
    variant: 'default',
    size: 'large',
    removable: true,
  },
};

/**
 * Chip without remove functionality.
 * Useful for displaying selected items that can't be removed.
 */
export const NonRemovable: Story = {
  args: {
    label: 'Fixed Filter',
    variant: 'default',
    size: 'medium',
    removable: false,
  },
};

/**
 * Disabled state - user cannot interact with the chip.
 */
export const Disabled: Story = {
  args: {
    label: 'Disabled Chip',
    variant: 'default',
    size: 'medium',
    removable: true,
    disabled: true,
  },
};

/**
 * Chip with a left-aligned icon.
 */
export const WithLeftIcon: Story = {
  args: {
    label: 'Germany',
    variant: 'default',
    size: 'medium',
    removable: true,
    icon: 'public',
    iconPosition: 'left',
  },
};

/**
 * Chip with a right-aligned icon (non-removable).
 */
export const WithRightIcon: Story = {
  args: {
    label: 'Perennial',
    variant: 'tonal',
    size: 'medium',
    removable: false,
    icon: 'eco',
    iconPosition: 'right',
  },
};

/**
 * Outlined chip with left icon.
 */
export const OutlinedWithIcon: Story = {
  args: {
    label: 'France',
    variant: 'outlined',
    size: 'medium',
    removable: true,
    icon: 'flag',
    iconPosition: 'left',
  },
};

/**
 * Showcase all chip variants side by side.
 */
export const AllVariants: Story = {
  render: () => ({
    template: `
      <div style="display:flex;gap:12px;flex-wrap:wrap;padding:20px;">
        <upov-chip-atom label="Default" variant="default" [removable]="true" />
        <upov-chip-atom label="Outlined" variant="outlined" [removable]="true" />
        <upov-chip-atom label="Tonal" variant="tonal" [removable]="true" />
      </div>
    `,
  }),
};

/**
 * Showcase all chip sizes side by side.
 */
export const AllSizes: Story = {
  render: () => ({
    template: `
      <div style="display:flex;gap:12px;flex-wrap:wrap;padding:20px;">
        <upov-chip-atom label="Small" size="small" />
        <upov-chip-atom label="Medium" size="medium" />
        <upov-chip-atom label="Large" size="large" />
      </div>
    `,
  }),
};


/**
 * Showcase all non-removable chip variants.
 */
export const AllNonRemovableVariants: Story = {
  render: () => ({
    template: `
      <div style="display:flex;gap:12px;flex-wrap:wrap;padding:20px;">
        <upov-chip-atom label="Default" variant="default" [removable]="false" />
        <upov-chip-atom label="Outlined" variant="outlined" [removable]="false" />
        <upov-chip-atom label="Tonal" variant="tonal" [removable]="false" />
      </div>
    `,
  }),
};


/**
 * Showcase chips with icons in different positions.
 */
export const ChipsWithIcons: Story = {
  render: () => ({
    template: `
      <div style="display:flex;gap:12px;flex-wrap:wrap;padding:20px;">
        <upov-chip-atom
          label="Left Icon"
          icon="public"
          iconPosition="left"
          [removable]="true"
        />

        <upov-chip-atom
          label="Right Icon"
          icon="eco"
          iconPosition="right"
          [removable]="false"
          variant="tonal"
        />

        <upov-chip-atom
          label="Outlined Icon"
          icon="star"
          variant="outlined"
          [removable]="true"
        />
      </div>
    `,
  }),
};


/**
 * Complete showcase with variants, sizes, and states.
 */
export const CompleteShowcase: Story = {
  render: () => ({
    template: `
      <div style="display:flex;flex-direction:column;gap:24px;padding:20px;">

        <section>
          <h3>Chip Variants</h3>
          <upov-chip-atom label="Default" />
          <upov-chip-atom label="Outlined" variant="outlined" />
          <upov-chip-atom label="Tonal" variant="tonal" />
        </section>

        <section>
          <h3>Chip Sizes</h3>
          <upov-chip-atom label="Small" size="small" />
          <upov-chip-atom label="Medium" size="medium" />
          <upov-chip-atom label="Large" size="large" />
        </section>

        <section>
          <h3>Non-Removable</h3>
          <upov-chip-atom label="Fixed" [removable]="false" />
        </section>

        <section>
          <h3>Icons</h3>
          <upov-chip-atom label="Public" icon="public" />
          <upov-chip-atom label="Eco" icon="eco" variant="tonal" />
        </section>

        <section>
          <h3>Disabled</h3>
          <upov-chip-atom label="Disabled" [disabled]="true" />
        </section>

      </div>
    `,
  }),
};



/**
 * Icon variations showcase.
 */
export const IconVariations: Story = {
  render: () => ({
    template: `
      <div style="display:flex;flex-direction:column;gap:24px;padding:20px;background:#fafafa;">

        <!-- Left Icon -->
        <section>
          <h3 style="margin-bottom:12px;">Left Icon Position</h3>
          <div style="display:flex;gap:12px;flex-wrap:wrap;">
            <upov-chip-atom label="Public" icon="public" iconPosition="left" />
            <upov-chip-atom label="Eco" icon="eco" iconPosition="left" variant="outlined" />
            <upov-chip-atom label="Star" icon="star" iconPosition="left" variant="tonal" />
          </div>
        </section>

        <!-- Right Icon (Non-removable) -->
        <section>
          <h3 style="margin-bottom:12px;">Right Icon Position (Non-removable)</h3>
          <div style="display:flex;gap:12px;flex-wrap:wrap;">
            <upov-chip-atom
              label="Public"
              icon="public"
              iconPosition="right"
              [removable]="false"
            />
            <upov-chip-atom
              label="Eco"
              icon="eco"
              iconPosition="right"
              variant="outlined"
              [removable]="false"
            />
            <upov-chip-atom
              label="Star"
              icon="star"
              iconPosition="right"
              variant="tonal"
              [removable]="false"
            />
          </div>
        </section>

        <!-- Common Icons -->
        <section>
          <h3 style="margin-bottom:12px;">Common Icons</h3>
          <div style="display:flex;gap:12px;flex-wrap:wrap;">
            <upov-chip-atom label="Location" icon="location_on" />
            <upov-chip-atom label="Filter" icon="filter_list" />
            <upov-chip-atom label="Category" icon="category" />
            <upov-chip-atom label="Label" icon="label" />
            <upov-chip-atom label="Flag" icon="flag" />
          </div>
        </section>

      </div>
    `,
  }),
};

/**
 * Long text example showing ellipsis behavior.
 */
export const LongText: Story = {
  render: () => ({
    template: `
      <div style="padding:20px; background:#fafafa;">
        <h3 style="margin-bottom:12px;">Text Truncation (250px width)</h3>

        <div style="width:250px;">
          <upov-chip-atom
            label="This is a very long label that will be truncated with ellipsis"
            variant="default"
            size="medium"
            [removable]="true"
          ></upov-chip-atom>
        </div>
      </div>
    `,
  }),
};


/**
 * Interactive playground for testing different combinations.
 */
export const Playground: Story = {
  args: {
    label: 'Customize Me',
    variant: 'default',
    size: 'medium',
    removable: true,
    disabled: false,
    icon: undefined,
    iconPosition: 'left',
  },
};