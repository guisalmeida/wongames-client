import { Meta, StoryObj } from '@storybook/react';
import Banner from '.';

const meta = {
  title: 'Banner',
  component: Banner
} satisfies Meta<typeof Banner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    img: 'https://images.unsplash.com/photo-1558980394-4c7c9299fe96',
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  },
  render: (args) => <Banner {...args} />
};
