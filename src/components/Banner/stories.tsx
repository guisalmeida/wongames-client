import { Meta, StoryObj } from '@storybook/react';
import Banner from '.';

const meta = {
  title: 'Banner',
  component: Banner,
  args: {
    img: '/img/red-dead-img.jpg',
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
  }
} satisfies Meta<typeof Banner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div style={{ maxWidth: '94rem', margin: '0 auto' }}>
      <Banner {...args} />
    </div>
  )
};

export const WithRibbon: Story = {
  args: {
    ribbon: '20% OFF',
    ribbonSize: 'normal',
    ribbonColor: 'primary'
  },
  render: (args) => (
    <div style={{ maxWidth: '94rem', margin: '0 auto' }}>
      <Banner {...args} />
    </div>
  )
};
