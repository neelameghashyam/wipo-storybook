import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { InputAtom } from '../lib/Atoms/InputAtom/input-atom.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';


const meta: Meta<InputAtom> = {
  title: 'Atoms/InputAtom',
  component: InputAtom,
  decorators: [
    moduleMetadata({
      imports: [
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        FormsModule,
        InputAtom,
      ],
    }),
  ],
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A plain text input component with Material Design styling.

## Usage

\`\`\`typescript
import { InputAtom } from 'upov-ui';

@Component({
  imports: [InputAtom],
  template: \`
    <upov-input-atom
      label="Search"
      placeholder="Enter search term..."
      icon="search"
      [clearable]="true"
      (valueChange)="onSearch($event)">
    </upov-input-atom>
  \`
})
export class MyComponent {
  onSearch(value: string) {
    console.log('Search:', value);
  }
}
\`\`\`

### Features
- ControlValueAccessor compatible (works with Angular forms)
- Optional icon prefix
- Clearable with button
- Multiple input types
- Label and placeholder support
        `,
      },
    },
  },
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Input placeholder text',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'search'],
      description: 'Input type',
    },
    icon: {
      control: 'text',
      description: 'Optional Material icon name',
    },
    clearable: {
      control: 'boolean',
      description: 'Show clear button when value exists',
    },
    label: {
      control: 'text',
      description: 'Input label',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether input is disabled',
    },
    required: {
      control: 'boolean',
      description: 'Whether input is required',
    },
  },
};

export default meta;
type Story = StoryObj<InputAtom>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
    type: 'text',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Species Name',
    placeholder: 'Enter botanical name',
    type: 'text',
  },
};

export const SearchInput: Story = {
  args: {
    placeholder: 'Authority name or ISO code',
    type: 'search',
    icon: 'search',
    clearable: true,
  },
};

export const EmailInput: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'your.email@example.com',
    type: 'email',
    icon: 'email',
    required: true,
  },
};

export const PasswordInput: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter password',
    type: 'password',
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'Cannot edit',
    type: 'text',
    disabled: true,
  },
};

export const FormExample: Story = {
  render: () => ({
    template: `
      <div style="max-width: 400px; display: flex; flex-direction: column; gap: 16px;">
        <upov-input-atom
          label="Search Species"
          placeholder="Enter UPOV code or botanical name"
          icon="search"
          [clearable]="true">
        </upov-input-atom>
        
        <upov-input-atom
          label="Filter by Authority"
          placeholder="Authority name or ISO code"
          icon="public"
          [clearable]="true">
        </upov-input-atom>
      </div>
    `,
  }),
};

export const FullForm: Story = {
  render: () => ({
    template: `
      <div style="max-width: 500px; background: white; padding: 24px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
        <h3 style="margin: 0 0 20px 0;">Add New Species</h3>
        <div style="display: flex; flex-direction: column; gap: 16px;">
          <upov-input-atom
            label="UPOV Code"
            placeholder="e.g., ROSA_HYB"
            [required]="true">
          </upov-input-atom>
          
          <upov-input-atom
            label="Botanical Name"
            placeholder="e.g., Rosa hybrida L."
            icon="spa"
            [required]="true">
          </upov-input-atom>
          
          <upov-input-atom
            label="Common Name"
            placeholder="e.g., Hybrid Tea Rose"
            [clearable]="true">
          </upov-input-atom>
          
          <upov-input-atom
            label="Family"
            placeholder="e.g., Rosaceae"
            icon="eco">
          </upov-input-atom>
          
          <button style="padding: 12px; background: #1f4e45; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 14px; font-weight: 500;">
            Add Species
          </button>
        </div>
      </div>
    `,
  }),
};

export const SearchVariants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; max-width: 500px;">
        <div>
          <p style="margin: 0 0 8px 0; font-size: 12px; color: #666; font-weight: 600;">SPECIES SEARCH</p>
          <upov-input-atom
            placeholder="Search by UPOV code or botanical name..."
            icon="search"
            [clearable]="true">
          </upov-input-atom>
        </div>
        
        <div>
          <p style="margin: 0 0 8px 0; font-size: 12px; color: #666; font-weight: 600;">AUTHORITY SEARCH</p>
          <upov-input-atom
            placeholder="Authority name or ISO code..."
            icon="public"
            [clearable]="true">
          </upov-input-atom>
        </div>
        
        <div>
          <p style="margin: 0 0 8px 0; font-size: 12px; color: #666; font-weight: 600;">GUIDELINE SEARCH</p>
          <upov-input-atom
            placeholder="Search test guidelines..."
            icon="menu_book"
            [clearable]="true">
          </upov-input-atom>
        </div>
      </div>
    `,
  }),
};

export const ContactForm: Story = {
  render: () => ({
    template: `
      <div style="max-width: 500px; background: white; padding: 24px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
        <h3 style="margin: 0 0 20px 0;">Contact Authority</h3>
        <div style="display: flex; flex-direction: column; gap: 16px;">
          <upov-input-atom
            label="Full Name"
            placeholder="Enter your name"
            [required]="true">
          </upov-input-atom>
          
          <upov-input-atom
            label="Email Address"
            placeholder="your.email@example.com"
            type="email"
            icon="email"
            [required]="true">
          </upov-input-atom>
          
          <upov-input-atom
            label="Organization"
            placeholder="Your organization name"
            icon="business">
          </upov-input-atom>
          
          <button style="padding: 12px; background: #1f4e45; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 14px; font-weight: 500;">
            Send Message
          </button>
        </div>
      </div>
    `,
  }),
};

export const WithValidation: Story = {
  render: () => ({
    template: `
      <div style="max-width: 400px; display: flex; flex-direction: column; gap: 16px;">
        <upov-input-atom
          label="Email (Required)"
          placeholder="Enter email"
          type="email"
          icon="email"
          [required]="true">
        </upov-input-atom>
        
        <upov-input-atom
          label="Password (Required)"
          placeholder="Enter password"
          type="password"
          [required]="true">
        </upov-input-atom>
        
        <p style="margin: 0; font-size: 12px; color: #666;">
          * Required fields must be filled
        </p>
      </div>
    `,
  }),
};

export const FilterPanel: Story = {
  render: () => ({
    template: `
      <div style="width: 300px; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
        <h4 style="margin: 0 0 16px 0; font-size: 16px;">Filter Options</h4>
        
        <div style="display: flex; flex-direction: column; gap: 16px;">
          <upov-input-atom
            label="Authority"
            placeholder="Search authorities..."
            icon="public"
            [clearable]="true">
          </upov-input-atom>
          
          <upov-input-atom
            label="Family"
            placeholder="Filter by family..."
            icon="eco"
            [clearable]="true">
          </upov-input-atom>
          
          <upov-input-atom
            label="Crop Type"
            placeholder="Select crop type..."
            icon="spa"
            [clearable]="true">
          </upov-input-atom>
          
          <div style="display: flex; gap: 8px; margin-top: 8px;">
            <button style="flex: 1; padding: 8px; background: #1f4e45; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 13px;">
              Apply
            </button>
            <button style="flex: 1; padding: 8px; background: white; color: #1f4e45; border: 1px solid #1f4e45; border-radius: 4px; cursor: pointer; font-size: 13px;">
              Reset
            </button>
          </div>
        </div>
      </div>
    `,
  }),
};

export const InlineSearch: Story = {
  render: () => ({
    template: `
      <div style="background: #1f4e45; padding: 48px; border-radius: 8px;">
        <div style="max-width: 600px; margin: 0 auto;">
          <h2 style="color: white; text-align: center; margin: 0 0 24px 0;">Search UPOV Database</h2>
          <upov-input-atom
            placeholder="Search for species, authorities, or guidelines..."
            icon="search"
            [clearable]="true">
          </upov-input-atom>
        </div>
      </div>
    `,
  }),
};

export const CompactInputs: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 12px; align-items: end; flex-wrap: wrap;">
        <div style="flex: 1; min-width: 200px;">
          <upov-input-atom
            placeholder="Quick search..."
            icon="search"
            [clearable]="true">
          </upov-input-atom>
        </div>
        <button style="padding: 14px 24px; background: #1f4e45; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 14px; font-weight: 500;">
          Search
        </button>
      </div>
    `,
  }),
};