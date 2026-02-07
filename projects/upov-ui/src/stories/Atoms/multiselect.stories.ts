import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { MatIconModule } from '@angular/material/icon';
import { MultiselectComponent, SelectOption } from '../../lib/Atoms/multiselect/multiselect';

// Sample options data
const sampleOptions: SelectOption[] = [
  { label: 'African Intellectual Property Organization (OAPI)', value: 'oapi' },
  { label: 'Argentina (AR)', value: 'ar' },
  { label: 'Australia (AU)', value: 'au' },
  { label: 'Austria (AT)', value: 'at' },
  { label: 'Belarus (BY)', value: 'by' },
  { label: 'Belgium (BE)', value: 'be' },
  { label: 'Bolivia (Plurinational State of) (BO)', value: 'bo' },
];

const meta: Meta<MultiselectComponent> = {
  title: 'Atoms/Multiselect',
  component: MultiselectComponent,
  decorators: [
    moduleMetadata({
      imports: [MatIconModule, MultiselectComponent],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'open', 'filled', 'disabled'],
    },
    placeholder: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    options: {
      control: 'object',
    },
    selectedValues: {
      control: 'object',
    },
  },
};

export default meta;
type Story = StoryObj<MultiselectComponent>;


export const Default: Story = {
  args: {
    variant: 'default',
    placeholder: 'Search by family',
    disabled: false,
    options: sampleOptions,
    selectedValues: [],
  },
  render: (args) => ({
    props: args,
    template: `<upov-multiselect 
      [variant]="variant" 
      [placeholder]="placeholder" 
      [disabled]="disabled"
      [options]="options"
      [selectedValues]="selectedValues">
    </upov-multiselect>`,
  }),
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    placeholder: 'Search by family',
    disabled: false,
    options: sampleOptions,
    selectedValues: ['au'],
  },
  render: (args) => ({
    props: args,
    template: `<upov-multiselect 
      [variant]="variant" 
      [placeholder]="placeholder" 
      [disabled]="disabled"
      [options]="options"
      [selectedValues]="selectedValues">
    </upov-multiselect>`,
  }),
};

export const MultipleSelected: Story = {
  args: {
    variant: 'filled',
    placeholder: 'Search by family',
    disabled: false,
    options: sampleOptions,
    selectedValues: ['ar', 'au', 'at', 'be'],
  },
  render: (args) => ({
    props: args,
    template: `<upov-multiselect 
      [variant]="variant" 
      [placeholder]="placeholder" 
      [disabled]="disabled"
      [options]="options"
      [selectedValues]="selectedValues">
    </upov-multiselect>`,
  }),
};

export const Open: Story = {
  args: {
    variant: 'open',
    placeholder: 'Search by family',
    disabled: false,
    options: sampleOptions,
    selectedValues: [],
  },
  render: (args) => ({
    props: {
      ...args,
      isOpen: true,
    },
    template: `<upov-multiselect 
      [variant]="variant" 
      [placeholder]="placeholder" 
      [disabled]="disabled"
      [options]="options"
      [selectedValues]="selectedValues">
    </upov-multiselect>`,
  }),
};

export const Disabled: Story = {
  args: {
    variant: 'disabled',
    placeholder: 'Search by family',
    disabled: true,
    options: sampleOptions,
    selectedValues: [],
  },
  render: (args) => ({
    props: args,
    template: `<upov-multiselect 
      [variant]="variant" 
      [placeholder]="placeholder" 
      [disabled]="disabled"
      [options]="options"
      [selectedValues]="selectedValues">
    </upov-multiselect>`,
  }),
};

export const AllVariants: Story = {
  render: () => ({
    props: {
      sampleOptions: sampleOptions,
      selectedMultiple: ['ar', 'au', 'at', 'be'],
    },
    template: `
    <div style="padding: 40px; font-family: Figtree, sans-serif;">
      <h2 style="font-weight: 700; font-size: 24px; color: #1C4240; margin-bottom: 24px;">Multiselect</h2>
      
      <div style="
        display: inline-block;
        padding: 28px;
        border-radius: 5px;
        min-width: 350px;
      ">
        <div style="display: flex; flex-direction: column; gap: 40px;">
          
          <!-- Default -->
          <div style="display: flex; align-items: flex-start; gap: 12px;">
            <div style="width: 90px; font-weight: 300; font-size: 14px; color: #1C4240; padding-top: 10px;">Default</div>
            <upov-multiselect 
              variant="default" 
              placeholder="Search by family"
              [options]="sampleOptions"
              [selectedValues]="[]">
            </upov-multiselect>
          </div>

          <!-- Open -->
          <div style="display: flex; align-items: flex-start; gap: 12px;">
            <div style="width: 90px; font-weight: 300; font-size: 14px; color: #1C4240; padding-top: 10px;">Open</div>
            
            <div style="position: relative; width: 265px;">
              <div style="
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                padding: 11px 0px 5px;
                gap: 8px;
                width: 265px;
                background: #FFFFFF;
                border: 2px solid #547F71;
                box-shadow: 0px 2px 8px rgba(70, 70, 70, 0.04);
                border-radius: 4px;
              ">
                <!-- Search -->
                <div style="
                  display: flex;
                  padding: 0px 12px;
                  gap: 8px;
                  width: 100%;
                  align-items: center;
                  box-sizing: border-box;
                ">
                  <input
                    type="text"
                    placeholder="Search by family"
                    style="
                      flex: 1;
                      border: none;
                      outline: none;
                      background: transparent;
                      font-family: Figtree;
                      font-size: 16px;
                      color: #727272;
                    "
                  />
                  <mat-icon style="font-size:24px;color:#1C4240;">expand_less</mat-icon>
                </div>
                
                <!-- Divider -->
                <div style="
                  width: calc(100% - 24px);
                  border: 1px solid rgba(118,118,118,0.25);
                  margin: 0 12px;
                "></div>
                
                <!-- Options (NO SCROLL) -->
                <div style="width: 100%;">
                  <div style="padding:6px 12px;font-size:16px;">African Intellectual Property Org...</div>
                  <div style="padding:6px 12px;font-size:16px;">Argentina (AR)</div>
                  <div style="padding:6px 12px;font-size:16px;">Australia (AU)</div>
                  <div style="padding:6px 12px;font-size:16px;">Austria (AT)</div>
                  <div style="padding:6px 12px;font-size:16px;">Belarus (BY)</div>
                  <div style="padding:6px 12px;font-size:16px;">Belgium (BE)</div>
                  <div style="padding:6px 12px;font-size:16px;">Bolivia (Plurinational State...)</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Multi Selected (MOVED HERE) -->
          <div style="display: flex; align-items: flex-start; gap: 12px;">
            <div style="width: 90px; font-weight: 300; font-size: 14px; color: #1C4240; padding-top: 10px;">
              Multi
            </div>
            <upov-multiselect 
              variant="filled" 
              placeholder="Search by family"
              [options]="sampleOptions"
              [selectedValues]="selectedMultiple">
            </upov-multiselect>
          </div>

          <!-- Filled -->
          <div style="display: flex; align-items: flex-start; gap: 12px;">
            <div style="width: 90px; font-weight: 300; font-size: 14px; color: #1C4240; padding-top: 10px;">Filled</div>
            <upov-multiselect 
              variant="filled" 
              placeholder="Search by family"
              [options]="sampleOptions"
              [selectedValues]="['au']">
            </upov-multiselect>
          </div>

          <!-- Disabled -->
          <div style="display: flex; align-items: flex-start; gap: 12px;">
            <div style="width: 90px; font-weight: 300; font-size: 14px; color: #1C4240; padding-top: 10px;">Disabled</div>
            <upov-multiselect 
              variant="disabled" 
              placeholder="Search by family"
              [disabled]="true"
              [options]="sampleOptions"
              [selectedValues]="[]">
            </upov-multiselect>
          </div>

        </div>
      </div>
    </div>
    `,
  }),
};





