import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../src/components/**/stories.tsx'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  staticDirs: ['../public'],
  docs: {
    autodocs: true
  },
  webpackFinal: (config) => {
    // Exclude Jest mock files
    config.module?.rules?.push({
      test: /\.jest\.(js|ts)$/,
      use: 'null-loader'
    });
    config.resolve?.modules?.push(`${process.cwd()}/src`);
    return config;
  }
};
export default config;
