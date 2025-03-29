import { Meta, StoryObj } from '@storybook/react';
import Heading from '.';

const meta = {
  title: 'Heading',
  component: Heading
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Heading',
    color: 'black'
  }
};

export const WhiteText: Story = {
  args: {
    children: 'Heading',
    color: 'white'
  }
};

export const LineLeft: Story = {
  args: {
    children: 'Heading',
    color: 'black',
    lineLeft: true
  }
};

export const LineLeftSecondary: Story = {
  args: {
    children: 'Heading',
    color: 'black',
    lineLeft: true,
    lineColor: 'secondary'
  }
};

export const LineBottom: Story = {
  args: {
    children: 'Heading',
    color: 'black',
    lineBottom: true
  }
};

export const LineBottomSecondary: Story = {
  args: {
    children: 'Heading',
    color: 'black',
    lineBottom: true,
    lineColor: 'secondary'
  }
};
