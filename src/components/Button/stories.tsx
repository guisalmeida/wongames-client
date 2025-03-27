import { Meta, StoryObj } from '@storybook/react';
import Button from '.';
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart';

const meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    size: {
      type: 'string'
    },
    children: {
      type: 'string'
    },
    $fullWidth: {
      type: 'boolean'
    },
    icon: {
      type: 'symbol'
    }
  }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: 'small',
    children: 'Buy now'
  },
  render: (args) => <Button {...args} />
};

export const MediumDefault: Story = {
  args: {
    children: 'Buy now'
  },
  render: (args) => <Button {...args} />
};

export const Large: Story = {
  args: {
    size: 'large',
    children: 'Buy now'
  },
  render: (args) => <Button {...args} />
};

export const FullWidth: Story = {
  args: {
    $fullWidth: true,
    children: 'Buy now'
  },
  render: (args) => <Button {...args} />
};

export const withIcon: Story = {
  args: {
    size: 'small',
    children: 'Buy now',
    icon: <AddShoppingCart />
  },
  render: (args) => <Button {...args} />
};
