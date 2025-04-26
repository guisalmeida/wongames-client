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
    title: 'Read Dead it’s back',
    subtitle: 'Come see John’s new adventures',
    backgroundImage: '/img/red-dead-img.jpg',
    buttonLabel: 'Buy now',
    buttonLink: '/rdr2'
  },
  render: (args) => <Highlight {...args} />
};
