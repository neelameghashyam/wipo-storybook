import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { FlagAtom } from '../../lib/Atoms/FlagAtom/flag-atom.component';

const meta: Meta<FlagAtom> = {
  title: 'Atoms/Flag',
  component: FlagAtom,
  decorators: [
    moduleMetadata({
      imports: [FlagAtom],
    }),
  ],
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A component for rendering country flags using ISO codes.

## Usage

\`\`\`typescript
import { FlagAtom } from 'upov-ui';

@Component({
  imports: [FlagAtom],
  template: \`
    <upov-flag-atom 
      isoCode="NL" 
      alt="Netherlands flag"
      size="medium"
      shape="circle">
    </upov-flag-atom>
  \`
})
export class MyComponent {}
\`\`\`

### Features
- Fetches flags from flagcdn.com
- Multiple sizes: small, medium, large
- Shape variants: rectangle, circle
- Automatic fallback for missing flags
- Shows ISO code when flag unavailable
        `,
      },
    },
  },
  argTypes: {
    isoCode: {
      control: 'text',
      description: 'ISO country code (2 letters)',
    },
    alt: {
      control: 'text',
      description: 'Alt text for the flag image',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Flag size',
    },
    shape: {
      control: 'select',
      options: ['rectangle', 'circle'],
      description: 'Flag shape',
    },
    showFallback: {
      control: 'boolean',
      description: 'Show fallback when flag fails to load',
    },
  },
};

export default meta;
type Story = StoryObj<FlagAtom>;

export const Default: Story = {
  args: {
    isoCode: 'NL',
    size: 'medium',
    shape: 'circle',
  },
};

export const Rectangle: Story = {
  args: {
    isoCode: 'NL',
    size: 'medium',
    shape: 'rectangle',
  },
};

export const Small: Story = {
  args: {
    isoCode: 'DE',
    size: 'small',
    shape: 'rectangle',
  },
};

export const Large: Story = {
  args: {
    isoCode: 'GB',
    size: 'large',
    shape: 'rectangle',
  },
};

export const WithFallback: Story = {
  args: {
    isoCode: 'XX', // Invalid code to trigger fallback
    size: 'medium',
    shape: 'rectangle',
    showFallback: true,
  },
};

export const AllSizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; align-items: center;">
        <upov-flag-atom isoCode="NL" size="small"></upov-flag-atom>
        <upov-flag-atom isoCode="NL" size="medium"></upov-flag-atom>
        <upov-flag-atom isoCode="NL" size="large"></upov-flag-atom>
      </div>
    `,
  }),
};

export const AllShapes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; align-items: center;">
        <upov-flag-atom isoCode="FR" shape="rectangle" size="medium"></upov-flag-atom>
        <upov-flag-atom isoCode="FR" shape="circle" size="medium"></upov-flag-atom>
      </div>
    `,
  }),
};

export const CountryExamples: Story = {
  render: () => ({
    template: `
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px;">
        <div style="text-align: center;">
          <upov-flag-atom isoCode="NL" size="medium"></upov-flag-atom>
          <p style="margin: 4px 0 0; font-size: 12px;">Netherlands</p>
        </div>
        <div style="text-align: center;">
          <upov-flag-atom isoCode="FR" size="medium"></upov-flag-atom>
          <p style="margin: 4px 0 0; font-size: 12px;">France</p>
        </div>
        <div style="text-align: center;">
          <upov-flag-atom isoCode="DE" size="medium"></upov-flag-atom>
          <p style="margin: 4px 0 0; font-size: 12px;">Germany</p>
        </div>
        <div style="text-align: center;">
          <upov-flag-atom isoCode="BE" size="medium"></upov-flag-atom>
          <p style="margin: 4px 0 0; font-size: 12px;">Belgium</p>
        </div>
        <div style="text-align: center;">
          <upov-flag-atom isoCode="ES" size="medium"></upov-flag-atom>
          <p style="margin: 4px 0 0; font-size: 12px;">Spain</p>
        </div>
        <div style="text-align: center;">
          <upov-flag-atom isoCode="IT" size="medium"></upov-flag-atom>
          <p style="margin: 4px 0 0; font-size: 12px;">Italy</p>
        </div>
        <div style="text-align: center;">
          <upov-flag-atom isoCode="PL" size="medium"></upov-flag-atom>
          <p style="margin: 4px 0 0; font-size: 12px;">Poland</p>
        </div>
        <div style="text-align: center;">
          <upov-flag-atom isoCode="AT" size="medium"></upov-flag-atom>
          <p style="margin: 4px 0 0; font-size: 12px;">Austria</p>
        </div>
      </div>
    `,
  }),
};

export const InAuthorityCard: Story = {
  render: () => ({
    template: `
      <div style="padding: 16px; background: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); max-width: 300px;">
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;">
          <upov-flag-atom isoCode="NL" size="medium" shape="circle"></upov-flag-atom>
          <div>
            <h3 style="margin: 0; font-size: 16px;">Netherlands</h3>
            <p style="margin: 0; font-size: 12px; color: #666;">(NL)</p>
          </div>
        </div>
        <p style="margin: 8px 0 0; font-size: 14px; color: #333;">
          Board for Plant Varieties
        </p>
      </div>
    `,
  }),
};

export const EuropeanCountries: Story = {
  render: () => ({
    template: `
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 16px;">
        <div style="text-align: center; padding: 12px; background: white; border-radius: 4px;">
          <upov-flag-atom isoCode="NL" size="large"></upov-flag-atom>
          <p style="margin: 8px 0 0; font-size: 13px; font-weight: 500;">Netherlands</p>
          <p style="margin: 4px 0 0; font-size: 11px; color: #666;">NL</p>
        </div>
        <div style="text-align: center; padding: 12px; background: white; border-radius: 4px;">
          <upov-flag-atom isoCode="FR" size="large"></upov-flag-atom>
          <p style="margin: 8px 0 0; font-size: 13px; font-weight: 500;">France</p>
          <p style="margin: 4px 0 0; font-size: 11px; color: #666;">FR</p>
        </div>
        <div style="text-align: center; padding: 12px; background: white; border-radius: 4px;">
          <upov-flag-atom isoCode="DE" size="large"></upov-flag-atom>
          <p style="margin: 8px 0 0; font-size: 13px; font-weight: 500;">Germany</p>
          <p style="margin: 4px 0 0; font-size: 11px; color: #666;">DE</p>
        </div>
        <div style="text-align: center; padding: 12px; background: white; border-radius: 4px;">
          <upov-flag-atom isoCode="BE" size="large"></upov-flag-atom>
          <p style="margin: 8px 0 0; font-size: 13px; font-weight: 500;">Belgium</p>
          <p style="margin: 4px 0 0; font-size: 11px; color: #666;">BE</p>
        </div>
        <div style="text-align: center; padding: 12px; background: white; border-radius: 4px;">
          <upov-flag-atom isoCode="ES" size="large"></upov-flag-atom>
          <p style="margin: 8px 0 0; font-size: 13px; font-weight: 500;">Spain</p>
          <p style="margin: 4px 0 0; font-size: 11px; color: #666;">ES</p>
        </div>
        <div style="text-align: center; padding: 12px; background: white; border-radius: 4px;">
          <upov-flag-atom isoCode="IT" size="large"></upov-flag-atom>
          <p style="margin: 8px 0 0; font-size: 13px; font-weight: 500;">Italy</p>
          <p style="margin: 4px 0 0; font-size: 11px; color: #666;">IT</p>
        </div>
        <div style="text-align: center; padding: 12px; background: white; border-radius: 4px;">
          <upov-flag-atom isoCode="PL" size="large"></upov-flag-atom>
          <p style="margin: 8px 0 0; font-size: 13px; font-weight: 500;">Poland</p>
          <p style="margin: 4px 0 0; font-size: 11px; color: #666;">PL</p>
        </div>
        <div style="text-align: center; padding: 12px; background: white; border-radius: 4px;">
          <upov-flag-atom isoCode="AT" size="large"></upov-flag-atom>
          <p style="margin: 8px 0 0; font-size: 13px; font-weight: 500;">Austria</p>
          <p style="margin: 4px 0 0; font-size: 11px; color: #666;">AT</p>
        </div>
      </div>
    `,
  }),
};

export const GlobalCoverage: Story = {
  render: () => ({
    template: `
      <div>
        <h4 style="margin: 0 0 16px 0; font-size: 16px;">UPOV Member States</h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 12px;">
          <div style="display: flex; align-items: center; gap: 12px; padding: 12px; background: white; border-radius: 4px;">
            <upov-flag-atom isoCode="US" size="medium"></upov-flag-atom>
            <span style="font-size: 14px;">United States</span>
          </div>
          <div style="display: flex; align-items: center; gap: 12px; padding: 12px; background: white; border-radius: 4px;">
            <upov-flag-atom isoCode="CA" size="medium"></upov-flag-atom>
            <span style="font-size: 14px;">Canada</span>
          </div>
          <div style="display: flex; align-items: center; gap: 12px; padding: 12px; background: white; border-radius: 4px;">
            <upov-flag-atom isoCode="JP" size="medium"></upov-flag-atom>
            <span style="font-size: 14px;">Japan</span>
          </div>
          <div style="display: flex; align-items: center; gap: 12px; padding: 12px; background: white; border-radius: 4px;">
            <upov-flag-atom isoCode="AU" size="medium"></upov-flag-atom>
            <span style="font-size: 14px;">Australia</span>
          </div>
          <div style="display: flex; align-items: center; gap: 12px; padding: 12px; background: white; border-radius: 4px;">
            <upov-flag-atom isoCode="NZ" size="medium"></upov-flag-atom>
            <span style="font-size: 14px;">New Zealand</span>
          </div>
          <div style="display: flex; align-items: center; gap: 12px; padding: 12px; background: white; border-radius: 4px;">
            <upov-flag-atom isoCode="KR" size="medium"></upov-flag-atom>
            <span style="font-size: 14px;">South Korea</span>
          </div>
          <div style="display: flex; align-items: center; gap: 12px; padding: 12px; background: white; border-radius: 4px;">
            <upov-flag-atom isoCode="BR" size="medium"></upov-flag-atom>
            <span style="font-size: 14px;">Brazil</span>
          </div>
          <div style="display: flex; align-items: center; gap: 12px; padding: 12px; background: white; border-radius: 4px;">
            <upov-flag-atom isoCode="CN" size="medium"></upov-flag-atom>
            <span style="font-size: 14px;">China</span>
          </div>
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
            <th style="padding: 12px; text-align: left; font-size: 14px;">Country</th>
            <th style="padding: 12px; text-align: left; font-size: 14px;">ISO</th>
            <th style="padding: 12px; text-align: left; font-size: 14px;">Species</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-top: 1px solid #e0e0e0;">
            <td style="padding: 12px;">
              <div style="display: flex; align-items: center; gap: 8px;">
                <upov-flag-atom isoCode="NL" size="small"></upov-flag-atom>
                <span>Netherlands</span>
              </div>
            </td>
            <td style="padding: 12px;">NL</td>
            <td style="padding: 12px; color: #666;">1,234</td>
          </tr>
          <tr style="border-top: 1px solid #e0e0e0;">
            <td style="padding: 12px;">
              <div style="display: flex; align-items: center; gap: 8px;">
                <upov-flag-atom isoCode="FR" size="small"></upov-flag-atom>
                <span>France</span>
              </div>
            </td>
            <td style="padding: 12px;">FR</td>
            <td style="padding: 12px; color: #666;">987</td>
          </tr>
          <tr style="border-top: 1px solid #e0e0e0;">
            <td style="padding: 12px;">
              <div style="display: flex; align-items: center; gap: 8px;">
                <upov-flag-atom isoCode="DE" size="small"></upov-flag-atom>
                <span>Germany</span>
              </div>
            </td>
            <td style="padding: 12px;">DE</td>
            <td style="padding: 12px; color: #666;">856</td>
          </tr>
        </tbody>
      </table>
    `,
  }),
};

export const CircleVariants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 24px; align-items: center; padding: 24px; background: white; border-radius: 8px;">
        <div style="text-align: center;">
          <upov-flag-atom isoCode="NL" size="small" shape="circle"></upov-flag-atom>
          <p style="margin: 8px 0 0; font-size: 11px;">Small</p>
        </div>
        <div style="text-align: center;">
          <upov-flag-atom isoCode="FR" size="medium" shape="circle"></upov-flag-atom>
          <p style="margin: 8px 0 0; font-size: 11px;">Medium</p>
        </div>
        <div style="text-align: center;">
          <upov-flag-atom isoCode="DE" size="large" shape="circle"></upov-flag-atom>
          <p style="margin: 8px 0 0; font-size: 11px;">Large</p>
        </div>
      </div>
    `,
  }),
};

export const WithFallbacks: Story = {
  render: () => ({
    template: `
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; padding: 16px; background: #f5f5f5; border-radius: 8px;">
        <div style="text-align: center;">
          <upov-flag-atom isoCode="NL" size="medium"></upov-flag-atom>
          <p style="margin: 8px 0 0; font-size: 12px;">Valid (NL)</p>
        </div>
        <div style="text-align: center;">
          <upov-flag-atom isoCode="XX" size="medium"></upov-flag-atom>
          <p style="margin: 8px 0 0; font-size: 12px;">Invalid (XX)</p>
        </div>
        <div style="text-align: center;">
          <upov-flag-atom isoCode="QZ" size="medium"></upov-flag-atom>
          <p style="margin: 8px 0 0; font-size: 12px;">Special (QZ)</p>
        </div>
        <div style="text-align: center;">
          <upov-flag-atom isoCode="" size="medium"></upov-flag-atom>
          <p style="margin: 8px 0 0; font-size: 12px;">Empty</p>
        </div>
      </div>
    `,
  }),
};

export const InFilterChips: Story = {
  render: () => ({
    template: `
      <div style="background: white; padding: 20px; border-radius: 8px;">
        <h4 style="margin: 0 0 12px 0; font-size: 14px; color: #666;">Selected Countries:</h4>
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          <div style="display: flex; align-items: center; gap: 6px; padding: 6px 12px; background: #f5f5f5; border-radius: 16px;">
            <upov-flag-atom isoCode="NL" size="small" shape="circle"></upov-flag-atom>
            <span style="font-size: 13px;">Netherlands</span>
            <button style="background: none; border: none; cursor: pointer; padding: 0; display: flex; align-items: center;">×</button>
          </div>
          <div style="display: flex; align-items: center; gap: 6px; padding: 6px 12px; background: #f5f5f5; border-radius: 16px;">
            <upov-flag-atom isoCode="FR" size="small" shape="circle"></upov-flag-atom>
            <span style="font-size: 13px;">France</span>
            <button style="background: none; border: none; cursor: pointer; padding: 0; display: flex; align-items: center;">×</button>
          </div>
          <div style="display: flex; align-items: center; gap: 6px; padding: 6px 12px; background: #f5f5f5; border-radius: 16px;">
            <upov-flag-atom isoCode="DE" size="small" shape="circle"></upov-flag-atom>
            <span style="font-size: 13px;">Germany</span>
            <button style="background: none; border: none; cursor: pointer; padding: 0; display: flex; align-items: center;">×</button>
          </div>
        </div>
      </div>
    `,
  }),
};