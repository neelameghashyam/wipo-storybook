import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { FooterComponent } from '../../lib/Atoms/footer/footer';

const meta: Meta<FooterComponent> = {
  title: 'Atoms/Footer',
  component: FooterComponent,
  decorators: [
    moduleMetadata({
      imports: [FooterComponent],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    hasPreviousChapter: {
      control: 'boolean',
      description: 'Enable/disable previous chapter button',
    },
    hasNextChapter: {
      control: 'boolean',
      description: 'Enable/disable next chapter button',
    },
    export: {
      action: 'export clicked',
      description: 'Event emitted when export button is clicked',
    },
    previousChapter: {
      action: 'previous chapter clicked',
      description: 'Event emitted when previous chapter button is clicked',
    },
    nextChapter: {
      action: 'next chapter clicked',
      description: 'Event emitted when next chapter button is clicked',
    },
  },
};

export default meta;
type Story = StoryObj<FooterComponent>;

export const Default: Story = {
  args: {
    hasPreviousChapter: true,
    hasNextChapter: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <upov-footer 
        [hasPreviousChapter]="hasPreviousChapter"
        [hasNextChapter]="hasNextChapter"
        (export)="export($event)"
        (previousChapter)="previousChapter($event)"
        (nextChapter)="nextChapter($event)">
      </upov-footer>
    `,
  }),
};

export const FirstChapter: Story = {
  args: {
    hasPreviousChapter: false,
    hasNextChapter: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <upov-footer 
        [hasPreviousChapter]="hasPreviousChapter"
        [hasNextChapter]="hasNextChapter"
        (export)="export($event)"
        (previousChapter)="previousChapter($event)"
        (nextChapter)="nextChapter($event)">
      </upov-footer>
    `,
  }),
};

export const LastChapter: Story = {
  args: {
    hasPreviousChapter: true,
    hasNextChapter: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <upov-footer 
        [hasPreviousChapter]="hasPreviousChapter"
        [hasNextChapter]="hasNextChapter"
        (export)="export($event)"
        (previousChapter)="previousChapter($event)"
        (nextChapter)="nextChapter($event)">
      </upov-footer>
    `,
  }),
};


export const All: Story = {
  render: () => ({
    template: `
    <div style="
      font-family: 'Figtree', sans-serif;
      background: #F5F5F5;
      padding: 40px 0;
    ">
      
      <!-- Title -->
      <div style="
        font-weight: 700;
        font-size: 28px;
        line-height: 48px;
        color: #1C4240;
        padding: 0 72px;
        margin-bottom: 24px;
      ">
        Footer
      </div>

      <!-- Default State -->
      <div style="margin-bottom: 40px;">
        <div style="
          font-weight: 600;
          font-size: 16px;
          color: #1C4240;
          padding: 0 72px;
          margin-bottom: 12px;
        ">Default (All buttons enabled)</div>
        <upov-footer 
          [hasPreviousChapter]="true"
          [hasNextChapter]="true">
        </upov-footer>
      </div>

      <!-- First Chapter State -->
      <div style="margin-bottom: 40px;">
        <div style="
          font-weight: 600;
          font-size: 16px;
          color: #1C4240;
          padding: 0 72px;
          margin-bottom: 12px;
        ">First Chapter (Previous disabled)</div>
        <upov-footer 
          [hasPreviousChapter]="false"
          [hasNextChapter]="true">
        </upov-footer>
      </div>

      <!-- Last Chapter State -->
      <div style="margin-bottom: 40px;">
        <div style="
          font-weight: 600;
          font-size: 16px;
          color: #1C4240;
          padding: 0 72px;
          margin-bottom: 12px;
        ">Last Chapter (Next disabled)</div>
        <upov-footer 
          [hasPreviousChapter]="true"
          [hasNextChapter]="false">
        </upov-footer>
      </div>

    </div>
    `,
  }),
};
