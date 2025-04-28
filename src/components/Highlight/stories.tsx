import { Meta, StoryObj } from '@storybook/react';
import Highlight from '.';

const meta = {
  title: 'Highlight',
  component: Highlight
} satisfies Meta<typeof Highlight>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Read Dead is back!',
    subtitle: 'Come see John’s new adventures',
    backgroundImage: '/img/red-dead-img.jpg',
    buttonLabel: 'Buy now',
    buttonLink: '/games/rdr2'
  },
  render: (args) => (
    <div style={{ maxWidth: '104rem' }}>
      <Highlight {...args} />
    </div>
  )
};

export const WithFloatImage: Story = {
  args: {
    title: 'Read Dead is back!',
    subtitle: 'Come see John’s new adventures',
    backgroundImage: '/img/red-dead-img.jpg',
    buttonLabel: 'Buy now',
    buttonLink: '/games/rdr2',
    floatImage: '/img/red-dead-float.png'
  },
  render: (args) => (
    <div style={{ maxWidth: '104rem' }}>
      <Highlight {...args} />
    </div>
  )
};
