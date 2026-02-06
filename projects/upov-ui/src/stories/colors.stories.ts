import type {Meta, StoryObj} from '@storybook/angular';

interface ColorArgs {
  showHex?: boolean;
}

const meta: Meta<ColorArgs> = {
  title: 'Design System/Colors',
  tags: ['autodocs'],
  argTypes: {
    showHex: {
      control: 'boolean',
      description: 'Show hex values for colors',
    },
  },
};

export default meta;
type Story = StoryObj<ColorArgs>;

/**
 * Primary brand colors used throughout the application.
 */
export const PrimaryColors: Story = {
  args: {
    showHex: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="padding: 2rem;">
        <h3 style="margin-bottom: 1.5rem;">Primary Colors</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 1.5rem;">
          <div>
            <div style="background-color: var(--color-primary-green-dark); height: 120px; border-radius: 8px; border: 1px solid var(--color-neutral-200);"></div>
            <p style="margin-top: 0.5rem; font-weight: 600;">Dark Teal</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0;">--color-primary-green-dark</p>
            ${args.showHex ? '<p style="font-size: 0.75rem; color: var(--color-neutral-500); margin: 0.25rem 0 0;">#1C4240</p>' : ''}
          </div>

          <div>
            <div style="background-color: var(--color-primary-green-light); height: 120px; border-radius: 8px; border: 1px solid var(--color-neutral-200);"></div>
            <p style="margin-top: 0.5rem; font-weight: 600;">Lime</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0;">--color-primary-green-light</p>
            ${args.showHex ? '<p style="font-size: 0.75rem; color: var(--color-neutral-500); margin: 0.25rem 0 0;">#DADE14</p>' : ''}
          </div>

          <div>
            <div style="background-color: var(--color-primary-green-bright); height: 120px; border-radius: 8px; border: 1px solid var(--color-neutral-200);"></div>
            <p style="margin-top: 0.5rem; font-weight: 600;">Forest Green</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0;">--color-primary-green-bright</p>
            ${args.showHex ? '<p style="font-size: 0.75rem; color: var(--color-neutral-500); margin: 0.25rem 0 0;">#009A6E</p>' : ''}
            <p style="font-size: 0.75rem; color: var(--color-ruby); margin: 0.25rem 0 0;"></p>
          </div>

          <div>
            <div style="background-color: var(--color-primary-green); height: 120px; border-radius: 8px; border: 1px solid var(--color-neutral-200);"></div>
            <p style="margin-top: 0.5rem; font-weight: 600;">Pine</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0;">--color-primary-green</p>
            ${args.showHex ? '<p style="font-size: 0.75rem; color: var(--color-neutral-500); margin: 0.25rem 0 0;">#46B2A0</p>' : ''}
            <p style="font-size: 0.75rem; color: var(--color-ruby); margin: 0.25rem 0 0;"></p>
          </div>

          <div>
            <div style="background-color: var(--color-primary-brown-light); height: 120px; border-radius: 8px; border: 1px solid var(--color-neutral-200);"></div>
            <p style="margin-top: 0.5rem; font-weight: 600;">Sand</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0;">--color-primary-brown-light</p>
            ${args.showHex ? '<p style="font-size: 0.75rem; color: var(--color-neutral-500); margin: 0.25rem 0 0;">#B8B4A4</p>' : ''}
          </div>
        </div>
      </div>
    `,
  }),
};

/**
 * Secondary colors for accents and special use cases.
 */
export const SecondaryColors: Story = {
  args: {
    showHex: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="padding: 2rem;">
        <h3 style="margin-bottom: 1.5rem;">Secondary Colors</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 1.5rem;">
          <div>
            <div style="background-color: var(--color-yellow); height: 120px; border-radius: 8px; border: 1px solid var(--color-neutral-200);"></div>
            <p style="margin-top: 0.5rem; font-weight: 600;">Lemon</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0;">--color-secondary-yellow</p>
            ${args.showHex ? '<p style="font-size: 0.75rem; color: var(--color-neutral-500); margin: 0.25rem 0 0;">#DED532</p>' : ''}
          </div>

          <div>
            <div style="background-color: var(--color-green-dust); height: 120px; border-radius: 8px; border: 1px solid var(--color-neutral-200);"></div>
            <p style="margin-top: 0.5rem; font-weight: 600;">Moss</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0;">--color-secondary-green-dust</p>
            ${args.showHex ? '<p style="font-size: 0.75rem; color: var(--color-neutral-500); margin: 0.25rem 0 0;">#547F71</p>' : ''}
          </div>

          <div>
            <div style="background-color: var(--color-blue-light); height: 120px; border-radius: 8px; border: 1px solid var(--color-neutral-200);"></div>
            <p style="margin-top: 0.5rem; font-weight: 600;">Sky</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0;">--color-secondary-blue-light</p>
            ${args.showHex ? '<p style="font-size: 0.75rem; color: var(--color-neutral-500); margin: 0.25rem 0 0;">#82BECD</p>' : ''}
          </div>

          <div>
            <div style="background-color: var(--color-blue); height: 120px; border-radius: 8px; border: 1px solid var(--color-neutral-200);"></div>
            <p style="margin-top: 0.5rem; font-weight: 600;">Sea</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0;">--color-secondary-blue</p>
            ${args.showHex ? '<p style="font-size: 0.75rem; color: var(--color-neutral-500); margin: 0.25rem 0 0;">#3585C8</p>' : ''}
            <p style="font-size: 0.75rem; color: var(--color-ruby); margin: 0.25rem 0 0;"></p>
          </div>

          <div>
            <div style="background-color: var(--color-orange-dark); height: 120px; border-radius: 8px; border: 1px solid var(--color-neutral-200);"></div>
            <p style="margin-top: 0.5rem; font-weight: 600;">Amber dark</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0;">--color-secondary-orange-dark</p>
            ${args.showHex ? '<p style="font-size: 0.75rem; color: var(--color-neutral-500); margin: 0.25rem 0 0;">#AD4E02</p>' : ''}
          </div>

          <div>
            <div style="background-color: var(--color-orange); height: 120px; border-radius: 8px; border: 1px solid var(--color-neutral-200);"></div>
            <p style="margin-top: 0.5rem; font-weight: 600;">Amber</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0;">--color-secondary-orange</p>
            ${args.showHex ? '<p style="font-size: 0.75rem; color: var(--color-neutral-500); margin: 0.25rem 0 0;">#82BECD</p>' : ''}
          </div>

          <div>
            <div style="background-color: var(--color-orange-light); height: 120px; border-radius: 8px; border: 1px solid var(--color-neutral-200);"></div>
            <p style="margin-top: 0.5rem; font-weight: 600;">Amber light</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0;">--color-secondary-orange-light</p>
            ${args.showHex ? '<p style="font-size: 0.75rem; color: var(--color-neutral-500); margin: 0.25rem 0 0;">#3585CB</p>' : ''}
          </div>

          <div>
            <div style="background-color: var(--color-purple); height: 120px; border-radius: 8px; border: 1px solid var(--color-neutral-200);"></div>
            <p style="margin-top: 0.5rem; font-weight: 600;">Grape</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0;">--color-secondary-purple</p>
            ${args.showHex ? '<p style="font-size: 0.75rem; color: var(--color-neutral-500); margin: 0.25rem 0 0;">#A51E91</p>' : ''}
          </div>

          <div>
            <div style="background-color: var(--color-ruby); height: 120px; border-radius: 8px; border: 1px solid var(--color-neutral-200);"></div>
            <p style="margin-top: 0.5rem; font-weight: 600;">Ruby</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0;">--color-secondary-ruby</p>
            ${args.showHex ? '<p style="font-size: 0.75rem; color: var(--color-neutral-500); margin: 0.25rem 0 0;">#C83C58</p>' : ''}
          </div>
        </div>
      </div>
    `,
  }),
};

/**
 * Semantic colors for text content in different contexts.
 */
export const TextColors: Story = {
  args: {
    showHex: true,
  },
  render: (args) => ({
    props: args,
    template: `
        <div style="padding: 2rem;">
        <h3 style="margin-bottom: 1.5rem;">Text Colors</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 1.5rem;">
          <div>
            <div style="background-color: #303030; height: 120px; border-radius: 8px; border: 1px solid var(--color-neutral-300); display: flex; align-items: center; justify-content: center;">
            </div>
            <p style="margin-top: 0.5rem; font-weight: 600;">Text Primary</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0;">--color-text-primary</p>
            ${args.showHex ? '<p style="font-size: 0.75rem; color: var(--color-neutral-500); margin: 0.25rem 0 0;">#303030</p>' : ''}
          </div>

          <div>
            <div style="background-color: var(--color-text-placeholder); height: 120px; border-radius: 8px; border: 1px solid var(--color-neutral-300); display: flex; align-items: center; justify-content: center;">
            </div>
            <p style="margin-top: 0.5rem; font-weight: 600;">Text Placeholder</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0;">--color-text-placeholder</p>
            ${args.showHex ? '<p style="font-size: 0.75rem; color: var(--color-neutral-500); margin: 0.25rem 0 0;">#727272</p>' : ''}
          </div>
        </div>
      </div>
    `,
  }),
};

/**
 * Background colors for different UI elements and sections.
 */
export const BackgroundColors: Story = {
  args: {
    showHex: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="padding: 2rem;">
        <h3 style="margin-bottom: 1.5rem;">Background Colors</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 1.5rem;">
          <div>
            <div style="background-color: var(--color-bg-white); height: 120px; border-radius: 8px; border: 1px solid var(--color-neutral-300); display: flex; align-items: center; justify-content: center;">
            </div>
            <p style="margin-top: 0.5rem; font-weight: 600;">White</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0;">--color-bg-white</p>
            ${args.showHex ? '<p style="font-size: 0.75rem; color: var(--color-neutral-500); margin: 0.25rem 0 0;">#FFFFFF</p>' : ''}
          </div>

          <div>
            <div style="background-color: var(--color-bg-light); height: 120px; border-radius: 8px; border: 1px solid var(--color-neutral-300); display: flex; align-items: center; justify-content: center;">
            </div>
            <p style="margin-top: 0.5rem; font-weight: 600;">Grey</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0;">--color-bg-light</p>
            ${args.showHex ? '<p style="font-size: 0.75rem; color: var(--color-neutral-500); margin: 0.25rem 0 0;">#F9F9F9</p>' : ''}
          </div>

          <div>
            <div style="background-color: #E2E2E2; height: 120px; border-radius: 8px; border: 1px solid var(--color-neutral-300); display: flex; align-items: center; justify-content: center;">
            </div>
            <p style="margin-top: 0.5rem; font-weight: 600;">Light Gray</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0;">--color-bg-light-gray</p>
            ${args.showHex ? '<p style="font-size: 0.75rem; color: var(--color-neutral-500); margin: 0.25rem 0 0;">#E2E2E2</p>' : ''}
          </div>
        </div>
      </div>
    `,
  }),
};

/**
 * Gradient backgrounds for special UI elements.
 */
export const Gradients: Story = {
  render: () => ({
    template: `
      <div style="padding: 2rem;">
  <h3 style="margin-bottom: 1.5rem;">Gradient</h3>

  <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem;">

    <!-- Card 1 -->
    <div>
      <div style="background: var(--bg-gradient-teal-lime); height: 120px; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
      </div>

      <div style="margin-top: 0.5rem;">
        <p style="font-weight: 600; margin: 0;">Teal Lime</p>
        <p style="font-size: 0.875rem; margin: 0;">--bg-gradient-teal-lime</p>
        <p style="font-size: 0.75rem; margin: 0;">#DED532</p>
      </div>
    </div>

    <!-- Card 2 -->
    <div>
      <div style="background: var(--bg-gradient-lime-forest); height: 120px; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
      </div>

      <div style="margin-top: 0.5rem;">
        <p style="font-weight: 600; margin: 0;">Lime Forest</p>
        <p style="font-size: 0.875rem; margin: 0;">--bg-gradient-lime-forest</p>
        <p style="font-size: 0.75rem; margin: 0;">#547F71</p>
      </div>
    </div>

    <!-- Card 3 -->
    <div>
      <div style="background: var(--bg-gradient-forest-pine); height: 120px; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
      </div>

      <div style="margin-top: 0.5rem;">
        <p style="font-weight: 600; margin: 0;">Forest Pine</p>
        <p style="font-size: 0.875rem; margin: 0;">--bg-gradient-forest-pine</p>
        <p style="font-size: 0.75rem; margin: 0;">#82BECD</p>
      </div>
    </div>

  </div>
</div>
    `,
  }),
};

/**
 * Complete color palette overview showing all available colors.
 */
export const AllColors: Story = {
  args: {
    showHex: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="padding: 2rem;">
        <h2 style="margin-bottom: 2rem;">Complete Color Palette</h2>

        <section style="margin-bottom: 3rem;">
          <h3 style="margin-bottom: 1rem; color: var(--color-primary-green-dark);">Primary Colors</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 1.5rem;">
            <div>
              <div style="background-color: var(--color-primary-green-dark); height: 120px; border-radius: 8px;"></div>
              <p style="margin-top: 0.5rem; font-weight: 600;">Dark Teal</p>
            </div>
            <div>
              <div style="background-color: var(--color-primary-green-light); height: 120px; border-radius: 8px;"></div>
              <p style="margin-top: 0.5rem; font-weight: 600;">Lime</p>
            </div>
            <div>
              <div style="background-color: var(--color-primary-green-bright); height: 120px; border-radius: 8px;"></div>
              <p style="margin-top: 0.5rem; font-weight: 600;">Forest Green</p>
            </div>
            <div>
              <div style="background-color: var(--color-primary-green); height: 120px; border-radius: 8px;"></div>
              <p style="margin-top: 0.5rem; font-weight: 600;">Pine</p>
            </div>
            <div>
              <div style="background-color: var(--color-primary-brown-light); height: 120px; border-radius: 8px;"></div>
              <p style="margin-top: 0.5rem; font-weight: 600;">Sand</p>
            </div>
          </div>
        </section>

        <section style="margin-bottom: 3rem;">
          <h3 style="margin-bottom: 1rem; color: var(--color-primary-green-dark);">Secondary Colors</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 1.5rem;">
            <div>
              <div style="background-color: var(--color-yellow); height: 120px; border-radius: 8px;"></div>
              <p style="margin-top: 0.5rem; font-weight: 600;">Lemon</p>
            </div>
            <div>
              <div style="background-color: var(--color-green-dust); height: 120px; border-radius: 8px;"></div>
              <p style="margin-top: 0.5rem; font-weight: 600;">Moss</p>
            </div>
            <div>
              <div style="background-color: var(--color-blue-light); height: 120px; border-radius: 8px;"></div>
              <p style="margin-top: 0.5rem; font-weight: 600;">Sky</p>
            </div>
            <div>
              <div style="background-color: var(--color-blue); height: 120px; border-radius: 8px;"></div>
              <p style="margin-top: 0.5rem; font-weight: 600;">Sea</p>
            </div>
            <div>
              <div style="background-color: var(--color-orange-dark); height: 120px; border-radius: 8px;"></div>
              <p style="margin-top: 0.5rem; font-weight: 600;">Amber dark</p>
            </div>
            <div>
              <div style="background-color: var(--color-orange); height: 120px; border-radius: 8px;"></div>
              <p style="margin-top: 0.5rem; font-weight: 600;">Amber</p>
            </div>
            <div>
              <div style="background-color: var(--color-orange-light); height: 120px; border-radius: 8px;"></div>
              <p style="margin-top: 0.5rem; font-weight: 600;">Amber light</p>
            </div>
            <div>
              <div style="background-color: var(--color-purple); height: 120px; border-radius: 8px;"></div>
              <p style="margin-top: 0.5rem; font-weight: 600;">Grape</p>
            </div>
            <div>
              <div style="background-color: var(--color-ruby); height: 120px; border-radius: 8px;"></div>
              <p style="margin-top: 0.5rem; font-weight: 600;">Ruby</p>
            </div>
          </div>
        </section>

        <section style="margin-bottom: 3rem;">
          <h3 style="margin-bottom: 1rem; color: var(--color-primary-green-dark);">Gradient</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 1.5rem;">
            <div>
              <div style="background: var(--bg-gradient-teal-lime); height: 120px; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
              </div>
              <div style="margin-top: 0.5rem;">
                <p style="font-weight: 600; margin: 0;">Teal Lime</p>
                ${args.showHex ? '<p style="font-size: 0.75rem; margin: 0;">#DED532</p>' : ''}
              </div>
            </div>

            <div>
              <div style="background: var(--bg-gradient-lime-forest); height: 120px; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
              </div>
              <div style="margin-top: 0.5rem;">
                <p style="font-weight: 600; margin: 0;">Lime Forest</p>
                ${args.showHex ? '<p style="font-size: 0.75rem; margin: 0;">#547F71</p>' : ''}
              </div>
            </div>

            <div>
              <div style="background: var(--bg-gradient-forest-pine); height: 120px; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
              </div>
              <div style="margin-top: 0.5rem;">
                <p style="font-weight: 600; margin: 0;">Forest Pine</p>
                ${args.showHex ? '<p style="font-size: 0.75rem; margin: 0;">#82BECD</p>' : ''}
              </div>
            </div>
          </div>
        </section>

        <section style="margin-bottom: 3rem;">
          <h3 style="margin-bottom: 1rem; color: var(--color-primary-green-dark);">Background Colors</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 1.5rem;">
            <div>
              <div style="background-color: var(--color-bg-white); height: 120px; border-radius: 8px; border: 1px solid var(--color-neutral-300); display: flex; align-items: center; justify-content: center;">
              </div>
              <p style="margin-top: 0.5rem; font-weight: 600;">White</p>
              ${args.showHex ? '<p style="font-size: 0.75rem; color: var(--color-neutral-500); margin: 0.25rem 0 0;">#FFFFFF</p>' : ''}
            </div>

            <div>
              <div style="background-color: var(--color-bg-light); height: 120px; border-radius: 8px; border: 1px solid var(--color-neutral-300); display: flex; align-items: center; justify-content: center;">
              </div>
              <p style="margin-top: 0.5rem; font-weight: 600;">Grey</p>
              ${args.showHex ? '<p style="font-size: 0.75rem; color: var(--color-neutral-500); margin: 0.25rem 0 0;">#F9F9F9</p>' : ''}
            </div>

            <div>
              <div style="background-color: #E2E2E2; height: 120px; border-radius: 8px; border: 1px solid var(--color-neutral-300); display: flex; align-items: center; justify-content: center;">
              </div>
              <p style="margin-top: 0.5rem; font-weight: 600;">Light Gray</p>
              ${args.showHex ? '<p style="font-size: 0.75rem; color: var(--color-neutral-500); margin: 0.25rem 0 0;">#E2E2E2</p>' : ''}
            </div>
          </div>
        </section>

        <section>
          <h3 style="margin-bottom: 1rem; color: var(--color-primary-green-dark);">Text Colors</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 1.5rem;">
            <div>
              <div style="background-color: #303030; height: 120px; border-radius: 8px; border: 1px solid var(--color-neutral-300); display: flex; align-items: center; justify-content: center;">
              </div>
              <p style="margin-top: 0.5rem; font-weight: 600;">Text Primary</p>
              ${args.showHex ? '<p style="font-size: 0.75rem; color: var(--color-neutral-500); margin: 0.25rem 0 0;">#303030</p>' : ''}
            </div>

            <div>
              <div style="background-color: var(--color-text-placeholder); height: 120px; border-radius: 8px; border: 1px solid var(--color-neutral-300); display: flex; align-items: center; justify-content: center;">
              </div>
              <p style="margin-top: 0.5rem; font-weight: 600;">Text Placeholder</p>
              ${args.showHex ? '<p style="font-size: 0.75rem; color: var(--color-neutral-500); margin: 0.25rem 0 0;">#727272</p>' : ''}
            </div>
          </div>
        </section>

        
      </div>
    `,
  }),
};



