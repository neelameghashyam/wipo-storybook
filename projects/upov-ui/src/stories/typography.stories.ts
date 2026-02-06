import type { Meta, StoryObj } from '@storybook/angular';

interface TypographyArgs {
  content: string;
}

const meta: Meta<TypographyArgs> = {
  title: 'Design System/Typography',
  tags: ['autodocs'],
  argTypes: {
    content: {
      control: 'text',
      description: 'Sample text content',
    },
  },
};

export default meta;
type Story = StoryObj<TypographyArgs>;

/**
 * Typography System Overview
 * 
 * Figtree is the primary typeface for all UPOV PRISM applications.
 * This design system provides a comprehensive set of heading styles, body text variations,
 * and special text styles for different use cases.
 */

/**
 * Heading styles following the UPOV design system.
 * Five heading levels with specific font sizes, weights, and use cases.
 */
export const Headings: Story = {
  args: {
    content: 'Heading 1 - Display',
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="padding: 24px; background: #F9F9F9; border-radius: 10px;">
        <!-- Heading 1 - Display -->
        <div style="display: flex; align-items: center; gap: 24px; padding-bottom: 24px; border-bottom: 1px solid #E5E5E5; margin-bottom: 24px;">
          <div style="width: 128px;">
            <p style="font-family: 'Figtree'; font-weight: 500; font-size: 14px; line-height: 21px; color: #727272;">
              48px / Bold
            </p>
          </div>
          <div style="flex: 1;">
            <h1 style="font-family: 'Figtree'; font-weight: 700; font-size: 48px; line-height: 72px; color: #1C4240; margin: 0;">
              Heading 1 - Display
            </h1>
          </div>
        </div>

        <!-- Heading 2 - Page Title -->
        <div style="display: flex; align-items: center; gap: 24px; padding-bottom: 24px; border-bottom: 1px solid #E5E5E5; margin-bottom: 24px;">
          <div style="width: 128px;">
            <p style="font-family: 'Figtree'; font-weight: 500; font-size: 14px; line-height: 21px; color: #727272;">
              32px / Bold
            </p>
          </div>
          <div style="flex: 1;">
            <h2 style="font-family: 'Figtree'; font-weight: 700; font-size: 32px; line-height: 48px; color: #1C4240; margin: 0;">
              Heading 2 - Page Title
            </h2>
          </div>
        </div>

        <!-- Heading 3 - Section Title -->
        <div style="display: flex; align-items: center; gap: 24px; padding-bottom: 24px; border-bottom: 1px solid #E5E5E5; margin-bottom: 24px;">
          <div style="width: 128px;">
            <p style="font-family: 'Figtree'; font-weight: 500; font-size: 14px; line-height: 21px; color: #727272;">
              24px / Bold
            </p>
          </div>
          <div style="flex: 1;">
            <h3 style="font-family: 'Figtree'; font-weight: 700; font-size: 24px; line-height: 36px; color: #1C4240; margin: 0;">
              Heading 3 - Section Title
            </h3>
          </div>
        </div>

        <!-- Heading 4 - Subsection -->
        <div style="display: flex; align-items: center; gap: 24px; padding-bottom: 24px; border-bottom: 1px solid #E5E5E5; margin-bottom: 24px;">
          <div style="width: 128px;">
            <p style="font-family: 'Figtree'; font-weight: 500; font-size: 14px; line-height: 21px; color: #727272;">
              20px / Bold
            </p>
          </div>
          <div style="flex: 1;">
            <h4 style="font-family: 'Figtree'; font-weight: 700; font-size: 20px; line-height: 30px; color: #303030; margin: 0;">
              Heading 4 - Subsection
            </h4>
          </div>
        </div>

        <!-- Heading 5 - Card Title -->
        <div style="display: flex; align-items: center; gap: 24px;">
          <div style="width: 128px;">
            <p style="font-family: 'Figtree'; font-weight: 500; font-size: 14px; line-height: 21px; color: #727272;">
              18px / SemiBold
            </p>
          </div>
          <div style="flex: 1;">
            <h5 style="font-family: 'Figtree'; font-weight: 600; font-size: 18px; line-height: 27px; color: #1C4240; margin: 0;">
              Heading 5 - Card Title
            </h5>
          </div>
        </div>
      </div>
    `,
  }),
};

/**
 * Body text variations for different use cases.
 * Includes large, medium, and small sizes with different font weights.
 */
export const BodyText: Story = {
  args: {
    content: 'Body text sample',
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="padding: 24px; background: #F9F9F9; border-radius: 10px;">
        <!-- Body Large Semibold -->
        <div style="display: flex; align-items: center; gap: 24px; padding-bottom: 24px; border-bottom: 1px solid #E5E5E5; margin-bottom: 24px;">
          <div style="width: 128px;">
            <p style="font-family: 'Figtree'; font-weight: 500; font-size: 14px; line-height: 21px; color: #727272;">
              16px / SemiBold
            </p>
          </div>
          <div style="flex: 1;">
            <p style="font-family: 'Figtree'; font-weight: 600; font-size: 16px; line-height: 24px; color: #1C4240; margin: 0;">
              Body Large Semibold - Navigation, Buttons
            </p>
          </div>
        </div>

        <!-- Body Large Medium -->
        <div style="display: flex; align-items: center; gap: 24px; padding-bottom: 24px; border-bottom: 1px solid #E5E5E5; margin-bottom: 24px;">
          <div style="width: 128px;">
            <p style="font-family: 'Figtree'; font-weight: 500; font-size: 14px; line-height: 21px; color: #727272;">
              16px / Medium
            </p>
          </div>
          <div style="flex: 1;">
            <p style="font-family: 'Figtree'; font-weight: 500; font-size: 16px; line-height: 24px; color: #727272; margin: 0;">
              Body Large Medium - Form inputs, Labels
            </p>
          </div>
        </div>

        <!-- Body Large Regular -->
        <div style="display: flex; align-items: center; gap: 24px; padding-bottom: 24px; border-bottom: 1px solid #E5E5E5; margin-bottom: 24px;">
          <div style="width: 128px;">
            <p style="font-family: 'Figtree'; font-weight: 500; font-size: 14px; line-height: 21px; color: #727272;">
              16px / Regular
            </p>
          </div>
          <div style="flex: 1;">
            <p style="font-family: 'Figtree'; font-weight: 400; font-size: 16px; line-height: 24px; color: #1C4240; margin: 0;">
              Body Large Regular - Body text, Descriptions
            </p>
          </div>
        </div>

        <!-- Body Medium Bold -->
        <div style="display: flex; align-items: center; gap: 24px; padding-bottom: 24px; border-bottom: 1px solid #E5E5E5; margin-bottom: 24px;">
          <div style="width: 128px;">
            <p style="font-family: 'Figtree'; font-weight: 500; font-size: 14px; line-height: 21px; color: #727272;">
              14px / Bold
            </p>
          </div>
          <div style="flex: 1;">
            <p style="font-family: 'Figtree'; font-weight: 700; font-size: 14px; line-height: 21px; color: #009A6E; margin: 0;">
              Body Medium Bold - Status labels, Emphasis
            </p>
          </div>
        </div>

        <!-- Body Medium Semibold -->
        <div style="display: flex; align-items: center; gap: 24px; padding-bottom: 24px; border-bottom: 1px solid #E5E5E5; margin-bottom: 24px;">
          <div style="width: 128px;">
            <p style="font-family: 'Figtree'; font-weight: 500; font-size: 14px; line-height: 21px; color: #727272;">
              14px / SemiBold
            </p>
          </div>
          <div style="flex: 1;">
            <p style="font-family: 'Figtree'; font-weight: 600; font-size: 14px; line-height: 21px; color: #303030; margin: 0;">
              Body Medium Semibold - Table headers
            </p>
          </div>
        </div>

        <!-- Body Medium Medium -->
        <div style="display: flex; align-items: center; gap: 24px; padding-bottom: 24px; border-bottom: 1px solid #E5E5E5; margin-bottom: 24px;">
          <div style="width: 128px;">
            <p style="font-family: 'Figtree'; font-weight: 500; font-size: 14px; line-height: 21px; color: #727272;">
              14px / Medium
            </p>
          </div>
          <div style="flex: 1;">
            <p style="font-family: 'Figtree'; font-weight: 500; font-size: 14px; line-height: 21px; color: #1C4240; margin: 0;">
              Body Medium Medium - Progress steps
            </p>
          </div>
        </div>

        <!-- Body Medium Regular -->
        <div style="display: flex; align-items: center; gap: 24px; padding-bottom: 24px; border-bottom: 1px solid #E5E5E5; margin-bottom: 24px;">
          <div style="width: 128px;">
            <p style="font-family: 'Figtree'; font-weight: 500; font-size: 14px; line-height: 21px; color: #727272;">
              14px / Regular
            </p>
          </div>
          <div style="flex: 1;">
            <p style="font-family: 'Figtree'; font-weight: 400; font-size: 14px; line-height: 21px; color: #303030; margin: 0;">
              Body Medium Regular - Table cells, Secondary text
            </p>
          </div>
        </div>

        <!-- Body Small Bold -->
        <div style="display: flex; align-items: center; gap: 24px;">
          <div style="width: 128px;">
            <p style="font-family: 'Figtree'; font-weight: 500; font-size: 14px; line-height: 21px; color: #727272;">
              12px / Bold
            </p>
          </div>
          <div style="flex: 1;">
            <p style="font-family: 'Figtree'; font-weight: 700; font-size: 12px; line-height: 18px; color: #009A6E; margin: 0;">
              Body Small Bold - Status badges, Micro labels
            </p>
          </div>
        </div>
      </div>
    `,
  }),
};

/**
 * Special text styles including underlined links.
 */
export const SpecialTextStyles: Story = {
  args: {
    content: 'Underlined Link - Primary action links',
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="padding: 24px; background: #F9F9F9; border-radius: 10px;">
        <div style="display: flex; align-items: center; gap: 24px;">
          <div style="width: 128px;">
            <p style="font-family: 'Figtree'; font-weight: 500; font-size: 14px; line-height: 21px; color: #727272;">
              16px / SemiBold
            </p>
          </div>
          <div style="flex: 1;">
            <p style="font-family: 'Figtree'; font-weight: 600; font-size: 16px; line-height: 24px; color: #1C4240; text-decoration: underline; text-decoration-color: #DADE14; margin: 0;">
              ${args.content}
            </p>
          </div>
        </div>
      </div>
    `,
  }),
};

/**
 * Complete typography system demonstration showing all styles together.
 */
export const CompleteTypographySystem: Story = {
  render: () => ({
    template: `
      <div style="padding: 0px 72px 72px; background: #FFFFFF;">
        <!-- Headings Section -->
        <div style="margin-bottom: 32px;">
          <h3 style="font-family: 'Figtree'; font-weight: 600; font-size: 18px; line-height: 27px; color: #1C4240; margin: 0 0 16px 0;">
            Headings
          </h3>
          
          <div style="padding: 24px 24px 0; background: #F9F9F9; border-radius: 10px;">
            <!-- All heading rows as shown in the design -->
            <div style="display: flex; align-items: center; gap: 24px; padding-bottom: 24px; border-bottom: 1px solid #E5E5E5;">
              <div style="width: 128px;">
                <p style="font-family: 'Figtree'; font-weight: 500; font-size: 14px; line-height: 21px; color: #727272; margin: 0;">48px / Bold</p>
              </div>
              <div style="flex: 1;">
                <h1 style="font-family: 'Figtree'; font-weight: 700; font-size: 48px; line-height: 72px; color: #1C4240; margin: 0;">Heading 1 - Display</h1>
              </div>
            </div>

            <div style="display: flex; align-items: center; gap: 24px; padding: 24px 0; border-bottom: 1px solid #E5E5E5;">
              <div style="width: 128px;">
                <p style="font-family: 'Figtree'; font-weight: 500; font-size: 14px; line-height: 21px; color: #727272; margin: 0;">32px / Bold</p>
              </div>
              <div style="flex: 1;">
                <h2 style="font-family: 'Figtree'; font-weight: 700; font-size: 32px; line-height: 48px; color: #1C4240; margin: 0;">Heading 2 - Page Title</h2>
              </div>
            </div>

            <div style="display: flex; align-items: center; gap: 24px; padding: 24px 0; border-bottom: 1px solid #E5E5E5;">
              <div style="width: 128px;">
                <p style="font-family: 'Figtree'; font-weight: 500; font-size: 14px; line-height: 21px; color: #727272; margin: 0;">24px / Bold</p>
              </div>
              <div style="flex: 1;">
                <h3 style="font-family: 'Figtree'; font-weight: 700; font-size: 24px; line-height: 36px; color: #1C4240; margin: 0;">Heading 3 - Section Title</h3>
              </div>
            </div>

            <div style="display: flex; align-items: center; gap: 24px; padding: 24px 0; border-bottom: 1px solid #E5E5E5;">
              <div style="width: 128px;">
                <p style="font-family: 'Figtree'; font-weight: 500; font-size: 14px; line-height: 21px; color: #727272; margin: 0;">20px / Bold</p>
              </div>
              <div style="flex: 1;">
                <h4 style="font-family: 'Figtree'; font-weight: 700; font-size: 20px; line-height: 30px; color: #303030; margin: 0;">Heading 4 - Subsection</h4>
              </div>
            </div>

            <div style="display: flex; align-items: center; gap: 24px; padding: 24px 0;">
              <div style="width: 128px;">
                <p style="font-family: 'Figtree'; font-weight: 500; font-size: 14px; line-height: 21px; color: #727272; margin: 0;">18px / SemiBold</p>
              </div>
              <div style="flex: 1;">
                <h5 style="font-family: 'Figtree'; font-weight: 600; font-size: 18px; line-height: 27px; color: #1C4240; margin: 0;">Heading 5 - Card Title</h5>
              </div>
            </div>
          </div>
        </div>

        <!-- Body Text Section -->
        <div style="margin-bottom: 32px;">
          <h3 style="font-family: 'Figtree'; font-weight: 600; font-size: 18px; line-height: 27px; color: #1C4240; margin: 0 0 16px 0;">
            Body Text
          </h3>
          
          <div style="padding: 24px 24px 0; background: #F9F9F9; border-radius: 10px;">
            <div style="display: flex; align-items: center; gap: 24px; padding-bottom: 24px; border-bottom: 1px solid #E5E5E5;">
              <div style="width: 128px;">
                <p style="font-family: 'Figtree'; font-weight: 500; font-size: 14px; line-height: 21px; color: #727272; margin: 0;">16px / SemiBold</p>
              </div>
              <div style="flex: 1;">
                <p style="font-family: 'Figtree'; font-weight: 600; font-size: 16px; line-height: 24px; color: #1C4240; margin: 0;">Body Large Semibold - Navigation, Buttons</p>
              </div>
            </div>

            <div style="display: flex; align-items: center; gap: 24px; padding: 24px 0; border-bottom: 1px solid #E5E5E5;">
              <div style="width: 128px;">
                <p style="font-family: 'Figtree'; font-weight: 500; font-size: 14px; line-height: 21px; color: #727272; margin: 0;">16px / Medium</p>
              </div>
              <div style="flex: 1;">
                <p style="font-family: 'Figtree'; font-weight: 500; font-size: 16px; line-height: 24px; color: #727272; margin: 0;">Body Large Medium - Form inputs, Labels</p>
              </div>
            </div>

            <div style="display: flex; align-items: center; gap: 24px; padding: 24px 0; border-bottom: 1px solid #E5E5E5;">
              <div style="width: 128px;">
                <p style="font-family: 'Figtree'; font-weight: 500; font-size: 14px; line-height: 21px; color: #727272; margin: 0;">16px / Regular</p>
              </div>
              <div style="flex: 1;">
                <p style="font-family: 'Figtree'; font-weight: 400; font-size: 16px; line-height: 24px; color: #1C4240; margin: 0;">Body Large Regular - Body text, Descriptions</p>
              </div>
            </div>

            <div style="display: flex; align-items: center; gap: 24px; padding: 24px 0; border-bottom: 1px solid #E5E5E5;">
              <div style="width: 128px;">
                <p style="font-family: 'Figtree'; font-weight: 500; font-size: 14px; line-height: 21px; color: #727272; margin: 0;">14px / Bold</p>
              </div>
              <div style="flex: 1;">
                <p style="font-family: 'Figtree'; font-weight: 700; font-size: 14px; line-height: 21px; color: #009A6E; margin: 0;">Body Medium Bold - Status labels, Emphasis</p>
              </div>
            </div>

            <div style="display: flex; align-items: center; gap: 24px; padding: 24px 0; border-bottom: 1px solid #E5E5E5;">
              <div style="width: 128px;">
                <p style="font-family: 'Figtree'; font-weight: 500; font-size: 14px; line-height: 21px; color: #727272; margin: 0;">14px / SemiBold</p>
              </div>
              <div style="flex: 1;">
                <p style="font-family: 'Figtree'; font-weight: 600; font-size: 14px; line-height: 21px; color: #303030; margin: 0;">Body Medium Semibold - Table headers</p>
              </div>
            </div>

            <div style="display: flex; align-items: center; gap: 24px; padding: 24px 0; border-bottom: 1px solid #E5E5E5;">
              <div style="width: 128px;">
                <p style="font-family: 'Figtree'; font-weight: 500; font-size: 14px; line-height: 21px; color: #727272; margin: 0;">14px / Medium</p>
              </div>
              <div style="flex: 1;">
                <p style="font-family: 'Figtree'; font-weight: 500; font-size: 14px; line-height: 21px; color: #1C4240; margin: 0;">Body Medium Medium - Progress steps</p>
              </div>
            </div>

            <div style="display: flex; align-items: center; gap: 24px; padding: 24px 0; border-bottom: 1px solid #E5E5E5;">
              <div style="width: 128px;">
                <p style="font-family: 'Figtree'; font-weight: 500; font-size: 14px; line-height: 21px; color: #727272; margin: 0;">14px / Regular</p>
              </div>
              <div style="flex: 1;">
                <p style="font-family: 'Figtree'; font-weight: 400; font-size: 14px; line-height: 21px; color: #303030; margin: 0;">Body Medium Regular - Table cells, Secondary text</p>
              </div>
            </div>

            <div style="display: flex; align-items: center; gap: 24px; padding: 24px 0;">
              <div style="width: 128px;">
                <p style="font-family: 'Figtree'; font-weight: 500; font-size: 14px; line-height: 21px; color: #727272; margin: 0;">12px / Bold</p>
              </div>
              <div style="flex: 1;">
                <p style="font-family: 'Figtree'; font-weight: 700; font-size: 12px; line-height: 18px; color: #009A6E; margin: 0;">Body Small Bold - Status badges, Micro labels</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Special Text Styles Section -->
        <!-- Special Text Styles Section -->
        <div>
          <h3 style="font-family: 'Figtree'; font-weight: 600; font-size: 18px; line-height: 27px; color: #1C4240; margin: 0 0 16px 0;">
            Special Text Styles
          </h3>
          
          <div style="padding: 24px 24px 0; background: #F9F9F9; border-radius: 10px;">
            <div style="display: flex; align-items: center; gap: 24px; padding-bottom: 24px;">
              <div style="width: 128px;">
                <p style="font-family: 'Figtree'; font-weight: 500; font-size: 14px; line-height: 21px; color: #727272; margin: 0;">16px / SemiBold</p>
              </div>
              <div style="flex: 1;">
                <p style="font-family: 'Figtree'; font-weight: 600; font-size: 16px; line-height: 24px; color: #1C4240; text-decoration: underline; text-decoration-color: #DADE14; margin: 0;">Underlined Link - Primary action links</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
};
