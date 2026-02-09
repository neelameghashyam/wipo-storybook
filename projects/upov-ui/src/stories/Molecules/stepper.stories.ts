import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { MatIconModule } from '@angular/material/icon';
import { StepperComponent, Step } from '../../lib/Molecules/stepper/stepper';

// Sample data
const sampleSteps: Step[] = [
  { number: '01', title: 'Title', state: 'active' },
  { number: '02', title: 'Material', state: 'saved' },
  { number: '03', title: 'Examination', state: 'inactive' },
  { number: '04', title: 'Assessment', state: 'inactive' },
  { number: '05', title: 'Grouping', state: 'inactive' },
  { number: '06', title: 'Characteristics', state: 'inactive' },
  { number: '07', title: 'Table of characteristics', state: 'inactive' },
  { number: '08', title: 'Explanations', state: 'inactive' },
  { number: '09', title: 'Literature', state: 'inactive' },
  { number: '10', title: 'Technical questionnaire', state: 'inactive' },
  { number: '11', title: 'Annex', state: 'inactive' },
];

const meta: Meta<StepperComponent> = {
  title: 'Molecules/Stepper',
  component: StepperComponent,
  decorators: [
    moduleMetadata({
      imports: [MatIconModule, StepperComponent],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    layout: {
      control: 'select',
      options: ['numbers-only', 'with-titles', 'full'],
    },
    collapsed: {
      control: 'boolean',
    },
    showChapterTitle: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<StepperComponent>;

/* =====================================================
   INTERACTIVE STORIES (for Controls tab)
===================================================== */

export const Full: Story = {
  args: {
    steps: sampleSteps,
    layout: 'full',
    collapsed: false,
    showChapterTitle: true,
  },
  render: (args) => ({
    props: args,
    template: `<upov-stepper 
      [steps]="steps" 
      [layout]="layout" 
      [collapsed]="collapsed"
      [showChapterTitle]="showChapterTitle">
    </upov-stepper>`,
  }),
};

export const NumbersOnly: Story = {
  args: {
    steps: [
      { number: '01', title: '', state: 'active' },
      { number: '01', title: '', state: 'saved' },
      { number: '01', title: '', state: 'inactive' },
      { number: '01', title: '', state: 'disabled' },
    ],
    layout: 'numbers-only',
    collapsed: false,
    showChapterTitle: false,
  },
  render: (args) => ({
    props: args,
    template: `<upov-stepper 
      [steps]="steps" 
      [layout]="layout" 
      [collapsed]="collapsed"
      [showChapterTitle]="showChapterTitle">
    </upov-stepper>`,
  }),
};

export const WithTitles: Story = {
  args: {
    steps: [
      { number: '01', title: 'Title', state: 'active' },
      { number: '01', title: 'Title', state: 'saved' },
      { number: '01', title: 'Title', state: 'inactive' },
      { number: '01', title: 'Title', state: 'disabled' },
      { number: '01', title: 'Title', state: 'completed', subtitle: 'Completed' },
    ],
    layout: 'with-titles',
    collapsed: false,
    showChapterTitle: false,
  },
  render: (args) => ({
    props: args,
    template: `<upov-stepper 
      [steps]="steps" 
      [layout]="layout" 
      [collapsed]="collapsed"
      [showChapterTitle]="showChapterTitle">
    </upov-stepper>`,
  }),
};

export const Collapsed: Story = {
  args: {
    steps: sampleSteps,
    layout: 'full',
    collapsed: true,
    showChapterTitle: false,
  },
  render: (args) => ({
    props: args,
    template: `<upov-stepper 
      [steps]="steps" 
      [layout]="layout" 
      [collapsed]="collapsed"
      [showChapterTitle]="showChapterTitle">
    </upov-stepper>`,
  }),
};

/* =====================================================
   ALL VARIANTS SHOWCASE (FIGMA STYLE)
===================================================== */
export const All: Story = {
  render: () => ({
    props: {
      stepsNumbers: [
        { number: '01', title: '', state: 'active' },
        { number: '01', title: '', state: 'saved' },
        { number: '01', title: '', state: 'inactive' },
        { number: '01', title: '', state: 'disabled' },
      ],
      stepsTitles: [
        { number: '01', title: 'Title', state: 'active' },
        { number: '01', title: 'Title', state: 'visited' },
        { number: '01', title: 'Title', state: 'inactive' },
        { number: '01', title: 'Title', state: 'disabled' },
        { number: '01', title: 'Title', state: 'completed', subtitle: 'Completed' },
      ],
      stepsFull: [
        { number: '01', title: 'Title', state: 'active' },
        { number: '02', title: 'Material', state: 'saved' },
        { number: '03', title: 'Examination', state: 'inactive' },
        { number: '04', title: 'Assessment', state: 'inactive' },
        { number: '05', title: 'Grouping', state: 'inactive' },
        { number: '06', title: 'Characteristics', state: 'inactive' },
        { number: '07', title: 'Table of characteristics', state: 'inactive' },
        { number: '08', title: 'Explanations', state: 'inactive' },
        { number: '09', title: 'Literature', state: 'inactive' },
        { number: '10', title: 'Technical questionnaire', state: 'inactive' },
        { number: '11', title: 'Annex', state: 'inactive' },
      ],
    },

    template: `
<div style="padding:40px;font-family:Figtree;background:#fff">
<h2 style="font-weight:700;font-size:32px;color:#1C4240;margin-bottom:40px">Stepper</h2>

<div style="display:flex;gap:80px;align-items:flex-start">

  <!-- ================= COLUMN 1 ================= -->
  <div style="display:flex;align-items:flex-start">

    <!-- headings LEFT -->
    <div style="display:flex;flex-direction:column;margin-right:24px;padding-top:8px">
      <span style="height:42px;display:flex;align-items:center;color:#1C4240;font-size:14px;margin-bottom:14px">Active</span>
      <span style="height:42px;display:flex;align-items:center;color:#1C4240;font-size:14px;margin-bottom:10px">Saved</span>
      <span style="height:42px;display:flex;align-items:center;color:#1C4240;font-size:14px;margin-bottom:10px">Inactive</span>
      <span style="height:42px;display:flex;align-items:center;color:#1C4240;font-size:14px;margin-bottom:16px">Disabled</span>
      <span style="height:42px;display:flex;align-items:center;color:#1C4240;font-size:14px">Collapse</span>
    </div>

    <!-- stepper -->
    <div style="padding:8px;">
      <upov-stepper [steps]="stepsNumbers" layout="numbers-only"></upov-stepper>
    </div>

  </div>


  <!-- ================= COLUMN 2 ================= -->
  <div style="display:flex;align-items:flex-start">

    <!-- headings LEFT -->
    <div style="display:flex;flex-direction:column;margin-right:24px;padding-top:8px">
      <span style="height:52px;display:flex;align-items:center;color:#1C4240;font-size:14px;margin-bottom:2px">Selected</span>
      <span style="height:52px;display:flex;align-items:center;color:#1C4240;font-size:14px;margin-bottom:2px">Visited</span>
      <span style="height:52px;display:flex;align-items:center;color:#1C4240;font-size:14px;margin-bottom:4px">Default</span>
      <span style="height:52px;display:flex;align-items:center;color:#1C4240;font-size:14px;margin-bottom:4px">Disabled</span>
      <span style="height:52px;display:flex;align-items:center;color:#1C4240;font-size:14px;margin-bottom:12px">Completed</span>
      <span style="height:52px;display:flex;align-items:center;color:#1C4240;font-size:14px">Collapse</span>
    </div>

    <!-- stepper -->
    <div style="padding:8px;border-radius:4px">
      <upov-stepper [steps]="stepsTitles" layout="with-titles"[showCollapse]="true"></upov-stepper>
    </div>

  </div>


  <!-- ================= COLUMN 3 ================= -->
  <div style="display:flex;align-items:flex-start">

    <!-- stepper only -->
    <div style="border:1px dashed #E2E2E2;padding:8px;border-radius:4px">
      <upov-stepper [steps]="stepsFull" layout="full" [showChapterTitle]="true"></upov-stepper>
    </div>

  </div>

</div>
</div>
`

  }),
};

