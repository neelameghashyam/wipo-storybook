import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { IconAtom } from '../../lib/Atoms/IconAtom/icon-atom.component';
import { MatIconModule } from '@angular/material/icon';


const meta: Meta<IconAtom> = {
  title: 'Atoms/Icon',
  component: IconAtom,
  decorators: [
    moduleMetadata({
      imports: [MatIconModule, IconAtom],
    }),
  ],
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A wrapper component for Angular Material icons with size and color variants.

## Usage

\`\`\`typescript
import { IconAtom } from 'upov-ui';

@Component({
  imports: [IconAtom],
  template: \`
    <upov-icon-atom icon="search" size="medium" color="primary"></upov-icon-atom>
  \`
})
export class MyComponent {}
\`\`\`

### Features
- Size variants: small, medium, large
- Color variants: primary, accent, warn, inherit
- Supports all Material Icons
        `,
      },
    },
  },
  argTypes: {
    icon: {
      control: 'text',
      description: 'Material icon name',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Icon size',
    },
    color: {
      control: 'select',
      options: ['primary', 'accent', 'warn', 'inherit'],
      description: 'Icon color',
    },
    class: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

export default meta;
type Story = StoryObj<IconAtom>;

export const Default: Story = {
  args: {
    icon: 'search',
    size: 'medium',
    color: 'inherit',
  },
};

export const Small: Story = {
  args: {
    icon: 'spa',
    size: 'small',
    color: 'primary',
  },
};

export const Large: Story = {
  args: {
    icon: 'menu_book',
    size: 'large',
    color: 'accent',
  },
};

export const AllSizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; align-items: center;">
        <upov-icon-atom icon="info" size="small" color="primary"></upov-icon-atom>
        <upov-icon-atom icon="info" size="medium" color="primary"></upov-icon-atom>
        <upov-icon-atom icon="info" size="large" color="primary"></upov-icon-atom>
      </div>
    `,
  }),
};

export const CommonIcons: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; flex-wrap: wrap;">
        <upov-icon-atom icon="search"></upov-icon-atom>
        <upov-icon-atom icon="spa"></upov-icon-atom>
        <upov-icon-atom icon="menu_book"></upov-icon-atom>
        <upov-icon-atom icon="language"></upov-icon-atom>
        <upov-icon-atom icon="gavel"></upov-icon-atom>
        <upov-icon-atom icon="public"></upov-icon-atom>
        <upov-icon-atom icon="location_on"></upov-icon-atom>
        <upov-icon-atom icon="filter_list"></upov-icon-atom>
        <upov-icon-atom icon="expand_more"></upov-icon-atom>
        <upov-icon-atom icon="close"></upov-icon-atom>
        <upov-icon-atom icon="arrow_back_ios_new"></upov-icon-atom>
        <upov-icon-atom icon="business"></upov-icon-atom>
      </div>
    `,
  }),
};

export const AllColors: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 24px; align-items: center; background: #f5f5f5; padding: 24px; border-radius: 8px;">
        <div style="text-align: center;">
          <upov-icon-atom icon="check_circle" size="large" color="primary"></upov-icon-atom>
          <p style="margin: 8px 0 0; font-size: 12px;">Primary</p>
        </div>
        <div style="text-align: center;">
          <upov-icon-atom icon="favorite" size="large" color="accent"></upov-icon-atom>
          <p style="margin: 8px 0 0; font-size: 12px;">Accent</p>
        </div>
        <div style="text-align: center;">
          <upov-icon-atom icon="warning" size="large" color="warn"></upov-icon-atom>
          <p style="margin: 8px 0 0; font-size: 12px;">Warn</p>
        </div>
        <div style="text-align: center; background: #1f4e45; padding: 16px; border-radius: 4px;">
          <upov-icon-atom icon="star" size="large" color="inherit" style="color: white;"></upov-icon-atom>
          <p style="margin: 8px 0 0; font-size: 12px; color: white;">Inherit</p>
        </div>
      </div>
    `,
  }),
};

export const NavigationIcons: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 12px; flex-wrap: wrap; background: white; padding: 16px; border-radius: 8px;">
        <upov-icon-atom icon="home" size="medium" color="primary"></upov-icon-atom>
        <upov-icon-atom icon="arrow_back" size="medium" color="primary"></upov-icon-atom>
        <upov-icon-atom icon="arrow_forward" size="medium" color="primary"></upov-icon-atom>
        <upov-icon-atom icon="menu" size="medium" color="primary"></upov-icon-atom>
        <upov-icon-atom icon="more_vert" size="medium" color="primary"></upov-icon-atom>
        <upov-icon-atom icon="settings" size="medium" color="primary"></upov-icon-atom>
        <upov-icon-atom icon="help" size="medium" color="primary"></upov-icon-atom>
        <upov-icon-atom icon="logout" size="medium" color="primary"></upov-icon-atom>
      </div>
    `,
  }),
};

export const ActionIcons: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 12px; flex-wrap: wrap; background: white; padding: 16px; border-radius: 8px;">
        <upov-icon-atom icon="edit" size="medium" color="primary"></upov-icon-atom>
        <upov-icon-atom icon="delete" size="medium" color="warn"></upov-icon-atom>
        <upov-icon-atom icon="add" size="medium" color="primary"></upov-icon-atom>
        <upov-icon-atom icon="remove" size="medium" color="warn"></upov-icon-atom>
        <upov-icon-atom icon="save" size="medium" color="primary"></upov-icon-atom>
        <upov-icon-atom icon="download" size="medium" color="primary"></upov-icon-atom>
        <upov-icon-atom icon="upload" size="medium" color="primary"></upov-icon-atom>
        <upov-icon-atom icon="share" size="medium" color="primary"></upov-icon-atom>
      </div>
    `,
  }),
};

export const StatusIcons: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; flex-wrap: wrap; background: white; padding: 16px; border-radius: 8px;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <upov-icon-atom icon="check_circle" color="primary"></upov-icon-atom>
          <span>Success</span>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
          <upov-icon-atom icon="error" color="warn"></upov-icon-atom>
          <span>Error</span>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
          <upov-icon-atom icon="warning" color="accent"></upov-icon-atom>
          <span>Warning</span>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
          <upov-icon-atom icon="info" color="primary"></upov-icon-atom>
          <span>Info</span>
        </div>
      </div>
    `,
  }),
};

export const InButtons: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <button style="display: flex; align-items: center; gap: 8px; padding: 8px 16px; background: #1f4e45; color: white; border: none; border-radius: 4px; cursor: pointer;">
          <upov-icon-atom icon="search" size="small" color="inherit"></upov-icon-atom>
          Search
        </button>
        <button style="display: flex; align-items: center; gap: 8px; padding: 8px 16px; background: #1f4e45; color: white; border: none; border-radius: 4px; cursor: pointer;">
          <upov-icon-atom icon="download" size="small" color="inherit"></upov-icon-atom>
          Download
        </button>
        <button style="display: flex; align-items: center; gap: 8px; padding: 8px 16px; background: #1f4e45; color: white; border: none; border-radius: 4px; cursor: pointer;">
          <upov-icon-atom icon="filter_list" size="small" color="inherit"></upov-icon-atom>
          Filter
        </button>
        <button style="display: flex; align-items: center; gap: 8px; padding: 8px 16px; background: white; color: #1f4e45; border: 2px solid #1f4e45; border-radius: 4px; cursor: pointer;">
          Add Species
          <upov-icon-atom icon="add" size="small" color="primary"></upov-icon-atom>
        </button>
      </div>
    `,
  }),
};

export const InCards: Story = {
  render: () => ({
    template: `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 16px;">
        <div style="background: white; padding: 16px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
            <upov-icon-atom icon="spa" size="small" color="primary"></upov-icon-atom>
            <h3 style="margin: 0; font-size: 14px;">Rosa hybrida</h3>
          </div>
          <p style="margin: 0; font-size: 12px; color: #666;">Ornamental plant species</p>
        </div>
        <div style="background: white; padding: 16px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
            <upov-icon-atom icon="public" size="small" color="primary"></upov-icon-atom>
            <h3 style="margin: 0; font-size: 14px;">Netherlands</h3>
          </div>
          <p style="margin: 0; font-size: 12px; color: #666;">Protection authority</p>
        </div>
        <div style="background: white; padding: 16px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
            <upov-icon-atom icon="menu_book" size="small" color="primary"></upov-icon-atom>
            <h3 style="margin: 0; font-size: 14px;">DUS Guidelines</h3>
          </div>
          <p style="margin: 0; font-size: 12px; color: #666;">Test guidelines available</p>
        </div>
      </div>
    `,
  }),
};