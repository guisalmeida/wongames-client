import { Meta, StoryObj } from '@storybook/react';
import Footer from '.';

const meta = {
  title: 'Footer',
  component: Footer
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
