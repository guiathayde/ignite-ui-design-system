/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ['../src/pages/**/*.stories.mdx', '../src/stories/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  features: {
    storyStoreV7: true,
  },
  core: {
    builder: '@storybook/builder-vite',
  },
  viteFinal: (config, { configType }) => {
    if (configType === 'PRODUCTION') {
      config.base = '/ignite-ui-design-system/';
    }

    return config;
  },
};
export default config;
