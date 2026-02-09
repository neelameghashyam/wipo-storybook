import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from '../../lib/Molecules/footer/footer';

const meta: Meta<FooterComponent> = {
  title: 'Molecules/Footer',
  component: FooterComponent,
  decorators: [
    moduleMetadata({
      imports: [MatIconModule, FooterComponent],
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
type Story = StoryObj<FooterComponent>;

/* =====================================================
   INTERACTIVE STORIES
===================================================== */

export const Desktop: Story = {
  args: {
    device: 'desktop',
    description: 'UPOV promotes plant breeding worldwide by protecting new plant varieties, contributing to sustainable development and global food security.',
    socialLinks: [
      { type: 'twitter', url: '#', svgIcon: 'assets/icons/x-twitter.svg' },
      { type: 'linkedin', url: '#', svgIcon: 'assets/icons/linkedin.svg' },
      { type: 'youtube', url: '#', svgIcon: 'assets/icons/youtube.svg' },
      { type: 'email', url: '#', svgIcon: 'assets/icons/envelope.svg' }
    ],
    footerLinks: [
      { label: 'Terms of Use', url: '#' },
      { label: 'Privacy', url: '#' },
      { label: 'Sitemap', url: '#' },
      { label: 'Accesibility', url: '#' }
    ],
  },
  render: (args) => ({
    props: {
      ...args,
      onSocialLinkClick: (link: any) => console.log('Social link clicked:', link),
      onFooterLinkClick: (link: any) => console.log('Footer link clicked:', link),
    },
    template: `
      <upov-footer 
        [device]="device"
        [description]="description"
        [socialLinks]="socialLinks"
        [footerLinks]="footerLinks"
        (socialLinkClick)="onSocialLinkClick($event)"
        (footerLinkClick)="onFooterLinkClick($event)">
      </upov-footer>
    `,
  }),
};


export const Mobile: Story = {
  render: () => ({
    template: `
    <div style="font-family: Figtree, sans-serif; background: #FFFFFF; padding: 40px;">
      <div style="border: 1px dashed #1C4240; border-radius: 5px; max-width: 375px;">
        <upov-footer 
          [device]="'mobile'"
          [description]="'UPOV promotes plant breeding worldwide by protecting new plant varieties, contributing to sustainable development and global food security.'"
          [socialLinks]="[
            { type: 'twitter', url: '#', svgIcon: 'assets/icons/x-twitter.svg' },
            { type: 'linkedin', url: '#', svgIcon: 'assets/icons/linkedin.svg' },
            { type: 'youtube', url: '#', svgIcon: 'assets/icons/youtube.svg' },
            { type: 'email', url: '#', svgIcon: 'assets/icons/envelope.svg' }
          ]"
          [footerLinks]="[
            { label: 'Terms of Use', url: '#' },
            { label: 'Privacy', url: '#' },
            { label: 'Sitemap', url: '#' },
            { label: 'Accesibility', url: '#' }
          ]">
        </upov-footer>
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
        <div style="font-weight: 400; font-size: 14px; color: #1C4240; margin-bottom: 16px;">
          Desktop
        </div>
          <upov-footer 
            [device]="'desktop'"
            [description]="'UPOV promotes plant breeding worldwide by protecting new plant varieties, contributing to sustainable development and global food security.'">
          </upov-footer>
      </div>

      <!-- Mobile -->
      <div>
        <div style="font-weight: 400; font-size: 14px; color: #1C4240; margin-bottom: 16px;">
          Mobile
        </div>
        
          <upov-footer 
            [device]="'mobile'"
            [description]="'UPOV promotes plant breeding worldwide by protecting new plant varieties, contributing to sustainable development and global food security.'">
          </upov-footer>
    
      </div>
    </div>
    `,
  }),
};