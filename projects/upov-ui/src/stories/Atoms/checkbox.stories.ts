import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { CheckboxComponent } from '../../lib/Atoms/checkbox/checkbox';

const meta: Meta<CheckboxComponent> = {
  title: 'Atoms/Checkbox',
  component: CheckboxComponent,
  decorators: [
    moduleMetadata({
      imports: [CheckboxComponent],
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
type Story = StoryObj<CheckboxComponent>;

export const Default: Story = {
  args: {
    checked: false,
    disabled: false,
  },
  render: (args) => ({
    props: args,
    template: `<upov-checkbox [checked]="checked" [disabled]="disabled"></upov-checkbox>`,
  }),
};

export const Checked: Story = {
  args: {
    checked: true,
    disabled: false,
  },
  render: (args) => ({
    props: args,
    template: `<upov-checkbox [checked]="checked" [disabled]="disabled"></upov-checkbox>`,
  }),
};

export const DisabledFalse: Story = {
  args: {
    checked: false,
    disabled: true,
  },
  render: (args) => ({
    props: args,
    template: `<upov-checkbox [checked]="checked" [disabled]="disabled"></upov-checkbox>`,
  }),
};

export const DisabledTrue: Story = {
  args: {
    checked: true,
    disabled: true,
  },
  render: (args) => ({
    props: args,
    template: `<upov-checkbox [checked]="checked" [disabled]="disabled"></upov-checkbox>`,
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
        <!-- Default -->
        <div style="color: #1C4240;">Default</div>
        <div style="display: flex; justify-content: center;">
          <upov-checkbox [checked]="false" [disabled]="false"></upov-checkbox>
        </div>

        <!-- Checked -->
        <div style="color: #1C4240;">Checked</div>
        <div style="display: flex; justify-content: center;">
          <upov-checkbox [checked]="true" [disabled]="false"></upov-checkbox>
        </div>

        <!-- Disabled False -->
        <div style="color: #1C4240;">Disabled False</div>
        <div style="display: flex; justify-content: center;">
          <upov-checkbox [checked]="false" [disabled]="true"></upov-checkbox>
        </div>

        <!-- Disabled True -->
        <div style="color: #1C4240;">Disabled True</div>
        <div style="display: flex; justify-content: center;">
          <upov-checkbox [checked]="true" [disabled]="true"></upov-checkbox>
        </div>

      </div>
    </div>
    `,
  }),
};
