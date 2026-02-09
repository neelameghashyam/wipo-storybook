import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { TooltipComponent } from '../../lib/Atoms/tooltip/tooltip';

const meta: Meta<TooltipComponent> = {
  title: 'Atoms/Tooltip',
  component: TooltipComponent,
  decorators: [
    moduleMetadata({
      imports: [TooltipComponent],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
    },
    position: {
      control: 'select',
      options: ['left', 'right', 'up', 'down'],
    },
    visible: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<TooltipComponent>;

/* =====================================================
   INTERACTIVE STORIES (for Controls tab)
===================================================== */

export const Left: Story = {
  args: {
    text: 'This is a tooltip',
    position: 'left',
    visible: true,
  },
  render: (args) => ({
    props: args,
    template: `<upov-tooltip 
      [text]="text" 
      [position]="position" 
      [visible]="visible">
    </upov-tooltip>`,
  }),
};

export const Right: Story = {
  args: {
    text: 'This is a tooltip',
    position: 'right',
    visible: true,
  },
  render: (args) => ({
    props: args,
    template: `<upov-tooltip 
      [text]="text" 
      [position]="position" 
      [visible]="visible">
    </upov-tooltip>`,
  }),
};

export const Up: Story = {
  args: {
    text: 'This is a tooltip',
    position: 'up',
    visible: true,
  },
  render: (args) => ({
    props: args,
    template: `<upov-tooltip 
      [text]="text" 
      [position]="position" 
      [visible]="visible">
    </upov-tooltip>`,
  }),
};

export const Down: Story = {
  args: {
    text: 'This is a tooltip',
    position: 'down',
    visible: true,
  },
  render: (args) => ({
    props: args,
    template: `<upov-tooltip 
      [text]="text" 
      [position]="position" 
      [visible]="visible">
    </upov-tooltip>`,
  }),
};

/* =====================================================
   ALL VARIANTS SHOWCASE (FIGMA STYLE)
===================================================== */

export const All: Story = {
  render: () => ({
    template: `
    <div style="padding:40px;font-family:Figtree;">
      <h2 style="font-size:32px;font-weight:700;color:#1C4240;margin-bottom:40px;">
        Tooltips
      </h2>

      <div style="
        padding:30px;
        border-radius:6px;
        width:320px;
        display:flex;
        flex-direction:column;
        gap:40px;
      ">

        <div style="display:flex;align-items:center;gap:40px;">
          <div style="width:60px;color:#1C4240;">Left</div>
          <upov-tooltip text="This is a tooltip" position="left" [visible]="true"></upov-tooltip>
        </div>

        <div style="display:flex;align-items:center;gap:40px;">
          <div style="width:60px;color:#1C4240;">Right</div>
          <upov-tooltip text="This is a tooltip" position="right" [visible]="true"></upov-tooltip>
        </div>

        <div style="display:flex;align-items:center;gap:40px;">
          <div style="width:60px;color:#1C4240;">Up</div>
          <upov-tooltip text="This is a tooltip" position="up" [visible]="true"></upov-tooltip>
        </div>

        <div style="display:flex;align-items:center;gap:40px;">
          <div style="width:60px;color:#1C4240;">Down</div>
          <upov-tooltip text="This is a tooltip" position="down" [visible]="true"></upov-tooltip>
        </div>

      </div>
    </div>
    `,
  }),
};



