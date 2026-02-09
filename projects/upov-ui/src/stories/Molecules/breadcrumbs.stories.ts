import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { MatIconModule } from '@angular/material/icon';
import { BreadcrumbsComponent } from '../../lib/Molecules/breadcrumbs/breadcrumbs';

const meta: Meta<BreadcrumbsComponent> = {
  title: 'Molecules/Breadcrumbs',
  component: BreadcrumbsComponent,
  decorators: [
    moduleMetadata({
      imports: [MatIconModule, BreadcrumbsComponent],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    device: {
      control: 'select',
      options: ['desktop', 'mobile'],
      description: 'Device type for responsive design',
    },
  },
};

export default meta;
type Story = StoryObj<BreadcrumbsComponent>;

/* =====================================================
   INTERACTIVE STORIES
===================================================== */

export const Level1: Story = {
  args: {
    device: 'desktop',
    breadcrumbs: [
      { label: 'Find & Explore' }
    ],
  },
  render: (args) => ({
    props: {
      ...args,
      onBreadcrumbClick: (item: any) => console.log('Breadcrumb clicked:', item),
    },
    template: `
      <upov-breadcrumbs 
        [device]="device"
        [breadcrumbs]="breadcrumbs"
        (breadcrumbClick)="onBreadcrumbClick($event)">
      </upov-breadcrumbs>
    `,
  }),
};

export const Level2: Story = {
  args: {
    device: 'desktop',
    breadcrumbs: [
      { label: 'Find & Explore' },
      { label: 'Databases' }
    ],
  },
  render: (args) => ({
    props: {
      ...args,
      onBreadcrumbClick: (item: any) => console.log('Breadcrumb clicked:', item),
    },
    template: `
      <upov-breadcrumbs 
        [device]="device"
        [breadcrumbs]="breadcrumbs"
        (breadcrumbClick)="onBreadcrumbClick($event)">
      </upov-breadcrumbs>
    `,
  }),
};

export const Level3: Story = {
  args: {
    device: 'desktop',
    breadcrumbs: [
      { label: 'Find & Explore' },
      { label: 'Databases' },
      { label: 'GENIE' }
    ],
  },
  render: (args) => ({
    props: {
      ...args,
      onBreadcrumbClick: (item: any) => console.log('Breadcrumb clicked:', item),
    },
    template: `
      <upov-breadcrumbs 
        [device]="device"
        [breadcrumbs]="breadcrumbs"
        (breadcrumbClick)="onBreadcrumbClick($event)">
      </upov-breadcrumbs>
    `,
  }),
};

export const Level4: Story = {
  args: {
    device: 'desktop',
    breadcrumbs: [
      { label: 'Find & Explore' },
      { label: 'Databases' },
      { label: 'GENIE' },
      { label: 'GENIE Database' }
    ],
  },
  render: (args) => ({
    props: {
      ...args,
      onBreadcrumbClick: (item: any) => console.log('Breadcrumb clicked:', item),
    },
    template: `
      <upov-breadcrumbs 
        [device]="device"
        [breadcrumbs]="breadcrumbs"
        (breadcrumbClick)="onBreadcrumbClick($event)">
      </upov-breadcrumbs>
    `,
  }),
};


export const Mobile: Story = {
  render: () => ({
    template: `
    <div style="font-family: Figtree, sans-serif; background: #FFFFFF; padding: 40px;">
      
      <div style="margin-bottom: 24px;">
        <h3 style="font-weight: 700; font-size: 28px; line-height: 48px; color: #1C4240; margin: 0 0 8px 0;">
          Breadcrumbs
        </h3>
        <div style="font-weight: 300; font-size: 14px; color: #9747FF;">
          Mobile
        </div>
      </div>

      <div style="padding: 20px; max-width: 375px;">
        <upov-breadcrumbs 
          [device]="'mobile'"
          [previousPageName]="'GENIE Database'">
        </upov-breadcrumbs>
      </div>
    </div>
    `,
  }),
};

export const All: Story = {
  render: () => ({
    template: `
    <div style="font-family: Figtree, sans-serif; background: #FFFFFF; padding: 40px;">
      
      <h2 style="font-weight: 700; font-size: 32px; line-height: 48px; color: #1C4240; margin: 0 0 48px 0;">
        Breadcrumbs
      </h2>

      <!-- Desktop -->
      <div style="margin-bottom: 60px;">
        <div style="font-weight: 300; font-size: 14px; color: #1C4240;; margin-bottom: 16px;">
          Desktop
        </div>
        
        <div style=" padding: 20px; display: flex; flex-direction: column; gap: 20px;">
          <upov-breadcrumbs [device]="'desktop'" [breadcrumbs]="[{ label: 'Find & Explore' }]"></upov-breadcrumbs>
          <upov-breadcrumbs [device]="'desktop'" [breadcrumbs]="[{ label: 'Find & Explore' }, { label: 'Databases' }]"></upov-breadcrumbs>
          <upov-breadcrumbs [device]="'desktop'" [breadcrumbs]="[{ label: 'Find & Explore' }, { label: 'Databases' }, { label: 'GENIE' }]"></upov-breadcrumbs>
          <upov-breadcrumbs [device]="'desktop'" [breadcrumbs]="[{ label: 'Find & Explore' }, { label: 'Databases' }, { label: 'GENIE' }, { label: 'GENIE Database' }]"></upov-breadcrumbs>
        </div>
      </div>

      <!-- Mobile -->
      <div>
        <div style="font-weight: 300; font-size: 14px; color: #1C4240;; margin-bottom: 16px;">
          Mobile
        </div>
        
        <div style="padding: 20px; max-width: 375px;">
          <upov-breadcrumbs [device]="'mobile'" [previousPageName]="'GENIE Database'"></upov-breadcrumbs>
        </div>
      </div>
    </div>
    `,
  }),
};