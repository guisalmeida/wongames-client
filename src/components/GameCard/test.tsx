import { fireEvent, render, screen } from '@testing-library/react';

import GameCard, { GameCardProps } from '.';
import { renderWithTheme } from '../../utils/tests/helpers';
import { TextDecoration } from 'styled-icons/zondicons';
import theme from '../../styles/theme';

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
    renderWithTheme(<GameCard {...gameCardPropsMock} />);

    const price = screen.getByText('R$ 235,00');

    expect(price).not.toHaveStyle({ textDecoration: 'line-through' });
    expect(price).toHaveStyle({ backgroundColor: theme.colors.secondary });
  });

  it('should render a line-through in price when promotional', () => {
    renderWithTheme(
      <GameCard {...gameCardPropsMock} promotionalPrice="R$ 200,00" />
    );

    const oldPrice = screen.getByText('R$ 235,00');
    const promotionalPrice = screen.getByText('R$ 200,00');

    expect(oldPrice).toHaveStyle({ textDecoration: 'line-through' });
    expect(promotionalPrice).not.toHaveStyle({
      textDecoration: 'line-through'
    });
  });

  it('should render a filled Favorite icon when favorite is true', () => {
    renderWithTheme(<GameCard {...gameCardPropsMock} favorite />);

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument();
  });

  it('should call onFav method when favorite is clicked', () => {
    const onFavSpy = jest.fn();
    renderWithTheme(
      <GameCard {...gameCardPropsMock} favorite onFav={onFavSpy} />
    );

    fireEvent.click(screen.getAllByRole('button')[0]);

    expect(onFavSpy).toHaveBeenCalled();
  });
});
