import { render, screen } from '@testing-library/react';

import GameCard, { GameCardProps } from '.';
import { renderWithTheme } from '../../utils/tests/helpers';

describe('<GameCard />', () => {
  const gameCardPropsMock: GameCardProps = {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: '/img/red-dead-img.jpg',
    price: 'R$ 235,00'
  };

  it('should render correctly', () => {
    renderWithTheme(<GameCard {...gameCardPropsMock} />);

    expect(
      screen.getByRole('heading', { name: gameCardPropsMock.title })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: gameCardPropsMock.developer })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('img', { name: gameCardPropsMock.title })
    ).toHaveAttribute('src', gameCardPropsMock.img);

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument();
  });

  it('should render price in label', () => {
    // renderiza o componente
    // preço não tenha line-through
    // preço tenha o background secundário
  });

  it('should render a line-through in price when promotional', () => {
    // renderiza o componente (COM promotionalPrice) // 200 reais // 15 reais
    // preço tenha line-through (200)
    // preço novo promocional não vai ter line-through (15)
  });
});
