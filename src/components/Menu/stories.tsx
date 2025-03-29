import { Meta, StoryObj } from '@storybook/react';
import Menu from '.';

const meta = {
  title: 'Menu',
  component: Menu
} satisfies Meta<typeof Menu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    userName: ''
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
};
