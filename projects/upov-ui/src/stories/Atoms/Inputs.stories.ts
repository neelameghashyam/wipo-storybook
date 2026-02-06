import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { MatIconModule } from '@angular/material/icon';
import { InputsComponent } from '../../lib/Atoms/inputs/inputs';

const meta: Meta<InputsComponent> = {
  title: 'Atoms/Inputs',
  component: InputsComponent,
  decorators: [
    moduleMetadata({
      imports: [MatIconModule, InputsComponent],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'filled', 'focused', 'disabled'],
    },
    type: {
      control: 'select',
      options: ['text', 'phone'],
    },
    placeholder: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    value: {
      control: 'text',
    },
    showChevron: {
      control: 'boolean',
    },
    countryCode: {
      control: 'text',
    },
    countryFlag: {
      control: 'text',
      description: 'ISO 3166-1 alpha-2 country code (e.g., "au", "us", "gb")',
    },
  },
};

export default meta;
type Story = StoryObj<InputsComponent>;

/* =====================================================
   INTERACTIVE STORIES (for Controls tab)
===================================================== */

export const Default: Story = {
  args: {
    variant: 'default',
    type: 'text',
    placeholder: 'Label',
    disabled: false,
    showChevron: true,
  },
  render: (args) => ({
    props: args,
    template: `<upov-input [variant]="variant" [type]="type" [placeholder]="placeholder" [disabled]="disabled" [showChevron]="showChevron"></upov-input>`,
  }),
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    type: 'text',
    placeholder: 'Label',
    value: 'Filled text',
    disabled: false,
    showChevron: true,
  },
  render: (args) => ({
    props: args,
    template: `<upov-input [variant]="variant" [type]="type" [placeholder]="placeholder" [value]="value" [disabled]="disabled" [showChevron]="showChevron"></upov-input>`,
  }),
};

export const Focused: Story = {
  args: {
    variant: 'focused',
    type: 'text',
    placeholder: 'Label',
    value: 'Focused text',
    disabled: false,
    showChevron: true,
  },
  render: (args) => ({
    props: args,
    template: `<upov-input [variant]="variant" [type]="type" [placeholder]="placeholder" [value]="value" [disabled]="disabled" [showChevron]="showChevron"></upov-input>`,
  }),
};

export const Disabled: Story = {
  args: {
    variant: 'disabled',
    type: 'text',
    placeholder: 'Label',
    disabled: true,
    showChevron: true,
  },
  render: (args) => ({
    props: args,
    template: `<upov-input [variant]="variant" [type]="type" [placeholder]="placeholder" [disabled]="disabled" [showChevron]="showChevron"></upov-input>`,
  }),
};

export const PhoneEmpty: Story = {
  args: {
    variant: 'default',
    type: 'phone',
    placeholder: 'Label',
    countryCode: '+61',
    countryFlag: 'au',
    disabled: false,
  },
  render: (args) => ({
    props: args,
    template: `<upov-input [variant]="variant" [type]="type" [placeholder]="placeholder" [countryCode]="countryCode" [countryFlag]="countryFlag" [disabled]="disabled"></upov-input>`,
  }),
};

export const PhoneFilled: Story = {
  args: {
    variant: 'filled',
    type: 'phone',
    placeholder: 'Label',
    value: '123 456 789',
    countryCode: '+61',
    countryFlag: 'au',
    disabled: false,
  },
  render: (args) => ({
    props: args,
    template: `<upov-input [variant]="variant" [type]="type" [placeholder]="placeholder" [value]="value" [countryCode]="countryCode" [countryFlag]="countryFlag" [disabled]="disabled"></upov-input>`,
  }),
};


/* =====================================================
   ALL VARIANTS SHOWCASE
===================================================== */

export const AllVariants: Story = {
  render: () => ({
    template: `
    <div style="padding: 40px; font-family: Figtree, sans-serif; background: #FFFFFF;">
      
      <!-- Header -->
      <div style="margin-bottom: 32px;">
        <h1 style="font-weight: 700; font-size: 32px; line-height: 48px; color: #1C4240; margin: 0;">
          Form elements
        </h1>
      </div>

      <!-- Inputs Section -->
      <div style="margin-bottom: 60px;">
        <h3 style="font-weight: 700; font-size: 24px; line-height: 36px; color: #1C4240; margin-bottom: 24px;">
          Inputs
        </h3>
        
        <div style="
          display: inline-block;
          padding: 20px;
          border-radius: 5px;
        ">
          <div style="display: flex; flex-direction: column; gap: 20px;">
            
            <!-- Default -->
            <div style="display: flex; align-items: center; gap: 12px;">
              <div style="width: 80px; font-weight: 300; font-size: 14px; color: #1C4240;">Default</div>
              <upov-input variant="default" type="text" placeholder="Label" [showChevron]="true"></upov-input>
            </div>

            <!-- Filled -->
            <div style="display: flex; align-items: center; gap: 12px;">
              <div style="width: 80px; font-weight: 300; font-size: 14px; color: #1C4240;">Filled</div>
              <upov-input variant="filled" type="text" placeholder="Label" value="Text value" [showChevron]="true"></upov-input>
            </div>

            <!-- Focused -->
            <div style="display: flex; align-items: center; gap: 12px;">
              <div style="width: 80px; font-weight: 300; font-size: 14px; color: #1C4240;">Focused<br/>filled</div>
              <upov-input variant="focused" type="text" placeholder="Label" value="Text value" [showChevron]="true"></upov-input>
            </div>

            <!-- Disabled -->
            <div style="display: flex; align-items: center; gap: 12px;">
              <div style="width: 80px; font-weight: 300; font-size: 14px; color: #1C4240;">Disabled</div>
              <upov-input variant="disabled" type="text" placeholder="Label" [disabled]="true" [showChevron]="true"></upov-input>
            </div>

            <!-- Phone empty -->
            <div style="display: flex; align-items: center; gap: 12px;">
              <div style="width: 80px; font-weight: 300; font-size: 14px; color: #1C4240;">Phone<br/>empty</div>
              <upov-input variant="default" type="phone" placeholder="Label" countryCode="+61" countryFlag="au"></upov-input>
            </div>

            <!-- Phone filled -->
            <div style="display: flex; align-items: center; gap: 12px;">
              <div style="width: 80px; font-weight: 300; font-size: 14px; color: #1C4240;">Phone<br/>filled</div>
              <upov-input variant="filled" type="phone" placeholder="Label" value="123 456 789" countryCode="+61" countryFlag="au"></upov-input>
            </div>

          </div>
        </div>
      </div>

    </div>
    `,
  }),
};