import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { SearchbarComponent, SearchSuggestion } from '../../lib/Molecules/searchbar/searchbar';

const sampleSuggestions: SearchSuggestion[] = [
  { code: 'ABELI', name: 'Abelia R. Br.' },
  { code: 'ABELI_CHI', name: 'Abelia chinensis R. Br.' },
  { code: 'ABELI_ENG', name: 'Abelia engleriana (Graebn.) Rehder' },
  { code: 'ABELI_FLO', name: 'Abelia floribunda (M. Martens & Galeotti) Decne.' },
  { code: 'ABELI_GPA', name: 'Abelia xgrandiflora x Abelia parvifolia' },
  { code: 'ABELI_GRA', name: 'Abelia ×grandiflora Rehder' },
];

const meta: Meta<SearchbarComponent> = {
  title: 'Molecules/Searchbar',
  component: SearchbarComponent,
  decorators: [
    moduleMetadata({
      imports: [MatIconModule, FormsModule, SearchbarComponent],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    device: {
      control: 'select',
      options: ['desktop', 'mobile'],
    },
    selectedToggle: {
      control: 'select',
      options: ['species', 'authorities'],
    },
  },
};

export default meta;
type Story = StoryObj<SearchbarComponent>;

/* =====================================================
   DESKTOP VARIANTS
===================================================== */

export const DesktopDefault: Story = {
  args: {
    device: 'desktop',
    value: '',
    placeholder: 'Search by UPOV code, botanical name or common name...',
    selectedToggle: 'species',
    showSuggestions: false,
  },
};

export const DesktopFilled: Story = {
  args: {
    device: 'desktop',
    value: 'ABELI',
    selectedToggle: 'species',
    showSuggestions: false,
  },
};

export const DesktopFocus: Story = {
  args: {
    device: 'desktop',
    value: 'ABE',
    selectedToggle: 'species',
    showSuggestions: true,
    suggestions: sampleSuggestions,
    selectedSuggestionIndex: -1,
  },
};

export const DesktopFocusSelected: Story = {
  args: {
    device: 'desktop',
    value: 'ABE',
    selectedToggle: 'species',
    showSuggestions: true,
    suggestions: sampleSuggestions,
    selectedSuggestionIndex: 1,
  },
};

/* =====================================================
   MOBILE VARIANTS
===================================================== */

export const MobileDefault: Story = {
  args: {
    device: 'mobile',
    value: '',
    placeholder: 'Search by UPOV code, botanical name...',
    selectedToggle: 'species',
    showSuggestions: false,
  },
};

export const MobileFilled: Story = {
  args: {
    device: 'mobile',
    value: 'ABELI',
    selectedToggle: 'species',
    showSuggestions: false,
  },
};

export const MobileFocus: Story = {
  args: {
    device: 'mobile',
    value: 'ABE',
    selectedToggle: 'species',
    showSuggestions: true,
    suggestions: sampleSuggestions,
    selectedSuggestionIndex: -1,
  },
};

/* =====================================================
   ALL VARIANTS SHOWCASE (FIGMA STYLE)
===================================================== */

export const All: Story = {
  render: () => ({
    props: { sampleSuggestions },
    template: `
    <div style="padding:40px; font-family:Figtree, sans-serif; background:#FFF;">
      <h2 style="font-weight:700;font-size:32px;color:#1C4240;margin-bottom:40px;">
        Search bar
      </h2>

      <!-- DESKTOP -->
      <div style="margin-bottom:60px;">
        <div style="font-weight:700;font-size:18px;color:#1C4240;margin-bottom:24px;">
          Desktop
        </div>

        <div style="display:grid; grid-template-columns:120px auto; row-gap:24px; align-items:center;">

          <div style="font-weight:500;color:#1C4240;">Default</div>
          <upov-searchbar 
            device="desktop"
            value=""
            placeholder="Search by UPOV code, botanical name or common name..."
            selectedToggle="species"
            [showSuggestions]="false">
          </upov-searchbar>

          <div style="font-weight:500;color:#1C4240;">Filled</div>
          <upov-searchbar 
            device="desktop"
            value="ABELI"
            selectedToggle="species"
            [showSuggestions]="false">
          </upov-searchbar>

          <div style="font-weight:500;color:#1C4240;">Focus</div>
          <upov-searchbar 
            device="desktop"
            value="ABE"
            selectedToggle="species"
            [showSuggestions]="true"
            [suggestions]="sampleSuggestions"
            [selectedSuggestionIndex]="-1">
          </upov-searchbar>

          <div style="font-weight:500;color:#1C4240;">Focus Selected</div>
          <upov-searchbar 
            device="desktop"
            value="ABE"
            selectedToggle="species"
            [showSuggestions]="true"
            [suggestions]="sampleSuggestions"
            [selectedSuggestionIndex]="1">
          </upov-searchbar>

        </div>
      </div>

      <!-- MOBILE -->
      <div>
        <div style="font-weight:700;font-size:18px;color:#1C4240;margin-bottom:24px;">
          Mobile
        </div>

        <div style="display:grid; grid-template-columns:120px auto; row-gap:24px; align-items:start;">

          <div style="font-weight:500;color:#1C4240;">Default</div>
          <upov-searchbar 
            device="mobile"
            value=""
            placeholder="Search by UPOV code, botanical name..."
            selectedToggle="species"
            [showSuggestions]="false">
          </upov-searchbar>

          <div style="font-weight:500;color:#1C4240;">Filled</div>
          <upov-searchbar 
            device="mobile"
            value="ABELI"
            selectedToggle="species"
            [showSuggestions]="false">
          </upov-searchbar>

          <div style="font-weight:500;color:#1C4240;">Focus</div>
          <upov-searchbar 
            device="mobile"
            value="ABE"
            selectedToggle="species"
            [showSuggestions]="true"
            [suggestions]="sampleSuggestions"
            [selectedSuggestionIndex]="-1">
          </upov-searchbar>

        </div>
      </div>
    </div>
    `,
  }),
};


