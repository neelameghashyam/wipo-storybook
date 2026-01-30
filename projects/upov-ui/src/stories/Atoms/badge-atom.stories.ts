import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { BadgeAtom } from '../../lib/Atoms/BadgeAtom/badge-atom.component';

const meta: Meta<BadgeAtom> = {
  title: 'Atoms/Badge',
  component: BadgeAtom,
  decorators: [
    moduleMetadata({
      imports: [BadgeAtom],
    }),
  ],
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A badge component for labels like "Updated", "New", etc.

## Usage

\`\`\`typescript
import { BadgeAtom } from 'upov-ui';

@Component({
  imports: [BadgeAtom],
  template: \`
    <upov-badge-atom label="Updated" variant="success"></upov-badge-atom>
  \`
})
export class MyComponent {}
\`\`\`

### Features
- Multiple variants: success, info, warning, default
- Two sizes: small, medium
- Customizable label text
        `,
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Badge label text',
    },
    variant: {
      control: 'select',
      options: ['success', 'info', 'warning', 'default'],
      description: 'Badge color variant',
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
      description: 'Badge size',
    },
    class: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

export default meta;
type Story = StoryObj<BadgeAtom>;

export const Default: Story = {
  args: {
    label: 'Updated',
    variant: 'default',
    size: 'small',
  },
};

export const Info: Story = {
  args: {
    label: 'New',
    variant: 'info',
    size: 'small',
  },
};

export const Warning: Story = {
  args: {
    label: 'Pending',
    variant: 'warning',
    size: 'small',
  },
};

export const MediumSize: Story = {
  args: {
    label: 'Featured',
    variant: 'success',
    size: 'medium',
  },
};

export const AllVariants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 12px; align-items: center;">
        <upov-badge-atom label="Updated" variant="success"></upov-badge-atom>
        <upov-badge-atom label="New" variant="info"></upov-badge-atom>
        <upov-badge-atom label="Pending" variant="warning"></upov-badge-atom>
        <upov-badge-atom label="Default" variant="default"></upov-badge-atom>
      </div>
    `,
  }),
};

export const Sizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 12px; align-items: center;">
        <upov-badge-atom label="Small" size="small" variant="success"></upov-badge-atom>
        <upov-badge-atom label="Medium" size="medium" variant="success"></upov-badge-atom>
      </div>
    `,
  }),
};

export const InContext: Story = {
  render: () => ({
    template: `
      <div style="padding: 16px; background: white; border-radius: 8px;">
        <h3 style="margin: 0 0 8px 0; display: flex; align-items: center; gap: 8px;">
          Species Name
          <upov-badge-atom label="Updated" variant="success"></upov-badge-atom>
        </h3>
        <p style="margin: 0; color: #666;">Botanical description here...</p>
      </div>
    `,
  }),
};

export const MultipleStatuses: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div style="display: flex; align-items: center; justify-content: space-between; padding: 12px; background: white; border-radius: 4px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
          <span>Rosa hybrida L.</span>
          <upov-badge-atom label="Updated" variant="success"></upov-badge-atom>
        </div>
        <div style="display: flex; align-items: center; justify-content: space-between; padding: 12px; background: white; border-radius: 4px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
          <span>Tulipa gesneriana</span>
          <upov-badge-atom label="New" variant="info"></upov-badge-atom>
        </div>
        <div style="display: flex; align-items: center; justify-content: space-between; padding: 12px; background: white; border-radius: 4px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
          <span>Malus domestica</span>
          <upov-badge-atom label="Pending" variant="warning"></upov-badge-atom>
        </div>
        <div style="display: flex; align-items: center; justify-content: space-between; padding: 12px; background: white; border-radius: 4px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
          <span>Solanum lycopersicum</span>
          <upov-badge-atom label="Draft" variant="default"></upov-badge-atom>
        </div>
      </div>
    `,
  }),
};

export const CustomLabels: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 12px; flex-wrap: wrap; padding: 16px; background: #f5f5f5; border-radius: 8px;">
        <upov-badge-atom label="Verified" variant="success"></upov-badge-atom>
        <upov-badge-atom label="In Review" variant="warning"></upov-badge-atom>
        <upov-badge-atom label="Featured" variant="info"></upov-badge-atom>
        <upov-badge-atom label="Protected" variant="success"></upov-badge-atom>
        <upov-badge-atom label="Expired" variant="default"></upov-badge-atom>
        <upov-badge-atom label="Beta" variant="warning"></upov-badge-atom>
        <upov-badge-atom label="Premium" variant="info"></upov-badge-atom>
        <upov-badge-atom label="Archived" variant="default"></upov-badge-atom>
      </div>
    `,
  }),
};

export const SizeComparison: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px; padding: 16px;">
        <div style="display: flex; align-items: center; gap: 12px;">
          <h4 style="margin: 0; min-width: 80px; font-size: 14px;">Small:</h4>
          <upov-badge-atom label="Updated" variant="success" size="small"></upov-badge-atom>
          <upov-badge-atom label="New" variant="info" size="small"></upov-badge-atom>
          <upov-badge-atom label="Hot" variant="warning" size="small"></upov-badge-atom>
        </div>
        <div style="display: flex; align-items: center; gap: 12px;">
          <h4 style="margin: 0; min-width: 80px; font-size: 14px;">Medium:</h4>
          <upov-badge-atom label="Updated" variant="success" size="medium"></upov-badge-atom>
          <upov-badge-atom label="New" variant="info" size="medium"></upov-badge-atom>
          <upov-badge-atom label="Hot" variant="warning" size="medium"></upov-badge-atom>
        </div>
      </div>
    `,
  }),
};

export const InTable: Story = {
  render: () => ({
    template: `
      <table style="width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden;">
        <thead style="background: #f5f5f5;">
          <tr>
            <th style="padding: 12px; text-align: left; font-size: 14px;">Species</th>
            <th style="padding: 12px; text-align: left; font-size: 14px;">Status</th>
            <th style="padding: 12px; text-align: left; font-size: 14px;">Last Updated</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-top: 1px solid #e0e0e0;">
            <td style="padding: 12px;">Rosa hybrida</td>
            <td style="padding: 12px;">
              <upov-badge-atom label="Updated" variant="success" size="small"></upov-badge-atom>
            </td>
            <td style="padding: 12px; color: #666;">2024-01-28</td>
          </tr>
          <tr style="border-top: 1px solid #e0e0e0;">
            <td style="padding: 12px;">Tulipa gesneriana</td>
            <td style="padding: 12px;">
              <upov-badge-atom label="New" variant="info" size="small"></upov-badge-atom>
            </td>
            <td style="padding: 12px; color: #666;">2024-01-29</td>
          </tr>
          <tr style="border-top: 1px solid #e0e0e0;">
            <td style="padding: 12px;">Malus domestica</td>
            <td style="padding: 12px;">
              <upov-badge-atom label="Pending" variant="warning" size="small"></upov-badge-atom>
            </td>
            <td style="padding: 12px; color: #666;">2024-01-25</td>
          </tr>
        </tbody>
      </table>
    `,
  }),
};