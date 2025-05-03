import { Meta, StoryObj } from '@storybook/react';
import GameCard from '.';

const meta = {
  title: 'GameCard',
  component: GameCard,
  args: {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: '/img/red-dead-img.jpg',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 200,00'
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  argTypes: {
    onFav: { action: 'clicked' }
  }
} satisfies Meta<typeof GameCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div style={{ width: '30rem' }}>
      <GameCard {...args} />
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
    <div style={{ width: '30rem' }}>
      <GameCard {...args} />
    </div>
  )
};
