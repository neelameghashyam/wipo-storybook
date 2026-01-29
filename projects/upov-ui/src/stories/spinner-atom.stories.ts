import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { SpinnerAtom } from '../lib/Atoms/SpinnerAtom/spinner-atom.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const meta: Meta<SpinnerAtom> = {
  title: 'Atoms/SpinnerAtom',
  component: SpinnerAtom,
  decorators: [
    moduleMetadata({
      imports: [MatProgressSpinnerModule, SpinnerAtom],
    }),
  ],
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A loading spinner component with optional message.

## Usage

\`\`\`typescript
import { SpinnerAtom } from 'upov-ui';

@Component({
  imports: [SpinnerAtom],
  template: \`
    <upov-spinner-atom 
      diameter="50" 
      message="Loading species details...">
    </upov-spinner-atom>
  \`
})
export class MyComponent {}
\`\`\`

### Features
- Configurable diameter
- Support for determinate and indeterminate modes
- Optional loading message
- Material Design theming
        `,
      },
    },
  },
  argTypes: {
    diameter: {
      control: { type: 'number', min: 20, max: 200, step: 10 },
      description: 'Spinner diameter in pixels',
    },
    mode: {
      control: 'select',
      options: ['determinate', 'indeterminate'],
      description: 'Spinner mode',
    },
    value: {
      control: { type: 'number', min: 0, max: 100, step: 10 },
      description: 'Progress value (0-100) for determinate mode',
    },
    color: {
      control: 'select',
      options: ['primary', 'accent', 'warn'],
      description: 'Spinner color',
    },
    message: {
      control: 'text',
      description: 'Optional loading message',
    },
  },
};

export default meta;
type Story = StoryObj<SpinnerAtom>;

export const Default: Story = {
  args: {
    diameter: 50,
    mode: 'indeterminate',
    color: 'primary',
  },
};

export const WithMessage: Story = {
  args: {
    diameter: 50,
    mode: 'indeterminate',
    color: 'primary',
    message: 'Loading species details...',
  },
};

export const Determinate: Story = {
  args: {
    diameter: 50,
    mode: 'determinate',
    value: 65,
    color: 'primary',
    message: 'Loading... 65%',
  },
};

export const Small: Story = {
  args: {
    diameter: 30,
    mode: 'indeterminate',
    color: 'primary',
  },
};

export const Large: Story = {
  args: {
    diameter: 100,
    mode: 'indeterminate',
    color: 'accent',
    message: 'Please wait...',
  },
};

export const DifferentColors: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 32px; align-items: center;">
        <upov-spinner-atom diameter="50" color="primary" message="Primary"></upov-spinner-atom>
        <upov-spinner-atom diameter="50" color="accent" message="Accent"></upov-spinner-atom>
        <upov-spinner-atom diameter="50" color="warn" message="Warn"></upov-spinner-atom>
      </div>
    `,
  }),
};

export const InLoadingContainer: Story = {
  render: () => ({
    template: `
      <div style="
        padding: 48px; 
        background: #f5f5f5; 
        border-radius: 8px;
        min-height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;">
        <upov-spinner-atom 
          diameter="50" 
          message="Loading authority details...">
        </upov-spinner-atom>
      </div>
    `,
  }),
};

export const FullPageLoading: Story = {
  render: () => ({
    template: `
      <div style="
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;">
        <div style="background: white; padding: 32px; border-radius: 8px;">
          <upov-spinner-atom 
            diameter="60" 
            message="Loading application..."
            color="primary">
          </upov-spinner-atom>
        </div>
      </div>
    `,
  }),
};

export const InlineLoading: Story = {
  render: () => ({
    template: `
      <div style="display: flex; align-items: center; gap: 16px; padding: 16px; background: white; border-radius: 4px;">
        <upov-spinner-atom diameter="24"></upov-spinner-atom>
        <span>Loading species data...</span>
      </div>
    `,
  }),
};

export const MultipleLoadingStates: Story = {
  render: () => ({
    template: `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
        <div style="padding: 24px; background: white; border-radius: 8px; text-align: center;">
          <upov-spinner-atom 
            diameter="40" 
            message="Species"
            color="primary">
          </upov-spinner-atom>
        </div>
        <div style="padding: 24px; background: white; border-radius: 8px; text-align: center;">
          <upov-spinner-atom 
            diameter="40" 
            message="Authorities"
            color="accent">
          </upov-spinner-atom>
        </div>
        <div style="padding: 24px; background: white; border-radius: 8px; text-align: center;">
          <upov-spinner-atom 
            diameter="40" 
            message="Guidelines"
            color="warn">
          </upov-spinner-atom>
        </div>
      </div>
    `,
  }),
};

export const WithCustomMessages: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px; padding: 24px; background: #f5f5f5; border-radius: 8px;">
        <div style="text-align: center;">
          <upov-spinner-atom 
            diameter="50" 
            message="Fetching species data from database...">
          </upov-spinner-atom>
        </div>
        <div style="text-align: center;">
          <upov-spinner-atom 
            diameter="50" 
            message="Searching UPOV registry...">
          </upov-spinner-atom>
        </div>
        <div style="text-align: center;">
          <upov-spinner-atom 
            diameter="50" 
            message="Processing DUS guidelines...">
          </upov-spinner-atom>
        </div>
      </div>
    `,
  }),
};

export const ProgressIndicator: Story = {
  render: () => ({
    template: `
      <div style="padding: 32px; background: white; border-radius: 8px; text-align: center;">
        <upov-spinner-atom 
          diameter="80" 
          mode="determinate"
          [value]="75"
          message="Processing... 75%"
          color="primary">
        </upov-spinner-atom>
      </div>
    `,
  }),
};

export const ButtonLoadingState: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <button style="display: flex; align-items: center; gap: 8px; padding: 10px 20px; background: #1f4e45; color: white; border: none; border-radius: 4px; cursor: not-allowed; opacity: 0.7;">
          <span style="width: 20px; height: 20px;">
            <upov-spinner-atom diameter="20"></upov-spinner-atom>
          </span>
          Saving...
        </button>
        <button style="display: flex; align-items: center; gap: 8px; padding: 10px 20px; background: #1f4e45; color: white; border: none; border-radius: 4px; cursor: not-allowed; opacity: 0.7;">
          <span style="width: 20px; height: 20px;">
            <upov-spinner-atom diameter="20"></upov-spinner-atom>
          </span>
          Loading...
        </button>
        <button style="display: flex; align-items: center; gap: 8px; padding: 10px 20px; background: #1f4e45; color: white; border: none; border-radius: 4px; cursor: not-allowed; opacity: 0.7;">
          <span style="width: 20px; height: 20px;">
            <upov-spinner-atom diameter="20"></upov-spinner-atom>
          </span>
          Searching...
        </button>
      </div>
    `,
  }),
};

export const CardLoadingState: Story = {
  render: () => ({
    template: `
      <div style="width: 300px; background: white; padding: 32px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
        <upov-spinner-atom 
          diameter="60" 
          message="Loading species details..."
          color="primary">
        </upov-spinner-atom>
      </div>
    `,
  }),
};