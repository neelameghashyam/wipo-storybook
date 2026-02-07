import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { RadiobuttonComponent } from '../../lib/Atoms/radiobuttons/radiobuttons';

const meta: Meta<RadiobuttonComponent> = {
  title: 'Atoms/Radiobutton',
  component: RadiobuttonComponent,
  decorators: [
    moduleMetadata({
      imports: [RadiobuttonComponent],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<RadiobuttonComponent>;


export const False: Story = {
  args: {
    checked: false,
    disabled: false,
  },
  render: (args) => ({
    props: args,
    template: `<upov-radiobutton [checked]="checked" [disabled]="disabled"></upov-radiobutton>`,
  }),
};

export const True: Story = {
  args: {
    checked: true,
    disabled: false,
  },
  render: (args) => ({
    props: args,
    template: `<upov-radiobutton [checked]="checked" [disabled]="disabled"></upov-radiobutton>`,
  }),
};

export const DisabledFalse: Story = {
  args: {
    checked: false,
    disabled: true,
  },
  render: (args) => ({
    props: args,
    template: `<upov-radiobutton [checked]="checked" [disabled]="disabled"></upov-radiobutton>`,
  }),
};

export const DisabledTrue: Story = {
  args: {
    checked: true,
    disabled: true,
  },
  render: (args) => ({
    props: args,
    template: `<upov-radiobutton [checked]="checked" [disabled]="disabled"></upov-radiobutton>`,
  }),
};


export const All: Story = {
  render: () => ({
    template: `
    <div style="
      padding: 40px;
      font-family: 'Figtree', sans-serif;
    ">

      <div style="
        display: grid;
        grid-template-columns: 150px 80px;
        gap: 24px;
        align-items: center;
      ">
        <!-- False -->
        <div style="color: #1C4240;">False</div>
        <div style="display: flex; justify-content: center;">
          <upov-radiobutton [checked]="false" [disabled]="false"></upov-radiobutton>
        </div>

        <!-- True -->
        <div style="color: #1C4240;">True</div>
        <div style="display: flex; justify-content: center;">
          <upov-radiobutton [checked]="true" [disabled]="false"></upov-radiobutton>
        </div>

        <!-- Disabled Empty -->
        <div style="color: #1C4240;">Disabled Empty</div>
        <div style="display: flex; justify-content: center;">
          <upov-radiobutton [checked]="false" [disabled]="true"></upov-radiobutton>
        </div>

        <!-- Disabled Selected -->
        <div style="color: #1C4240;">Disabled Selected</div>
        <div style="display: flex; justify-content: center;">
          <upov-radiobutton [checked]="true" [disabled]="true"></upov-radiobutton>
        </div>

      </div>
    </div>
    `,
  }),
};