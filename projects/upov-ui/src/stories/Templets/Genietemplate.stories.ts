import {applicationConfig, Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {
  Header,
  HeaderNav,
  HeaderNavigationItem,
  HeroSection,
  SearchInput,
  Footer,
  FOOTER_CONFIG,
  FooterConfig,
  LinkItem,
  Button,
} from '../../lib';
import {provideRouter} from '@angular/router';
import {MatButton} from '@angular/material/button';
import {Component, signal} from '@angular/core';

// Genie Template Wrapper Component
@Component({
  selector: 'genie-template',
  standalone: true,
  imports: [Header, HeaderNav, HeroSection, SearchInput, Footer, MatButton, Button],
  template: `
    <div class="genie-template">
      <!-- Header -->
      <upov-header>
        <upov-header-nav [items]="navigation()"></upov-header-nav>
      </upov-header>

      <!-- Hero Section with Search -->
      <upov-hero-section class="gradient-bg-lime-forest gradient-opacity-30 gradient-right-left">
        <h1 hero-title>GENIE <em>Database</em></h1>
        <p hero-subtitle>
          Search by <strong>species</strong> or <strong>authority</strong>.<br/>
          <span class="upov-text-small upov-text-muted">
            You can search in English, German, Spanish or French.
          </span>
        </p>
        <div hero-content>
          <upov-search-input [toggleOptions]="searchOptions()"></upov-search-input>
        </div>
      </upov-hero-section>

      <!-- Main Content Area (Optional) -->
      <main class="content-area" style="min-height: 400px; padding: 2rem;">
        <ng-content></ng-content>
      </main>

      <!-- Footer -->
      <upov-footer></upov-footer>
    </div>
  `,
  styles: [`
    .genie-template {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }

    .content-area {
      flex: 1;
    }
  `],
})
class GenieTemplateComponent {
  navigation = signal<HeaderNavigationItem[]>([
    {label: 'Home', link: '/'},
    {
      label: 'Varieties',
      link: '/varieties',
      children: [
        {label: 'All Varieties', link: '/varieties/all'},
        {label: 'New Varieties', link: '/varieties/new'},
        {label: 'Popular Varieties', link: '/varieties/popular'},
      ],
    },
    {
      label: 'Database',
      link: '/database',
      children: [
        {label: 'Search', link: '/database/search'},
        {label: 'Browse', link: '/database/browse'},
      ],
    },
    {label: 'Contact', link: '/contact'},
  ]);

  searchOptions = signal([
    {label: 'Species', value: 'species', active: true},
    {label: 'Authority', value: 'authority'},
  ]);
}

const meta: Meta<GenieTemplateComponent> = {
  title: 'Templates/Genie Template',
  component: GenieTemplateComponent,
  decorators: [
    applicationConfig({
      providers: [provideRouter([])],
    }),
    moduleMetadata({
      imports: [
        Header,
        HeaderNav,
        HeroSection,
        SearchInput,
        Footer,
        MatButton,
        Button,
        GenieTemplateComponent,
      ],
    }),
  ],
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
The Genie Template is a complete page template combining Header, Hero Section with search functionality, and Footer.

## Features
- **Header**: Full navigation with dropdown menus
- **Hero Section**: Search functionality with species/authority toggle
- **Footer**: Configurable social and footer links
- **Responsive Layout**: Mobile-friendly design
- **Content Projection**: Support for custom main content

## Usage in Consumer App

### Basic Implementation

\`\`\`typescript
import { Component } from '@angular/core';
import { GenieTemplate } from 'upov-ui';

@Component({
  imports: [GenieTemplate],
  template: \`
    <genie-template>
      <!-- Your main content goes here -->
      <div>
        <h2>Welcome to GENIE Database</h2>
        <p>Search results will appear here...</p>
      </div>
    </genie-template>
  \`
})
export class MyPageComponent {}
\`\`\`

### Configure Footer Globally

In your \`app.config.ts\`:

\`\`\`typescript
import { ApplicationConfig } from '@angular/core';
import { FOOTER_CONFIG, FooterConfig } from 'upov-ui';

const footerConfig: FooterConfig = {
  socialLinks: [
    { name: 'X', url: 'https://x.com/upov', icon: 'twitter' },
    { name: 'LinkedIn', url: 'https://linkedin.com/company/upov', icon: 'linkedin' },
    { name: 'Contact', url: 'mailto:upov.mail@upov.int', icon: 'envelope' },
  ],
  footerLinks: [
    { name: 'Terms of Use', url: '/terms' },
    { name: 'Privacy', url: '/privacy' },
    { name: 'Accessibility', url: '/accessibility' },
  ],
  footerText: '© 2025 UPOV. All rights reserved.',
};

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: FOOTER_CONFIG, useValue: footerConfig },
  ]
};
\`\`\`

### Customization Options
- Modify navigation items via the Header component
- Adjust search toggle options (species/authority)
- Configure footer via injection token or inputs
- Add custom content in the main content area
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<GenieTemplateComponent>;

/**
 * Default Genie template with standard configuration
 */
export const Default: Story = {
  name: 'Default Template',
  decorators: [
    moduleMetadata({
      providers: [
        {
          provide: FOOTER_CONFIG,
          useValue: {
            socialLinks: [
              {name: 'X', url: 'https://x.com/upov', icon: 'twitter'},
              {name: 'LinkedIn', url: 'https://linkedin.com/company/upov', icon: 'linkedin'},
              {name: 'YouTube', url: 'https://youtube.com/upov', icon: 'youtube'},
              {name: 'Contact', url: 'mailto:upov.mail@upov.int', icon: 'envelope'},
            ],
            footerLinks: [
              {name: 'Terms of Use', url: '/terms'},
              {name: 'Privacy', url: '/privacy'},
              {name: 'Sitemap', url: '/sitemap'},
              {name: 'Accessibility', url: '/accessibility'},
            ],
            footerText: '© 2025 International Union for the Protection of New Varieties of Plants (UPOV). All rights reserved.',
          } as FooterConfig,
        },
      ],
    }),
  ],
  render: () => ({
    template: `<genie-template></genie-template>`,
  }),
};

/**
 * Template with custom main content
 */
export const WithMainContent: Story = {
  name: 'With Main Content',
  decorators: [
    moduleMetadata({
      providers: [
        {
          provide: FOOTER_CONFIG,
          useValue: {
            socialLinks: [
              {name: 'X', url: 'https://x.com/upov', icon: 'twitter'},
              {name: 'LinkedIn', url: 'https://linkedin.com/company/upov', icon: 'linkedin'},
              {name: 'Contact', url: 'mailto:upov.mail@upov.int', icon: 'envelope'},
            ],
            footerLinks: [
              {name: 'Terms of Use', url: '/terms'},
              {name: 'Privacy', url: '/privacy'},
              {name: 'Accessibility', url: '/accessibility'},
            ],
            footerText: '© 2025 UPOV. All rights reserved.',
          } as FooterConfig,
        },
      ],
    }),
  ],
  render: () => ({
    template: `
      <genie-template>
        <div style="max-width: 1200px; margin: 0 auto;">
          <h2 style="margin-bottom: 1.5rem; color: var(--color-primary-forest);">
            Search Results
          </h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1.5rem;">
            <div style="padding: 1.5rem; border: 1px solid #e0e0e0; border-radius: 8px; background: white;">
              <h3 style="margin-bottom: 0.5rem;">Rosa 'Peace'</h3>
              <p style="color: #666; font-size: 0.875rem; margin: 0;">
                Hybrid Tea Rose - Yellow blend with pink edges
              </p>
            </div>
            <div style="padding: 1.5rem; border: 1px solid #e0e0e0; border-radius: 8px; background: white;">
              <h3 style="margin-bottom: 0.5rem;">Tulipa 'Queen of Night'</h3>
              <p style="color: #666; font-size: 0.875rem; margin: 0;">
                Darwin Hybrid Tulip - Deep maroon, nearly black
              </p>
            </div>
            <div style="padding: 1.5rem; border: 1px solid #e0e0e0; border-radius: 8px; background: white;">
              <h3 style="margin-bottom: 0.5rem;">Solanum lycopersicum 'Beefsteak'</h3>
              <p style="color: #666; font-size: 0.875rem; margin: 0;">
                Tomato cultivar - Large, meaty fruits
              </p>
            </div>
          </div>
        </div>
      </genie-template>
    `,
  }),
};

/**
 * Minimal template with reduced footer configuration
 */
export const MinimalConfiguration: Story = {
  name: 'Minimal Configuration',
  decorators: [
    moduleMetadata({
      providers: [
        {
          provide: FOOTER_CONFIG,
          useValue: {
            socialLinks: [
              {name: 'Contact', url: 'mailto:upov.mail@upov.int', icon: 'envelope'},
            ],
            footerLinks: [
              {name: 'Privacy', url: '/privacy'},
            ],
            footerText: '© 2025 UPOV.',
          } as FooterConfig,
        },
      ],
    }),
  ],
  render: () => ({
    template: `<genie-template></genie-template>`,
  }),
};

/**
 * Template with rich footer content via ng-content
 */
export const WithRichFooter: Story = {
  name: 'With Rich Footer Content',
  decorators: [
    moduleMetadata({
      providers: [
        {
          provide: FOOTER_CONFIG,
          useValue: {
            socialLinks: [
              {name: 'X', url: 'https://x.com/upov', icon: 'twitter'},
              {name: 'LinkedIn', url: 'https://linkedin.com/company/upov', icon: 'linkedin'},
              {name: 'YouTube', url: 'https://youtube.com/upov', icon: 'youtube'},
              {name: 'Contact', url: 'mailto:upov.mail@upov.int', icon: 'envelope'},
            ],
            footerLinks: [
              {name: 'Terms of Use', url: '/terms'},
              {name: 'Privacy', url: '/privacy'},
              {name: 'Sitemap', url: '/sitemap'},
              {name: 'Accessibility', url: '/accessibility'},
            ],
          } as FooterConfig,
        },
      ],
    }),
  ],
  render: () => ({
    template: `
      <genie-template>
        <div style="max-width: 800px; margin: 0 auto; padding: 2rem;">
          <h2>About GENIE Database</h2>
          <p>
            The GENIE (Genetic Information Environment) database provides comprehensive
            information about plant varieties protected under UPOV conventions.
          </p>
        </div>
      </genie-template>
    `,
  }),
};

/**
 * Template demonstrating different gradient backgrounds
 */
export const AlternativeGradient: Story = {
  name: 'Alternative Gradient Style',
  decorators: [
    moduleMetadata({
      providers: [
        {
          provide: FOOTER_CONFIG,
          useValue: {
            socialLinks: [
              {name: 'X', url: 'https://x.com/upov', icon: 'twitter'},
              {name: 'LinkedIn', url: 'https://linkedin.com/company/upov', icon: 'linkedin'},
            ],
            footerLinks: [
              {name: 'Terms', url: '/terms'},
              {name: 'Privacy', url: '/privacy'},
            ],
            footerText: '© 2025 UPOV.',
          } as FooterConfig,
        },
      ],
    }),
  ],
  render: () => ({
    template: `
      <div class="genie-template">
        <upov-header>
          <upov-header-nav [items]="navigation"></upov-header-nav>
        </upov-header>

        <upov-hero-section class="gradient-bg-forest-pine gradient-opacity-75">
          <h1 hero-title>GENIE <em>Database</em></h1>
          <p hero-subtitle>
            Alternative gradient style for hero section.<br/>
            <span class="upov-text-small upov-text-muted">
              Explore plant variety data in multiple languages.
            </span>
          </p>
          <div hero-content>
            <upov-search-input [toggleOptions]="searchOptions"></upov-search-input>
          </div>
        </upov-hero-section>

        <main class="content-area" style="min-height: 400px; padding: 2rem;">
          <div style="max-width: 800px; margin: 0 auto;">
            <p style="text-align: center; color: #666;">
              Main content area with forest-pine gradient hero section
            </p>
          </div>
        </main>

        <upov-footer></upov-footer>
      </div>
    `,
    props: {
      navigation: [
        {label: 'Home', link: '/'},
        {label: 'Database', link: '/database'},
        {label: 'Contact', link: '/contact'},
      ] as HeaderNavigationItem[],
      searchOptions: [
        {label: 'Species', value: 'species', active: true},
        {label: 'Authority', value: 'authority'},
      ],
    },
  }),
};

/**
 * Mobile-optimized view (for testing responsive design)
 */
export const MobileView: Story = {
  name: 'Mobile View',
  decorators: [
    moduleMetadata({
      providers: [
        {
          provide: FOOTER_CONFIG,
          useValue: {
            socialLinks: [
              {name: 'X', url: 'https://x.com/upov', icon: 'twitter'},
              {name: 'Contact', url: 'mailto:upov.mail@upov.int', icon: 'envelope'},
            ],
            footerLinks: [
              {name: 'Terms', url: '/terms'},
              {name: 'Privacy', url: '/privacy'},
            ],
            footerText: '© 2025 UPOV.',
          } as FooterConfig,
        },
      ],
    }),
  ],
  render: () => ({
    template: `<genie-template></genie-template>`,
  }),
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};