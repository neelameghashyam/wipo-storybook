import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { MatIconModule } from '@angular/material/icon';
import { PaginationComponent } from '../../lib/Atoms/pagination/pagination';

const meta: Meta<PaginationComponent> = {
  title: 'Atoms/Pagination',
  component: PaginationComponent,
  decorators: [
    moduleMetadata({
      imports: [MatIconModule, PaginationComponent],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    currentPage: {
      control: { type: 'number', min: 1, max: 8 },
      description: 'Current active page number',
    },
    totalPages: {
      control: { type: 'number', min: 1, max: 20 },
      description: 'Total number of pages',
    },
    device: {
      control: 'select',
      options: ['desktop', 'mobile'],
      description: 'Device type for responsive design',
    },
  },
};

export default meta;
type Story = StoryObj<PaginationComponent>;

/* =====================================================
   INTERACTIVE STORIES (for Controls tab)
===================================================== */

export const Desktop: Story = {
  args: {
    currentPage: 1,
    totalPages: 8,
    device: 'desktop',
  },
  render: (args) => ({
    props: {
      ...args,
      onPageChange: (page: number) => {
        console.log('Page changed to:', page);
      }
    },
    template: `
      <upov-pagination 
        [currentPage]="currentPage" 
        [totalPages]="totalPages" 
        [device]="device"
        (pageChange)="onPageChange($event)">
      </upov-pagination>
    `,
  }),
};

export const Mobile: Story = {
  args: {
    currentPage: 1,
    totalPages: 8,
    device: 'mobile',
  },
  render: (args) => ({
    props: {
      ...args,
      onPageChange: (page: number) => {
        console.log('Page changed to:', page);
      }
    },
    template: `
      <upov-pagination 
        [currentPage]="currentPage" 
        [totalPages]="totalPages" 
        [device]="device"
        (pageChange)="onPageChange($event)">
      </upov-pagination>
    `,
  }),
};



/* =====================================================
   FULL FIGMA PAGE (BOTH DESKTOP AND MOBILE)
===================================================== */

export const All: Story = {
  render: () => ({
    template: `
    <div style="padding: 40px; font-family: Figtree, sans-serif; background: #FFFFFF;">
      
      <!-- Page Title -->
      <div style="margin-bottom: 48px;">
        <h2 style="font-weight: 700; font-size: 32px; line-height: 48px; color: #1C4240; margin: 0;">
          Pagination
        </h2>
      </div>

      <!-- Desktop Section -->
      <div style="margin-bottom: 80px; padding: 20px; border: 1px dashed #9747FF; border-radius: 5px;">
        <div style="font-weight: 300; font-size: 14px; color: #9747FF; margin-bottom: 24px;">
          Desktop
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 32px;">
          
          <!-- Desktop - First Page -->
          <div>
            <upov-pagination 
              [currentPage]="1" 
              [totalPages]="8" 
              [device]="'desktop'">
            </upov-pagination>
          </div>

        </div>
      </div>

      <!-- Mobile Section -->
      <div style="padding: 20px; border: 1px dashed #9747FF; border-radius: 5px;">
        <div style="font-weight: 300; font-size: 14px; color: #9747FF; margin-bottom: 24px;">
          Mobile
        </div>
        
        <div style="display: flex; justify-content: center;">
          
          <!-- Mobile - First Page -->
          <upov-pagination 
            [currentPage]="1" 
            [totalPages]="8" 
            [device]="'mobile'">
          </upov-pagination>

        </div>
      </div>

    </div>
    `,
  }),
};

