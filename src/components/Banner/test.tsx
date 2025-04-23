import { render, screen } from '@testing-library/react';

import Banner from '.';
import { renderWithTheme } from '../../utils/tests/helpers';

describe('<Banner />', () => {
  const bannerPropsMock = {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  };

  it('should render correctly', () => {
    renderWithTheme(<Banner {...bannerPropsMock} />);

    expect(screen.getByText(bannerPropsMock.title)).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /Play the new CrashLands season/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('img', { name: /Defy death/i })
    ).toBeInTheDocument();
  });
});
