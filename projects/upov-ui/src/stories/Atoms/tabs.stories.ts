import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { TabsComponent } from '../../lib/Atoms/tabs/tabs';

const meta: Meta<TabsComponent> = {
  title: 'Atoms/Tabs',
  component: TabsComponent,
  decorators: [
    moduleMetadata({
      imports: [TabsComponent],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    activeTabId: {
      control: 'text',
      description: 'ID of the currently active tab',
    },
  },
};

export default meta;
type Story = StoryObj<TabsComponent>;

/* =====================================================
   INTERACTIVE STORIES
===================================================== */

export const Default: Story = {
  args: {
    tabs: [
      { label: 'List of all crops', id: 'tab1' }
    //   { label: 'Newly Added Species', id: 'tab2', isActive: false }
    ],
    // activeTabId: 'tab1',
  },
  render: (args) => ({
    props: {
      ...args,
      onTabChange: (tab: any) => console.log('Tab changed:', tab),
    },
    template: `
      <upov-tabs 
        [tabs]="tabs"
        (tabChange)="onTabChange($event)">
      </upov-tabs>
    `,
  }),
};

export const Selected: Story = {
  args: {
    tabs: [
      { label: 'Newly Added Species', id: 'tab2', isActive: true }
    ],
    activeTabId: 'tab2',
  },
  render: (args) => ({
    props: {
      ...args,
      onTabChange: (tab: any) => console.log('Tab changed:', tab),
    },
    template: `
      <upov-tabs 
        [tabs]="tabs"
        [activeTabId]="activeTabId"
        (tabChange)="onTabChange($event)">
      </upov-tabs>
    `,
  }),
};


export const SelectedState: Story = {
  render: () => ({
    template: `
    <div style="font-family: Figtree, sans-serif; background: #FFFFFF; padding: 40px;">
      
      <div style="margin-bottom: 24px;">
        <h3 style="font-weight: 700; font-size: 28px; line-height: 48px; color: #1C4240; margin: 0 0 8px 0;">
          Tabs
        </h3>
      </div>

      <div style="max-width: 226px;">
        <upov-tabs 
          [tabs]="[
            { label: 'List of all crops', id: 'tab1', isActive: false },
            { label: 'Newly Added Species', id: 'tab2', isActive: true }
          ]"
          [activeTabId]="'tab2'">
        </upov-tabs>
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
        Tabs
      </h2>

      <!-- Default State -->
      <div style="margin-bottom: 40px;">
        <div style="font-weight: 300; font-size: 14px; color: #1C4240; margin-bottom: 16px;">
          Default
        </div>
        
        <div style="max-width: 226px;">
          <upov-tabs 
            [tabs]="[
              { label: 'List of all crops', id: 'tab1', isActive: false}
            ]"
           >
          </upov-tabs>
        </div>
      </div>

      <!-- Selected State -->
      <div style="margin-bottom: 40px;">
        <div style="font-weight: 300; font-size: 14px; color: #1C4240; margin-bottom: 16px;">
          Selected
        </div>
        
        <div style="max-width: 226px;">
          <upov-tabs 
            [tabs]="[
              { label: 'Newly Added Species', id: 'tab2', isActive: true }
            ]"
            [activeTabId]="'tab2'">
          </upov-tabs>
        </div>
      </div>

      <!-- Full Example -->
      <div>
        <div style="font-weight: 300; font-size: 14px; color: #1C4240; margin-bottom: 16px;">
          Selected (Full)
        </div>
        
        <div style="max-width: 350px;">
          <upov-tabs 
            [tabs]="[
              { label: 'List of all crops', id: 'tab1', isActive:false},
              { label: 'Newly Added Species', id: 'tab2', isActive: false }
            ]"
            [activeTabId]="'tab2'">
          </upov-tabs>
        </div>
      </div>
    </div>
    `,
  }),
};
