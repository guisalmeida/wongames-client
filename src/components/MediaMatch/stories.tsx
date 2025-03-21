import { Meta, StoryObj } from '@storybook/react';
import MediaMatch, { MediaMatchProps } from '.';

const meta = {
  title: 'MediaMatch',
  component: MediaMatch
} satisfies Meta<MediaMatchProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Desktop: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop'
    }
  },
  render: () => <MediaMatch $greaterThan="medium">Only on Desktop</MediaMatch>
};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  },
  render: () => <MediaMatch $lessThan="medium">Only on Mobile</MediaMatch>
};
