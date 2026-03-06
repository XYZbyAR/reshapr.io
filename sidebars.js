// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Understand It',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'reshapr/why-reshapr',
          label: 'Why reShapr?',
        },
        {
          type: 'doc',
          id: 'reshapr/how-it-works',
          label: 'How It Works',
        },
        {
          type: 'doc',
          id: 'reshapr/reshapr-features',
          label: 'reShapr Features',
        },
        {
          type: 'doc',
          id: 'reshapr/services-and-artifacts',
          label: 'Services and Artifacts',
        },
        {
          type: 'doc',
          id: 'reshapr/configuration-plan-and-exposition',
          label: 'Configuration Plan and Exposition',
        },
        {
          type: 'doc',
          id: 'reshapr/gateway-group-and-gateway',
          label: 'Gateway Group and Gateway',
        },
        {
          type: 'doc',
          id: 'reshapr/security-options-and-secrets',
          label: 'Security Options and Secrets',
        },
        {
          type: 'doc',
          id: 'reshapr/prompts',
          label: 'Prompts',
        },
        {
          type: 'doc',
          id: 'reshapr/custom-tools',
          label: 'Custom Tools',
        },
        {
          type: 'doc',
          id: 'reshapr/resources',
          label: 'Resources',
        },
      ],
    },
    {
      type: 'category',
      label: 'Use It',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'reshapr/getting-started-with-cli',
          label: 'Getting Started with CLI',
        },
        {
          type: 'doc',
          id: 'reshapr/reshapr-cli-advanced',
          label: 'reShapr CLI Advanced',
        },
        {
          type: 'doc',
          id: 'reshapr/cloud-options-and-plans',
          label: 'Cloud Options and Plans',
        },
        {
          type: 'doc',
          id: 'reshapr/hybrid-deployment',
          label: 'Hybrid Deployment',
        },
        {
          type: 'doc',
          id: 'reshapr/on-premises-deployment',
          label: 'On-Premises Deployment',
        },
      ],
    },
    {
      type: 'doc',
      label: 'Demos',
      id: 'reshapr/demos',
    },
  ],
};

export default sidebars;
