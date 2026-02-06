import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { MatIconModule } from '@angular/material/icon';
import { LinksComponent } from '../../lib/Atoms/links/links';

const meta: Meta<LinksComponent> = {
  title: 'Atoms/Links',
  component: LinksComponent,
  decorators: [
    moduleMetadata({
      imports: [MatIconModule, LinksComponent],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
  },
};
export const Default: Story = {
  args: {
    label: 'Related links:',
    links: [
      { text: 'Quantity of plant material required (GN7)' },
      { text: 'Other link' },
    ],
  },
  render: (args) => ({
    props: args,
    template: `
      <upov-links
        [label]="label"
        [links]="links">
      </upov-links>
    `,
  }),
};

export const MultipleLinks: Story = {
  args: {
    label: 'Related links:',
    links: [
      { text: 'First link' },
      { text: 'Second link' },
      { text: 'Third link' },
      { text: 'Fourth link' },
    ],
  },
  render: (args) => ({
    props: args,
    template: `
      <upov-links
        [label]="label"
        [links]="links">
      </upov-links>
    `,
  }),
};

export const All: Story = {
  render: () => ({
    template: `
    <div style="padding:40px; font-family:Figtree">

      <upov-links
        label="Related links:"
        [links]="[
          { text: 'Quantity of plant material required (GN7)' },
          { text: 'other link' }
        ]">
      </upov-links>

      <br><br>

      <upov-links
        label="Related links:"
        [links]="[
          { text: 'First link' },
          { text: 'Second link' },
          { text: 'Third link' },
          { text: 'Fourth link' }
        ]">
      </upov-links>

    </div>
    `,
  }),
};

export default meta;
type Story = StoryObj<LinksComponent>;
