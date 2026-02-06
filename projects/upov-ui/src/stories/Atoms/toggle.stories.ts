import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { ToggleComponent } from '../../lib/Atoms/toggle/toggle';

const meta: Meta<ToggleComponent> = {
  title: 'Atoms/Toggle',
  component: ToggleComponent,
  decorators: [
    moduleMetadata({
      imports: [ToggleComponent],
    }),
  ],
  tags: ['autodocs'],
};
export const Default: Story = {
  args: {
    leftLabel: 'Species',
    rightLabel: 'Authorities',
    value: 'left',
  },
  render: (args) => ({
    props: args,
    template: `
      <upov-toggle
        [leftLabel]="leftLabel"
        [rightLabel]="rightLabel"
        [(value)]="value">
      </upov-toggle>
    `,
  }),
};
export const AuthoritiesSelected: Story = {
  args: {
    leftLabel: 'Species',
    rightLabel: 'Authorities',
    value: 'right',
  },
  render: (args) => ({
    props: args,
    template: `
      <upov-toggle
        [leftLabel]="leftLabel"
        [rightLabel]="rightLabel"
        [(value)]="value">
      </upov-toggle>
    `,
  }),
};
export const FigmaLayout: Story = {
  render: () => ({
    template: `
    <div style="padding:40px; font-family:Figtree">

      <upov-toggle value="left"></upov-toggle>

      <br><br>

      <upov-toggle value="right"></upov-toggle>

    </div>
    `,
  }),
};


export default meta;
type Story = StoryObj<ToggleComponent>;
