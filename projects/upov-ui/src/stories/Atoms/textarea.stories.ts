import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { MatIconModule } from '@angular/material/icon';
import { TextareaComponent } from '../../lib/Atoms/textarea/textarea';

const meta: Meta<TextareaComponent> = {
  title: 'Atoms/Textarea',
  component: TextareaComponent,
  decorators: [
    moduleMetadata({
      imports: [MatIconModule, TextareaComponent],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'filled'],
    },
    placeholder: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    value: {
      control: 'text',
    },
    minHeight: {
      control: 'number',
    },
    maxHeight: {
      control: 'number',
    },
  },
};

export default meta;
type Story = StoryObj<TextareaComponent>;


export const Default: Story = {
  args: {
    variant: 'default',
    placeholder: 'Add explanation here',
    disabled: false,
    value: '',
    minHeight: 188,
    maxHeight: 276,
  },
  render: (args) => ({
    props: args,
    template: `<upov-textarea 
      [variant]="variant" 
      [placeholder]="placeholder" 
      [disabled]="disabled"
      [value]="value"
      [minHeight]="minHeight"
      [maxHeight]="maxHeight">
    </upov-textarea>`,
  }),
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    placeholder: 'Add explanation here',
    disabled: false,
    value: 'trees, on a rootstock specified by the competent authority, or in the form of budwood.',
    minHeight: 188,
    maxHeight: 276,
  },
  render: (args) => ({
    props: args,
    template: `<upov-textarea 
      [variant]="variant" 
      [placeholder]="placeholder" 
      [disabled]="disabled"
      [value]="value"
      [minHeight]="minHeight"
      [maxHeight]="maxHeight">
    </upov-textarea>`,
  }),
};

export const All: Story = {
  render: () => ({
    template: `
    <div style="padding: 40px; font-family: Figtree, sans-serif;">
      <h2 style="font-weight: 700; font-size: 24px; color: #1C4240; margin-bottom: 24px;">Text area</h2>
      
      <div style="
        display: inline-block;
        padding: 20px;
        border-radius: 5px;
      ">
        <div style="display: flex; flex-direction: column; gap: 40px;">
          
          <!-- Default -->
          <div style="display: flex; align-items: flex-start; gap: 12px;">
            <div style="width: 80px; font-weight: 300; font-size: 14px; color: #1C4240; padding-top: 10px;">Default</div>
            <upov-textarea 
              variant="default" 
              placeholder="Add explanation here"
              [minHeight]="188"
              [maxHeight]="276">
            </upov-textarea>
          </div>

          <!-- Filled -->
          <div style="display: flex; align-items: flex-start; gap: 12px;">
            <div style="width: 80px; font-weight: 300; font-size: 14px; color: #1C4240; padding-top: 10px;">Filled</div>
            <upov-textarea 
              variant="filled" 
              placeholder="Add explanation here"
              value="trees, on a rootstock specified by the competent authority, or in the form of budwood."
              [minHeight]="188"
              [maxHeight]="276">
            </upov-textarea>
          </div>

        </div>
      </div>
    </div>
    `,
  }),
};

