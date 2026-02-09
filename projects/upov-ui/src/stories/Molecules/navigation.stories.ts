import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { MatIconModule } from '@angular/material/icon';
import { NavigationComponent } from '../../lib/Molecules/navigation/navigation';

const meta: Meta<NavigationComponent> = {
  title: 'Molecules/Navigation',
  component: NavigationComponent,
  decorators: [
    moduleMetadata({
      imports: [MatIconModule, NavigationComponent],
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
type Story = StoryObj<NavigationComponent>;

/* =====================================================
   INTERACTIVE STORIES
===================================================== */

export const Desktop: Story = {
  args: {
    device: 'desktop',
    menuItems: [
      { label: 'HOME', isActive: false },
      { label: 'FIND & EXPLORE', hasDropdown: true },
      { label: 'PLANT VARIETY PROTECTION', hasDropdown: true },
      { label: 'FILE & MANAGE', hasDropdown: true },
      { label: 'ABOUT UPOV', hasDropdown: true }
    ],
  },
  render: (args) => ({
    props: {
      ...args,
      onMenuClick: (item: any) => console.log('Menu clicked:', item),
      onSearchClick: () => console.log('Search clicked'),
    },
    template: `
      <upov-navigation 
        [device]="device"
        [menuItems]="menuItems"
        (menuClick)="onMenuClick($event)"
        (searchClick)="onSearchClick()">
      </upov-navigation>
    `,
  }),
};

export const Mobile: Story = {
  render: () => ({
    template: `
    <div style="font-family: Figtree, sans-serif; background: #FFFFFF;">
      
      <div style=" margin: 20px; max-width: 375px;">
        <upov-navigation [device]="'mobile'">
        </upov-navigation>
      </div>
    </div>
    `,
  }),
};

export const All: Story = {
  render: () => ({
    template: `
    <div style="font-family: Figtree, sans-serif; background: #FFFFFF; padding: 40px;">
      <!-- Desktop -->
      <div style="margin-bottom: 60px;">
        <h3 style="font-weight: 700; font-size: 28px; color: #1C4240; margin: 0 0 16px 0;">
          Navigation
        </h3>
        
        <div style="margin-bottom: 16px;">
          <div style="font-weight: 300; font-size: 14px; color: #1C4240; margin-bottom: 8px;">
            Desktop
          </div>
          <div style=" padding: 20px;">
            <upov-navigation 
              [device]="'desktop'"
              [menuItems]="[
                { label: 'HOME', isActive: false },
                { label: 'FIND & EXPLORE', hasDropdown: true },
                { label: 'PLANT VARIETY PROTECTION', hasDropdown: true },
                { label: 'FILE & MANAGE', hasDropdown: true },
                { label: 'ABOUT UPOV', hasDropdown: true }
              ]">
            </upov-navigation>
          </div>
        </div>

        <div style="margin-top: 32px;">
          <div style="font-weight: 300; font-size: 14px; color: #1C4240; margin-bottom: 8px;">
            Mobile
          </div>
          <div style=" padding: 20px; max-width: 375px;">
            <upov-navigation [device]="'mobile'">
            </upov-navigation>
          </div>
        </div>
      </div>
    </div>
    `,
  }),
};