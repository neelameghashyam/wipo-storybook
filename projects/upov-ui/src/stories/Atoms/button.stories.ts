import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { MatIconModule } from '@angular/material/icon';
import { Button1 } from '../../lib/Atoms/button/button';

const meta: Meta<Button1> = {
  title: 'Atoms/Button',
  component: Button1,
  decorators: [
    moduleMetadata({
      imports: [MatIconModule, Button1],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
    },
    disabled: {
      control: 'boolean',
    },
    iconLeft: {
      control: 'text',
    },
    iconRight: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<Button1>;

/* =====================================================
   INTERACTIVE STORIES (for Controls tab)
===================================================== */

export const Primary: Story = {
  args: {
    type: 'primary',
    size: 'medium',
    iconLeft: 'chevron_left',
    iconRight: 'chevron_right',
    disabled: false,
  },
  render: (args) => ({
    props: args,
    template: `<upov-button [type]="type" [size]="size" [iconLeft]="iconLeft" [iconRight]="iconRight" [disabled]="disabled">Button</upov-button>`,
  }),
};

export const Secondary: Story = {
  args: {
    type: 'secondary',
    size: 'medium',
    iconLeft: 'chevron_left',
    iconRight: 'chevron_right',
    disabled: false,
  },
  render: (args) => ({
    props: args,
    template: `<upov-button [type]="type" [size]="size" [iconLeft]="iconLeft" [iconRight]="iconRight" [disabled]="disabled">Button</upov-button>`,
  }),
};

export const Tertiary: Story = {
  args: {
    type: 'tertiary',
    size: 'medium',
    iconLeft: 'chevron_left',
    iconRight: 'chevron_right',
    disabled: false,
  },
  render: (args) => ({
    props: args,
    template: `<upov-button [type]="type" [size]="size" [iconLeft]="iconLeft" [iconRight]="iconRight" [disabled]="disabled">Button</upov-button>`,
  }),
};

export const SmallButton: Story = {
  args: {
    type: 'primary',
    size: 'small',
    iconLeft: 'chevron_left',
    iconRight: 'chevron_right',
    disabled: false,
  },
  render: (args) => ({
    props: args,
    template: `<upov-button [type]="type" [size]="size" [iconLeft]="iconLeft" [iconRight]="iconRight" [disabled]="disabled">Button</upov-button>`,
  }),
};

export const WithoutIcons: Story = {
  args: {
    type: 'primary',
    size: 'medium',
    disabled: false,
  },
  render: (args) => ({
    props: args,
    template: `<upov-button [type]="type" [size]="size" [disabled]="disabled">Button</upov-button>`,
  }),
};

export const Disabled: Story = {
  args: {
    type: 'primary',
    size: 'medium',
    iconLeft: 'chevron_left',
    iconRight: 'chevron_right',
    disabled: true,
  },
  render: (args) => ({
    props: args,
    template: `<upov-button [type]="type" [size]="size" [iconLeft]="iconLeft" [iconRight]="iconRight" [disabled]="disabled">Button</upov-button>`,
  }),
};

/* =====================================================
   SMALL STORY (FIGMA GRID STYLE)
===================================================== */

export const Small: Story = {
  render: () => ({
    template: `
    <div style="padding:40px; font-family:Figtree, sans-serif">

      <div style="
        display:grid;
        grid-template-columns: 120px 160px 160px 160px;
        column-gap:60px;
        row-gap:28px;
        align-items:center;
      ">

        <!-- HEADERS -->
        <div></div>
        <div style="text-align:center; font-weight:600; color:#1C4240;">Primary</div>
        <div style="text-align:center; font-weight:600; color:#1C4240;">Secondary</div>
        <div style="text-align:center; font-weight:600; color:#1C4240;">Tertiary</div>

        <!-- SMALL LABEL -->
        <div style="font-weight:700; color:#1C4240;">Small</div>
        <div></div><div></div><div></div>

        <!-- DEFAULT -->
        <div style="color:#1C4240;">Default</div>

        <div style="display:flex; justify-content:center">
          <upov-button type="primary" size="small" iconLeft="chevron_left" iconRight="chevron_right">Button</upov-button>
        </div>

        <div style="display:flex; justify-content:center">
          <upov-button type="secondary" size="small" iconLeft="chevron_left" iconRight="chevron_right">Button</upov-button>
        </div>

        <div style="display:flex; justify-content:center">
          <upov-button type="tertiary" size="small" iconLeft="chevron_left" iconRight="chevron_right">Button</upov-button>
        </div>

        <!-- DISABLED -->
        <div style="color:#1C4240;">Disabled</div>

        <div style="display:flex; justify-content:center">
          <upov-button type="primary" size="small" [disabled]="true" iconLeft="chevron_left" iconRight="chevron_right">Button</upov-button>
        </div>

        <div style="display:flex; justify-content:center">
          <upov-button type="secondary" size="small" [disabled]="true" iconLeft="chevron_left" iconRight="chevron_right">Button</upov-button>
        </div>

        <div style="display:flex; justify-content:center">
          <upov-button type="tertiary" size="small" [disabled]="true" iconLeft="chevron_left" iconRight="chevron_right">Button</upov-button>
        </div>

      </div>
    </div>
    `,
  }),
};

/* =====================================================
   MEDIUM STORY (FIGMA GRID STYLE)
===================================================== */

export const Medium: Story = {
  render: () => ({
    template: `
    <div style="padding:40px; font-family:Figtree, sans-serif">

      <div style="
        display:grid;
        grid-template-columns: 120px 160px 160px 160px;
        column-gap:60px;
        row-gap:28px;
        align-items:center;
      ">

        <!-- HEADERS -->
        <div></div>
        <div style="text-align:center; font-weight:600; color:#1C4240;">Primary</div>
        <div style="text-align:center; font-weight:600; color:#1C4240;">Secondary</div>
        <div style="text-align:center; font-weight:600; color:#1C4240;">Tertiary</div>

        <!-- MEDIUM LABEL -->
        <div style="font-weight:700; color:#1C4240;">Medium</div>
        <div></div><div></div><div></div>

        <!-- DEFAULT -->
        <div style="color:#1C4240;">Default</div>

        <div style="display:flex; justify-content:center">
          <upov-button type="primary" size="medium" iconLeft="chevron_left" iconRight="chevron_right">Button</upov-button>
        </div>

        <div style="display:flex; justify-content:center">
          <upov-button type="secondary" size="medium" iconLeft="chevron_left" iconRight="chevron_right">Button</upov-button>
        </div>

        <div style="display:flex; justify-content:center">
          <upov-button type="tertiary" size="medium" iconLeft="chevron_left" iconRight="chevron_right">Button</upov-button>
        </div>

        <!-- DISABLED -->
        <div style="color:#1C4240;">Disabled</div>

        <div style="display:flex; justify-content:center">
          <upov-button type="primary" size="medium" [disabled]="true" iconLeft="chevron_left" iconRight="chevron_right">Button</upov-button>
        </div>

        <div style="display:flex; justify-content:center">
          <upov-button type="secondary" size="medium" [disabled]="true" iconLeft="chevron_left" iconRight="chevron_right">Button</upov-button>
        </div>

        <div style="display:flex; justify-content:center">
          <upov-button type="tertiary" size="medium" [disabled]="true" iconLeft="chevron_left" iconRight="chevron_right">Button</upov-button>
        </div>

      </div>
    </div>
    `,
  }),
};

/* =====================================================
   FULL FIGMA PAGE (BOTH)
===================================================== */

export const All: Story = {
  render: () => ({
    template: `
    <div style="padding:40px; font-family:Figtree, sans-serif">

      <div style="
        display:grid;
        grid-template-columns: 120px 160px 160px 160px;
        column-gap:60px;
        row-gap:28px;
        align-items:center;
      ">

        <!-- HEADERS -->
        <div></div>
        <div style="text-align:center; font-weight:600; color:#1C4240;">Primary</div>
        <div style="text-align:center; font-weight:600; color:#1C4240;">Secondary</div>
        <div style="text-align:center; font-weight:600; color:#1C4240;">Tertiary</div>

        <!-- SMALL -->
        <div style="font-weight:700; color:#1C4240;">Small</div>
        <div></div><div></div><div></div>

        <div style="color:#1C4240;">Default</div>
        <div style="display:flex; justify-content:center"><upov-button type="primary" size="small" iconLeft="chevron_left" iconRight="chevron_right">Button</upov-button></div>
        <div style="display:flex; justify-content:center"><upov-button type="secondary" size="small" iconLeft="chevron_left" iconRight="chevron_right">Button</upov-button></div>
        <div style="display:flex; justify-content:center"><upov-button type="tertiary" size="small" iconLeft="chevron_left" iconRight="chevron_right">Button</upov-button></div>

        <div style="color:#1C4240;">Disabled</div>
        <div style="display:flex; justify-content:center"><upov-button type="primary" size="small" [disabled]="true" iconLeft="chevron_left" iconRight="chevron_right">Button</upov-button></div>
        <div style="display:flex; justify-content:center"><upov-button type="secondary" size="small" [disabled]="true" iconLeft="chevron_left" iconRight="chevron_right">Button</upov-button></div>
        <div style="display:flex; justify-content:center"><upov-button type="tertiary" size="small" [disabled]="true" iconLeft="chevron_left" iconRight="chevron_right">Button</upov-button></div>

        <!-- MEDIUM -->
        <div style="font-weight:700; color:#1C4240;">Medium</div>
        <div></div><div></div><div></div>

        <div style="color:#1C4240;">Default</div>
        <div style="display:flex; justify-content:center"><upov-button type="primary" size="medium" iconLeft="chevron_left" iconRight="chevron_right">Button</upov-button></div>
        <div style="display:flex; justify-content:center"><upov-button type="secondary" size="medium" iconLeft="chevron_left" iconRight="chevron_right">Button</upov-button></div>
        <div style="display:flex; justify-content:center"><upov-button type="tertiary" size="medium" iconLeft="chevron_left" iconRight="chevron_right">Button</upov-button></div>

        <div style="color:#1C4240;">Disabled</div>
        <div style="display:flex; justify-content:center"><upov-button type="primary" size="medium" [disabled]="true" iconLeft="chevron_left" iconRight="chevron_right">Button</upov-button></div>
        <div style="display:flex; justify-content:center"><upov-button type="secondary" size="medium" [disabled]="true" iconLeft="chevron_left" iconRight="chevron_right">Button</upov-button></div>
        <div style="display:flex; justify-content:center"><upov-button type="tertiary" size="medium" [disabled]="true" iconLeft="chevron_left" iconRight="chevron_right">Button</upov-button></div>

      </div>
    </div>
    `,
  }),
};